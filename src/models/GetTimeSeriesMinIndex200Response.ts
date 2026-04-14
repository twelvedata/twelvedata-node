/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinIndex200ResponseMeta } from "./GetTimeSeriesMinIndex200ResponseMeta";
import {
  GetTimeSeriesMinIndex200ResponseMetaFromJSON,
  GetTimeSeriesMinIndex200ResponseMetaFromJSONTyped,
  GetTimeSeriesMinIndex200ResponseMetaToJSON,
  GetTimeSeriesMinIndex200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMinIndex200ResponseMeta";
import type { GetTimeSeriesMinIndex200ResponseValuesInner } from "./GetTimeSeriesMinIndex200ResponseValuesInner";
import {
  GetTimeSeriesMinIndex200ResponseValuesInnerFromJSON,
  GetTimeSeriesMinIndex200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMinIndex200ResponseValuesInnerToJSON,
  GetTimeSeriesMinIndex200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMinIndex200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMinIndex200Response
 */
export interface GetTimeSeriesMinIndex200Response {
  /**
   *
   * @type {GetTimeSeriesMinIndex200ResponseMeta}
   * @memberof GetTimeSeriesMinIndex200Response
   */
  meta?: GetTimeSeriesMinIndex200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMinIndex200ResponseValuesInner>}
   * @memberof GetTimeSeriesMinIndex200Response
   */
  values?: Array<GetTimeSeriesMinIndex200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMinIndex200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinIndex200Response interface.
 */
export function instanceOfGetTimeSeriesMinIndex200Response(
  value: object,
): value is GetTimeSeriesMinIndex200Response {
  return true;
}

export function GetTimeSeriesMinIndex200ResponseFromJSON(
  json: any,
): GetTimeSeriesMinIndex200Response {
  return GetTimeSeriesMinIndex200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinIndex200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMinIndex200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMinIndex200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMinIndex200ResponseToJSON(
  json: any,
): GetTimeSeriesMinIndex200Response {
  return GetTimeSeriesMinIndex200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMinIndex200ResponseToJSONTyped(
  value?: GetTimeSeriesMinIndex200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMinIndex200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMinIndex200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
