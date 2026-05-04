/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject10MetaIndicator } from "./InlineObject10MetaIndicator";
import {
  InlineObject10MetaIndicatorFromJSON,
  InlineObject10MetaIndicatorFromJSONTyped,
  InlineObject10MetaIndicatorToJSON,
  InlineObject10MetaIndicatorToJSONTyped,
} from "./InlineObject10MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject10Meta
 */
export interface InlineObject10Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject10Meta
   */
  type: string;
  /**
   *
   * @type {InlineObject10MetaIndicator}
   * @memberof InlineObject10Meta
   */
  indicator: InlineObject10MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject10Meta interface.
 */
export function instanceOfInlineObject10Meta(
  value: object,
): value is InlineObject10Meta {
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

export function InlineObject10MetaFromJSON(json: any): InlineObject10Meta {
  return InlineObject10MetaFromJSONTyped(json, false);
}

export function InlineObject10MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject10Meta {
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
    indicator: InlineObject10MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject10MetaToJSON(json: any): InlineObject10Meta {
  return InlineObject10MetaToJSONTyped(json, false);
}

export function InlineObject10MetaToJSONTyped(
  value?: InlineObject10Meta | null,
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
    indicator: InlineObject10MetaIndicatorToJSON(value["indicator"]),
  };
}
