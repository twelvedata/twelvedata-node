/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMedPrice200ResponseValuesInner } from "./GetTimeSeriesMedPrice200ResponseValuesInner";
import {
  GetTimeSeriesMedPrice200ResponseValuesInnerFromJSON,
  GetTimeSeriesMedPrice200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMedPrice200ResponseValuesInnerToJSON,
  GetTimeSeriesMedPrice200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMedPrice200ResponseValuesInner";
import type { GetTimeSeriesMedPrice200ResponseMeta } from "./GetTimeSeriesMedPrice200ResponseMeta";
import {
  GetTimeSeriesMedPrice200ResponseMetaFromJSON,
  GetTimeSeriesMedPrice200ResponseMetaFromJSONTyped,
  GetTimeSeriesMedPrice200ResponseMetaToJSON,
  GetTimeSeriesMedPrice200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMedPrice200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMedPrice200Response
 */
export interface GetTimeSeriesMedPrice200Response {
  /**
   *
   * @type {GetTimeSeriesMedPrice200ResponseMeta}
   * @memberof GetTimeSeriesMedPrice200Response
   */
  meta: GetTimeSeriesMedPrice200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMedPrice200ResponseValuesInner>}
   * @memberof GetTimeSeriesMedPrice200Response
   */
  values: Array<GetTimeSeriesMedPrice200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMedPrice200Response interface.
 */
export function instanceOfGetTimeSeriesMedPrice200Response(
  value: object,
): value is GetTimeSeriesMedPrice200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMedPrice200ResponseFromJSON(
  json: any,
): GetTimeSeriesMedPrice200Response {
  return GetTimeSeriesMedPrice200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMedPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMedPrice200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMedPrice200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMedPrice200ResponseToJSON(
  json: any,
): GetTimeSeriesMedPrice200Response {
  return GetTimeSeriesMedPrice200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseToJSONTyped(
  value?: GetTimeSeriesMedPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMedPrice200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMedPrice200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
