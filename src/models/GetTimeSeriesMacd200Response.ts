/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMacd200ResponseValuesInner } from "./GetTimeSeriesMacd200ResponseValuesInner";
import {
  GetTimeSeriesMacd200ResponseValuesInnerFromJSON,
  GetTimeSeriesMacd200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMacd200ResponseValuesInnerToJSON,
  GetTimeSeriesMacd200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMacd200ResponseValuesInner";
import type { GetTimeSeriesMacd200ResponseMeta } from "./GetTimeSeriesMacd200ResponseMeta";
import {
  GetTimeSeriesMacd200ResponseMetaFromJSON,
  GetTimeSeriesMacd200ResponseMetaFromJSONTyped,
  GetTimeSeriesMacd200ResponseMetaToJSON,
  GetTimeSeriesMacd200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMacd200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMacd200Response
 */
export interface GetTimeSeriesMacd200Response {
  /**
   *
   * @type {GetTimeSeriesMacd200ResponseMeta}
   * @memberof GetTimeSeriesMacd200Response
   */
  meta?: GetTimeSeriesMacd200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMacd200ResponseValuesInner>}
   * @memberof GetTimeSeriesMacd200Response
   */
  values?: Array<GetTimeSeriesMacd200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMacd200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMacd200Response interface.
 */
export function instanceOfGetTimeSeriesMacd200Response(
  value: object,
): value is GetTimeSeriesMacd200Response {
  return true;
}

export function GetTimeSeriesMacd200ResponseFromJSON(
  json: any,
): GetTimeSeriesMacd200Response {
  return GetTimeSeriesMacd200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMacd200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMacd200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMacd200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMacd200ResponseToJSON(
  json: any,
): GetTimeSeriesMacd200Response {
  return GetTimeSeriesMacd200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMacd200ResponseToJSONTyped(
  value?: GetTimeSeriesMacd200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMacd200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMacd200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
