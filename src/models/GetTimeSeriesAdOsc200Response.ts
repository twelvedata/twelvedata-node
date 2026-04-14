/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdOsc200ResponseMeta } from "./GetTimeSeriesAdOsc200ResponseMeta";
import {
  GetTimeSeriesAdOsc200ResponseMetaFromJSON,
  GetTimeSeriesAdOsc200ResponseMetaFromJSONTyped,
  GetTimeSeriesAdOsc200ResponseMetaToJSON,
  GetTimeSeriesAdOsc200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAdOsc200ResponseMeta";
import type { GetTimeSeriesAdOsc200ResponseValuesInner } from "./GetTimeSeriesAdOsc200ResponseValuesInner";
import {
  GetTimeSeriesAdOsc200ResponseValuesInnerFromJSON,
  GetTimeSeriesAdOsc200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAdOsc200ResponseValuesInnerToJSON,
  GetTimeSeriesAdOsc200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAdOsc200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesAdOsc200Response
 */
export interface GetTimeSeriesAdOsc200Response {
  /**
   *
   * @type {GetTimeSeriesAdOsc200ResponseMeta}
   * @memberof GetTimeSeriesAdOsc200Response
   */
  meta?: GetTimeSeriesAdOsc200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAdOsc200ResponseValuesInner>}
   * @memberof GetTimeSeriesAdOsc200Response
   */
  values?: Array<GetTimeSeriesAdOsc200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAdOsc200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdOsc200Response interface.
 */
export function instanceOfGetTimeSeriesAdOsc200Response(
  value: object,
): value is GetTimeSeriesAdOsc200Response {
  return true;
}

export function GetTimeSeriesAdOsc200ResponseFromJSON(
  json: any,
): GetTimeSeriesAdOsc200Response {
  return GetTimeSeriesAdOsc200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdOsc200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAdOsc200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAdOsc200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAdOsc200ResponseToJSON(
  json: any,
): GetTimeSeriesAdOsc200Response {
  return GetTimeSeriesAdOsc200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAdOsc200ResponseToJSONTyped(
  value?: GetTimeSeriesAdOsc200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAdOsc200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAdOsc200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
