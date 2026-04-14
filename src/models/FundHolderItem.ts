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
 * @interface FundHolderItem
 */
export interface FundHolderItem {
  /**
   * Refers to the legal name of the institution
   * @type {string}
   * @memberof FundHolderItem
   */
  entityName?: string;
  /**
   * Refers to date reported
   * @type {string}
   * @memberof FundHolderItem
   */
  dateReported?: string;
  /**
   * Refers to the number of shares owned
   * @type {number}
   * @memberof FundHolderItem
   */
  shares?: number;
  /**
   * Total value of shares owned, calculated by multiplying `shares` by the current price
   * @type {number}
   * @memberof FundHolderItem
   */
  value?: number;
  /**
   * Represents the percentage of shares outstanding that are owned by the financial institution
   * @type {number}
   * @memberof FundHolderItem
   */
  percentHeld?: number;
}

/**
 * Check if a given object implements the FundHolderItem interface.
 */
export function instanceOfFundHolderItem(
  value: object,
): value is FundHolderItem {
  return true;
}

export function FundHolderItemFromJSON(json: any): FundHolderItem {
  return FundHolderItemFromJSONTyped(json, false);
}

export function FundHolderItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FundHolderItem {
  if (json == null) {
    return json;
  }
  return {
    entityName: json["entity_name"] == null ? undefined : json["entity_name"],
    dateReported:
      json["date_reported"] == null ? undefined : json["date_reported"],
    shares: json["shares"] == null ? undefined : json["shares"],
    value: json["value"] == null ? undefined : json["value"],
    percentHeld:
      json["percent_held"] == null ? undefined : json["percent_held"],
  };
}

export function FundHolderItemToJSON(json: any): FundHolderItem {
  return FundHolderItemToJSONTyped(json, false);
}

export function FundHolderItemToJSONTyped(
  value?: FundHolderItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    entity_name: value["entityName"],
    date_reported: value["dateReported"],
    shares: value["shares"],
    value: value["value"],
    percent_held: value["percentHeld"],
  };
}
