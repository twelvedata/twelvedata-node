/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesFloor200ResponseValuesInner } from "./GetTimeSeriesFloor200ResponseValuesInner";
import {
  GetTimeSeriesFloor200ResponseValuesInnerFromJSON,
  GetTimeSeriesFloor200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesFloor200ResponseValuesInnerToJSON,
  GetTimeSeriesFloor200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesFloor200ResponseValuesInner";
import type { GetTimeSeriesFloor200ResponseMeta } from "./GetTimeSeriesFloor200ResponseMeta";
import {
  GetTimeSeriesFloor200ResponseMetaFromJSON,
  GetTimeSeriesFloor200ResponseMetaFromJSONTyped,
  GetTimeSeriesFloor200ResponseMetaToJSON,
  GetTimeSeriesFloor200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesFloor200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesFloor200Response
 */
export interface GetTimeSeriesFloor200Response {
  /**
   *
   * @type {GetTimeSeriesFloor200ResponseMeta}
   * @memberof GetTimeSeriesFloor200Response
   */
  meta?: GetTimeSeriesFloor200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesFloor200ResponseValuesInner>}
   * @memberof GetTimeSeriesFloor200Response
   */
  values?: Array<GetTimeSeriesFloor200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesFloor200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesFloor200Response interface.
 */
export function instanceOfGetTimeSeriesFloor200Response(
  value: object,
): value is GetTimeSeriesFloor200Response {
  return true;
}

export function GetTimeSeriesFloor200ResponseFromJSON(
  json: any,
): GetTimeSeriesFloor200Response {
  return GetTimeSeriesFloor200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesFloor200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesFloor200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesFloor200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesFloor200ResponseToJSON(
  json: any,
): GetTimeSeriesFloor200Response {
  return GetTimeSeriesFloor200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesFloor200ResponseToJSONTyped(
  value?: GetTimeSeriesFloor200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesFloor200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesFloor200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
