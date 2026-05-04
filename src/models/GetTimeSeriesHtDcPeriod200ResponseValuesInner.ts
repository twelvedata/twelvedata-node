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
 * @interface GetTimeSeriesHtDcPeriod200ResponseValuesInner
 */
export interface GetTimeSeriesHtDcPeriod200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseValuesInner
   */
  datetime: string;
  /**
   * ht_dcperiod value
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200ResponseValuesInner
   */
  htDcperiod: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPeriod200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesHtDcPeriod200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesHtDcPeriod200ResponseValuesInner {
  if (!("datetime" in value) || value["datetime"] === undefined) return false;
  if (!("htDcperiod" in value) || value["htDcperiod"] === undefined)
    return false;
  return true;
}

export function GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseValuesInner {
  return GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPeriod200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"],
    htDcperiod: json["ht_dcperiod"],
  };
}

export function GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200ResponseValuesInner {
  return GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesHtDcPeriod200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    ht_dcperiod: value["htDcperiod"],
  };
}
