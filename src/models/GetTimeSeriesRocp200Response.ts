/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesRocp200ResponseMeta } from "./GetTimeSeriesRocp200ResponseMeta";
import {
  GetTimeSeriesRocp200ResponseMetaFromJSON,
  GetTimeSeriesRocp200ResponseMetaFromJSONTyped,
  GetTimeSeriesRocp200ResponseMetaToJSON,
  GetTimeSeriesRocp200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesRocp200ResponseMeta";
import type { GetTimeSeriesRocp200ResponseValuesInner } from "./GetTimeSeriesRocp200ResponseValuesInner";
import {
  GetTimeSeriesRocp200ResponseValuesInnerFromJSON,
  GetTimeSeriesRocp200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesRocp200ResponseValuesInnerToJSON,
  GetTimeSeriesRocp200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesRocp200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesRocp200Response
 */
export interface GetTimeSeriesRocp200Response {
  /**
   *
   * @type {GetTimeSeriesRocp200ResponseMeta}
   * @memberof GetTimeSeriesRocp200Response
   */
  meta?: GetTimeSeriesRocp200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesRocp200ResponseValuesInner>}
   * @memberof GetTimeSeriesRocp200Response
   */
  values?: Array<GetTimeSeriesRocp200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesRocp200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesRocp200Response interface.
 */
export function instanceOfGetTimeSeriesRocp200Response(
  value: object,
): value is GetTimeSeriesRocp200Response {
  return true;
}

export function GetTimeSeriesRocp200ResponseFromJSON(
  json: any,
): GetTimeSeriesRocp200Response {
  return GetTimeSeriesRocp200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesRocp200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesRocp200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesRocp200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesRocp200ResponseToJSON(
  json: any,
): GetTimeSeriesRocp200Response {
  return GetTimeSeriesRocp200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesRocp200ResponseToJSONTyped(
  value?: GetTimeSeriesRocp200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesRocp200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesRocp200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
