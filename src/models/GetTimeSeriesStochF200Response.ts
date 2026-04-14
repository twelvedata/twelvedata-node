/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStochF200ResponseValuesInner } from "./GetTimeSeriesStochF200ResponseValuesInner";
import {
  GetTimeSeriesStochF200ResponseValuesInnerFromJSON,
  GetTimeSeriesStochF200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesStochF200ResponseValuesInnerToJSON,
  GetTimeSeriesStochF200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesStochF200ResponseValuesInner";
import type { GetTimeSeriesStochF200ResponseMeta } from "./GetTimeSeriesStochF200ResponseMeta";
import {
  GetTimeSeriesStochF200ResponseMetaFromJSON,
  GetTimeSeriesStochF200ResponseMetaFromJSONTyped,
  GetTimeSeriesStochF200ResponseMetaToJSON,
  GetTimeSeriesStochF200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesStochF200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesStochF200Response
 */
export interface GetTimeSeriesStochF200Response {
  /**
   *
   * @type {GetTimeSeriesStochF200ResponseMeta}
   * @memberof GetTimeSeriesStochF200Response
   */
  meta?: GetTimeSeriesStochF200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesStochF200ResponseValuesInner>}
   * @memberof GetTimeSeriesStochF200Response
   */
  values?: Array<GetTimeSeriesStochF200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesStochF200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStochF200Response interface.
 */
export function instanceOfGetTimeSeriesStochF200Response(
  value: object,
): value is GetTimeSeriesStochF200Response {
  return true;
}

export function GetTimeSeriesStochF200ResponseFromJSON(
  json: any,
): GetTimeSeriesStochF200Response {
  return GetTimeSeriesStochF200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochF200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesStochF200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesStochF200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesStochF200ResponseToJSON(
  json: any,
): GetTimeSeriesStochF200Response {
  return GetTimeSeriesStochF200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesStochF200ResponseToJSONTyped(
  value?: GetTimeSeriesStochF200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesStochF200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesStochF200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
