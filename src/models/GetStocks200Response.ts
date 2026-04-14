/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { StocksResponseItem } from "./StocksResponseItem";
import {
  StocksResponseItemFromJSON,
  StocksResponseItemFromJSONTyped,
  StocksResponseItemToJSON,
  StocksResponseItemToJSONTyped,
} from "./StocksResponseItem";

/**
 *
 * @export
 * @interface GetStocks200Response
 */
export interface GetStocks200Response {
  /**
   * List of stock instruments
   * @type {Array<StocksResponseItem>}
   * @memberof GetStocks200Response
   */
  data?: Array<StocksResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetStocks200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetStocks200Response interface.
 */
export function instanceOfGetStocks200Response(
  value: object,
): value is GetStocks200Response {
  return true;
}

export function GetStocks200ResponseFromJSON(json: any): GetStocks200Response {
  return GetStocks200ResponseFromJSONTyped(json, false);
}

export function GetStocks200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStocks200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(StocksResponseItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetStocks200ResponseToJSON(json: any): GetStocks200Response {
  return GetStocks200ResponseToJSONTyped(json, false);
}

export function GetStocks200ResponseToJSONTyped(
  value?: GetStocks200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(StocksResponseItemToJSON),
    status: value["status"],
  };
}
