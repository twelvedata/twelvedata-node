/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearRegIntercept200ResponseMeta } from "./GetTimeSeriesLinearRegIntercept200ResponseMeta";
import {
  GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSON,
  GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSONTyped,
  GetTimeSeriesLinearRegIntercept200ResponseMetaToJSON,
  GetTimeSeriesLinearRegIntercept200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLinearRegIntercept200ResponseMeta";
import type { GetTimeSeriesLinearRegIntercept200ResponseValuesInner } from "./GetTimeSeriesLinearRegIntercept200ResponseValuesInner";
import {
  GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSON,
  GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSON,
  GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLinearRegIntercept200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesLinearRegIntercept200Response
 */
export interface GetTimeSeriesLinearRegIntercept200Response {
  /**
   *
   * @type {GetTimeSeriesLinearRegIntercept200ResponseMeta}
   * @memberof GetTimeSeriesLinearRegIntercept200Response
   */
  meta?: GetTimeSeriesLinearRegIntercept200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLinearRegIntercept200ResponseValuesInner>}
   * @memberof GetTimeSeriesLinearRegIntercept200Response
   */
  values?: Array<GetTimeSeriesLinearRegIntercept200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLinearRegIntercept200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegIntercept200Response interface.
 */
export function instanceOfGetTimeSeriesLinearRegIntercept200Response(
  value: object,
): value is GetTimeSeriesLinearRegIntercept200Response {
  return true;
}

export function GetTimeSeriesLinearRegIntercept200ResponseFromJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200Response {
  return GetTimeSeriesLinearRegIntercept200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegIntercept200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegIntercept200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesLinearRegIntercept200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesLinearRegIntercept200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesLinearRegIntercept200ResponseToJSON(
  json: any,
): GetTimeSeriesLinearRegIntercept200Response {
  return GetTimeSeriesLinearRegIntercept200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegIntercept200ResponseToJSONTyped(
  value?: GetTimeSeriesLinearRegIntercept200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLinearRegIntercept200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesLinearRegIntercept200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
