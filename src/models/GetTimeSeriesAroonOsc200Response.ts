/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAroonOsc200ResponseValuesInner } from "./GetTimeSeriesAroonOsc200ResponseValuesInner";
import {
  GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSON,
  GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAroonOsc200ResponseValuesInnerToJSON,
  GetTimeSeriesAroonOsc200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAroonOsc200ResponseValuesInner";
import type { GetTimeSeriesAroonOsc200ResponseMeta } from "./GetTimeSeriesAroonOsc200ResponseMeta";
import {
  GetTimeSeriesAroonOsc200ResponseMetaFromJSON,
  GetTimeSeriesAroonOsc200ResponseMetaFromJSONTyped,
  GetTimeSeriesAroonOsc200ResponseMetaToJSON,
  GetTimeSeriesAroonOsc200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAroonOsc200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesAroonOsc200Response
 */
export interface GetTimeSeriesAroonOsc200Response {
  /**
   *
   * @type {GetTimeSeriesAroonOsc200ResponseMeta}
   * @memberof GetTimeSeriesAroonOsc200Response
   */
  meta?: GetTimeSeriesAroonOsc200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAroonOsc200ResponseValuesInner>}
   * @memberof GetTimeSeriesAroonOsc200Response
   */
  values?: Array<GetTimeSeriesAroonOsc200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAroonOsc200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAroonOsc200Response interface.
 */
export function instanceOfGetTimeSeriesAroonOsc200Response(
  value: object,
): value is GetTimeSeriesAroonOsc200Response {
  return true;
}

export function GetTimeSeriesAroonOsc200ResponseFromJSON(
  json: any,
): GetTimeSeriesAroonOsc200Response {
  return GetTimeSeriesAroonOsc200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAroonOsc200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAroonOsc200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAroonOsc200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAroonOsc200ResponseToJSON(
  json: any,
): GetTimeSeriesAroonOsc200Response {
  return GetTimeSeriesAroonOsc200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAroonOsc200ResponseToJSONTyped(
  value?: GetTimeSeriesAroonOsc200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAroonOsc200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAroonOsc200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
