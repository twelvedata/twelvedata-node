/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetTimeSeriesIchimoku200ResponseValuesInner
 */
export interface GetTimeSeriesIchimoku200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Tenkan-sen value
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  tenkanSen?: string;
  /**
   * Kijun-sen value
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  kijunSen?: string;
  /**
   * Senkou span A value
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  senkouSpanA?: string;
  /**
   * Senkou span B value
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  senkouSpanB?: string;
  /**
   * Chikou span value
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseValuesInner
   */
  chikouSpan?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesIchimoku200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesIchimoku200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesIchimoku200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesIchimoku200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesIchimoku200ResponseValuesInner {
  return GetTimeSeriesIchimoku200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesIchimoku200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesIchimoku200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    tenkanSen: json["tenkan_sen"] == null ? undefined : json["tenkan_sen"],
    kijunSen: json["kijun_sen"] == null ? undefined : json["kijun_sen"],
    senkouSpanA:
      json["senkou_span_a"] == null ? undefined : json["senkou_span_a"],
    senkouSpanB:
      json["senkou_span_b"] == null ? undefined : json["senkou_span_b"],
    chikouSpan: json["chikou_span"] == null ? undefined : json["chikou_span"],
  };
}

export function GetTimeSeriesIchimoku200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesIchimoku200ResponseValuesInner {
  return GetTimeSeriesIchimoku200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesIchimoku200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesIchimoku200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    tenkan_sen: value["tenkanSen"],
    kijun_sen: value["kijunSen"],
    senkou_span_a: value["senkouSpanA"],
    senkou_span_b: value["senkouSpanB"],
    chikou_span: value["chikouSpan"],
  };
}
