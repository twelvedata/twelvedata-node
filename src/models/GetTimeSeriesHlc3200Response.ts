/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHlc3200ResponseValuesInner } from "./GetTimeSeriesHlc3200ResponseValuesInner";
import {
  GetTimeSeriesHlc3200ResponseValuesInnerFromJSON,
  GetTimeSeriesHlc3200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHlc3200ResponseValuesInnerToJSON,
  GetTimeSeriesHlc3200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHlc3200ResponseValuesInner";
import type { GetTimeSeriesHlc3200ResponseMeta } from "./GetTimeSeriesHlc3200ResponseMeta";
import {
  GetTimeSeriesHlc3200ResponseMetaFromJSON,
  GetTimeSeriesHlc3200ResponseMetaFromJSONTyped,
  GetTimeSeriesHlc3200ResponseMetaToJSON,
  GetTimeSeriesHlc3200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHlc3200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesHlc3200Response
 */
export interface GetTimeSeriesHlc3200Response {
  /**
   *
   * @type {GetTimeSeriesHlc3200ResponseMeta}
   * @memberof GetTimeSeriesHlc3200Response
   */
  meta?: GetTimeSeriesHlc3200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHlc3200ResponseValuesInner>}
   * @memberof GetTimeSeriesHlc3200Response
   */
  values?: Array<GetTimeSeriesHlc3200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHlc3200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHlc3200Response interface.
 */
export function instanceOfGetTimeSeriesHlc3200Response(
  value: object,
): value is GetTimeSeriesHlc3200Response {
  return true;
}

export function GetTimeSeriesHlc3200ResponseFromJSON(
  json: any,
): GetTimeSeriesHlc3200Response {
  return GetTimeSeriesHlc3200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHlc3200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesHlc3200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesHlc3200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesHlc3200ResponseToJSON(
  json: any,
): GetTimeSeriesHlc3200Response {
  return GetTimeSeriesHlc3200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHlc3200ResponseToJSONTyped(
  value?: GetTimeSeriesHlc3200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHlc3200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesHlc3200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
