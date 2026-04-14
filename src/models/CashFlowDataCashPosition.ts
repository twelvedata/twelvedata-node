/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Cash position
 * @export
 * @interface CashFlowDataCashPosition
 */
export interface CashFlowDataCashPosition {
  /**
   * Beginning cash position
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  beginningCashPosition?: number;
  /**
   * End cash position
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  endCashPosition?: number;
  /**
   * Changes in cash
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  changesInCash?: number;
  /**
   * Other cash adjustment outside change in cash
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  otherCashAdjustmentOutsideChangeInCash?: number;
  /**
   * Other cash adjustment inside change in cash
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  otherCashAdjustmentInsideChangeInCash?: number;
  /**
   * Effect of exchange rate changes
   * @type {number}
   * @memberof CashFlowDataCashPosition
   */
  effectOfExchangeRateChanges?: number;
}

/**
 * Check if a given object implements the CashFlowDataCashPosition interface.
 */
export function instanceOfCashFlowDataCashPosition(
  value: object,
): value is CashFlowDataCashPosition {
  return true;
}

export function CashFlowDataCashPositionFromJSON(
  json: any,
): CashFlowDataCashPosition {
  return CashFlowDataCashPositionFromJSONTyped(json, false);
}

export function CashFlowDataCashPositionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataCashPosition {
  if (json == null) {
    return json;
  }
  return {
    beginningCashPosition:
      json["beginning_cash_position"] == null
        ? undefined
        : json["beginning_cash_position"],
    endCashPosition:
      json["end_cash_position"] == null ? undefined : json["end_cash_position"],
    changesInCash:
      json["changes_in_cash"] == null ? undefined : json["changes_in_cash"],
    otherCashAdjustmentOutsideChangeInCash:
      json["other_cash_adjustment_outside_change_in_cash"] == null
        ? undefined
        : json["other_cash_adjustment_outside_change_in_cash"],
    otherCashAdjustmentInsideChangeInCash:
      json["other_cash_adjustment_inside_change_in_cash"] == null
        ? undefined
        : json["other_cash_adjustment_inside_change_in_cash"],
    effectOfExchangeRateChanges:
      json["effect_of_exchange_rate_changes"] == null
        ? undefined
        : json["effect_of_exchange_rate_changes"],
  };
}

export function CashFlowDataCashPositionToJSON(
  json: any,
): CashFlowDataCashPosition {
  return CashFlowDataCashPositionToJSONTyped(json, false);
}

export function CashFlowDataCashPositionToJSONTyped(
  value?: CashFlowDataCashPosition | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    beginning_cash_position: value["beginningCashPosition"],
    end_cash_position: value["endCashPosition"],
    changes_in_cash: value["changesInCash"],
    other_cash_adjustment_outside_change_in_cash:
      value["otherCashAdjustmentOutsideChangeInCash"],
    other_cash_adjustment_inside_change_in_cash:
      value["otherCashAdjustmentInsideChangeInCash"],
    effect_of_exchange_rate_changes: value["effectOfExchangeRateChanges"],
  };
}
