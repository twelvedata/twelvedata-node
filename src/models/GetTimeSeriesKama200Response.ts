/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesKama200ResponseValuesInner } from "./GetTimeSeriesKama200ResponseValuesInner";
import {
  GetTimeSeriesKama200ResponseValuesInnerFromJSON,
  GetTimeSeriesKama200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesKama200ResponseValuesInnerToJSON,
  GetTimeSeriesKama200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesKama200ResponseValuesInner";
import type { GetTimeSeriesKama200ResponseMeta } from "./GetTimeSeriesKama200ResponseMeta";
import {
  GetTimeSeriesKama200ResponseMetaFromJSON,
  GetTimeSeriesKama200ResponseMetaFromJSONTyped,
  GetTimeSeriesKama200ResponseMetaToJSON,
  GetTimeSeriesKama200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesKama200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesKama200Response
 */
export interface GetTimeSeriesKama200Response {
  /**
   *
   * @type {GetTimeSeriesKama200ResponseMeta}
   * @memberof GetTimeSeriesKama200Response
   */
  meta?: GetTimeSeriesKama200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesKama200ResponseValuesInner>}
   * @memberof GetTimeSeriesKama200Response
   */
  values?: Array<GetTimeSeriesKama200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesKama200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKama200Response interface.
 */
export function instanceOfGetTimeSeriesKama200Response(
  value: object,
): value is GetTimeSeriesKama200Response {
  return true;
}

export function GetTimeSeriesKama200ResponseFromJSON(
  json: any,
): GetTimeSeriesKama200Response {
  return GetTimeSeriesKama200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKama200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesKama200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesKama200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesKama200ResponseToJSON(
  json: any,
): GetTimeSeriesKama200Response {
  return GetTimeSeriesKama200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesKama200ResponseToJSONTyped(
  value?: GetTimeSeriesKama200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesKama200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesKama200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
