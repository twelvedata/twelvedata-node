/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesLinearRegAngle200ResponseMeta } from "./GetTimeSeriesLinearRegAngle200ResponseMeta";
import {
  GetTimeSeriesLinearRegAngle200ResponseMetaFromJSON,
  GetTimeSeriesLinearRegAngle200ResponseMetaFromJSONTyped,
  GetTimeSeriesLinearRegAngle200ResponseMetaToJSON,
  GetTimeSeriesLinearRegAngle200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesLinearRegAngle200ResponseMeta";
import type { GetTimeSeriesLinearRegAngle200ResponseValuesInner } from "./GetTimeSeriesLinearRegAngle200ResponseValuesInner";
import {
  GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSON,
  GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSON,
  GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesLinearRegAngle200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesLinearRegAngle200Response
 */
export interface GetTimeSeriesLinearRegAngle200Response {
  /**
   *
   * @type {GetTimeSeriesLinearRegAngle200ResponseMeta}
   * @memberof GetTimeSeriesLinearRegAngle200Response
   */
  meta?: GetTimeSeriesLinearRegAngle200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesLinearRegAngle200ResponseValuesInner>}
   * @memberof GetTimeSeriesLinearRegAngle200Response
   */
  values?: Array<GetTimeSeriesLinearRegAngle200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesLinearRegAngle200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesLinearRegAngle200Response interface.
 */
export function instanceOfGetTimeSeriesLinearRegAngle200Response(
  value: object,
): value is GetTimeSeriesLinearRegAngle200Response {
  return true;
}

export function GetTimeSeriesLinearRegAngle200ResponseFromJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200Response {
  return GetTimeSeriesLinearRegAngle200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegAngle200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesLinearRegAngle200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesLinearRegAngle200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesLinearRegAngle200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesLinearRegAngle200ResponseToJSON(
  json: any,
): GetTimeSeriesLinearRegAngle200Response {
  return GetTimeSeriesLinearRegAngle200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesLinearRegAngle200ResponseToJSONTyped(
  value?: GetTimeSeriesLinearRegAngle200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesLinearRegAngle200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesLinearRegAngle200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
