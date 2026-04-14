/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtTrendMode200ResponseValuesInner } from "./GetTimeSeriesHtTrendMode200ResponseValuesInner";
import {
  GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSON,
  GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtTrendMode200ResponseValuesInner";
import type { GetTimeSeriesHtTrendMode200ResponseMeta } from "./GetTimeSeriesHtTrendMode200ResponseMeta";
import {
  GetTimeSeriesHtTrendMode200ResponseMetaFromJSON,
  GetTimeSeriesHtTrendMode200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtTrendMode200ResponseMetaToJSON,
  GetTimeSeriesHtTrendMode200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtTrendMode200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesHtTrendMode200Response
 */
export interface GetTimeSeriesHtTrendMode200Response {
  /**
   *
   * @type {GetTimeSeriesHtTrendMode200ResponseMeta}
   * @memberof GetTimeSeriesHtTrendMode200Response
   */
  meta?: GetTimeSeriesHtTrendMode200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtTrendMode200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtTrendMode200Response
   */
  values?: Array<GetTimeSeriesHtTrendMode200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtTrendMode200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtTrendMode200Response interface.
 */
export function instanceOfGetTimeSeriesHtTrendMode200Response(
  value: object,
): value is GetTimeSeriesHtTrendMode200Response {
  return true;
}

export function GetTimeSeriesHtTrendMode200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtTrendMode200Response {
  return GetTimeSeriesHtTrendMode200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendMode200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtTrendMode200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesHtTrendMode200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesHtTrendMode200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesHtTrendMode200ResponseToJSON(
  json: any,
): GetTimeSeriesHtTrendMode200Response {
  return GetTimeSeriesHtTrendMode200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtTrendMode200ResponseToJSONTyped(
  value?: GetTimeSeriesHtTrendMode200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtTrendMode200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesHtTrendMode200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
