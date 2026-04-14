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
 * @interface ApiInternalServerErrorResponseBody
 */
export interface ApiInternalServerErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiInternalServerErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiInternalServerErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiInternalServerErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiInternalServerErrorResponseBody interface.
 */
export function instanceOfApiInternalServerErrorResponseBody(
  value: object,
): value is ApiInternalServerErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiInternalServerErrorResponseBodyFromJSON(
  json: any,
): ApiInternalServerErrorResponseBody {
  return ApiInternalServerErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiInternalServerErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiInternalServerErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiInternalServerErrorResponseBodyToJSON(
  json: any,
): ApiInternalServerErrorResponseBody {
  return ApiInternalServerErrorResponseBodyToJSONTyped(json, false);
}

export function ApiInternalServerErrorResponseBodyToJSONTyped(
  value?: ApiInternalServerErrorResponseBody | null,
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
