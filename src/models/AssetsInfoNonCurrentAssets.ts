/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets } from "./AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets";
import {
  AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSON,
  AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSONTyped,
  AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSON,
  AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSONTyped,
} from "./AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets";

/**
 * Non-current assets information
 * @export
 * @interface AssetsInfoNonCurrentAssets
 */
export interface AssetsInfoNonCurrentAssets {
  /**
   * Total non current assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  totalNonCurrentAssets?: number;
  /**
   * Financial assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  financialAssets?: number;
  /**
   * Investments and advances
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentsAndAdvances?: number;
  /**
   * Other investments
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  otherInvestments?: number;
  /**
   * Investment in financial assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentInFinancialAssets?: number;
  /**
   * Held to maturity securities
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  heldToMaturitySecurities?: number;
  /**
   * Available for sale securities
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  availableForSaleSecurities?: number;
  /**
   * Financial assets designated as fair value through profit or loss total
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  financialAssetsDesignatedAsFairValueThroughProfitOrLossTotal?: number;
  /**
   * Trading securities
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  tradingSecurities?: number;
  /**
   * Long term equity investment
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  longTermEquityInvestment?: number;
  /**
   * Investments in joint ventures at cost
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentsInJointVenturesAtCost?: number;
  /**
   * Investments in other ventures under equity method
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentsInOtherVenturesUnderEquityMethod?: number;
  /**
   * Investments in associates at cost
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentsInAssociatesAtCost?: number;
  /**
   * Investments in subsidiaries at cost
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentsInSubsidiariesAtCost?: number;
  /**
   * Investment properties
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  investmentProperties?: number;
  /**
   *
   * @type {AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets}
   * @memberof AssetsInfoNonCurrentAssets
   */
  goodwillAndOtherIntangibleAssets?: AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssets;
  /**
   * Net ppe
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  netPpe?: number;
  /**
   * Gross ppe
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  grossPpe?: number;
  /**
   * Accumulated depreciation
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  accumulatedDepreciation?: number;
  /**
   * Leases
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  leases?: number;
  /**
   * Construction in progress
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  constructionInProgress?: number;
  /**
   * Other properties
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  otherProperties?: number;
  /**
   * Machinery furniture equipment
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  machineryFurnitureEquipment?: number;
  /**
   * Buildings and improvements
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  buildingsAndImprovements?: number;
  /**
   * Land and improvements
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  landAndImprovements?: number;
  /**
   * Properties
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  properties?: number;
  /**
   * Non current accounts receivable
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  nonCurrentAccountsReceivable?: number;
  /**
   * Non current note receivables
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  nonCurrentNoteReceivables?: number;
  /**
   * Due from related parties non current
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  dueFromRelatedPartiesNonCurrent?: number;
  /**
   * Non current prepaid assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  nonCurrentPrepaidAssets?: number;
  /**
   * Non current deferred assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  nonCurrentDeferredAssets?: number;
  /**
   * Non current deferred taxes assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  nonCurrentDeferredTaxesAssets?: number;
  /**
   * Defined pension benefit
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  definedPensionBenefit?: number;
  /**
   * Other non current assets
   * @type {number}
   * @memberof AssetsInfoNonCurrentAssets
   */
  otherNonCurrentAssets?: number;
}

/**
 * Check if a given object implements the AssetsInfoNonCurrentAssets interface.
 */
export function instanceOfAssetsInfoNonCurrentAssets(
  value: object,
): value is AssetsInfoNonCurrentAssets {
  return true;
}

export function AssetsInfoNonCurrentAssetsFromJSON(
  json: any,
): AssetsInfoNonCurrentAssets {
  return AssetsInfoNonCurrentAssetsFromJSONTyped(json, false);
}

export function AssetsInfoNonCurrentAssetsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoNonCurrentAssets {
  if (json == null) {
    return json;
  }
  return {
    totalNonCurrentAssets:
      json["total_non_current_assets"] == null
        ? undefined
        : json["total_non_current_assets"],
    financialAssets:
      json["financial_assets"] == null ? undefined : json["financial_assets"],
    investmentsAndAdvances:
      json["investments_and_advances"] == null
        ? undefined
        : json["investments_and_advances"],
    otherInvestments:
      json["other_investments"] == null ? undefined : json["other_investments"],
    investmentInFinancialAssets:
      json["investment_in_financial_assets"] == null
        ? undefined
        : json["investment_in_financial_assets"],
    heldToMaturitySecurities:
      json["held_to_maturity_securities"] == null
        ? undefined
        : json["held_to_maturity_securities"],
    availableForSaleSecurities:
      json["available_for_sale_securities"] == null
        ? undefined
        : json["available_for_sale_securities"],
    financialAssetsDesignatedAsFairValueThroughProfitOrLossTotal:
      json[
        "financial_assets_designated_as_fair_value_through_profit_or_loss_total"
      ] == null
        ? undefined
        : json[
            "financial_assets_designated_as_fair_value_through_profit_or_loss_total"
          ],
    tradingSecurities:
      json["trading_securities"] == null
        ? undefined
        : json["trading_securities"],
    longTermEquityInvestment:
      json["long_term_equity_investment"] == null
        ? undefined
        : json["long_term_equity_investment"],
    investmentsInJointVenturesAtCost:
      json["investments_in_joint_ventures_at_cost"] == null
        ? undefined
        : json["investments_in_joint_ventures_at_cost"],
    investmentsInOtherVenturesUnderEquityMethod:
      json["investments_in_other_ventures_under_equity_method"] == null
        ? undefined
        : json["investments_in_other_ventures_under_equity_method"],
    investmentsInAssociatesAtCost:
      json["investments_in_associates_at_cost"] == null
        ? undefined
        : json["investments_in_associates_at_cost"],
    investmentsInSubsidiariesAtCost:
      json["investments_in_subsidiaries_at_cost"] == null
        ? undefined
        : json["investments_in_subsidiaries_at_cost"],
    investmentProperties:
      json["investment_properties"] == null
        ? undefined
        : json["investment_properties"],
    goodwillAndOtherIntangibleAssets:
      json["goodwill_and_other_intangible_assets"] == null
        ? undefined
        : AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsFromJSON(
            json["goodwill_and_other_intangible_assets"],
          ),
    netPpe: json["net_ppe"] == null ? undefined : json["net_ppe"],
    grossPpe: json["gross_ppe"] == null ? undefined : json["gross_ppe"],
    accumulatedDepreciation:
      json["accumulated_depreciation"] == null
        ? undefined
        : json["accumulated_depreciation"],
    leases: json["leases"] == null ? undefined : json["leases"],
    constructionInProgress:
      json["construction_in_progress"] == null
        ? undefined
        : json["construction_in_progress"],
    otherProperties:
      json["other_properties"] == null ? undefined : json["other_properties"],
    machineryFurnitureEquipment:
      json["machinery_furniture_equipment"] == null
        ? undefined
        : json["machinery_furniture_equipment"],
    buildingsAndImprovements:
      json["buildings_and_improvements"] == null
        ? undefined
        : json["buildings_and_improvements"],
    landAndImprovements:
      json["land_and_improvements"] == null
        ? undefined
        : json["land_and_improvements"],
    properties: json["properties"] == null ? undefined : json["properties"],
    nonCurrentAccountsReceivable:
      json["non_current_accounts_receivable"] == null
        ? undefined
        : json["non_current_accounts_receivable"],
    nonCurrentNoteReceivables:
      json["non_current_note_receivables"] == null
        ? undefined
        : json["non_current_note_receivables"],
    dueFromRelatedPartiesNonCurrent:
      json["due_from_related_parties_non_current"] == null
        ? undefined
        : json["due_from_related_parties_non_current"],
    nonCurrentPrepaidAssets:
      json["non_current_prepaid_assets"] == null
        ? undefined
        : json["non_current_prepaid_assets"],
    nonCurrentDeferredAssets:
      json["non_current_deferred_assets"] == null
        ? undefined
        : json["non_current_deferred_assets"],
    nonCurrentDeferredTaxesAssets:
      json["non_current_deferred_taxes_assets"] == null
        ? undefined
        : json["non_current_deferred_taxes_assets"],
    definedPensionBenefit:
      json["defined_pension_benefit"] == null
        ? undefined
        : json["defined_pension_benefit"],
    otherNonCurrentAssets:
      json["other_non_current_assets"] == null
        ? undefined
        : json["other_non_current_assets"],
  };
}

export function AssetsInfoNonCurrentAssetsToJSON(
  json: any,
): AssetsInfoNonCurrentAssets {
  return AssetsInfoNonCurrentAssetsToJSONTyped(json, false);
}

export function AssetsInfoNonCurrentAssetsToJSONTyped(
  value?: AssetsInfoNonCurrentAssets | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_non_current_assets: value["totalNonCurrentAssets"],
    financial_assets: value["financialAssets"],
    investments_and_advances: value["investmentsAndAdvances"],
    other_investments: value["otherInvestments"],
    investment_in_financial_assets: value["investmentInFinancialAssets"],
    held_to_maturity_securities: value["heldToMaturitySecurities"],
    available_for_sale_securities: value["availableForSaleSecurities"],
    financial_assets_designated_as_fair_value_through_profit_or_loss_total:
      value["financialAssetsDesignatedAsFairValueThroughProfitOrLossTotal"],
    trading_securities: value["tradingSecurities"],
    long_term_equity_investment: value["longTermEquityInvestment"],
    investments_in_joint_ventures_at_cost:
      value["investmentsInJointVenturesAtCost"],
    investments_in_other_ventures_under_equity_method:
      value["investmentsInOtherVenturesUnderEquityMethod"],
    investments_in_associates_at_cost: value["investmentsInAssociatesAtCost"],
    investments_in_subsidiaries_at_cost:
      value["investmentsInSubsidiariesAtCost"],
    investment_properties: value["investmentProperties"],
    goodwill_and_other_intangible_assets:
      AssetsInfoNonCurrentAssetsGoodwillAndOtherIntangibleAssetsToJSON(
        value["goodwillAndOtherIntangibleAssets"],
      ),
    net_ppe: value["netPpe"],
    gross_ppe: value["grossPpe"],
    accumulated_depreciation: value["accumulatedDepreciation"],
    leases: value["leases"],
    construction_in_progress: value["constructionInProgress"],
    other_properties: value["otherProperties"],
    machinery_furniture_equipment: value["machineryFurnitureEquipment"],
    buildings_and_improvements: value["buildingsAndImprovements"],
    land_and_improvements: value["landAndImprovements"],
    properties: value["properties"],
    non_current_accounts_receivable: value["nonCurrentAccountsReceivable"],
    non_current_note_receivables: value["nonCurrentNoteReceivables"],
    due_from_related_parties_non_current:
      value["dueFromRelatedPartiesNonCurrent"],
    non_current_prepaid_assets: value["nonCurrentPrepaidAssets"],
    non_current_deferred_assets: value["nonCurrentDeferredAssets"],
    non_current_deferred_taxes_assets: value["nonCurrentDeferredTaxesAssets"],
    defined_pension_benefit: value["definedPensionBenefit"],
    other_non_current_assets: value["otherNonCurrentAssets"],
  };
}
