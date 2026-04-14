/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetPriceTarget200ResponsePriceTarget } from "./GetPriceTarget200ResponsePriceTarget";
import {
  GetPriceTarget200ResponsePriceTargetFromJSON,
  GetPriceTarget200ResponsePriceTargetFromJSONTyped,
  GetPriceTarget200ResponsePriceTargetToJSON,
  GetPriceTarget200ResponsePriceTargetToJSONTyped,
} from "./GetPriceTarget200ResponsePriceTarget";
import type { GetPriceTarget200ResponseMeta } from "./GetPriceTarget200ResponseMeta";
import {
  GetPriceTarget200ResponseMetaFromJSON,
  GetPriceTarget200ResponseMetaFromJSONTyped,
  GetPriceTarget200ResponseMetaToJSON,
  GetPriceTarget200ResponseMetaToJSONTyped,
} from "./GetPriceTarget200ResponseMeta";

/**
 *
 * @export
 * @interface GetPriceTarget200Response
 */
export interface GetPriceTarget200Response {
  /**
   *
   * @type {GetPriceTarget200ResponseMeta}
   * @memberof GetPriceTarget200Response
   */
  meta?: GetPriceTarget200ResponseMeta;
  /**
   *
   * @type {GetPriceTarget200ResponsePriceTarget}
   * @memberof GetPriceTarget200Response
   */
  priceTarget?: GetPriceTarget200ResponsePriceTarget;
  /**
   * Response status
   * @type {string}
   * @memberof GetPriceTarget200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetPriceTarget200Response interface.
 */
export function instanceOfGetPriceTarget200Response(
  value: object,
): value is GetPriceTarget200Response {
  return true;
}

export function GetPriceTarget200ResponseFromJSON(
  json: any,
): GetPriceTarget200Response {
  return GetPriceTarget200ResponseFromJSONTyped(json, false);
}

export function GetPriceTarget200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetPriceTarget200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetPriceTarget200ResponseMetaFromJSON(json["meta"]),
    priceTarget:
      json["price_target"] == null
        ? undefined
        : GetPriceTarget200ResponsePriceTargetFromJSON(json["price_target"]),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetPriceTarget200ResponseToJSON(
  json: any,
): GetPriceTarget200Response {
  return GetPriceTarget200ResponseToJSONTyped(json, false);
}

export function GetPriceTarget200ResponseToJSONTyped(
  value?: GetPriceTarget200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetPriceTarget200ResponseMetaToJSON(value["meta"]),
    price_target: GetPriceTarget200ResponsePriceTargetToJSON(
      value["priceTarget"],
    ),
    status: value["status"],
  };
}
