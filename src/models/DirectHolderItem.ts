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
 * @interface DirectHolderItem
 */
export interface DirectHolderItem {
  /**
   * Refers to the legal name of the institution
   * @type {string}
   * @memberof DirectHolderItem
   */
  entityName?: string;
  /**
   * Refers to date reported
   * @type {string}
   * @memberof DirectHolderItem
   */
  dateReported?: string;
  /**
   * Refers to the number of shares owned
   * @type {number}
   * @memberof DirectHolderItem
   */
  shares?: number;
  /**
   * Total value of shares owned, calculated by multiplying `shares` by the current price
   * @type {number}
   * @memberof DirectHolderItem
   */
  value?: number;
  /**
   * Represents the percentage of shares outstanding that are owned by the financial institution
   * @type {number}
   * @memberof DirectHolderItem
   */
  percentHeld?: number;
}

/**
 * Check if a given object implements the DirectHolderItem interface.
 */
export function instanceOfDirectHolderItem(
  value: object,
): value is DirectHolderItem {
  return true;
}

export function DirectHolderItemFromJSON(json: any): DirectHolderItem {
  return DirectHolderItemFromJSONTyped(json, false);
}

export function DirectHolderItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DirectHolderItem {
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

export function DirectHolderItemToJSON(json: any): DirectHolderItem {
  return DirectHolderItemToJSONTyped(json, false);
}

export function DirectHolderItemToJSONTyped(
  value?: DirectHolderItem | null,
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
