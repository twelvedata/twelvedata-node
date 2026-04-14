/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStdDev200ResponseMeta } from "./GetTimeSeriesStdDev200ResponseMeta";
import {
  GetTimeSeriesStdDev200ResponseMetaFromJSON,
  GetTimeSeriesStdDev200ResponseMetaFromJSONTyped,
  GetTimeSeriesStdDev200ResponseMetaToJSON,
  GetTimeSeriesStdDev200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesStdDev200ResponseMeta";
import type { GetTimeSeriesStdDev200ResponseValuesInner } from "./GetTimeSeriesStdDev200ResponseValuesInner";
import {
  GetTimeSeriesStdDev200ResponseValuesInnerFromJSON,
  GetTimeSeriesStdDev200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesStdDev200ResponseValuesInnerToJSON,
  GetTimeSeriesStdDev200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesStdDev200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesStdDev200Response
 */
export interface GetTimeSeriesStdDev200Response {
  /**
   *
   * @type {GetTimeSeriesStdDev200ResponseMeta}
   * @memberof GetTimeSeriesStdDev200Response
   */
  meta?: GetTimeSeriesStdDev200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesStdDev200ResponseValuesInner>}
   * @memberof GetTimeSeriesStdDev200Response
   */
  values?: Array<GetTimeSeriesStdDev200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesStdDev200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStdDev200Response interface.
 */
export function instanceOfGetTimeSeriesStdDev200Response(
  value: object,
): value is GetTimeSeriesStdDev200Response {
  return true;
}

export function GetTimeSeriesStdDev200ResponseFromJSON(
  json: any,
): GetTimeSeriesStdDev200Response {
  return GetTimeSeriesStdDev200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStdDev200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesStdDev200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesStdDev200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesStdDev200ResponseToJSON(
  json: any,
): GetTimeSeriesStdDev200Response {
  return GetTimeSeriesStdDev200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesStdDev200ResponseToJSONTyped(
  value?: GetTimeSeriesStdDev200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesStdDev200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesStdDev200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
