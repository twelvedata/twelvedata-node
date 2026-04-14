/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMaxIndex200ResponseMeta } from "./GetTimeSeriesMaxIndex200ResponseMeta";
import {
  GetTimeSeriesMaxIndex200ResponseMetaFromJSON,
  GetTimeSeriesMaxIndex200ResponseMetaFromJSONTyped,
  GetTimeSeriesMaxIndex200ResponseMetaToJSON,
  GetTimeSeriesMaxIndex200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMaxIndex200ResponseMeta";
import type { GetTimeSeriesMaxIndex200ResponseValuesInner } from "./GetTimeSeriesMaxIndex200ResponseValuesInner";
import {
  GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSON,
  GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMaxIndex200ResponseValuesInnerToJSON,
  GetTimeSeriesMaxIndex200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMaxIndex200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMaxIndex200Response
 */
export interface GetTimeSeriesMaxIndex200Response {
  /**
   *
   * @type {GetTimeSeriesMaxIndex200ResponseMeta}
   * @memberof GetTimeSeriesMaxIndex200Response
   */
  meta?: GetTimeSeriesMaxIndex200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMaxIndex200ResponseValuesInner>}
   * @memberof GetTimeSeriesMaxIndex200Response
   */
  values?: Array<GetTimeSeriesMaxIndex200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMaxIndex200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMaxIndex200Response interface.
 */
export function instanceOfGetTimeSeriesMaxIndex200Response(
  value: object,
): value is GetTimeSeriesMaxIndex200Response {
  return true;
}

export function GetTimeSeriesMaxIndex200ResponseFromJSON(
  json: any,
): GetTimeSeriesMaxIndex200Response {
  return GetTimeSeriesMaxIndex200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMaxIndex200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMaxIndex200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMaxIndex200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMaxIndex200ResponseToJSON(
  json: any,
): GetTimeSeriesMaxIndex200Response {
  return GetTimeSeriesMaxIndex200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMaxIndex200ResponseToJSONTyped(
  value?: GetTimeSeriesMaxIndex200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMaxIndex200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMaxIndex200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
