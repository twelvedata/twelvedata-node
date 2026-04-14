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
 * @interface GetTimeSeriesMedPrice200ResponseValuesInner
 */
export interface GetTimeSeriesMedPrice200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  datetime?: string;
  /**
   * Medprice value
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseValuesInner
   */
  medprice?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMedPrice200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMedPrice200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMedPrice200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  return GetTimeSeriesMedPrice200ResponseValuesInnerFromJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    medprice: json["medprice"] == null ? undefined : json["medprice"],
  };
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseValuesInner {
  return GetTimeSeriesMedPrice200ResponseValuesInnerToJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMedPrice200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    medprice: value["medprice"],
  };
}
