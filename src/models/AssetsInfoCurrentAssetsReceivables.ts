/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Receivables information
 * @export
 * @interface AssetsInfoCurrentAssetsReceivables
 */
export interface AssetsInfoCurrentAssetsReceivables {
  /**
   * Total receivables
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  totalReceivables?: number;
  /**
   * Accounts receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  accountsReceivable?: number;
  /**
   * Gross accounts receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  grossAccountsReceivable?: number;
  /**
   * Allowance for doubtful accounts receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  allowanceForDoubtfulAccountsReceivable?: number;
  /**
   * Receivables adjustments allowances
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  receivablesAdjustmentsAllowances?: number;
  /**
   * Other receivables
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  otherReceivables?: number;
  /**
   * Due from related parties current
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  dueFromRelatedPartiesCurrent?: number;
  /**
   * Taxes receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  taxesReceivable?: number;
  /**
   * Accrued interest receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  accruedInterestReceivable?: number;
  /**
   * Notes receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  notesReceivable?: number;
  /**
   * Loans receivable
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsReceivables
   */
  loansReceivable?: number;
}

/**
 * Check if a given object implements the AssetsInfoCurrentAssetsReceivables interface.
 */
export function instanceOfAssetsInfoCurrentAssetsReceivables(
  value: object,
): value is AssetsInfoCurrentAssetsReceivables {
  return true;
}

export function AssetsInfoCurrentAssetsReceivablesFromJSON(
  json: any,
): AssetsInfoCurrentAssetsReceivables {
  return AssetsInfoCurrentAssetsReceivablesFromJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsReceivablesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoCurrentAssetsReceivables {
  if (json == null) {
    return json;
  }
  return {
    totalReceivables:
      json["total_receivables"] == null ? undefined : json["total_receivables"],
    accountsReceivable:
      json["accounts_receivable"] == null
        ? undefined
        : json["accounts_receivable"],
    grossAccountsReceivable:
      json["gross_accounts_receivable"] == null
        ? undefined
        : json["gross_accounts_receivable"],
    allowanceForDoubtfulAccountsReceivable:
      json["allowance_for_doubtful_accounts_receivable"] == null
        ? undefined
        : json["allowance_for_doubtful_accounts_receivable"],
    receivablesAdjustmentsAllowances:
      json["receivables_adjustments_allowances"] == null
        ? undefined
        : json["receivables_adjustments_allowances"],
    otherReceivables:
      json["other_receivables"] == null ? undefined : json["other_receivables"],
    dueFromRelatedPartiesCurrent:
      json["due_from_related_parties_current"] == null
        ? undefined
        : json["due_from_related_parties_current"],
    taxesReceivable:
      json["taxes_receivable"] == null ? undefined : json["taxes_receivable"],
    accruedInterestReceivable:
      json["accrued_interest_receivable"] == null
        ? undefined
        : json["accrued_interest_receivable"],
    notesReceivable:
      json["notes_receivable"] == null ? undefined : json["notes_receivable"],
    loansReceivable:
      json["loans_receivable"] == null ? undefined : json["loans_receivable"],
  };
}

export function AssetsInfoCurrentAssetsReceivablesToJSON(
  json: any,
): AssetsInfoCurrentAssetsReceivables {
  return AssetsInfoCurrentAssetsReceivablesToJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsReceivablesToJSONTyped(
  value?: AssetsInfoCurrentAssetsReceivables | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_receivables: value["totalReceivables"],
    accounts_receivable: value["accountsReceivable"],
    gross_accounts_receivable: value["grossAccountsReceivable"],
    allowance_for_doubtful_accounts_receivable:
      value["allowanceForDoubtfulAccountsReceivable"],
    receivables_adjustments_allowances:
      value["receivablesAdjustmentsAllowances"],
    other_receivables: value["otherReceivables"],
    due_from_related_parties_current: value["dueFromRelatedPartiesCurrent"],
    taxes_receivable: value["taxesReceivable"],
    accrued_interest_receivable: value["accruedInterestReceivable"],
    notes_receivable: value["notesReceivable"],
    loans_receivable: value["loansReceivable"],
  };
}
