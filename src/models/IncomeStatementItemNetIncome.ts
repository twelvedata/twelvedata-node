/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Net income information
 * @export
 * @interface IncomeStatementItemNetIncome
 */
export interface IncomeStatementItemNetIncome {
  /**
   * Net income value
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeValue?: number;
  /**
   * Net income common stockholders
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeCommonStockholders?: number;
  /**
   * Net income including noncontrolling interests
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeIncludingNoncontrollingInterests?: number;
  /**
   * Net income from tax loss carryforward
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeFromTaxLossCarryforward?: number;
  /**
   * Net income extraordinary
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeExtraordinary?: number;
  /**
   * Net income discontinuous operations
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeDiscontinuousOperations?: number;
  /**
   * Net income continuous operations
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeContinuousOperations?: number;
  /**
   * Net income from continuing operation net minority interest
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeFromContinuingOperationNetMinorityInterest?: number;
  /**
   * Net income from continuing and discontinued operation
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  netIncomeFromContinuingAndDiscontinuedOperation?: number;
  /**
   * Normalized income
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  normalizedIncome?: number;
  /**
   * Minority interests
   * @type {number}
   * @memberof IncomeStatementItemNetIncome
   */
  minorityInterests?: number;
}

/**
 * Check if a given object implements the IncomeStatementItemNetIncome interface.
 */
export function instanceOfIncomeStatementItemNetIncome(
  value: object,
): value is IncomeStatementItemNetIncome {
  return true;
}

export function IncomeStatementItemNetIncomeFromJSON(
  json: any,
): IncomeStatementItemNetIncome {
  return IncomeStatementItemNetIncomeFromJSONTyped(json, false);
}

export function IncomeStatementItemNetIncomeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IncomeStatementItemNetIncome {
  if (json == null) {
    return json;
  }
  return {
    netIncomeValue:
      json["net_income_value"] == null ? undefined : json["net_income_value"],
    netIncomeCommonStockholders:
      json["net_income_common_stockholders"] == null
        ? undefined
        : json["net_income_common_stockholders"],
    netIncomeIncludingNoncontrollingInterests:
      json["net_income_including_noncontrolling_interests"] == null
        ? undefined
        : json["net_income_including_noncontrolling_interests"],
    netIncomeFromTaxLossCarryforward:
      json["net_income_from_tax_loss_carryforward"] == null
        ? undefined
        : json["net_income_from_tax_loss_carryforward"],
    netIncomeExtraordinary:
      json["net_income_extraordinary"] == null
        ? undefined
        : json["net_income_extraordinary"],
    netIncomeDiscontinuousOperations:
      json["net_income_discontinuous_operations"] == null
        ? undefined
        : json["net_income_discontinuous_operations"],
    netIncomeContinuousOperations:
      json["net_income_continuous_operations"] == null
        ? undefined
        : json["net_income_continuous_operations"],
    netIncomeFromContinuingOperationNetMinorityInterest:
      json["net_income_from_continuing_operation_net_minority_interest"] == null
        ? undefined
        : json["net_income_from_continuing_operation_net_minority_interest"],
    netIncomeFromContinuingAndDiscontinuedOperation:
      json["net_income_from_continuing_and_discontinued_operation"] == null
        ? undefined
        : json["net_income_from_continuing_and_discontinued_operation"],
    normalizedIncome:
      json["normalized_income"] == null ? undefined : json["normalized_income"],
    minorityInterests:
      json["minority_interests"] == null
        ? undefined
        : json["minority_interests"],
  };
}

export function IncomeStatementItemNetIncomeToJSON(
  json: any,
): IncomeStatementItemNetIncome {
  return IncomeStatementItemNetIncomeToJSONTyped(json, false);
}

export function IncomeStatementItemNetIncomeToJSONTyped(
  value?: IncomeStatementItemNetIncome | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    net_income_value: value["netIncomeValue"],
    net_income_common_stockholders: value["netIncomeCommonStockholders"],
    net_income_including_noncontrolling_interests:
      value["netIncomeIncludingNoncontrollingInterests"],
    net_income_from_tax_loss_carryforward:
      value["netIncomeFromTaxLossCarryforward"],
    net_income_extraordinary: value["netIncomeExtraordinary"],
    net_income_discontinuous_operations:
      value["netIncomeDiscontinuousOperations"],
    net_income_continuous_operations: value["netIncomeContinuousOperations"],
    net_income_from_continuing_operation_net_minority_interest:
      value["netIncomeFromContinuingOperationNetMinorityInterest"],
    net_income_from_continuing_and_discontinued_operation:
      value["netIncomeFromContinuingAndDiscontinuedOperation"],
    normalized_income: value["normalizedIncome"],
    minority_interests: value["minorityInterests"],
  };
}
