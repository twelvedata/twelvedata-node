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
   * Count
   * @type {number}
   * @memberof GetStocks200Response
   */
  count: number;
  /**
   * List of stock instruments
   * @type {Array<StocksResponseItem>}
   * @memberof GetStocks200Response
   */
  data: Array<StocksResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetStocks200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetStocks200Response interface.
 */
export function instanceOfGetStocks200Response(
  value: object,
): value is GetStocks200Response {
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
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
    count: json["count"],
    data: (json["data"] as Array<any>).map(StocksResponseItemFromJSON),
    status: json["status"],
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
    count: value["count"],
    data: (value["data"] as Array<any>).map(StocksResponseItemToJSON),
    status: value["status"],
  };
}
