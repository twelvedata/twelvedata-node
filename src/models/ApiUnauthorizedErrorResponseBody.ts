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
 * @interface ApiUnauthorizedErrorResponseBody
 */
export interface ApiUnauthorizedErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiUnauthorizedErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiUnauthorizedErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiUnauthorizedErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiUnauthorizedErrorResponseBody interface.
 */
export function instanceOfApiUnauthorizedErrorResponseBody(
  value: object,
): value is ApiUnauthorizedErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiUnauthorizedErrorResponseBodyFromJSON(
  json: any,
): ApiUnauthorizedErrorResponseBody {
  return ApiUnauthorizedErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiUnauthorizedErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiUnauthorizedErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiUnauthorizedErrorResponseBodyToJSON(
  json: any,
): ApiUnauthorizedErrorResponseBody {
  return ApiUnauthorizedErrorResponseBodyToJSONTyped(json, false);
}

export function ApiUnauthorizedErrorResponseBodyToJSONTyped(
  value?: ApiUnauthorizedErrorResponseBody | null,
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
