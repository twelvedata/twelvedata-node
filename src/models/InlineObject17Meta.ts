/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject17MetaIndicator } from "./InlineObject17MetaIndicator";
import {
  InlineObject17MetaIndicatorFromJSON,
  InlineObject17MetaIndicatorFromJSONTyped,
  InlineObject17MetaIndicatorToJSON,
  InlineObject17MetaIndicatorToJSONTyped,
} from "./InlineObject17MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject17Meta
 */
export interface InlineObject17Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject17Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject17MetaIndicator}
   * @memberof InlineObject17Meta
   */
  indicator?: InlineObject17MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject17Meta interface.
 */
export function instanceOfInlineObject17Meta(
  value: object,
): value is InlineObject17Meta {
  return true;
}

export function InlineObject17MetaFromJSON(json: any): InlineObject17Meta {
  return InlineObject17MetaFromJSONTyped(json, false);
}

export function InlineObject17MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject17Meta {
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
        : InlineObject17MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject17MetaToJSON(json: any): InlineObject17Meta {
  return InlineObject17MetaToJSONTyped(json, false);
}

export function InlineObject17MetaToJSONTyped(
  value?: InlineObject17Meta | null,
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
    indicator: InlineObject17MetaIndicatorToJSON(value["indicator"]),
  };
}
