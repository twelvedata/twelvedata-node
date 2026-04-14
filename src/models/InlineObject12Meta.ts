/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InlineObject12MetaIndicator } from "./InlineObject12MetaIndicator";
import {
  InlineObject12MetaIndicatorFromJSON,
  InlineObject12MetaIndicatorFromJSONTyped,
  InlineObject12MetaIndicatorToJSON,
  InlineObject12MetaIndicatorToJSONTyped,
} from "./InlineObject12MetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface InlineObject12Meta
 */
export interface InlineObject12Meta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof InlineObject12Meta
   */
  type?: string;
  /**
   *
   * @type {InlineObject12MetaIndicator}
   * @memberof InlineObject12Meta
   */
  indicator?: InlineObject12MetaIndicator;
}

/**
 * Check if a given object implements the InlineObject12Meta interface.
 */
export function instanceOfInlineObject12Meta(
  value: object,
): value is InlineObject12Meta {
  return true;
}

export function InlineObject12MetaFromJSON(json: any): InlineObject12Meta {
  return InlineObject12MetaFromJSONTyped(json, false);
}

export function InlineObject12MetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject12Meta {
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
        : InlineObject12MetaIndicatorFromJSON(json["indicator"]),
  };
}

export function InlineObject12MetaToJSON(json: any): InlineObject12Meta {
  return InlineObject12MetaToJSONTyped(json, false);
}

export function InlineObject12MetaToJSONTyped(
  value?: InlineObject12Meta | null,
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
    indicator: InlineObject12MetaIndicatorToJSON(value["indicator"]),
  };
}
