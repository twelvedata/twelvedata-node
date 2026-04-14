/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoCurrentAssets } from "./AssetsInfoCurrentAssets";
import {
  AssetsInfoCurrentAssetsFromJSON,
  AssetsInfoCurrentAssetsFromJSONTyped,
  AssetsInfoCurrentAssetsToJSON,
  AssetsInfoCurrentAssetsToJSONTyped,
} from "./AssetsInfoCurrentAssets";
import type { AssetsInfoNonCurrentAssets } from "./AssetsInfoNonCurrentAssets";
import {
  AssetsInfoNonCurrentAssetsFromJSON,
  AssetsInfoNonCurrentAssetsFromJSONTyped,
  AssetsInfoNonCurrentAssetsToJSON,
  AssetsInfoNonCurrentAssetsToJSONTyped,
} from "./AssetsInfoNonCurrentAssets";
import type { AssetsInfoLiabilities } from "./AssetsInfoLiabilities";
import {
  AssetsInfoLiabilitiesFromJSON,
  AssetsInfoLiabilitiesFromJSONTyped,
  AssetsInfoLiabilitiesToJSON,
  AssetsInfoLiabilitiesToJSONTyped,
} from "./AssetsInfoLiabilities";

/**
 * AssetsInfo represents assets information in the balance sheet
 * @export
 * @interface AssetsInfo
 */
export interface AssetsInfo {
  /**
   * Total assets
   * @type {number}
   * @memberof AssetsInfo
   */
  totalAssets?: number;
  /**
   *
   * @type {AssetsInfoCurrentAssets}
   * @memberof AssetsInfo
   */
  currentAssets?: AssetsInfoCurrentAssets;
  /**
   *
   * @type {AssetsInfoNonCurrentAssets}
   * @memberof AssetsInfo
   */
  nonCurrentAssets?: AssetsInfoNonCurrentAssets;
  /**
   *
   * @type {AssetsInfoLiabilities}
   * @memberof AssetsInfo
   */
  liabilities?: AssetsInfoLiabilities;
}

/**
 * Check if a given object implements the AssetsInfo interface.
 */
export function instanceOfAssetsInfo(value: object): value is AssetsInfo {
  return true;
}

export function AssetsInfoFromJSON(json: any): AssetsInfo {
  return AssetsInfoFromJSONTyped(json, false);
}

export function AssetsInfoFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfo {
  if (json == null) {
    return json;
  }
  return {
    totalAssets:
      json["total_assets"] == null ? undefined : json["total_assets"],
    currentAssets:
      json["current_assets"] == null
        ? undefined
        : AssetsInfoCurrentAssetsFromJSON(json["current_assets"]),
    nonCurrentAssets:
      json["non_current_assets"] == null
        ? undefined
        : AssetsInfoNonCurrentAssetsFromJSON(json["non_current_assets"]),
    liabilities:
      json["liabilities"] == null
        ? undefined
        : AssetsInfoLiabilitiesFromJSON(json["liabilities"]),
  };
}

export function AssetsInfoToJSON(json: any): AssetsInfo {
  return AssetsInfoToJSONTyped(json, false);
}

export function AssetsInfoToJSONTyped(
  value?: AssetsInfo | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_assets: value["totalAssets"],
    current_assets: AssetsInfoCurrentAssetsToJSON(value["currentAssets"]),
    non_current_assets: AssetsInfoNonCurrentAssetsToJSON(
      value["nonCurrentAssets"],
    ),
    liabilities: AssetsInfoLiabilitiesToJSON(value["liabilities"]),
  };
}
