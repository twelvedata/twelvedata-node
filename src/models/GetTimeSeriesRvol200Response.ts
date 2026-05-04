/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRvol200ResponseValuesInner } from "./GetTimeSeriesRvol200ResponseValuesInner";
import {
  GetTimeSeriesRvol200ResponseValuesInnerFromJSON,
  GetTimeSeriesRvol200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRvol200ResponseValuesInnerToJSON,
  GetTimeSeriesRvol200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRvol200ResponseValuesInner";
import type { GetTimeSeriesRvol200ResponseMeta } from "./GetTimeSeriesRvol200ResponseMeta";
import {
  GetTimeSeriesRvol200ResponseMetaFromJSON,
  GetTimeSeriesRvol200ResponseMetaFromJSONTyped,
  GetTimeSeriesRvol200ResponseMetaToJSON,
  GetTimeSeriesRvol200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRvol200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesRvol200Response
 */
export interface GetTimeSeriesRvol200Response {
  /**
   *
   * @type {GetTimeSeriesRvol200ResponseMeta}
   * @memberof GetTimeSeriesRvol200Response
   */
  meta: GetTimeSeriesRvol200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRvol200ResponseValuesInner>}
   * @memberof GetTimeSeriesRvol200Response
   */
  values: Array<GetTimeSeriesRvol200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRvol200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRvol200Response interface.
 */
export function instanceOfGetTimeSeriesRvol200Response(
  value: object,
): value is GetTimeSeriesRvol200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesRvol200ResponseFromJSON(
  json: any,
): GetTimeSeriesRvol200Response {
  return GetTimeSeriesRvol200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRvol200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesRvol200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesRvol200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesRvol200ResponseToJSON(
  json: any,
): GetTimeSeriesRvol200Response {
  return GetTimeSeriesRvol200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRvol200ResponseToJSONTyped(
  value?: GetTimeSeriesRvol200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRvol200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesRvol200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
