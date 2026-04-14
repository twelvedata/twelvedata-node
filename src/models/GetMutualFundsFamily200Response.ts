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
 * @interface GetMutualFundsFamily200Response
 */
export interface GetMutualFundsFamily200Response {
  /**
   * List of fund families by country
   * @type {{ [key: string]: Array<string>; }}
   * @memberof GetMutualFundsFamily200Response
   */
  result?: { [key: string]: Array<string> };
  /**
   * Response status
   * @type {string}
   * @memberof GetMutualFundsFamily200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetMutualFundsFamily200Response interface.
 */
export function instanceOfGetMutualFundsFamily200Response(
  value: object,
): value is GetMutualFundsFamily200Response {
  return true;
}

export function GetMutualFundsFamily200ResponseFromJSON(
  json: any,
): GetMutualFundsFamily200Response {
  return GetMutualFundsFamily200ResponseFromJSONTyped(json, false);
}

export function GetMutualFundsFamily200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsFamily200Response {
  if (json == null) {
    return json;
  }
  return {
    result: json["result"] == null ? undefined : json["result"],
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetMutualFundsFamily200ResponseToJSON(
  json: any,
): GetMutualFundsFamily200Response {
  return GetMutualFundsFamily200ResponseToJSONTyped(json, false);
}

export function GetMutualFundsFamily200ResponseToJSONTyped(
  value?: GetMutualFundsFamily200Response | null,
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
