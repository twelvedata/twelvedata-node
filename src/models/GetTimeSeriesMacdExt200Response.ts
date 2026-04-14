/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacdExt200ResponseValuesInner } from "./GetTimeSeriesMacdExt200ResponseValuesInner";
import {
  GetTimeSeriesMacdExt200ResponseValuesInnerFromJSON,
  GetTimeSeriesMacdExt200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMacdExt200ResponseValuesInnerToJSON,
  GetTimeSeriesMacdExt200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMacdExt200ResponseValuesInner";
import type { GetTimeSeriesMacdExt200ResponseMeta } from "./GetTimeSeriesMacdExt200ResponseMeta";
import {
  GetTimeSeriesMacdExt200ResponseMetaFromJSON,
  GetTimeSeriesMacdExt200ResponseMetaFromJSONTyped,
  GetTimeSeriesMacdExt200ResponseMetaToJSON,
  GetTimeSeriesMacdExt200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMacdExt200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMacdExt200Response
 */
export interface GetTimeSeriesMacdExt200Response {
  /**
   *
   * @type {GetTimeSeriesMacdExt200ResponseMeta}
   * @memberof GetTimeSeriesMacdExt200Response
   */
  meta?: GetTimeSeriesMacdExt200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMacdExt200ResponseValuesInner>}
   * @memberof GetTimeSeriesMacdExt200Response
   */
  values?: Array<GetTimeSeriesMacdExt200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMacdExt200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacdExt200Response interface.
 */
export function instanceOfGetTimeSeriesMacdExt200Response(
  value: object,
): value is GetTimeSeriesMacdExt200Response {
  return true;
}

export function GetTimeSeriesMacdExt200ResponseFromJSON(
  json: any,
): GetTimeSeriesMacdExt200Response {
  return GetTimeSeriesMacdExt200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacdExt200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMacdExt200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMacdExt200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMacdExt200ResponseToJSON(
  json: any,
): GetTimeSeriesMacdExt200Response {
  return GetTimeSeriesMacdExt200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMacdExt200ResponseToJSONTyped(
  value?: GetTimeSeriesMacdExt200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMacdExt200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMacdExt200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
