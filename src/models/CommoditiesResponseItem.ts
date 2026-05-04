/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * CommoditiesResponseItem represents details of a commodity
 * @export
 * @interface CommoditiesResponseItem
 */
export interface CommoditiesResponseItem {
  /**
   * Currency pair according to ISO 4217 standard codes with slash(/) delimiter
   * @type {string}
   * @memberof CommoditiesResponseItem
   */
  symbol: string;
  /**
   * Full name of the instrument
   * @type {string}
   * @memberof CommoditiesResponseItem
   */
  name: string;
  /**
   * Category of commodity
   * @type {string}
   * @memberof CommoditiesResponseItem
   */
  category: string;
  /**
   * Short description of the commodity
   * @type {string}
   * @memberof CommoditiesResponseItem
   */
  description: string;
}

/**
 * Check if a given object implements the CommoditiesResponseItem interface.
 */
export function instanceOfCommoditiesResponseItem(
  value: object,
): value is CommoditiesResponseItem {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("category" in value) || value["category"] === undefined) return false;
  if (!("description" in value) || value["description"] === undefined)
    return false;
  return true;
}

export function CommoditiesResponseItemFromJSON(
  json: any,
): CommoditiesResponseItem {
  return CommoditiesResponseItemFromJSONTyped(json, false);
}

export function CommoditiesResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CommoditiesResponseItem {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    category: json["category"],
    description: json["description"],
  };
}

export function CommoditiesResponseItemToJSON(
  json: any,
): CommoditiesResponseItem {
  return CommoditiesResponseItemToJSONTyped(json, false);
}

export function CommoditiesResponseItemToJSONTyped(
  value?: CommoditiesResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    category: value["category"],
    description: value["description"],
  };
}
