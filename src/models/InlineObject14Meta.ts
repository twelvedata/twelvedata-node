/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject14MetaIndicator } from "./InlineObject14MetaIndicator";
import {
  InlineObject14MetaIndicatorFromJSON,
  InlineObject14MetaIndicatorFromJSONTyped,
  InlineObject14MetaIndicatorToJSON,
  InlineObject14MetaIndicatorToJSONTyped,
} from "./InlineObject14MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject14Meta
 */
export interface InlineObject14Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject14Meta
   */
  type: string;
  /**
   *
   * @type {InlineObject14MetaIndicator}
   * @memberof InlineObject14Meta
   */
  indicator: InlineObject14MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject14Meta interface.
 */
export function instanceOfInlineObject14Meta(
  value: object,
): value is InlineObject14Meta {
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

export function InlineObject14MetaFromJSON(json: any): InlineObject14Meta {
  return InlineObject14MetaFromJSONTyped(json, false);
}

export function InlineObject14MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject14Meta {
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
    indicator: InlineObject14MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject14MetaToJSON(json: any): InlineObject14Meta {
  return InlineObject14MetaToJSONTyped(json, false);
}

export function InlineObject14MetaToJSONTyped(
  value?: InlineObject14Meta | null,
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
    indicator: InlineObject14MetaIndicatorToJSON(value["indicator"]),
  };
}
