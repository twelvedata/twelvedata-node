/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject8MetaIndicator } from "./InlineObject8MetaIndicator";
import {
  InlineObject8MetaIndicatorFromJSON,
  InlineObject8MetaIndicatorFromJSONTyped,
  InlineObject8MetaIndicatorToJSON,
  InlineObject8MetaIndicatorToJSONTyped,
} from "./InlineObject8MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject8Meta
 */
export interface InlineObject8Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject8Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject8MetaIndicator}
   * @memberof InlineObject8Meta
   */
  indicator?: InlineObject8MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject8Meta interface.
 */
export function instanceOfInlineObject8Meta(
  value: object,
): value is InlineObject8Meta {
  return true;
}

export function InlineObject8MetaFromJSON(json: any): InlineObject8Meta {
  return InlineObject8MetaFromJSONTyped(json, false);
}

export function InlineObject8MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject8Meta {
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
        : InlineObject8MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject8MetaToJSON(json: any): InlineObject8Meta {
  return InlineObject8MetaToJSONTyped(json, false);
}

export function InlineObject8MetaToJSONTyped(
  value?: InlineObject8Meta | null,
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
    indicator: InlineObject8MetaIndicatorToJSON(value["indicator"]),
  };
}
