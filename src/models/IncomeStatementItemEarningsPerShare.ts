/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Earnings per share information
 * @export
 * @interface IncomeStatementItemEarningsPerShare
 */
export interface IncomeStatementItemEarningsPerShare {
  /**
   * Diluted EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedEps?: number;
  /**
   * Basic EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicEps?: number;
  /**
   * Continuing and discontinued diluted EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  continuingAndDiscontinuedDilutedEps?: number;
  /**
   * Continuing and discontinued basic EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  continuingAndDiscontinuedBasicEps?: number;
  /**
   * Normalized diluted EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  normalizedDilutedEps?: number;
  /**
   * Normalized basic EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  normalizedBasicEps?: number;
  /**
   * Reported normalized diluted EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  reportedNormalizedDilutedEps?: number;
  /**
   * Reported normalized basic EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  reportedNormalizedBasicEps?: number;
  /**
   * Diluted EPS other gains losses
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedEpsOtherGainsLosses?: number;
  /**
   * Tax loss carryforward diluted EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  taxLossCarryforwardDilutedEps?: number;
  /**
   * Diluted accounting change
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedAccountingChange?: number;
  /**
   * Diluted extraordinary
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedExtraordinary?: number;
  /**
   * Diluted discontinuous operations
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedDiscontinuousOperations?: number;
  /**
   * Diluted continuous operations
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedContinuousOperations?: number;
  /**
   * Basic EPS other gains losses
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicEpsOtherGainsLosses?: number;
  /**
   * Tax loss carryforward basic EPS
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  taxLossCarryforwardBasicEps?: number;
  /**
   * Basic accounting change
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicAccountingChange?: number;
  /**
   * Basic extraordinary
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicExtraordinary?: number;
  /**
   * Basic discontinuous operations
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicDiscontinuousOperations?: number;
  /**
   * Basic continuous operations
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  basicContinuousOperations?: number;
  /**
   * Diluted NI available to common stockholders
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  dilutedNiAvailToCommonStockholders?: number;
  /**
   * Average dilution earnings
   * @type {number}
   * @memberof IncomeStatementItemEarningsPerShare
   */
  averageDilutionEarnings?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemEarningsPerShare interface.
 */
export function instanceOfIncomeStatementItemEarningsPerShare(
  value: object,
): value is IncomeStatementItemEarningsPerShare {
  return true;
}

export function IncomeStatementItemEarningsPerShareFromJSON(
  json: any,
): IncomeStatementItemEarningsPerShare {
  return IncomeStatementItemEarningsPerShareFromJSONTyped(json, false);
}

export function IncomeStatementItemEarningsPerShareFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemEarningsPerShare {
  if (json == null) {
    return json;
  }
  return {
    dilutedEps: json["diluted_eps"] == null ? undefined : json["diluted_eps"],
    basicEps: json["basic_eps"] == null ? undefined : json["basic_eps"],
    continuingAndDiscontinuedDilutedEps:
      json["continuing_and_discontinued_diluted_eps"] == null
        ? undefined
        : json["continuing_and_discontinued_diluted_eps"],
    continuingAndDiscontinuedBasicEps:
      json["continuing_and_discontinued_basic_eps"] == null
        ? undefined
        : json["continuing_and_discontinued_basic_eps"],
    normalizedDilutedEps:
      json["normalized_diluted_eps"] == null
        ? undefined
        : json["normalized_diluted_eps"],
    normalizedBasicEps:
      json["normalized_basic_eps"] == null
        ? undefined
        : json["normalized_basic_eps"],
    reportedNormalizedDilutedEps:
      json["reported_normalized_diluted_eps"] == null
        ? undefined
        : json["reported_normalized_diluted_eps"],
    reportedNormalizedBasicEps:
      json["reported_normalized_basic_eps"] == null
        ? undefined
        : json["reported_normalized_basic_eps"],
    dilutedEpsOtherGainsLosses:
      json["diluted_eps_other_gains_losses"] == null
        ? undefined
        : json["diluted_eps_other_gains_losses"],
    taxLossCarryforwardDilutedEps:
      json["tax_loss_carryforward_diluted_eps"] == null
        ? undefined
        : json["tax_loss_carryforward_diluted_eps"],
    dilutedAccountingChange:
      json["diluted_accounting_change"] == null
        ? undefined
        : json["diluted_accounting_change"],
    dilutedExtraordinary:
      json["diluted_extraordinary"] == null
        ? undefined
        : json["diluted_extraordinary"],
    dilutedDiscontinuousOperations:
      json["diluted_discontinuous_operations"] == null
        ? undefined
        : json["diluted_discontinuous_operations"],
    dilutedContinuousOperations:
      json["diluted_continuous_operations"] == null
        ? undefined
        : json["diluted_continuous_operations"],
    basicEpsOtherGainsLosses:
      json["basic_eps_other_gains_losses"] == null
        ? undefined
        : json["basic_eps_other_gains_losses"],
    taxLossCarryforwardBasicEps:
      json["tax_loss_carryforward_basic_eps"] == null
        ? undefined
        : json["tax_loss_carryforward_basic_eps"],
    basicAccountingChange:
      json["basic_accounting_change"] == null
        ? undefined
        : json["basic_accounting_change"],
    basicExtraordinary:
      json["basic_extraordinary"] == null
        ? undefined
        : json["basic_extraordinary"],
    basicDiscontinuousOperations:
      json["basic_discontinuous_operations"] == null
        ? undefined
        : json["basic_discontinuous_operations"],
    basicContinuousOperations:
      json["basic_continuous_operations"] == null
        ? undefined
        : json["basic_continuous_operations"],
    dilutedNiAvailToCommonStockholders:
      json["diluted_ni_avail_to_common_stockholders"] == null
        ? undefined
        : json["diluted_ni_avail_to_common_stockholders"],
    averageDilutionEarnings:
      json["average_dilution_earnings"] == null
        ? undefined
        : json["average_dilution_earnings"],
  };
}

export function IncomeStatementItemEarningsPerShareToJSON(
  json: any,
): IncomeStatementItemEarningsPerShare {
  return IncomeStatementItemEarningsPerShareToJSONTyped(json, false);
}

export function IncomeStatementItemEarningsPerShareToJSONTyped(
  value?: IncomeStatementItemEarningsPerShare | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    diluted_eps: value["dilutedEps"],
    basic_eps: value["basicEps"],
    continuing_and_discontinued_diluted_eps:
      value["continuingAndDiscontinuedDilutedEps"],
    continuing_and_discontinued_basic_eps:
      value["continuingAndDiscontinuedBasicEps"],
    normalized_diluted_eps: value["normalizedDilutedEps"],
    normalized_basic_eps: value["normalizedBasicEps"],
    reported_normalized_diluted_eps: value["reportedNormalizedDilutedEps"],
    reported_normalized_basic_eps: value["reportedNormalizedBasicEps"],
    diluted_eps_other_gains_losses: value["dilutedEpsOtherGainsLosses"],
    tax_loss_carryforward_diluted_eps: value["taxLossCarryforwardDilutedEps"],
    diluted_accounting_change: value["dilutedAccountingChange"],
    diluted_extraordinary: value["dilutedExtraordinary"],
    diluted_discontinuous_operations: value["dilutedDiscontinuousOperations"],
    diluted_continuous_operations: value["dilutedContinuousOperations"],
    basic_eps_other_gains_losses: value["basicEpsOtherGainsLosses"],
    tax_loss_carryforward_basic_eps: value["taxLossCarryforwardBasicEps"],
    basic_accounting_change: value["basicAccountingChange"],
    basic_extraordinary: value["basicExtraordinary"],
    basic_discontinuous_operations: value["basicDiscontinuousOperations"],
    basic_continuous_operations: value["basicContinuousOperations"],
    diluted_ni_avail_to_common_stockholders:
      value["dilutedNiAvailToCommonStockholders"],
    average_dilution_earnings: value["averageDilutionEarnings"],
  };
}
