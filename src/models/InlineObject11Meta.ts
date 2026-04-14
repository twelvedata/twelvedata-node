/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject11MetaIndicator } from "./InlineObject11MetaIndicator";
import {
  InlineObject11MetaIndicatorFromJSON,
  InlineObject11MetaIndicatorFromJSONTyped,
  InlineObject11MetaIndicatorToJSON,
  InlineObject11MetaIndicatorToJSONTyped,
} from "./InlineObject11MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject11Meta
 */
export interface InlineObject11Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject11Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject11MetaIndicator}
   * @memberof InlineObject11Meta
   */
  indicator?: InlineObject11MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject11Meta interface.
 */
export function instanceOfInlineObject11Meta(
  value: object,
): value is InlineObject11Meta {
  return true;
}

export function InlineObject11MetaFromJSON(json: any): InlineObject11Meta {
  return InlineObject11MetaFromJSONTyped(json, false);
}

export function InlineObject11MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject11Meta {
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
        : InlineObject11MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject11MetaToJSON(json: any): InlineObject11Meta {
  return InlineObject11MetaToJSONTyped(json, false);
}

export function InlineObject11MetaToJSONTyped(
  value?: InlineObject11Meta | null,
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
    indicator: InlineObject11MetaIndicatorToJSON(value["indicator"]),
  };
}
