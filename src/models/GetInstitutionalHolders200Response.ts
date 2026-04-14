/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { InstitutionalHolderItem } from "./InstitutionalHolderItem";
import {
  InstitutionalHolderItemFromJSON,
  InstitutionalHolderItemFromJSONTyped,
  InstitutionalHolderItemToJSON,
  InstitutionalHolderItemToJSONTyped,
} from "./InstitutionalHolderItem";
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
 * @interface GetInstitutionalHolders200Response
 */
export interface GetInstitutionalHolders200Response {
  /**
   *
   * @type {GetFundHolders200ResponseMeta}
   * @memberof GetInstitutionalHolders200Response
   */
  meta?: GetFundHolders200ResponseMeta;
  /**
   * List of institutional holders for the financial instrument
   * @type {Array<InstitutionalHolderItem>}
   * @memberof GetInstitutionalHolders200Response
   */
  institutionalHolders?: Array<InstitutionalHolderItem>;
}

/**
 * Check if a given object implements the GetInstitutionalHolders200Response interface.
 */
export function instanceOfGetInstitutionalHolders200Response(
  value: object,
): value is GetInstitutionalHolders200Response {
  return true;
}

export function GetInstitutionalHolders200ResponseFromJSON(
  json: any,
): GetInstitutionalHolders200Response {
  return GetInstitutionalHolders200ResponseFromJSONTyped(json, false);
}

export function GetInstitutionalHolders200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetInstitutionalHolders200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetFundHolders200ResponseMetaFromJSON(json["meta"]),
    institutionalHolders:
      json["institutional_holders"] == null
        ? undefined
        : (json["institutional_holders"] as Array<any>).map(
            InstitutionalHolderItemFromJSON,
          ),
  };
}

export function GetInstitutionalHolders200ResponseToJSON(
  json: any,
): GetInstitutionalHolders200Response {
  return GetInstitutionalHolders200ResponseToJSONTyped(json, false);
}

export function GetInstitutionalHolders200ResponseToJSONTyped(
  value?: GetInstitutionalHolders200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetFundHolders200ResponseMetaToJSON(value["meta"]),
    institutional_holders:
      value["institutionalHolders"] == null
        ? undefined
        : (value["institutionalHolders"] as Array<any>).map(
            InstitutionalHolderItemToJSON,
          ),
  };
}
