/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacdSlope200ResponseMeta } from "./GetTimeSeriesMacdSlope200ResponseMeta";
import {
  GetTimeSeriesMacdSlope200ResponseMetaFromJSON,
  GetTimeSeriesMacdSlope200ResponseMetaFromJSONTyped,
  GetTimeSeriesMacdSlope200ResponseMetaToJSON,
  GetTimeSeriesMacdSlope200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMacdSlope200ResponseMeta";
import type { GetTimeSeriesMacdSlope200ResponseValuesInner } from "./GetTimeSeriesMacdSlope200ResponseValuesInner";
import {
  GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSON,
  GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMacdSlope200ResponseValuesInnerToJSON,
  GetTimeSeriesMacdSlope200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMacdSlope200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMacdSlope200Response
 */
export interface GetTimeSeriesMacdSlope200Response {
  /**
   *
   * @type {GetTimeSeriesMacdSlope200ResponseMeta}
   * @memberof GetTimeSeriesMacdSlope200Response
   */
  meta: GetTimeSeriesMacdSlope200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMacdSlope200ResponseValuesInner>}
   * @memberof GetTimeSeriesMacdSlope200Response
   */
  values: Array<GetTimeSeriesMacdSlope200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMacdSlope200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdSlope200Response interface.
 */
export function instanceOfGetTimeSeriesMacdSlope200Response(
  value: object,
): value is GetTimeSeriesMacdSlope200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMacdSlope200ResponseFromJSON(
  json: any,
): GetTimeSeriesMacdSlope200Response {
  return GetTimeSeriesMacdSlope200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdSlope200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMacdSlope200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMacdSlope200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMacdSlope200ResponseToJSON(
  json: any,
): GetTimeSeriesMacdSlope200Response {
  return GetTimeSeriesMacdSlope200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMacdSlope200ResponseToJSONTyped(
  value?: GetTimeSeriesMacdSlope200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMacdSlope200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMacdSlope200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
