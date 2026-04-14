/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRoc200ResponseMeta } from "./GetTimeSeriesRoc200ResponseMeta";
import {
  GetTimeSeriesRoc200ResponseMetaFromJSON,
  GetTimeSeriesRoc200ResponseMetaFromJSONTyped,
  GetTimeSeriesRoc200ResponseMetaToJSON,
  GetTimeSeriesRoc200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRoc200ResponseMeta";
import type { GetTimeSeriesRoc200ResponseValuesInner } from "./GetTimeSeriesRoc200ResponseValuesInner";
import {
  GetTimeSeriesRoc200ResponseValuesInnerFromJSON,
  GetTimeSeriesRoc200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRoc200ResponseValuesInnerToJSON,
  GetTimeSeriesRoc200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRoc200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesRoc200Response
 */
export interface GetTimeSeriesRoc200Response {
  /**
   *
   * @type {GetTimeSeriesRoc200ResponseMeta}
   * @memberof GetTimeSeriesRoc200Response
   */
  meta?: GetTimeSeriesRoc200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRoc200ResponseValuesInner>}
   * @memberof GetTimeSeriesRoc200Response
   */
  values?: Array<GetTimeSeriesRoc200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRoc200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRoc200Response interface.
 */
export function instanceOfGetTimeSeriesRoc200Response(
  value: object,
): value is GetTimeSeriesRoc200Response {
  return true;
}

export function GetTimeSeriesRoc200ResponseFromJSON(
  json: any,
): GetTimeSeriesRoc200Response {
  return GetTimeSeriesRoc200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRoc200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesRoc200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesRoc200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesRoc200ResponseToJSON(
  json: any,
): GetTimeSeriesRoc200Response {
  return GetTimeSeriesRoc200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRoc200ResponseToJSONTyped(
  value?: GetTimeSeriesRoc200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRoc200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesRoc200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
