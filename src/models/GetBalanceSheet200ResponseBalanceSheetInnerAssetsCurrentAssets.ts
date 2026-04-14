/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Current assets section
 * @export
 * @interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
 */
export interface GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  /**
   * Cash includes currency, bank accounts, and undeposited checks
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  cash?: number;
  /**
   * Represents cash equivalents that have high credit quality and are highly liquid
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  cashEquivalents?: number;
  /**
   * Combined value of cash and cash equivalents when company doesn't report a breakdown
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  cashAndCashEquivalents?: number;
  /**
   * Represents other short term investments
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  otherShortTermInvestments?: number;
  /**
   * Represents the balance of money due to a firm for goods or services delivered or used but not yet paid for by customers
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  accountsReceivable?: number;
  /**
   * Represents other receivables
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  otherReceivables?: number;
  /**
   * Represents the goods available for sale and raw materials used to produce goods available for sale
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  inventory?: number;
  /**
   * Represents expense that has already been paid for, but which has not yet been consumed
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  prepaidAssets?: number;
  /**
   * Represents money that is held for a specific purpose and thus not available to the company for immediate or general business use
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  restrictedCash?: number;
  /**
   * Represents assets which company plans to sell
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  assetsHeldForSale?: number;
  /**
   * Represents money that is spent on hedging assets
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  hedgingAssets?: number;
  /**
   * Represents other current assets
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  otherCurrentAssets?: number;
  /**
   * All current assets values in a total
   * @type {number}
   * @memberof GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets
   */
  totalCurrentAssets?: number;
}

/**
 * Check if a given object implements the GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets interface.
 */
export function instanceOfGetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets(
  value: object,
): value is GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  return true;
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  if (json == null) {
    return json;
  }
  return {
    cash: json["cash"] == null ? undefined : json["cash"],
    cashEquivalents:
      json["cash_equivalents"] == null ? undefined : json["cash_equivalents"],
    cashAndCashEquivalents:
      json["cash_and_cash_equivalents"] == null
        ? undefined
        : json["cash_and_cash_equivalents"],
    otherShortTermInvestments:
      json["other_short_term_investments"] == null
        ? undefined
        : json["other_short_term_investments"],
    accountsReceivable:
      json["accounts_receivable"] == null
        ? undefined
        : json["accounts_receivable"],
    otherReceivables:
      json["other_receivables"] == null ? undefined : json["other_receivables"],
    inventory: json["inventory"] == null ? undefined : json["inventory"],
    prepaidAssets:
      json["prepaid_assets"] == null ? undefined : json["prepaid_assets"],
    restrictedCash:
      json["restricted_cash"] == null ? undefined : json["restricted_cash"],
    assetsHeldForSale:
      json["assets_held_for_sale"] == null
        ? undefined
        : json["assets_held_for_sale"],
    hedgingAssets:
      json["hedging_assets"] == null ? undefined : json["hedging_assets"],
    otherCurrentAssets:
      json["other_current_assets"] == null
        ? undefined
        : json["other_current_assets"],
    totalCurrentAssets:
      json["total_current_assets"] == null
        ? undefined
        : json["total_current_assets"],
  };
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSON(
  json: any,
): GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets {
  return GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSONTyped(
    json,
    false,
  );
}

export function GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssetsToJSONTyped(
  value?: GetBalanceSheet200ResponseBalanceSheetInnerAssetsCurrentAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    cash: value["cash"],
    cash_equivalents: value["cashEquivalents"],
    cash_and_cash_equivalents: value["cashAndCashEquivalents"],
    other_short_term_investments: value["otherShortTermInvestments"],
    accounts_receivable: value["accountsReceivable"],
    other_receivables: value["otherReceivables"],
    inventory: value["inventory"],
    prepaid_assets: value["prepaidAssets"],
    restricted_cash: value["restrictedCash"],
    assets_held_for_sale: value["assetsHeldForSale"],
    hedging_assets: value["hedgingAssets"],
    other_current_assets: value["otherCurrentAssets"],
    total_current_assets: value["totalCurrentAssets"],
  };
}
