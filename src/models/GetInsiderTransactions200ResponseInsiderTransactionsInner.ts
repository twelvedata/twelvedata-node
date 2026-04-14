/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetInsiderTransactions200ResponseInsiderTransactionsInner
 */
export interface GetInsiderTransactions200ResponseInsiderTransactionsInner {
  /**
   * Full name of an individual, including first name, middle name, last name, and suffix
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  fullName?: string;
  /**
   * Job position of insider
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  position?: string;
  /**
   * Date the transaction was reported
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  dateReported?: string;
  /**
   * `true` if direct, `false` if indirect
   * @type {boolean}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  isDirect?: boolean;
  /**
   * As per report the number of shares acquired or disposed of the transaction
   * @type {number}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  shares?: number;
  /**
   * Represents the value of transaction, calculated as price multiplied by the volume
   * @type {number}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  value?: number;
  /**
   * Exact price or price range of the transaction if available
   * @type {string}
   * @memberof GetInsiderTransactions200ResponseInsiderTransactionsInner
   */
  description?: string;
}

/**
 * Check if a given object implements the GetInsiderTransactions200ResponseInsiderTransactionsInner interface.
 */
export function instanceOfGetInsiderTransactions200ResponseInsiderTransactionsInner(
  value: object,
): value is GetInsiderTransactions200ResponseInsiderTransactionsInner {
  return true;
}

export function GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSON(
  json: any,
): GetInsiderTransactions200ResponseInsiderTransactionsInner {
  return GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetInsiderTransactions200ResponseInsiderTransactionsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetInsiderTransactions200ResponseInsiderTransactionsInner {
  if (json == null) {
    return json;
  }
  return {
    fullName: json["full_name"] == null ? undefined : json["full_name"],
    position: json["position"] == null ? undefined : json["position"],
    dateReported:
      json["date_reported"] == null ? undefined : json["date_reported"],
    isDirect: json["is_direct"] == null ? undefined : json["is_direct"],
    shares: json["shares"] == null ? undefined : json["shares"],
    value: json["value"] == null ? undefined : json["value"],
    description: json["description"] == null ? undefined : json["description"],
  };
}

export function GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSON(
  json: any,
): GetInsiderTransactions200ResponseInsiderTransactionsInner {
  return GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetInsiderTransactions200ResponseInsiderTransactionsInnerToJSONTyped(
  value?: GetInsiderTransactions200ResponseInsiderTransactionsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    full_name: value["fullName"],
    position: value["position"],
    date_reported: value["dateReported"],
    is_direct: value["isDirect"],
    shares: value["shares"],
    value: value["value"],
    description: value["description"],
  };
}
