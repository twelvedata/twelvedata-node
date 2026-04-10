import type { AxiosError, AxiosInstance } from "axios";

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

const INTERCEPTOR_KEY = "__twelvedataErrorInterceptor";

/**
 * Adds an error-handling response interceptor to the given axios instance.
 * Safe to call multiple times on the same instance — subsequent calls are no-ops.
 */
export function setupErrorInterceptor(instance: AxiosInstance): void {
  if ((instance as any)[INTERCEPTOR_KEY]) return;
  (instance as any)[INTERCEPTOR_KEY] = true;

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponseBody>) => {
      if (error.response && isErrorResponseBody(error.response.data)) {
        const { status, data } = error.response;
        const resolver = ERROR_MAP[status];
        if (resolver) {
          throw resolver(data);
        }
        throw new TwelvedataApiError(status, data.code, data.status, data.message);
      }
      throw error;
    },
  );
}
