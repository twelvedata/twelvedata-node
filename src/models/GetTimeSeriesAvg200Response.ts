/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAvg200ResponseMeta } from "./GetTimeSeriesAvg200ResponseMeta";
import {
  GetTimeSeriesAvg200ResponseMetaFromJSON,
  GetTimeSeriesAvg200ResponseMetaFromJSONTyped,
  GetTimeSeriesAvg200ResponseMetaToJSON,
  GetTimeSeriesAvg200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAvg200ResponseMeta";
import type { GetTimeSeriesAvg200ResponseValuesInner } from "./GetTimeSeriesAvg200ResponseValuesInner";
import {
  GetTimeSeriesAvg200ResponseValuesInnerFromJSON,
  GetTimeSeriesAvg200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAvg200ResponseValuesInnerToJSON,
  GetTimeSeriesAvg200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAvg200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesAvg200Response
 */
export interface GetTimeSeriesAvg200Response {
  /**
   *
   * @type {GetTimeSeriesAvg200ResponseMeta}
   * @memberof GetTimeSeriesAvg200Response
   */
  meta?: GetTimeSeriesAvg200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAvg200ResponseValuesInner>}
   * @memberof GetTimeSeriesAvg200Response
   */
  values?: Array<GetTimeSeriesAvg200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAvg200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAvg200Response interface.
 */
export function instanceOfGetTimeSeriesAvg200Response(
  value: object,
): value is GetTimeSeriesAvg200Response {
  return true;
}

export function GetTimeSeriesAvg200ResponseFromJSON(
  json: any,
): GetTimeSeriesAvg200Response {
  return GetTimeSeriesAvg200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvg200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAvg200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAvg200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAvg200ResponseToJSON(
  json: any,
): GetTimeSeriesAvg200Response {
  return GetTimeSeriesAvg200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAvg200ResponseToJSONTyped(
  value?: GetTimeSeriesAvg200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAvg200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAvg200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
