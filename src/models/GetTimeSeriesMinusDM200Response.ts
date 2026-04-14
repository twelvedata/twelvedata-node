/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMinusDM200ResponseValuesInner } from "./GetTimeSeriesMinusDM200ResponseValuesInner";
import {
  GetTimeSeriesMinusDM200ResponseValuesInnerFromJSON,
  GetTimeSeriesMinusDM200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMinusDM200ResponseValuesInnerToJSON,
  GetTimeSeriesMinusDM200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMinusDM200ResponseValuesInner";
import type { GetTimeSeriesMinusDM200ResponseMeta } from "./GetTimeSeriesMinusDM200ResponseMeta";
import {
  GetTimeSeriesMinusDM200ResponseMetaFromJSON,
  GetTimeSeriesMinusDM200ResponseMetaFromJSONTyped,
  GetTimeSeriesMinusDM200ResponseMetaToJSON,
  GetTimeSeriesMinusDM200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMinusDM200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMinusDM200Response
 */
export interface GetTimeSeriesMinusDM200Response {
  /**
   *
   * @type {GetTimeSeriesMinusDM200ResponseMeta}
   * @memberof GetTimeSeriesMinusDM200Response
   */
  meta?: GetTimeSeriesMinusDM200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMinusDM200ResponseValuesInner>}
   * @memberof GetTimeSeriesMinusDM200Response
   */
  values?: Array<GetTimeSeriesMinusDM200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMinusDM200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMinusDM200Response interface.
 */
export function instanceOfGetTimeSeriesMinusDM200Response(
  value: object,
): value is GetTimeSeriesMinusDM200Response {
  return true;
}

export function GetTimeSeriesMinusDM200ResponseFromJSON(
  json: any,
): GetTimeSeriesMinusDM200Response {
  return GetTimeSeriesMinusDM200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMinusDM200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMinusDM200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMinusDM200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMinusDM200ResponseToJSON(
  json: any,
): GetTimeSeriesMinusDM200Response {
  return GetTimeSeriesMinusDM200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMinusDM200ResponseToJSONTyped(
  value?: GetTimeSeriesMinusDM200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMinusDM200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMinusDM200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
