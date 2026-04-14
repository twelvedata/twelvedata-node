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
 * @interface ApiForbiddenErrorResponseBody
 */
export interface ApiForbiddenErrorResponseBody {
  /**
   * Error code
   * @type {number}
   * @memberof ApiForbiddenErrorResponseBody
   */
  code: number;
  /**
   * Error message
   * @type {string}
   * @memberof ApiForbiddenErrorResponseBody
   */
  message: string;
  /**
   * Error status
   * @type {string}
   * @memberof ApiForbiddenErrorResponseBody
   */
  status: string;
}

/**
 * Check if a given object implements the ApiForbiddenErrorResponseBody interface.
 */
export function instanceOfApiForbiddenErrorResponseBody(
  value: object,
): value is ApiForbiddenErrorResponseBody {
  if (!("code" in value) || value["code"] === undefined) return false;
  if (!("message" in value) || value["message"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function ApiForbiddenErrorResponseBodyFromJSON(
  json: any,
): ApiForbiddenErrorResponseBody {
  return ApiForbiddenErrorResponseBodyFromJSONTyped(json, false);
}

export function ApiForbiddenErrorResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ApiForbiddenErrorResponseBody {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"],
    message: json["message"],
    status: json["status"],
  };
}

export function ApiForbiddenErrorResponseBodyToJSON(
  json: any,
): ApiForbiddenErrorResponseBody {
  return ApiForbiddenErrorResponseBodyToJSONTyped(json, false);
}

export function ApiForbiddenErrorResponseBodyToJSONTyped(
  value?: ApiForbiddenErrorResponseBody | null,
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
