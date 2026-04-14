/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtDcPeriod200ResponseMetaIndicator } from "./GetTimeSeriesHtDcPeriod200ResponseMetaIndicator";
import {
  GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSON,
  GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesHtDcPeriod200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesHtDcPeriod200ResponseMeta
 */
export interface GetTimeSeriesHtDcPeriod200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesHtDcPeriod200ResponseMetaIndicator}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseMeta
   */
  indicator?: GetTimeSeriesHtDcPeriod200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPeriod200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesHtDcPeriod200ResponseMeta(
  value: object,
): value is GetTimeSeriesHtDcPeriod200ResponseMeta {
  return true;
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseMeta {
  return GetTimeSeriesHtDcPeriod200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPeriod200ResponseMeta {
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
        : GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseMeta {
  return GetTimeSeriesHtDcPeriod200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPeriod200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesHtDcPeriod200ResponseMeta | null,
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
    indicator: GetTimeSeriesHtDcPeriod200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}
