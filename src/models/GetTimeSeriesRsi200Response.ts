/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRsi200ResponseValuesInner } from "./GetTimeSeriesRsi200ResponseValuesInner";
import {
  GetTimeSeriesRsi200ResponseValuesInnerFromJSON,
  GetTimeSeriesRsi200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRsi200ResponseValuesInnerToJSON,
  GetTimeSeriesRsi200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRsi200ResponseValuesInner";
import type { GetTimeSeriesRsi200ResponseMeta } from "./GetTimeSeriesRsi200ResponseMeta";
import {
  GetTimeSeriesRsi200ResponseMetaFromJSON,
  GetTimeSeriesRsi200ResponseMetaFromJSONTyped,
  GetTimeSeriesRsi200ResponseMetaToJSON,
  GetTimeSeriesRsi200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRsi200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesRsi200Response
 */
export interface GetTimeSeriesRsi200Response {
  /**
   *
   * @type {GetTimeSeriesRsi200ResponseMeta}
   * @memberof GetTimeSeriesRsi200Response
   */
  meta?: GetTimeSeriesRsi200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRsi200ResponseValuesInner>}
   * @memberof GetTimeSeriesRsi200Response
   */
  values?: Array<GetTimeSeriesRsi200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRsi200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRsi200Response interface.
 */
export function instanceOfGetTimeSeriesRsi200Response(
  value: object,
): value is GetTimeSeriesRsi200Response {
  return true;
}

export function GetTimeSeriesRsi200ResponseFromJSON(
  json: any,
): GetTimeSeriesRsi200Response {
  return GetTimeSeriesRsi200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRsi200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesRsi200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesRsi200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesRsi200ResponseToJSON(
  json: any,
): GetTimeSeriesRsi200Response {
  return GetTimeSeriesRsi200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRsi200ResponseToJSONTyped(
  value?: GetTimeSeriesRsi200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRsi200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesRsi200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
