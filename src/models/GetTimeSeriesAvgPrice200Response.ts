/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAvgPrice200ResponseValuesInner } from "./GetTimeSeriesAvgPrice200ResponseValuesInner";
import {
  GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSON,
  GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAvgPrice200ResponseValuesInnerToJSON,
  GetTimeSeriesAvgPrice200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAvgPrice200ResponseValuesInner";
import type { GetTimeSeriesAvgPrice200ResponseMeta } from "./GetTimeSeriesAvgPrice200ResponseMeta";
import {
  GetTimeSeriesAvgPrice200ResponseMetaFromJSON,
  GetTimeSeriesAvgPrice200ResponseMetaFromJSONTyped,
  GetTimeSeriesAvgPrice200ResponseMetaToJSON,
  GetTimeSeriesAvgPrice200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAvgPrice200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesAvgPrice200Response
 */
export interface GetTimeSeriesAvgPrice200Response {
  /**
   *
   * @type {GetTimeSeriesAvgPrice200ResponseMeta}
   * @memberof GetTimeSeriesAvgPrice200Response
   */
  meta?: GetTimeSeriesAvgPrice200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesAvgPrice200ResponseValuesInner>}
   * @memberof GetTimeSeriesAvgPrice200Response
   */
  values?: Array<GetTimeSeriesAvgPrice200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAvgPrice200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAvgPrice200Response interface.
 */
export function instanceOfGetTimeSeriesAvgPrice200Response(
  value: object,
): value is GetTimeSeriesAvgPrice200Response {
  return true;
}

export function GetTimeSeriesAvgPrice200ResponseFromJSON(
  json: any,
): GetTimeSeriesAvgPrice200Response {
  return GetTimeSeriesAvgPrice200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAvgPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAvgPrice200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAvgPrice200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAvgPrice200ResponseToJSON(
  json: any,
): GetTimeSeriesAvgPrice200Response {
  return GetTimeSeriesAvgPrice200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAvgPrice200ResponseToJSONTyped(
  value?: GetTimeSeriesAvgPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAvgPrice200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAvgPrice200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
