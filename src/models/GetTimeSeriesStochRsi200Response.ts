/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesStochRsi200ResponseMeta } from "./GetTimeSeriesStochRsi200ResponseMeta";
import {
  GetTimeSeriesStochRsi200ResponseMetaFromJSON,
  GetTimeSeriesStochRsi200ResponseMetaFromJSONTyped,
  GetTimeSeriesStochRsi200ResponseMetaToJSON,
  GetTimeSeriesStochRsi200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesStochRsi200ResponseMeta";
import type { GetTimeSeriesStochRsi200ResponseValuesInner } from "./GetTimeSeriesStochRsi200ResponseValuesInner";
import {
  GetTimeSeriesStochRsi200ResponseValuesInnerFromJSON,
  GetTimeSeriesStochRsi200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesStochRsi200ResponseValuesInnerToJSON,
  GetTimeSeriesStochRsi200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesStochRsi200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesStochRsi200Response
 */
export interface GetTimeSeriesStochRsi200Response {
  /**
   *
   * @type {GetTimeSeriesStochRsi200ResponseMeta}
   * @memberof GetTimeSeriesStochRsi200Response
   */
  meta?: GetTimeSeriesStochRsi200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesStochRsi200ResponseValuesInner>}
   * @memberof GetTimeSeriesStochRsi200Response
   */
  values?: Array<GetTimeSeriesStochRsi200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesStochRsi200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesStochRsi200Response interface.
 */
export function instanceOfGetTimeSeriesStochRsi200Response(
  value: object,
): value is GetTimeSeriesStochRsi200Response {
  return true;
}

export function GetTimeSeriesStochRsi200ResponseFromJSON(
  json: any,
): GetTimeSeriesStochRsi200Response {
  return GetTimeSeriesStochRsi200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesStochRsi200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesStochRsi200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesStochRsi200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesStochRsi200ResponseToJSON(
  json: any,
): GetTimeSeriesStochRsi200Response {
  return GetTimeSeriesStochRsi200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesStochRsi200ResponseToJSONTyped(
  value?: GetTimeSeriesStochRsi200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesStochRsi200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesStochRsi200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
