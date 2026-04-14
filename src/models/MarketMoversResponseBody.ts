/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { MarketMoversResponseValue } from "./MarketMoversResponseValue";
import {
  MarketMoversResponseValueFromJSON,
  MarketMoversResponseValueFromJSONTyped,
  MarketMoversResponseValueToJSON,
  MarketMoversResponseValueToJSONTyped,
} from "./MarketMoversResponseValue";

/**
 *
 * @export
 * @interface MarketMoversResponseBody
 */
export interface MarketMoversResponseBody {
  /**
   * Market movers list
   * @type {Array<MarketMoversResponseValue>}
   * @memberof MarketMoversResponseBody
   */
  values: Array<MarketMoversResponseValue>;
  /**
   * Response status
   * @type {string}
   * @memberof MarketMoversResponseBody
   */
  status?: string;
}

/**
 * Check if a given object implements the MarketMoversResponseBody interface.
 */
export function instanceOfMarketMoversResponseBody(
  value: object,
): value is MarketMoversResponseBody {
  if (!("values" in value) || value["values"] === undefined) return false;
  return true;
}

export function MarketMoversResponseBodyFromJSON(
  json: any,
): MarketMoversResponseBody {
  return MarketMoversResponseBodyFromJSONTyped(json, false);
}

export function MarketMoversResponseBodyFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MarketMoversResponseBody {
  if (json == null) {
    return json;
  }
  return {
    values: (json["values"] as Array<any>).map(
      MarketMoversResponseValueFromJSON,
    ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function MarketMoversResponseBodyToJSON(
  json: any,
): MarketMoversResponseBody {
  return MarketMoversResponseBodyToJSONTyped(json, false);
}

export function MarketMoversResponseBodyToJSONTyped(
  value?: MarketMoversResponseBody | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    values: (value["values"] as Array<any>).map(
      MarketMoversResponseValueToJSON,
    ),
    status: value["status"],
  };
}
