/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetTimeSeriesCeil200ResponseMeta } from "./GetTimeSeriesCeil200ResponseMeta";
import {
  GetTimeSeriesCeil200ResponseMetaFromJSON,
  GetTimeSeriesCeil200ResponseMetaFromJSONTyped,
  GetTimeSeriesCeil200ResponseMetaToJSON,
  GetTimeSeriesCeil200ResponseMetaToJSONTyped,
} from "./GetTimeSeriesCeil200ResponseMeta";
import type { GetTimeSeriesCeil200ResponseValuesInner } from "./GetTimeSeriesCeil200ResponseValuesInner";
import {
  GetTimeSeriesCeil200ResponseValuesInnerFromJSON,
  GetTimeSeriesCeil200ResponseValuesInnerFromJSONTyped,
  GetTimeSeriesCeil200ResponseValuesInnerToJSON,
  GetTimeSeriesCeil200ResponseValuesInnerToJSONTyped,
} from "./GetTimeSeriesCeil200ResponseValuesInner";

/**
 *
 * @export
 * @interface GetTimeSeriesCeil200Response
 */
export interface GetTimeSeriesCeil200Response {
  /**
   *
   * @type {GetTimeSeriesCeil200ResponseMeta}
   * @memberof GetTimeSeriesCeil200Response
   */
  meta?: GetTimeSeriesCeil200ResponseMeta;
  /**
   * Array of time series data points
   * @type {Array<GetTimeSeriesCeil200ResponseValuesInner>}
   * @memberof GetTimeSeriesCeil200Response
   */
  values?: Array<GetTimeSeriesCeil200ResponseValuesInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetTimeSeriesCeil200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesCeil200Response interface.
 */
export function instanceOfGetTimeSeriesCeil200Response(
  value: object,
): value is GetTimeSeriesCeil200Response {
  return true;
}

export function GetTimeSeriesCeil200ResponseFromJSON(
  json: any,
): GetTimeSeriesCeil200Response {
  return GetTimeSeriesCeil200ResponseFromJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesCeil200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetTimeSeriesCeil200ResponseMetaFromJSON(json["meta"]),
    values:
      json["values"] == null
        ? undefined
        : (json["values"] as Array<any>).map(
            GetTimeSeriesCeil200ResponseValuesInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetTimeSeriesCeil200ResponseToJSON(
  json: any,
): GetTimeSeriesCeil200Response {
  return GetTimeSeriesCeil200ResponseToJSONTyped(json, false);
}

export function GetTimeSeriesCeil200ResponseToJSONTyped(
  value?: GetTimeSeriesCeil200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetTimeSeriesCeil200ResponseMetaToJSON(value["meta"]),
    values:
      value["values"] == null
        ? undefined
        : (value["values"] as Array<any>).map(
            GetTimeSeriesCeil200ResponseValuesInnerToJSON,
          ),
    status: value["status"],
  };
}
