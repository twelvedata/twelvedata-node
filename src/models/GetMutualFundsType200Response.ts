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
 * @interface GetMutualFundsType200Response
 */
export interface GetMutualFundsType200Response {
  /**
   * List of fund types by country
   * @type {{ [key: string]: Array<string>; }}
   * @memberof GetMutualFundsType200Response
   */
  result?: { [key: string]: Array<string> };
  /**
   * Response status
   * @type {string}
   * @memberof GetMutualFundsType200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsType200Response interface.
 */
export function instanceOfGetMutualFundsType200Response(
  value: object,
): value is GetMutualFundsType200Response {
  return true;
}

export function GetMutualFundsType200ResponseFromJSON(
  json: any,
): GetMutualFundsType200Response {
  return GetMutualFundsType200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsType200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsType200Response {
  if (json == null) {
    return json;
  }
  return {
    result: json["result"] == null ? undefined : json["result"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsType200ResponseToJSON(
  json: any,
): GetMutualFundsType200Response {
  return GetMutualFundsType200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsType200ResponseToJSONTyped(
  value?: GetMutualFundsType200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    result: value["result"],
    status: value["status"],
  };
}
