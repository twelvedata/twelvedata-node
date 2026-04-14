/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ApiTooManyRequestsErrorResponseBody
 */
export interface ApiTooManyRequestsErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiTooManyRequestsErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiTooManyRequestsErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiTooManyRequestsErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiTooManyRequestsErrorResponseBody interface.
 */
export function instanceOfApiTooManyRequestsErrorResponseBody(
  value: object,
): value is ApiTooManyRequestsErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiTooManyRequestsErrorResponseBodyFromJSON(
  json: any,
): ApiTooManyRequestsErrorResponseBody {
  return ApiTooManyRequestsErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiTooManyRequestsErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiTooManyRequestsErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiTooManyRequestsErrorResponseBodyToJSON(
  json: any,
): ApiTooManyRequestsErrorResponseBody {
  return ApiTooManyRequestsErrorResponseBodyToJSONTyped(json, false);
}

export function ApiTooManyRequestsErrorResponseBodyToJSONTyped(
  value?: ApiTooManyRequestsErrorResponseBody | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    code: value["code"],
    message: value["message"],
    status: value["status"],
  };
}
