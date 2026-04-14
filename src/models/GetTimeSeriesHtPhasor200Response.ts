/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtPhasor200ResponseMeta } from "./GetTimeSeriesHtPhasor200ResponseMeta";
import {
  GetTimeSeriesHtPhasor200ResponseMetaFromJSON,
  GetTimeSeriesHtPhasor200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtPhasor200ResponseMetaToJSON,
  GetTimeSeriesHtPhasor200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtPhasor200ResponseMeta";
import type { GetTimeSeriesHtPhasor200ResponseValuesInner } from "./GetTimeSeriesHtPhasor200ResponseValuesInner";
import {
  GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtPhasor200ResponseValuesInnerToJSON,
  GetTimeSeriesHtPhasor200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtPhasor200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesHtPhasor200Response
 */
export interface GetTimeSeriesHtPhasor200Response {
  /**
   *
   * @type {GetTimeSeriesHtPhasor200ResponseMeta}
   * @memberof GetTimeSeriesHtPhasor200Response
   */
  meta?: GetTimeSeriesHtPhasor200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtPhasor200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtPhasor200Response
   */
  values?: Array<GetTimeSeriesHtPhasor200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtPhasor200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtPhasor200Response interface.
 */
export function instanceOfGetTimeSeriesHtPhasor200Response(
  value: object,
): value is GetTimeSeriesHtPhasor200Response {
  return true;
}

export function GetTimeSeriesHtPhasor200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtPhasor200Response {
  return GetTimeSeriesHtPhasor200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtPhasor200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesHtPhasor200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesHtPhasor200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesHtPhasor200ResponseToJSON(
  json: any,
): GetTimeSeriesHtPhasor200Response {
  return GetTimeSeriesHtPhasor200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtPhasor200ResponseToJSONTyped(
  value?: GetTimeSeriesHtPhasor200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtPhasor200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesHtPhasor200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
