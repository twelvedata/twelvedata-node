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
 * @interface GetSplits200ResponseSplitsInner
 */
export interface GetSplits200ResponseSplitsInner {
  /**
   * Stands for the split date
   * @type {string}
   * @memberof GetSplits200ResponseSplitsInner
   */
  date: string;
  /**
   * Specification of the split event
   * @type {string}
   * @memberof GetSplits200ResponseSplitsInner
   */
  description: string;
  /**
   * The ratio by which the number of a company's outstanding shares of stock are increased following a stock split. For example, a `4-for-1 split` results in four times as many outstanding shares, with each share selling at one forth of its pre-split price
   * @type {number}
   * @memberof GetSplits200ResponseSplitsInner
   */
  ratio: number;
  /**
   * From factor of the split
   * @type {number}
   * @memberof GetSplits200ResponseSplitsInner
   */
  fromFactor: number;
  /**
   * To factor of the split
   * @type {number}
   * @memberof GetSplits200ResponseSplitsInner
   */
  toFactor: number;
}

/**
 * Check if a given object implements the GetSplits200ResponseSplitsInner interface.
 */
export function instanceOfGetSplits200ResponseSplitsInner(
  value: object,
): value is GetSplits200ResponseSplitsInner {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("description" in value) || value["description"] === undefined)
    return false;
  if (!("ratio" in value) || value["ratio"] === undefined) return false;
  if (!("fromFactor" in value) || value["fromFactor"] === undefined)
    return false;
  if (!("toFactor" in value) || value["toFactor"] === undefined) return false;
  return true;
}

export function GetSplits200ResponseSplitsInnerFromJSON(
  json: any,
): GetSplits200ResponseSplitsInner {
  return GetSplits200ResponseSplitsInnerFromJSONTyped(json, false);
}

export function GetSplits200ResponseSplitsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSplits200ResponseSplitsInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    description: json["description"],
    ratio: json["ratio"],
    fromFactor: json["from_factor"],
    toFactor: json["to_factor"],
  };
}

export function GetSplits200ResponseSplitsInnerToJSON(
  json: any,
): GetSplits200ResponseSplitsInner {
  return GetSplits200ResponseSplitsInnerToJSONTyped(json, false);
}

export function GetSplits200ResponseSplitsInnerToJSONTyped(
  value?: GetSplits200ResponseSplitsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    description: value["description"],
    ratio: value["ratio"],
    from_factor: value["fromFactor"],
    to_factor: value["toFactor"],
  };
}
