/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinMax200ResponseValuesInner } from "./GetTimeSeriesMinMax200ResponseValuesInner";
import {
  GetTimeSeriesMinMax200ResponseValuesInnerFromJSON,
  GetTimeSeriesMinMax200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMinMax200ResponseValuesInnerToJSON,
  GetTimeSeriesMinMax200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMinMax200ResponseValuesInner";
import type { GetTimeSeriesMinMax200ResponseMeta } from "./GetTimeSeriesMinMax200ResponseMeta";
import {
  GetTimeSeriesMinMax200ResponseMetaFromJSON,
  GetTimeSeriesMinMax200ResponseMetaFromJSONTyped,
  GetTimeSeriesMinMax200ResponseMetaToJSON,
  GetTimeSeriesMinMax200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMinMax200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMinMax200Response
 */
export interface GetTimeSeriesMinMax200Response {
  /**
   *
   * @type {GetTimeSeriesMinMax200ResponseMeta}
   * @memberof GetTimeSeriesMinMax200Response
   */
  meta?: GetTimeSeriesMinMax200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMinMax200ResponseValuesInner>}
   * @memberof GetTimeSeriesMinMax200Response
   */
  values?: Array<GetTimeSeriesMinMax200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMinMax200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinMax200Response interface.
 */
export function instanceOfGetTimeSeriesMinMax200Response(
  value: object,
): value is GetTimeSeriesMinMax200Response {
  return true;
}

export function GetTimeSeriesMinMax200ResponseFromJSON(
  json: any,
): GetTimeSeriesMinMax200Response {
  return GetTimeSeriesMinMax200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinMax200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMinMax200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMinMax200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMinMax200ResponseToJSON(
  json: any,
): GetTimeSeriesMinMax200Response {
  return GetTimeSeriesMinMax200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMinMax200ResponseToJSONTyped(
  value?: GetTimeSeriesMinMax200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMinMax200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMinMax200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
