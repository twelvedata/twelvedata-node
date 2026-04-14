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
 * @interface ApiNotFoundErrorResponseBody
 */
export interface ApiNotFoundErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiNotFoundErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiNotFoundErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiNotFoundErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiNotFoundErrorResponseBody interface.
 */
export function instanceOfApiNotFoundErrorResponseBody(
  value: object,
): value is ApiNotFoundErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiNotFoundErrorResponseBodyFromJSON(
  json: any,
): ApiNotFoundErrorResponseBody {
  return ApiNotFoundErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiNotFoundErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiNotFoundErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiNotFoundErrorResponseBodyToJSON(
  json: any,
): ApiNotFoundErrorResponseBody {
  return ApiNotFoundErrorResponseBodyToJSONTyped(json, false);
}

export function ApiNotFoundErrorResponseBodyToJSONTyped(
  value?: ApiNotFoundErrorResponseBody | null,
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
