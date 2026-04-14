/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesSar200ResponseValuesInner } from "./GetTimeSeriesSar200ResponseValuesInner";
import {
  GetTimeSeriesSar200ResponseValuesInnerFromJSON,
  GetTimeSeriesSar200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesSar200ResponseValuesInnerToJSON,
  GetTimeSeriesSar200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesSar200ResponseValuesInner";
import type { GetTimeSeriesSar200ResponseMeta } from "./GetTimeSeriesSar200ResponseMeta";
import {
  GetTimeSeriesSar200ResponseMetaFromJSON,
  GetTimeSeriesSar200ResponseMetaFromJSONTyped,
  GetTimeSeriesSar200ResponseMetaToJSON,
  GetTimeSeriesSar200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesSar200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesSar200Response
 */
export interface GetTimeSeriesSar200Response {
  /**
   *
   * @type {GetTimeSeriesSar200ResponseMeta}
   * @memberof GetTimeSeriesSar200Response
   */
  meta?: GetTimeSeriesSar200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesSar200ResponseValuesInner>}
   * @memberof GetTimeSeriesSar200Response
   */
  values?: Array<GetTimeSeriesSar200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesSar200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesSar200Response interface.
 */
export function instanceOfGetTimeSeriesSar200Response(
  value: object,
): value is GetTimeSeriesSar200Response {
  return true;
}

export function GetTimeSeriesSar200ResponseFromJSON(
  json: any,
): GetTimeSeriesSar200Response {
  return GetTimeSeriesSar200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesSar200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesSar200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesSar200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesSar200ResponseToJSON(
  json: any,
): GetTimeSeriesSar200Response {
  return GetTimeSeriesSar200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesSar200ResponseToJSONTyped(
  value?: GetTimeSeriesSar200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesSar200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesSar200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
