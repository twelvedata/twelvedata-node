/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtDcPeriod200ResponseMeta } from "./GetTimeSeriesHtDcPeriod200ResponseMeta";
import {
  GetTimeSeriesHtDcPeriod200ResponseMetaFromJSON,
  GetTimeSeriesHtDcPeriod200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtDcPeriod200ResponseMetaToJSON,
  GetTimeSeriesHtDcPeriod200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtDcPeriod200ResponseMeta";
import type { GetTimeSeriesHtDcPeriod200ResponseValuesInner } from "./GetTimeSeriesHtDcPeriod200ResponseValuesInner";
import {
  GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSON,
  GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtDcPeriod200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesHtDcPeriod200Response
 */
export interface GetTimeSeriesHtDcPeriod200Response {
  /**
   *
   * @type {GetTimeSeriesHtDcPeriod200ResponseMeta}
   * @memberof GetTimeSeriesHtDcPeriod200Response
   */
  meta?: GetTimeSeriesHtDcPeriod200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtDcPeriod200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtDcPeriod200Response
   */
  values?: Array<GetTimeSeriesHtDcPeriod200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtDcPeriod200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPeriod200Response interface.
 */
export function instanceOfGetTimeSeriesHtDcPeriod200Response(
  value: object,
): value is GetTimeSeriesHtDcPeriod200Response {
  return true;
}

export function GetTimeSeriesHtDcPeriod200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200Response {
  return GetTimeSeriesHtDcPeriod200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPeriod200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPeriod200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesHtDcPeriod200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesHtDcPeriod200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesHtDcPeriod200ResponseToJSON(
  json: any,
): GetTimeSeriesHtDcPeriod200Response {
  return GetTimeSeriesHtDcPeriod200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPeriod200ResponseToJSONTyped(
  value?: GetTimeSeriesHtDcPeriod200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtDcPeriod200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesHtDcPeriod200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
