/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearRegSlope200ResponseMeta } from "./GetTimeSeriesLinearRegSlope200ResponseMeta";
import {
  GetTimeSeriesLinearRegSlope200ResponseMetaFromJSON,
  GetTimeSeriesLinearRegSlope200ResponseMetaFromJSONTyped,
  GetTimeSeriesLinearRegSlope200ResponseMetaToJSON,
  GetTimeSeriesLinearRegSlope200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLinearRegSlope200ResponseMeta";
import type { GetTimeSeriesLinearRegSlope200ResponseValuesInner } from "./GetTimeSeriesLinearRegSlope200ResponseValuesInner";
import {
  GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSON,
  GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSON,
  GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLinearRegSlope200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesLinearRegSlope200Response
 */
export interface GetTimeSeriesLinearRegSlope200Response {
  /**
   *
   * @type {GetTimeSeriesLinearRegSlope200ResponseMeta}
   * @memberof GetTimeSeriesLinearRegSlope200Response
   */
  meta?: GetTimeSeriesLinearRegSlope200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLinearRegSlope200ResponseValuesInner>}
   * @memberof GetTimeSeriesLinearRegSlope200Response
   */
  values?: Array<GetTimeSeriesLinearRegSlope200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLinearRegSlope200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegSlope200Response interface.
 */
export function instanceOfGetTimeSeriesLinearRegSlope200Response(
  value: object,
): value is GetTimeSeriesLinearRegSlope200Response {
  return true;
}

export function GetTimeSeriesLinearRegSlope200ResponseFromJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200Response {
  return GetTimeSeriesLinearRegSlope200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegSlope200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegSlope200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesLinearRegSlope200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesLinearRegSlope200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesLinearRegSlope200ResponseToJSON(
  json: any,
): GetTimeSeriesLinearRegSlope200Response {
  return GetTimeSeriesLinearRegSlope200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegSlope200ResponseToJSONTyped(
  value?: GetTimeSeriesLinearRegSlope200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLinearRegSlope200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesLinearRegSlope200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
