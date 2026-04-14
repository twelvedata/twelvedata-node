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
 * @interface ApiBadRequestErrorResponseBody
 */
export interface ApiBadRequestErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiBadRequestErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiBadRequestErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiBadRequestErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiBadRequestErrorResponseBody interface.
 */
export function instanceOfApiBadRequestErrorResponseBody(
  value: object,
): value is ApiBadRequestErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiBadRequestErrorResponseBodyFromJSON(
  json: any,
): ApiBadRequestErrorResponseBody {
  return ApiBadRequestErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiBadRequestErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiBadRequestErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiBadRequestErrorResponseBodyToJSON(
  json: any,
): ApiBadRequestErrorResponseBody {
  return ApiBadRequestErrorResponseBodyToJSONTyped(json, false);
}

export function ApiBadRequestErrorResponseBodyToJSONTyped(
  value?: ApiBadRequestErrorResponseBody | null,
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
