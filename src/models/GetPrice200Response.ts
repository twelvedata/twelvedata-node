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
 * @interface GetPrice200Response
 */
export interface GetPrice200Response {
  /**
   * Real-time or the latest available price
   * @type {string}
   * @memberof GetPrice200Response
   */
  price: string;
}

/**
 * Check if a given object implements the GetPrice200Response interface.
 */
export function instanceOfGetPrice200Response(
  value: object,
): value is GetPrice200Response {
  if (!("price" in value) || value["price"] === undefined) return false;
  return true;
}

export function GetPrice200ResponseFromJSON(json: any): GetPrice200Response {
  return GetPrice200ResponseFromJSONTyped(json, false);
}

export function GetPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    price: json["price"],
  };
}

export function GetPrice200ResponseToJSON(json: any): GetPrice200Response {
  return GetPrice200ResponseToJSONTyped(json, false);
}

export function GetPrice200ResponseToJSONTyped(
  value?: GetPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    price: value["price"],
  };
}
