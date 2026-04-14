/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject16MetaIndicator } from "./InlineObject16MetaIndicator";
import {
  InlineObject16MetaIndicatorFromJSON,
  InlineObject16MetaIndicatorFromJSONTyped,
  InlineObject16MetaIndicatorToJSON,
  InlineObject16MetaIndicatorToJSONTyped,
} from "./InlineObject16MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject16Meta
 */
export interface InlineObject16Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject16Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject16MetaIndicator}
   * @memberof InlineObject16Meta
   */
  indicator?: InlineObject16MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject16Meta interface.
 */
export function instanceOfInlineObject16Meta(
  value: object,
): value is InlineObject16Meta {
  return true;
}

export function InlineObject16MetaFromJSON(json: any): InlineObject16Meta {
  return InlineObject16MetaFromJSONTyped(json, false);
}

export function InlineObject16MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject16Meta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    interval: json["interval"] == null ? undefined : json["interval"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchangeTimezone:
      json["exchange_timezone"] == null ? undefined : json["exchange_timezone"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    type: json["type"] == null ? undefined : json["type"],
    indicator:
      json["indicator"] == null
        ? undefined
        : InlineObject16MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject16MetaToJSON(json: any): InlineObject16Meta {
  return InlineObject16MetaToJSONTyped(json, false);
}

export function InlineObject16MetaToJSONTyped(
  value?: InlineObject16Meta | null,
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
    indicator: InlineObject16MetaIndicatorToJSON(value["indicator"]),
  };
}
