/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRocr200ResponseMeta } from "./GetTimeSeriesRocr200ResponseMeta";
import {
  GetTimeSeriesRocr200ResponseMetaFromJSON,
  GetTimeSeriesRocr200ResponseMetaFromJSONTyped,
  GetTimeSeriesRocr200ResponseMetaToJSON,
  GetTimeSeriesRocr200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRocr200ResponseMeta";
import type { GetTimeSeriesRocr200ResponseValuesInner } from "./GetTimeSeriesRocr200ResponseValuesInner";
import {
  GetTimeSeriesRocr200ResponseValuesInnerFromJSON,
  GetTimeSeriesRocr200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRocr200ResponseValuesInnerToJSON,
  GetTimeSeriesRocr200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRocr200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesRocr200Response
 */
export interface GetTimeSeriesRocr200Response {
  /**
   *
   * @type {GetTimeSeriesRocr200ResponseMeta}
   * @memberof GetTimeSeriesRocr200Response
   */
  meta?: GetTimeSeriesRocr200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRocr200ResponseValuesInner>}
   * @memberof GetTimeSeriesRocr200Response
   */
  values?: Array<GetTimeSeriesRocr200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRocr200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocr200Response interface.
 */
export function instanceOfGetTimeSeriesRocr200Response(
  value: object,
): value is GetTimeSeriesRocr200Response {
  return true;
}

export function GetTimeSeriesRocr200ResponseFromJSON(
  json: any,
): GetTimeSeriesRocr200Response {
  return GetTimeSeriesRocr200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocr200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesRocr200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesRocr200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesRocr200ResponseToJSON(
  json: any,
): GetTimeSeriesRocr200Response {
  return GetTimeSeriesRocr200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRocr200ResponseToJSONTyped(
  value?: GetTimeSeriesRocr200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRocr200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesRocr200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
