/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesTema200ResponseMeta } from "./GetTimeSeriesTema200ResponseMeta";
import {
  GetTimeSeriesTema200ResponseMetaFromJSON,
  GetTimeSeriesTema200ResponseMetaFromJSONTyped,
  GetTimeSeriesTema200ResponseMetaToJSON,
  GetTimeSeriesTema200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesTema200ResponseMeta";
import type { GetTimeSeriesTema200ResponseValuesInner } from "./GetTimeSeriesTema200ResponseValuesInner";
import {
  GetTimeSeriesTema200ResponseValuesInnerFromJSON,
  GetTimeSeriesTema200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesTema200ResponseValuesInnerToJSON,
  GetTimeSeriesTema200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesTema200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesTema200Response
 */
export interface GetTimeSeriesTema200Response {
  /**
   *
   * @type {GetTimeSeriesTema200ResponseMeta}
   * @memberof GetTimeSeriesTema200Response
   */
  meta?: GetTimeSeriesTema200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesTema200ResponseValuesInner>}
   * @memberof GetTimeSeriesTema200Response
   */
  values?: Array<GetTimeSeriesTema200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesTema200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesTema200Response interface.
 */
export function instanceOfGetTimeSeriesTema200Response(
  value: object,
): value is GetTimeSeriesTema200Response {
  return true;
}

export function GetTimeSeriesTema200ResponseFromJSON(
  json: any,
): GetTimeSeriesTema200Response {
  return GetTimeSeriesTema200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesTema200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesTema200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesTema200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesTema200ResponseToJSON(
  json: any,
): GetTimeSeriesTema200Response {
  return GetTimeSeriesTema200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesTema200ResponseToJSONTyped(
  value?: GetTimeSeriesTema200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesTema200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesTema200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
