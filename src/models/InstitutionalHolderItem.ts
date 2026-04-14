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
 * @interface InstitutionalHolderItem
 */
export interface InstitutionalHolderItem {
  /**
   * Refers to the legal name of the institution
   * @type {string}
   * @memberof InstitutionalHolderItem
   */
  entityName?: string;
  /**
   * Refers to date reported
   * @type {string}
   * @memberof InstitutionalHolderItem
   */
  dateReported?: string;
  /**
   * Refers to the number of shares owned
   * @type {number}
   * @memberof InstitutionalHolderItem
   */
  shares?: number;
  /**
   * Total value of shares owned, calculated by multiplying `shares` by the current price
   * @type {number}
   * @memberof InstitutionalHolderItem
   */
  value?: number;
  /**
   * Represents the percentage of shares outstanding that are owned by the financial institution
   * @type {number}
   * @memberof InstitutionalHolderItem
   */
  percentHeld?: number;
}

/**
 * Check if a given object implements the InstitutionalHolderItem interface.
 */
export function instanceOfInstitutionalHolderItem(
  value: object,
): value is InstitutionalHolderItem {
  return true;
}

export function InstitutionalHolderItemFromJSON(
  json: any,
): InstitutionalHolderItem {
  return InstitutionalHolderItemFromJSONTyped(json, false);
}

export function InstitutionalHolderItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InstitutionalHolderItem {
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

export function InstitutionalHolderItemToJSON(
  json: any,
): InstitutionalHolderItem {
  return InstitutionalHolderItemToJSONTyped(json, false);
}

export function InstitutionalHolderItemToJSONTyped(
  value?: InstitutionalHolderItem | null,
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
