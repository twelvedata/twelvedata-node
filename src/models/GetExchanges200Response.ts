/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ExchangesResponseItem } from "./ExchangesResponseItem";
import {
  ExchangesResponseItemFromJSON,
  ExchangesResponseItemFromJSONTyped,
  ExchangesResponseItemToJSON,
  ExchangesResponseItemToJSONTyped,
} from "./ExchangesResponseItem";

/**
 *
 * @export
 * @interface GetExchanges200Response
 */
export interface GetExchanges200Response {
  /**
   * List of exchanges
   * @type {Array<ExchangesResponseItem>}
   * @memberof GetExchanges200Response
   */
  data?: Array<ExchangesResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetExchanges200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetExchanges200Response interface.
 */
export function instanceOfGetExchanges200Response(
  value: object,
): value is GetExchanges200Response {
  return true;
}

export function GetExchanges200ResponseFromJSON(
  json: any,
): GetExchanges200Response {
  return GetExchanges200ResponseFromJSONTyped(json, false);
}

export function GetExchanges200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetExchanges200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(ExchangesResponseItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetExchanges200ResponseToJSON(
  json: any,
): GetExchanges200Response {
  return GetExchanges200ResponseToJSONTyped(json, false);
}

export function GetExchanges200ResponseToJSONTyped(
  value?: GetExchanges200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(ExchangesResponseItemToJSON),
    status: value["status"],
  };
}
