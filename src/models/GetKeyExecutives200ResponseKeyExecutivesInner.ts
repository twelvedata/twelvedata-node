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
 * @interface GetKeyExecutives200ResponseKeyExecutivesInner
 */
export interface GetKeyExecutives200ResponseKeyExecutivesInner {
  /**
   * Full name of an executive, including first name, middle name, last name, and suffix
   * @type {string}
   * @memberof GetKeyExecutives200ResponseKeyExecutivesInner
   */
  name: string;
  /**
   * Refers to job title
   * @type {string}
   * @memberof GetKeyExecutives200ResponseKeyExecutivesInner
   */
  title: string;
  /**
   * Current age of an executive if available
   * @type {number}
   * @memberof GetKeyExecutives200ResponseKeyExecutivesInner
   */
  age?: number;
  /**
   * Year of birth of an executive if available
   * @type {number}
   * @memberof GetKeyExecutives200ResponseKeyExecutivesInner
   */
  yearBorn?: number;
  /**
   * Total salary of an executive if available
   * @type {number}
   * @memberof GetKeyExecutives200ResponseKeyExecutivesInner
   */
  pay?: number;
}

/**
 * Check if a given object implements the GetKeyExecutives200ResponseKeyExecutivesInner interface.
 */
export function instanceOfGetKeyExecutives200ResponseKeyExecutivesInner(
  value: object,
): value is GetKeyExecutives200ResponseKeyExecutivesInner {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("title" in value) || value["title"] === undefined) return false;
  return true;
}

export function GetKeyExecutives200ResponseKeyExecutivesInnerFromJSON(
  json: any,
): GetKeyExecutives200ResponseKeyExecutivesInner {
  return GetKeyExecutives200ResponseKeyExecutivesInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetKeyExecutives200ResponseKeyExecutivesInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetKeyExecutives200ResponseKeyExecutivesInner {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    title: json["title"],
    age: json["age"] == null ? undefined : json["age"],
    yearBorn: json["year_born"] == null ? undefined : json["year_born"],
    pay: json["pay"] == null ? undefined : json["pay"],
  };
}

export function GetKeyExecutives200ResponseKeyExecutivesInnerToJSON(
  json: any,
): GetKeyExecutives200ResponseKeyExecutivesInner {
  return GetKeyExecutives200ResponseKeyExecutivesInnerToJSONTyped(json, false);
}

export function GetKeyExecutives200ResponseKeyExecutivesInnerToJSONTyped(
  value?: GetKeyExecutives200ResponseKeyExecutivesInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    title: value["title"],
    age: value["age"],
    year_born: value["yearBorn"],
    pay: value["pay"],
  };
}
