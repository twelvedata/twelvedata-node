/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Equity adjustments information
 * @export
 * @interface EquityInfoEquityAdjustments
 */
export interface EquityInfoEquityAdjustments {
  /**
   * Gains losses not affecting retained earnings
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  gainsLossesNotAffectingRetainedEarnings?: number;
  /**
   * Other equity adjustments
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  otherEquityAdjustments?: number;
  /**
   * Fixed assets revaluation reserve
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  fixedAssetsRevaluationReserve?: number;
  /**
   * Foreign currency translation adjustments
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  foreignCurrencyTranslationAdjustments?: number;
  /**
   * Minimum pension liabilities
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  minimumPensionLiabilities?: number;
  /**
   * Unrealized gain loss
   * @type {number}
   * @memberof EquityInfoEquityAdjustments
   */
  unrealizedGainLoss?: number;
}

/**
 * Check if a given object implements the EquityInfoEquityAdjustments interface.
 */
export function instanceOfEquityInfoEquityAdjustments(
  value: object,
): value is EquityInfoEquityAdjustments {
  return true;
}

export function EquityInfoEquityAdjustmentsFromJSON(
  json: any,
): EquityInfoEquityAdjustments {
  return EquityInfoEquityAdjustmentsFromJSONTyped(json, false);
}

export function EquityInfoEquityAdjustmentsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EquityInfoEquityAdjustments {
  if (json == null) {
    return json;
  }
  return {
    gainsLossesNotAffectingRetainedEarnings:
      json["gains_losses_not_affecting_retained_earnings"] == null
        ? undefined
        : json["gains_losses_not_affecting_retained_earnings"],
    otherEquityAdjustments:
      json["other_equity_adjustments"] == null
        ? undefined
        : json["other_equity_adjustments"],
    fixedAssetsRevaluationReserve:
      json["fixed_assets_revaluation_reserve"] == null
        ? undefined
        : json["fixed_assets_revaluation_reserve"],
    foreignCurrencyTranslationAdjustments:
      json["foreign_currency_translation_adjustments"] == null
        ? undefined
        : json["foreign_currency_translation_adjustments"],
    minimumPensionLiabilities:
      json["minimum_pension_liabilities"] == null
        ? undefined
        : json["minimum_pension_liabilities"],
    unrealizedGainLoss:
      json["unrealized_gain_loss"] == null
        ? undefined
        : json["unrealized_gain_loss"],
  };
}

export function EquityInfoEquityAdjustmentsToJSON(
  json: any,
): EquityInfoEquityAdjustments {
  return EquityInfoEquityAdjustmentsToJSONTyped(json, false);
}

export function EquityInfoEquityAdjustmentsToJSONTyped(
  value?: EquityInfoEquityAdjustments | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    gains_losses_not_affecting_retained_earnings:
      value["gainsLossesNotAffectingRetainedEarnings"],
    other_equity_adjustments: value["otherEquityAdjustments"],
    fixed_assets_revaluation_reserve: value["fixedAssetsRevaluationReserve"],
    foreign_currency_translation_adjustments:
      value["foreignCurrencyTranslationAdjustments"],
    minimum_pension_liabilities: value["minimumPensionLiabilities"],
    unrealized_gain_loss: value["unrealizedGainLoss"],
  };
}
