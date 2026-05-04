/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRocr100200ResponseMeta } from "./GetTimeSeriesRocr100200ResponseMeta";
import {
  GetTimeSeriesRocr100200ResponseMetaFromJSON,
  GetTimeSeriesRocr100200ResponseMetaFromJSONTyped,
  GetTimeSeriesRocr100200ResponseMetaToJSON,
  GetTimeSeriesRocr100200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRocr100200ResponseMeta";
import type { GetTimeSeriesRocr100200ResponseValuesInner } from "./GetTimeSeriesRocr100200ResponseValuesInner";
import {
  GetTimeSeriesRocr100200ResponseValuesInnerFromJSON,
  GetTimeSeriesRocr100200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRocr100200ResponseValuesInnerToJSON,
  GetTimeSeriesRocr100200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRocr100200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesRocr100200Response
 */
export interface GetTimeSeriesRocr100200Response {
  /**
   *
   * @type {GetTimeSeriesRocr100200ResponseMeta}
   * @memberof GetTimeSeriesRocr100200Response
   */
  meta: GetTimeSeriesRocr100200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRocr100200ResponseValuesInner>}
   * @memberof GetTimeSeriesRocr100200Response
   */
  values: Array<GetTimeSeriesRocr100200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRocr100200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr100200Response interface.
 */
export function instanceOfGetTimeSeriesRocr100200Response(
  value: object,
): value is GetTimeSeriesRocr100200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRocr100200ResponseFromJSON(
  json: any,
): GetTimeSeriesRocr100200Response {
  return GetTimeSeriesRocr100200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr100200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesRocr100200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesRocr100200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesRocr100200ResponseToJSON(
  json: any,
): GetTimeSeriesRocr100200Response {
  return GetTimeSeriesRocr100200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRocr100200ResponseToJSONTyped(
  value?: GetTimeSeriesRocr100200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRocr100200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesRocr100200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
