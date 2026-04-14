/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesAd200ResponseValuesInner } from "./GetTimeSeriesAd200ResponseValuesInner";
import {
  GetTimeSeriesAd200ResponseValuesInnerFromJSON,
  GetTimeSeriesAd200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesAd200ResponseValuesInnerToJSON,
  GetTimeSeriesAd200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesAd200ResponseValuesInner";
import type { GetTimeSeriesAd200ResponseMeta } from "./GetTimeSeriesAd200ResponseMeta";
import {
  GetTimeSeriesAd200ResponseMetaFromJSON,
  GetTimeSeriesAd200ResponseMetaFromJSONTyped,
  GetTimeSeriesAd200ResponseMetaToJSON,
  GetTimeSeriesAd200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesAd200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesAd200Response
 */
export interface GetTimeSeriesAd200Response {
  /**
   *
   * @type {GetTimeSeriesAd200ResponseMeta}
   * @memberof GetTimeSeriesAd200Response
   */
  meta?: GetTimeSeriesAd200ResponseMeta;
  /**
   *
   * @type {Array<GetTimeSeriesAd200ResponseValuesInner>}
   * @memberof GetTimeSeriesAd200Response
   */
  values?: Array<GetTimeSeriesAd200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesAd200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesAd200Response interface.
 */
export function instanceOfGetTimeSeriesAd200Response(
  value: object,
): value is GetTimeSeriesAd200Response {
  return true;
}

export function GetTimeSeriesAd200ResponseFromJSON(
  json: any,
): GetTimeSeriesAd200Response {
  return GetTimeSeriesAd200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesAd200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesAd200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesAd200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesAd200ResponseToJSON(
  json: any,
): GetTimeSeriesAd200Response {
  return GetTimeSeriesAd200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesAd200ResponseToJSONTyped(
  value?: GetTimeSeriesAd200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesAd200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesAd200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
