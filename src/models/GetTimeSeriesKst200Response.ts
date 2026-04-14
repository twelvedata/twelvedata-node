/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesKst200ResponseMeta } from "./GetTimeSeriesKst200ResponseMeta";
import {
  GetTimeSeriesKst200ResponseMetaFromJSON,
  GetTimeSeriesKst200ResponseMetaFromJSONTyped,
  GetTimeSeriesKst200ResponseMetaToJSON,
  GetTimeSeriesKst200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesKst200ResponseMeta";
import type { GetTimeSeriesKst200ResponseValuesInner } from "./GetTimeSeriesKst200ResponseValuesInner";
import {
  GetTimeSeriesKst200ResponseValuesInnerFromJSON,
  GetTimeSeriesKst200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesKst200ResponseValuesInnerToJSON,
  GetTimeSeriesKst200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesKst200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesKst200Response
 */
export interface GetTimeSeriesKst200Response {
  /**
   *
   * @type {GetTimeSeriesKst200ResponseMeta}
   * @memberof GetTimeSeriesKst200Response
   */
  meta?: GetTimeSeriesKst200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesKst200ResponseValuesInner>}
   * @memberof GetTimeSeriesKst200Response
   */
  values?: Array<GetTimeSeriesKst200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesKst200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesKst200Response interface.
 */
export function instanceOfGetTimeSeriesKst200Response(
  value: object,
): value is GetTimeSeriesKst200Response {
  return true;
}

export function GetTimeSeriesKst200ResponseFromJSON(
  json: any,
): GetTimeSeriesKst200Response {
  return GetTimeSeriesKst200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesKst200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesKst200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesKst200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesKst200ResponseToJSON(
  json: any,
): GetTimeSeriesKst200Response {
  return GetTimeSeriesKst200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesKst200ResponseToJSONTyped(
  value?: GetTimeSeriesKst200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesKst200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesKst200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
