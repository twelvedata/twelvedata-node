/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import { Configuration } from "./runtime";
import type { FetchParams, Middleware, RequestContext } from "./runtime";
import { twelvedataErrorMiddleware } from "./errors";

const SOURCE_PARAM = "source";
const SOURCE_VALUE = "client-node";

const sourceParamMiddleware: Middleware = {
  pre: async (context: RequestContext): Promise<FetchParams | void> => {
    const url = new URL(context.url);
    if (url.searchParams.has(SOURCE_PARAM)) return;
    url.searchParams.set(SOURCE_PARAM, SOURCE_VALUE);
    return { url: url.toString(), init: context.init };
  },
};

export const CreateConfig = (
  userApiKey?: string,
  userBasePath?: string,
): Configuration => {
  const apiKey = userApiKey || process.env.TWELVEDATA_API_KEY;
  if (!apiKey) {
    throw new Error("TWELVEDATA_API_KEY environment variable is not set");
  }
  const basePath = userBasePath || process.env.TWELVEDATA_API_BASE_URL;
  return new Configuration({
    apiKey: `apikey ${apiKey}`,
    ...(basePath ? { basePath } : {}),
    headers: { "X-API-Version": "last" },
    middleware: [sourceParamMiddleware, twelvedataErrorMiddleware],
  });
};
