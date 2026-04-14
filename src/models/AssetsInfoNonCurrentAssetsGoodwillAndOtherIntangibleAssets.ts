/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Goodwill and other intangible assets information
 * @export
 * @interface AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets
 */
export interface AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets {
  /**
   * Goodwill
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets
   */
  goodwill?: number;
  /**
   * Other intangible assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets
   */
  otherIntangibleAssets?: number;
  /**
   * Total goodwill and intangible assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets
   */
  totalGoodwillAndIntangibleAssets?: number;
}

/**
 * Check if a given object implements the AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets interface.
 */
export function instanceOfAssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets(
  value: object,
): value is AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets {
  return true;
}

export function AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSON(
  json: any,
): AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets {
  return AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets {
  if (json == null) {
    return json;
  }
  return {
    goodwill: json["goodwill"] == null ? undefined : json["goodwill"],
    otherIntangibleAssets:
      json["other_intangible_assets"] == null
        ? undefined
        : json["other_intangible_assets"],
    totalGoodwillAndIntangibleAssets:
      json["total_goodwill_and_intangible_assets"] == null
        ? undefined
        : json["total_goodwill_and_intangible_assets"],
  };
}

export function AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSON(
  json: any,
): AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets {
  return AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSONTyped(
    json,
    false,
  );
}

export function AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSONTyped(
  value?: AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    goodwill: value["goodwill"],
    other_intangible_assets: value["otherIntangibleAssets"],
    total_goodwill_and_intangible_assets:
      value["totalGoodwillAndIntangibleAssets"],
  };
}
