/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStoch200ResponseMeta } from "./GetTimeSeriesStoch200ResponseMeta";
import {
  GetTimeSeriesStoch200ResponseMetaFromJSON,
  GetTimeSeriesStoch200ResponseMetaFromJSONTyped,
  GetTimeSeriesStoch200ResponseMetaToJSON,
  GetTimeSeriesStoch200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesStoch200ResponseMeta";
import type { GetTimeSeriesStoch200ResponseValuesInner } from "./GetTimeSeriesStoch200ResponseValuesInner";
import {
  GetTimeSeriesStoch200ResponseValuesInnerFromJSON,
  GetTimeSeriesStoch200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesStoch200ResponseValuesInnerToJSON,
  GetTimeSeriesStoch200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesStoch200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesStoch200Response
 */
export interface GetTimeSeriesStoch200Response {
  /**
   *
   * @type {GetTimeSeriesStoch200ResponseMeta}
   * @memberof GetTimeSeriesStoch200Response
   */
  meta?: GetTimeSeriesStoch200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesStoch200ResponseValuesInner>}
   * @memberof GetTimeSeriesStoch200Response
   */
  values?: Array<GetTimeSeriesStoch200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesStoch200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStoch200Response interface.
 */
export function instanceOfGetTimeSeriesStoch200Response(
  value: object,
): value is GetTimeSeriesStoch200Response {
  return true;
}

export function GetTimeSeriesStoch200ResponseFromJSON(
  json: any,
): GetTimeSeriesStoch200Response {
  return GetTimeSeriesStoch200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStoch200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesStoch200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesStoch200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesStoch200ResponseToJSON(
  json: any,
): GetTimeSeriesStoch200Response {
  return GetTimeSeriesStoch200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesStoch200ResponseToJSONTyped(
  value?: GetTimeSeriesStoch200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesStoch200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesStoch200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
