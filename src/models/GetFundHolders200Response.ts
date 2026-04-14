/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { FundHolderItem } from "./FundHolderItem";
import {
  FundHolderItemFromJSON,
  FundHolderItemFromJSONTyped,
  FundHolderItemToJSON,
  FundHolderItemToJSONTyped,
} from "./FundHolderItem";
import type { GetFundHolders200ResponseMeta } from "./GetFundHolders200ResponseMeta";
import {
  GetFundHolders200ResponseMetaFromJSON,
  GetFundHolders200ResponseMetaFromJSONTyped,
  GetFundHolders200ResponseMetaToJSON,
  GetFundHolders200ResponseMetaToJSONTyped,
} from "./GetFundHolders200ResponseMeta";

/**
 *
 * @export
 * @interface GetFundHolders200Response
 */
export interface GetFundHolders200Response {
  /**
   *
   * @type {GetFundHolders200ResponseMeta}
   * @memberof GetFundHolders200Response
   */
  meta?: GetFundHolders200ResponseMeta;
  /**
   * List of fund holders for the financial instrument
   * @type {Array<FundHolderItem>}
   * @memberof GetFundHolders200Response
   */
  fundHolders?: Array<FundHolderItem>;
}

/**
 * Check if a given object implements the GetFundHolders200Response interface.
 */
export function instanceOfGetFundHolders200Response(
  value: object,
): value is GetFundHolders200Response {
  return true;
}

export function GetFundHolders200ResponseFromJSON(
  json: any,
): GetFundHolders200Response {
  return GetFundHolders200ResponseFromJSONTyped(json, false);
}

export function GetFundHolders200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetFundHolders200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetFundHolders200ResponseMetaFromJSON(json["meta"]),
    fundHolders:
      json["fund_holders"] == null
        ? undefined
        : (json["fund_holders"] as Array<any>).map(FundHolderItemFromJSON),
  };
}

export function GetFundHolders200ResponseToJSON(
  json: any,
): GetFundHolders200Response {
  return GetFundHolders200ResponseToJSONTyped(json, false);
}

export function GetFundHolders200ResponseToJSONTyped(
  value?: GetFundHolders200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetFundHolders200ResponseMetaToJSON(value["meta"]),
    fund_holders:
      value["fundHolders"] == null
        ? undefined
        : (value["fundHolders"] as Array<any>).map(FundHolderItemToJSON),
  };
}
