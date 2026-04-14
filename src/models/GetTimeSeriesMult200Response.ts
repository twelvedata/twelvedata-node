/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMult200ResponseMeta } from "./GetTimeSeriesMult200ResponseMeta";
import {
  GetTimeSeriesMult200ResponseMetaFromJSON,
  GetTimeSeriesMult200ResponseMetaFromJSONTyped,
  GetTimeSeriesMult200ResponseMetaToJSON,
  GetTimeSeriesMult200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMult200ResponseMeta";
import type { GetTimeSeriesMult200ResponseValuesInner } from "./GetTimeSeriesMult200ResponseValuesInner";
import {
  GetTimeSeriesMult200ResponseValuesInnerFromJSON,
  GetTimeSeriesMult200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMult200ResponseValuesInnerToJSON,
  GetTimeSeriesMult200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMult200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMult200Response
 */
export interface GetTimeSeriesMult200Response {
  /**
   *
   * @type {GetTimeSeriesMult200ResponseMeta}
   * @memberof GetTimeSeriesMult200Response
   */
  meta?: GetTimeSeriesMult200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMult200ResponseValuesInner>}
   * @memberof GetTimeSeriesMult200Response
   */
  values?: Array<GetTimeSeriesMult200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMult200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMult200Response interface.
 */
export function instanceOfGetTimeSeriesMult200Response(
  value: object,
): value is GetTimeSeriesMult200Response {
  return true;
}

export function GetTimeSeriesMult200ResponseFromJSON(
  json: any,
): GetTimeSeriesMult200Response {
  return GetTimeSeriesMult200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMult200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMult200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMult200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMult200ResponseToJSON(
  json: any,
): GetTimeSeriesMult200Response {
  return GetTimeSeriesMult200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMult200ResponseToJSONTyped(
  value?: GetTimeSeriesMult200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMult200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMult200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
