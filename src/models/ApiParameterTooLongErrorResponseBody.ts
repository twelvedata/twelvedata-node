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
 * @interface ApiParameterTooLongErrorResponseBody
 */
export interface ApiParameterTooLongErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiParameterTooLongErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiParameterTooLongErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiParameterTooLongErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiParameterTooLongErrorResponseBody interface.
 */
export function instanceOfApiParameterTooLongErrorResponseBody(
  value: object,
): value is ApiParameterTooLongErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiParameterTooLongErrorResponseBodyFromJSON(
  json: any,
): ApiParameterTooLongErrorResponseBody {
  return ApiParameterTooLongErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiParameterTooLongErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiParameterTooLongErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiParameterTooLongErrorResponseBodyToJSON(
  json: any,
): ApiParameterTooLongErrorResponseBody {
  return ApiParameterTooLongErrorResponseBodyToJSONTyped(json, false);
}

export function ApiParameterTooLongErrorResponseBodyToJSONTyped(
  value?: ApiParameterTooLongErrorResponseBody | null,
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
