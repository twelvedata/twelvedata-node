import type { Middleware, ResponseContext } from "./runtime";

/**
 * Common shape of all Twelvedata API error response bodies.
 */
export interface ErrorResponseBody {
  code: number;
  message: string;
  status: string;
}

/**
 * Base exception for all Twelvedata API errors.
 */
export class TwelvedataApiError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly code: number,
    public readonly status: string,
    message: string,
  ) {
    super(message);
    this.name = "TwelvedataApiError";
  }
}

export class BadRequestError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(400, code, status, message);
    this.name = "BadRequestError";
  }
}

export class UnauthorizedError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(401, code, status, message);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(403, code, status, message);
    this.name = "ForbiddenError";
  }
}

export class NotFoundError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(404, code, status, message);
    this.name = "NotFoundError";
  }
}

export class ParameterTooLongError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(414, code, status, message);
    this.name = "ParameterTooLongError";
  }
}

export class TooManyRequestsError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(429, code, status, message);
    this.name = "TooManyRequestsError";
  }
}

export class InternalServerError extends TwelvedataApiError {
  constructor(code: number, status: string, message: string) {
    super(500, code, status, message);
    this.name = "InternalServerError";
  }
}

type ErrorResolver = (body: ErrorResponseBody) => TwelvedataApiError;

const ERROR_MAP: Record<number, ErrorResolver> = {
  400: (b) => new BadRequestError(b.code, b.status, b.message),
  401: (b) => new UnauthorizedError(b.code, b.status, b.message),
  403: (b) => new ForbiddenError(b.code, b.status, b.message),
  404: (b) => new NotFoundError(b.code, b.status, b.message),
  414: (b) => new ParameterTooLongError(b.code, b.status, b.message),
  429: (b) => new TooManyRequestsError(b.code, b.status, b.message),
  500: (b) => new InternalServerError(b.code, b.status, b.message),
};

function isErrorResponseBody(data: unknown): data is ErrorResponseBody {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as ErrorResponseBody).code === "number" &&
    typeof (data as ErrorResponseBody).message === "string" &&
    typeof (data as ErrorResponseBody).status === "string"
  );
}

/**
 * Middleware that translates non-2xx Twelvedata API responses into
 * typed `TwelvedataApiError` subclasses. Attached by default to
 * `Configuration` instances created via `CreateConfig` and `DefaultConfig`.
 *
 * Uses `response.clone()` because `Response.body` is a single-use stream
 * and downstream consumers may still need to read it.
 */
export const twelvedataErrorMiddleware: Middleware = {
  post: async (context: ResponseContext): Promise<Response | void> => {
    const { response } = context;
    if (response.ok) return;

    let body: unknown;
    try {
      body = await response.clone().json();
    } catch {
      return;
    }

    if (!isErrorResponseBody(body)) return;

    const resolver = ERROR_MAP[response.status];
    if (resolver) {
      throw resolver(body);
    }
    throw new TwelvedataApiError(
      response.status,
      body.code,
      body.status,
      body.message,
    );
  },
};
