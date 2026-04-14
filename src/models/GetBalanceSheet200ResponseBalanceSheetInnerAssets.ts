/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets } from "./GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets";
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets } from "./GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets";

/**
 * Assets section of the balance sheet
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerAssets
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssets
   */
  currentAssets?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets;
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssets
   */
  nonCurrentAssets?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssets;
  /**
   * The sum of total_current_assets + total_non_current_assets
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssets
   */
  totalAssets?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerAssets interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerAssets(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  if (json == null) {
    return json;
  }
  return {
    currentAssets:
      json["current_assets"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSON(
            json["current_assets"],
          ),
    nonCurrentAssets:
      json["non_current_assets"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsFromJSON(
            json["non_current_assets"],
          ),
    totalAssets:
      json["total_assets"] == null ? undefined : json["total_assets"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    current_assets:
      GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSON(
        value["currentAssets"],
      ),
    non_current_assets:
      GetBalanceSheet200ResponseBalanceSheetInnerAssetsNonCurrentAssetsToJSON(
        value["nonCurrentAssets"],
      ),
    total_assets: value["totalAssets"],
  };
}
