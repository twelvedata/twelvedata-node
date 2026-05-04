/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetBalanceSheet200ResponseBalanceSheetInnerLiabilities } from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilities";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerLiabilities";
import type { GetBalanceSheet200ResponseBalanceSheetInnerAssets } from "./GetBalanceSheet200ResponseBalanceSheetInnerAssets";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerAssets";
import type { GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity } from "./GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity";
import {
  GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSONTyped,
  GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSON,
  GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSONTyped,
} from "./GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity";

/**
 *
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInner
 */
export interface GetBalanceSheet200ResponseBalanceSheetInner {
  /**
   * Date of fiscal period ending
   * @type {string}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInner
   */
  fiscalDate: string;
  /**
   * Fiscal year
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInner
   */
  year?: number;
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerAssets}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInner
   */
  assets?: GetBalanceSheet200ResponseBalanceSheetInnerAssets;
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerLiabilities}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInner
   */
  liabilities?: GetBalanceSheet200ResponseBalanceSheetInnerLiabilities;
  /**
   *
   * @type {GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInner
   */
  shareholdersEquity?: GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquity;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInner interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInner(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInner {
  if (!("fiscalDate" in value) || value["fiscalDate"] === undefined)
    return false;
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInner {
  return GetBalanceSheet200ResponseBalanceSheetInnerFromJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseBalanceSheetInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInner {
  if (json == null) {
    return json;
  }
  return {
    fiscalDate: json["fiscal_date"],
    year: json["year"] == null ? undefined : json["year"],
    assets:
      json["assets"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerAssetsFromJSON(
            json["assets"],
          ),
    liabilities:
      json["liabilities"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesFromJSON(
            json["liabilities"],
          ),
    shareholdersEquity:
      json["shareholders_equity"] == null
        ? undefined
        : GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityFromJSON(
            json["shareholders_equity"],
          ),
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInner {
  return GetBalanceSheet200ResponseBalanceSheetInnerToJSONTyped(json, false);
}

export function GetBalanceSheet200ResponseBalanceSheetInnerToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fiscal_date: value["fiscalDate"],
    year: value["year"],
    assets: GetBalanceSheet200ResponseBalanceSheetInnerAssetsToJSON(
      value["assets"],
    ),
    liabilities: GetBalanceSheet200ResponseBalanceSheetInnerLiabilitiesToJSON(
      value["liabilities"],
    ),
    shareholders_equity:
      GetBalanceSheet200ResponseBalanceSheetInnerShareholdersEquityToJSON(
        value["shareholdersEquity"],
      ),
  };
}
