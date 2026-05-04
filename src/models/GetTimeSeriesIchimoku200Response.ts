/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesIchimoku200ResponseValuesInner } from "./GetTimeSeriesIchimoku200ResponseValuesInner";
import {
  GetTimeSeriesIchimoku200ResponseValuesInnerFromJSON,
  GetTimeSeriesIchimoku200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesIchimoku200ResponseValuesInnerToJSON,
  GetTimeSeriesIchimoku200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesIchimoku200ResponseValuesInner";
import type { GetTimeSeriesIchimoku200ResponseMeta } from "./GetTimeSeriesIchimoku200ResponseMeta";
import {
  GetTimeSeriesIchimoku200ResponseMetaFromJSON,
  GetTimeSeriesIchimoku200ResponseMetaFromJSONTyped,
  GetTimeSeriesIchimoku200ResponseMetaToJSON,
  GetTimeSeriesIchimoku200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesIchimoku200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesIchimoku200Response
 */
export interface GetTimeSeriesIchimoku200Response {
  /**
   *
   * @type {GetTimeSeriesIchimoku200ResponseMeta}
   * @memberof GetTimeSeriesIchimoku200Response
   */
  meta: GetTimeSeriesIchimoku200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesIchimoku200ResponseValuesInner>}
   * @memberof GetTimeSeriesIchimoku200Response
   */
  values: Array<GetTimeSeriesIchimoku200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesIchimoku200Response interface.
 */
export function instanceOfGetTimeSeriesIchimoku200Response(
  value: object,
): value is GetTimeSeriesIchimoku200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesIchimoku200ResponseFromJSON(
  json: any,
): GetTimeSeriesIchimoku200Response {
  return GetTimeSeriesIchimoku200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesIchimoku200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesIchimoku200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesIchimoku200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesIchimoku200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesIchimoku200ResponseToJSON(
  json: any,
): GetTimeSeriesIchimoku200Response {
  return GetTimeSeriesIchimoku200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesIchimoku200ResponseToJSONTyped(
  value?: GetTimeSeriesIchimoku200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesIchimoku200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesIchimoku200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
