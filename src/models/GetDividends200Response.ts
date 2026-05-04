/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetDividends200ResponseDividendsInner } from "./GetDividends200ResponseDividendsInner";
import {
  GetDividends200ResponseDividendsInnerFromJSON,
  GetDividends200ResponseDividendsInnerFromJSONTyped,
  GetDividends200ResponseDividendsInnerToJSON,
  GetDividends200ResponseDividendsInnerToJSONTyped,
} from "./GetDividends200ResponseDividendsInner";
import type { GetDividends200ResponseMeta } from "./GetDividends200ResponseMeta";
import {
  GetDividends200ResponseMetaFromJSON,
  GetDividends200ResponseMetaFromJSONTyped,
  GetDividends200ResponseMetaToJSON,
  GetDividends200ResponseMetaToJSONTyped,
} from "./GetDividends200ResponseMeta";

/**
 *
 * @export
 * @interface GetDividends200Response
 */
export interface GetDividends200Response {
  /**
   *
   * @type {GetDividends200ResponseMeta}
   * @memberof GetDividends200Response
   */
  meta: GetDividends200ResponseMeta;
  /**
   * List of dividends
   * @type {Array<GetDividends200ResponseDividendsInner>}
   * @memberof GetDividends200Response
   */
  dividends: Array<GetDividends200ResponseDividendsInner>;
}

/**
 * Check if a given object implements the GetDividends200Response interface.
 */
export function instanceOfGetDividends200Response(
  value: object,
): value is GetDividends200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("dividends" in value) || value["dividends"] === undefined) return false;
  return true;
}

export function GetDividends200ResponseFromJSON(
  json: any,
): GetDividends200Response {
  return GetDividends200ResponseFromJSONTyped(json, false);
}

export function GetDividends200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetDividends200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetDividends200ResponseMetaFromJSON(json["meta"]),
    dividends: (json["dividends"] as Array<any>).map(
      GetDividends200ResponseDividendsInnerFromJSON,
    ),
  };
}

export function GetDividends200ResponseToJSON(
  json: any,
): GetDividends200Response {
  return GetDividends200ResponseToJSONTyped(json, false);
}

export function GetDividends200ResponseToJSONTyped(
  value?: GetDividends200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetDividends200ResponseMetaToJSON(value["meta"]),
    dividends: (value["dividends"] as Array<any>).map(
      GetDividends200ResponseDividendsInnerToJSON,
    ),
  };
}
