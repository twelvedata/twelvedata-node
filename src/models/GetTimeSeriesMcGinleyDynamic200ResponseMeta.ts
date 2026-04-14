/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator } from "./GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator";
import {
  GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSONTyped,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSONTyped,
} from "./GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator";

/**
 * Json object with request general information
 * @export
 * @interface GetTimeSeriesMcGinleyDynamic200ResponseMeta
 */
export interface GetTimeSeriesMcGinleyDynamic200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  symbol?: string;
  /**
   * The time gap between consecutive data points.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  interval?: string;
  /**
   * The currency of a traded instrument.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  currency?: string;
  /**
   * The timezone of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * The exchange name where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  exchange?: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  micCode?: string;
  /**
   * The asset class to which the instrument belongs.
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  type?: string;
  /**
   *
   * @type {GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseMeta
   */
  indicator?: GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicator;
}

/**
 * Check if a given object implements the GetTimeSeriesMcGinleyDynamic200ResponseMeta interface.
 */
export function instanceOfGetTimeSeriesMcGinleyDynamic200ResponseMeta(
  value: object,
): value is GetTimeSeriesMcGinleyDynamic200ResponseMeta {
  return true;
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseMeta {
  return GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSONTyped(json, false);
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMcGinleyDynamic200ResponseMeta {
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
        : GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorFromJSON(
            json["indicator"],
          ),
  };
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseMeta {
  return GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSONTyped(json, false);
}

export function GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSONTyped(
  value?: GetTimeSeriesMcGinleyDynamic200ResponseMeta | null,
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
    indicator: GetTimeSeriesMcGinleyDynamic200ResponseMetaIndicatorToJSON(
      value["indicator"],
    ),
  };
}
