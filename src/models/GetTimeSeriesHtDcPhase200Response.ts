/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesHtDcPhase200ResponseMeta } from "./GetTimeSeriesHtDcPhase200ResponseMeta";
import {
  GetTimeSeriesHtDcPhase200ResponseMetaFromJSON,
  GetTimeSeriesHtDcPhase200ResponseMetaFromJSONTyped,
  GetTimeSeriesHtDcPhase200ResponseMetaToJSON,
  GetTimeSeriesHtDcPhase200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesHtDcPhase200ResponseMeta";
import type { GetTimeSeriesHtDcPhase200ResponseValuesInner } from "./GetTimeSeriesHtDcPhase200ResponseValuesInner";
import {
  GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSON,
  GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSON,
  GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesHtDcPhase200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesHtDcPhase200Response
 */
export interface GetTimeSeriesHtDcPhase200Response {
  /**
   *
   * @type {GetTimeSeriesHtDcPhase200ResponseMeta}
   * @memberof GetTimeSeriesHtDcPhase200Response
   */
  meta?: GetTimeSeriesHtDcPhase200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesHtDcPhase200ResponseValuesInner>}
   * @memberof GetTimeSeriesHtDcPhase200Response
   */
  values?: Array<GetTimeSeriesHtDcPhase200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesHtDcPhase200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesHtDcPhase200Response interface.
 */
export function instanceOfGetTimeSeriesHtDcPhase200Response(
  value: object,
): value is GetTimeSeriesHtDcPhase200Response {
  return true;
}

export function GetTimeSeriesHtDcPhase200ResponseFromJSON(
  json: any,
): GetTimeSeriesHtDcPhase200Response {
  return GetTimeSeriesHtDcPhase200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesHtDcPhase200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesHtDcPhase200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesHtDcPhase200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesHtDcPhase200ResponseToJSON(
  json: any,
): GetTimeSeriesHtDcPhase200Response {
  return GetTimeSeriesHtDcPhase200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesHtDcPhase200ResponseToJSONTyped(
  value?: GetTimeSeriesHtDcPhase200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesHtDcPhase200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesHtDcPhase200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
