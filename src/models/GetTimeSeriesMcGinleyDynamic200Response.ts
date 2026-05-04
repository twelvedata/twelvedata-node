/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesMcGinleyDynamic200ResponseValuesInner } from "./GetTimeSeriesMcGinleyDynamic200ResponseValuesInner";
import {
  GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesMcGinleyDynamic200ResponseValuesInner";
import type { GetTimeSeriesMcGinleyDynamic200ResponseMeta } from "./GetTimeSeriesMcGinleyDynamic200ResponseMeta";
import {
  GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSONTyped,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesMcGinleyDynamic200ResponseMeta";

/**
 *
 * @export
 * @interface GetTimeSeriesMcGinleyDynamic200Response
 */
export interface GetTimeSeriesMcGinleyDynamic200Response {
  /**
   *
   * @type {GetTimeSeriesMcGinleyDynamic200ResponseMeta}
   * @memberof GetTimeSeriesMcGinleyDynamic200Response
   */
  meta: GetTimeSeriesMcGinleyDynamic200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesMcGinleyDynamic200ResponseValuesInner>}
   * @memberof GetTimeSeriesMcGinleyDynamic200Response
   */
  values: Array<GetTimeSeriesMcGinleyDynamic200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesMcGinleyDynamic200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMcGinleyDynamic200Response interface.
 */
export function instanceOfGetTimeSeriesMcGinleyDynamic200Response(
  value: object,
): value is GetTimeSeriesMcGinleyDynamic200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("values" in value) || value["values"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetTimeSeriesMcGinleyDynamic200ResponseFromJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200Response {
  return GetTimeSeriesMcGinleyDynamic200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesMcGinleyDynamic200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMcGinleyDynamic200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetTimeSeriesMcGinleyDynamic200ResponseMetaFromJSON(json["meta"]),
    values: (json["values"] as Array<any>).map(
      GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerFromJSON,
    ),
    status: json["status"],
  };
}

export function GetTimeSeriesMcGinleyDynamic200ResponseToJSON(
  json: any,
): GetTimeSeriesMcGinleyDynamic200Response {
  return GetTimeSeriesMcGinleyDynamic200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesMcGinleyDynamic200ResponseToJSONTyped(
  value?: GetTimeSeriesMcGinleyDynamic200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesMcGinleyDynamic200ResponseMetaToJSON(value["meta"]),
    values: (value["values"] as Array<any>).map(
      GetTimeSeriesMcGinleyDynamic200ResponseValuesInnerToJSON,
    ),
    status: value["status"],
  };
}
