/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAvgPrice200ResponseMetaIndicator } from "./GetTimeSeriesAvgPrice200ResponseMetaIndicator";
import {
  GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSON,
  GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesAvgPrice200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesAvgPrice200ResponseMeta
 */
export interface GetTimeSeriesAvgPrice200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesAvgPrice200ResponseMetaIndicator}
   * @memberof GetTimeSeriesAvgPrice200ResponseMeta
   */
  indicator?: GetTimeSeriesAvgPrice200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesAvgPrice200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesAvgPrice200ResponseMeta(
  value: object,
): value is GetTimeSeriesAvgPrice200ResponseMeta {
  return true;
}

export function GetTimeSeriesAvgPrice200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseMeta {
  return GetTimeSeriesAvgPrice200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvgPrice200ResponseMeta {
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
        : GetTimeSeriesAvgPrice200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesAvgPrice200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesAvgPrice200ResponseMeta {
  return GetTimeSeriesAvgPrice200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesAvgPrice200ResponseMeta | null,
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
    indicator: GetTimeSeriesAvgPrice200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}
