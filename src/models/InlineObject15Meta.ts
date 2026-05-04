/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject15MetaIndicator } from "./InlineObject15MetaIndicator";
import {
  InlineObject15MetaIndicatorFromJSON,
  InlineObject15MetaIndicatorFromJSONTyped,
  InlineObject15MetaIndicatorToJSON,
  InlineObject15MetaIndicatorToJSONTyped,
} from "./InlineObject15MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject15Meta
 */
export interface InlineObject15Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  symbol: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  interval: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  currency: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  exchangeTimezone: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  micCode: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject15Meta
   */
  type: string;
  /**
   *
   * @type {InlineObject15MetaIndicator}
   * @memberof InlineObject15Meta
   */
  indicator: InlineObject15MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject15Meta interface.
 */
export function instanceOfInlineObject15Meta(
  value: object,
): value is InlineObject15Meta {
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

export function InlineObject15MetaFromJSON(json: any): InlineObject15Meta {
  return InlineObject15MetaFromJSONTyped(json, false);
}

export function InlineObject15MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject15Meta {
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
    indicator: InlineObject15MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject15MetaToJSON(json: any): InlineObject15Meta {
  return InlineObject15MetaToJSONTyped(json, false);
}

export function InlineObject15MetaToJSONTyped(
  value?: InlineObject15Meta | null,
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
    indicator: InlineObject15MetaIndicatorToJSON(value["indicator"]),
  };
}
