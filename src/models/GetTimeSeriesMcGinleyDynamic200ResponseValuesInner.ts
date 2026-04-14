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
 * @interface GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
 */
export interface GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  /**
   * Datetime in local market time for equities and in UTC for forex and cryptocurrencies referring to when the bar with specified interval was opened
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  datetime?: string;
  /**
   * McGinley Dynamic value
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200ResponseValuesInner
   */
  mcginleyDynamic?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMcGinleyDynamic200ResponseValuesInner interface.
 */
export function instanceOfGetTimeSeriesMcGinleyDynamic200ResponseValuesInner(
  value: object,
): value is GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  return true;
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  return GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  if (json == null) {
    return json;
  }
  return {
    datetime: json["datetime"] == null ? undefined : json["datetime"],
    mcginleyDynamic:
      json["mcginley_dynamic"] == null ? undefined : json["mcginley_dynamic"],
  };
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200ResponseValuesInner {
  return GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSONTyped(
  value?: GetTimeSeriesMcGinleyDynamic200ResponseValuesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    datetime: value["datetime"],
    mcginley_dynamic: value["mcginleyDynamic"],
  };
}
