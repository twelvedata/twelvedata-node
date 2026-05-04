/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject9MetaIndicator } from "./InlineObject9MetaIndicator";
import {
  InlineObject9MetaIndicatorFromJSON,
  InlineObject9MetaIndicatorFromJSONTyped,
  InlineObject9MetaIndicatorToJSON,
  InlineObject9MetaIndicatorToJSONTyped,
} from "./InlineObject9MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject9Meta
 */
export interface InlineObject9Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject9Meta
   */
  type: string;
  /**
   *
   * @type {InlineObject9MetaIndicator}
   * @memberof InlineObject9Meta
   */
  indicator: InlineObject9MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject9Meta interface.
 */
export function instanceOfInlineObject9Meta(
  value: object,
): value is InlineObject9Meta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("interval" in value) || value["interval"] === undefined) return false;
  if (!("currency" in value) || value["currency"] === undefined) return false;
  if (!("exchangeTimezone" in value) || value["exchangeTimezone"] === undefined)
    return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("type" in value) || value["type"] === undefined) return false;
  if (!("indicator" in value) || value["indicator"] === undefined) return false;
  return true;
}

export function InlineObject9MetaFromJSON(json: any): InlineObject9Meta {
  return InlineObject9MetaFromJSONTyped(json, false);
}

export function InlineObject9MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject9Meta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    interval: json["interval"],
    currency: json["currency"],
    exchangeTimezone: json["exchange_timezone"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    type: json["type"],
    indicator: InlineObject9MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject9MetaToJSON(json: any): InlineObject9Meta {
  return InlineObject9MetaToJSONTyped(json, false);
}

export function InlineObject9MetaToJSONTyped(
  value?: InlineObject9Meta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    interval: value["interval"],
    currency: value["currency"],
    exchange_timezone: value["exchangeTimezone"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
    indicator: InlineObject9MetaIndicatorToJSON(value["indicator"]),
  };
}
