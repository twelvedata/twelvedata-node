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
 * @interface Advanced200Response
 */
export interface Advanced200Response {
  /**
   * HTTP status code
   * @type {number}
   * @memberof Advanced200Response
   */
  code?: number;
  /**
   * Status of the request
   * @type {string}
   * @memberof Advanced200Response
   */
  status?: string;
  /**
   * Response data containing individual request results
   * @type {{ [key: string]: object; }}
   * @memberof Advanced200Response
   */
  data?: { [key: string]: object };
}

/**
 * Check if a given object implements the Advanced200Response interface.
 */
export function instanceOfAdvanced200Response(
  value: object,
): value is Advanced200Response {
  return true;
}

export function Advanced200ResponseFromJSON(json: any): Advanced200Response {
  return Advanced200ResponseFromJSONTyped(json, false);
}

export function Advanced200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Advanced200Response {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"] == null ? undefined : json["code"],
    status: json["status"] == null ? undefined : json["status"],
    data: json["data"] == null ? undefined : json["data"],
  };
}

export function Advanced200ResponseToJSON(json: any): Advanced200Response {
  return Advanced200ResponseToJSONTyped(json, false);
}

export function Advanced200ResponseToJSONTyped(
  value?: Advanced200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    code: value["code"],
    status: value["status"],
    data: value["data"],
  };
}
