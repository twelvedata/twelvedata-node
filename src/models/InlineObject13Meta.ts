/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject13MetaIndicator } from "./InlineObject13MetaIndicator";
import {
  InlineObject13MetaIndicatorFromJSON,
  InlineObject13MetaIndicatorFromJSONTyped,
  InlineObject13MetaIndicatorToJSON,
  InlineObject13MetaIndicatorToJSONTyped,
} from "./InlineObject13MetaIndicator";

/**
 *
 * @export
 * @interface InlineObject13Meta
 */
export interface InlineObject13Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject13Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject13MetaIndicator}
   * @memberof InlineObject13Meta
   */
  indicator?: InlineObject13MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject13Meta interface.
 */
export function instanceOfInlineObject13Meta(
  value: object,
): value is InlineObject13Meta {
  return true;
}

export function InlineObject13MetaFromJSON(json: any): InlineObject13Meta {
  return InlineObject13MetaFromJSONTyped(json, false);
}

export function InlineObject13MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject13Meta {
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
        : InlineObject13MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject13MetaToJSON(json: any): InlineObject13Meta {
  return InlineObject13MetaToJSONTyped(json, false);
}

export function InlineObject13MetaToJSONTyped(
  value?: InlineObject13Meta | null,
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
    indicator: InlineObject13MetaIndicatorToJSON(value["indicator"]),
  };
}
