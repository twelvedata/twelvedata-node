/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMidPrice200ResponseMeta } from "./GetTimeSeriesMidPrice200ResponseMeta";
import {
  GetTimeSeriesMidPrice200ResponseMetaFromJSON,
  GetTimeSeriesMidPrice200ResponseMetaFromJSONTyped,
  GetTimeSeriesMidPrice200ResponseMetaToJSON,
  GetTimeSeriesMidPrice200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMidPrice200ResponseMeta";
import type { GetTimeSeriesMidPrice200ResponseValuesInner } from "./GetTimeSeriesMidPrice200ResponseValuesInner";
import {
  GetTimeSeriesMidPrice200ResponseValuesInnerFromJSON,
  GetTimeSeriesMidPrice200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMidPrice200ResponseValuesInnerToJSON,
  GetTimeSeriesMidPrice200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMidPrice200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesMidPrice200Response
 */
export interface GetTimeSeriesMidPrice200Response {
  /**
   *
   * @type {GetTimeSeriesMidPrice200ResponseMeta}
   * @memberof GetTimeSeriesMidPrice200Response
   */
  meta?: GetTimeSeriesMidPrice200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMidPrice200ResponseValuesInner>}
   * @memberof GetTimeSeriesMidPrice200Response
   */
  values?: Array<GetTimeSeriesMidPrice200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMidPrice200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMidPrice200Response interface.
 */
export function instanceOfGetTimeSeriesMidPrice200Response(
  value: object,
): value is GetTimeSeriesMidPrice200Response {
  return true;
}

export function GetTimeSeriesMidPrice200ResponseFromJSON(
  json: any,
): GetTimeSeriesMidPrice200Response {
  return GetTimeSeriesMidPrice200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMidPrice200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesMidPrice200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesMidPrice200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesMidPrice200ResponseToJSON(
  json: any,
): GetTimeSeriesMidPrice200Response {
  return GetTimeSeriesMidPrice200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMidPrice200ResponseToJSONTyped(
  value?: GetTimeSeriesMidPrice200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMidPrice200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesMidPrice200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
