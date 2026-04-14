/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAdx200ResponseMeta } from "./GetTimeSeriesAdx200ResponseMeta";
import {
  GetTimeSeriesAdx200ResponseMetaFromJSON,
  GetTimeSeriesAdx200ResponseMetaFromJSONTyped,
  GetTimeSeriesAdx200ResponseMetaToJSON,
  GetTimeSeriesAdx200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAdx200ResponseMeta";
import type { GetTimeSeriesAdx200ResponseValuesInner } from "./GetTimeSeriesAdx200ResponseValuesInner";
import {
  GetTimeSeriesAdx200ResponseValuesInnerFromJSON,
  GetTimeSeriesAdx200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAdx200ResponseValuesInnerToJSON,
  GetTimeSeriesAdx200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAdx200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesAdx200Response
 */
export interface GetTimeSeriesAdx200Response {
  /**
   *
   * @type {GetTimeSeriesAdx200ResponseMeta}
   * @memberof GetTimeSeriesAdx200Response
   */
  meta?: GetTimeSeriesAdx200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAdx200ResponseValuesInner>}
   * @memberof GetTimeSeriesAdx200Response
   */
  values?: Array<GetTimeSeriesAdx200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAdx200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAdx200Response interface.
 */
export function instanceOfGetTimeSeriesAdx200Response(
  value: object,
): value is GetTimeSeriesAdx200Response {
  return true;
}

export function GetTimeSeriesAdx200ResponseFromJSON(
  json: any,
): GetTimeSeriesAdx200Response {
  return GetTimeSeriesAdx200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAdx200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAdx200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAdx200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAdx200ResponseToJSON(
  json: any,
): GetTimeSeriesAdx200Response {
  return GetTimeSeriesAdx200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAdx200ResponseToJSONTyped(
  value?: GetTimeSeriesAdx200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAdx200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAdx200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
