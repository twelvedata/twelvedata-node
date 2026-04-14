/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Direct method cash flow
 * @export
 * @interface CashFlowDataDirectMethodCashFlow
 */
export interface CashFlowDataDirectMethodCashFlow {
  /**
   * Classes of cash receipts from operating activities
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  classesOfCashReceiptsFromOperatingActivities?: number;
  /**
   * Other cash receipts from operating activities
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  otherCashReceiptsFromOperatingActivities?: number;
  /**
   * Receipts from government grants
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  receiptsFromGovernmentGrants?: number;
  /**
   * Receipts from customers
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  receiptsFromCustomers?: number;
  /**
   * Classes of cash payments
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  classesOfCashPayments?: number;
  /**
   * Other cash payments from operating activities
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  otherCashPaymentsFromOperatingActivities?: number;
  /**
   * Payments on behalf of employees
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  paymentsOnBehalfOfEmployees?: number;
  /**
   * Payments to suppliers for goods and services
   * @type {number}
   * @memberof CashFlowDataDirectMethodCashFlow
   */
  paymentsToSuppliersForGoodsAndServices?: number;
}

/**
 * Check if a given object implements the CashFlowDataDirectMethodCashFlow interface.
 */
export function instanceOfCashFlowDataDirectMethodCashFlow(
  value: object,
): value is CashFlowDataDirectMethodCashFlow {
  return true;
}

export function CashFlowDataDirectMethodCashFlowFromJSON(
  json: any,
): CashFlowDataDirectMethodCashFlow {
  return CashFlowDataDirectMethodCashFlowFromJSONTyped(json, false);
}

export function CashFlowDataDirectMethodCashFlowFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataDirectMethodCashFlow {
  if (json == null) {
    return json;
  }
  return {
    classesOfCashReceiptsFromOperatingActivities:
      json["classes_of_cash_receipts_from_operating_activities"] == null
        ? undefined
        : json["classes_of_cash_receipts_from_operating_activities"],
    otherCashReceiptsFromOperatingActivities:
      json["other_cash_receipts_from_operating_activities"] == null
        ? undefined
        : json["other_cash_receipts_from_operating_activities"],
    receiptsFromGovernmentGrants:
      json["receipts_from_government_grants"] == null
        ? undefined
        : json["receipts_from_government_grants"],
    receiptsFromCustomers:
      json["receipts_from_customers"] == null
        ? undefined
        : json["receipts_from_customers"],
    classesOfCashPayments:
      json["classes_of_cash_payments"] == null
        ? undefined
        : json["classes_of_cash_payments"],
    otherCashPaymentsFromOperatingActivities:
      json["other_cash_payments_from_operating_activities"] == null
        ? undefined
        : json["other_cash_payments_from_operating_activities"],
    paymentsOnBehalfOfEmployees:
      json["payments_on_behalf_of_employees"] == null
        ? undefined
        : json["payments_on_behalf_of_employees"],
    paymentsToSuppliersForGoodsAndServices:
      json["payments_to_suppliers_for_goods_and_services"] == null
        ? undefined
        : json["payments_to_suppliers_for_goods_and_services"],
  };
}

export function CashFlowDataDirectMethodCashFlowToJSON(
  json: any,
): CashFlowDataDirectMethodCashFlow {
  return CashFlowDataDirectMethodCashFlowToJSONTyped(json, false);
}

export function CashFlowDataDirectMethodCashFlowToJSONTyped(
  value?: CashFlowDataDirectMethodCashFlow | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    classes_of_cash_receipts_from_operating_activities:
      value["classesOfCashReceiptsFromOperatingActivities"],
    other_cash_receipts_from_operating_activities:
      value["otherCashReceiptsFromOperatingActivities"],
    receipts_from_government_grants: value["receiptsFromGovernmentGrants"],
    receipts_from_customers: value["receiptsFromCustomers"],
    classes_of_cash_payments: value["classesOfCashPayments"],
    other_cash_payments_from_operating_activities:
      value["otherCashPaymentsFromOperatingActivities"],
    payments_on_behalf_of_employees: value["paymentsOnBehalfOfEmployees"],
    payments_to_suppliers_for_goods_and_services:
      value["paymentsToSuppliersForGoodsAndServices"],
  };
}
