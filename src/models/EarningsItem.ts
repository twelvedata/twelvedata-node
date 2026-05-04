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
 * @interface EarningsItem
 */
export interface EarningsItem {
  /**
   * Date of earning release
   * @type {string}
   * @memberof EarningsItem
   */
  date: string;
  /**
   * Time of earning release, can be either of the following values: `Pre Market`, `After Hours`, `Time Not Supplied`
   * @type {string}
   * @memberof EarningsItem
   */
  time?: string;
  /**
   * Analyst estimate of the future company earning
   * @type {number}
   * @memberof EarningsItem
   */
  epsEstimate?: number;
  /**
   * Actual value of reported earning
   * @type {number}
   * @memberof EarningsItem
   */
  epsActual?: number;
  /**
   * Delta between `eps_actual` and `eps_estimate`
   * @type {number}
   * @memberof EarningsItem
   */
  difference?: number;
  /**
   * Surprise in the percentage of the `eps_actual` related to `eps_estimate`
   * @type {number}
   * @memberof EarningsItem
   */
  surprisePrc?: number;
}

/**
 * Check if a given object implements the EarningsItem interface.
 */
export function instanceOfEarningsItem(value: object): value is EarningsItem {
  if (!("date" in value) || value["date"] === undefined) return false;
  return true;
}

export function EarningsItemFromJSON(json: any): EarningsItem {
  return EarningsItemFromJSONTyped(json, false);
}

export function EarningsItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EarningsItem {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    time: json["time"] == null ? undefined : json["time"],
    epsEstimate:
      json["eps_estimate"] == null ? undefined : json["eps_estimate"],
    epsActual: json["eps_actual"] == null ? undefined : json["eps_actual"],
    difference: json["difference"] == null ? undefined : json["difference"],
    surprisePrc:
      json["surprise_prc"] == null ? undefined : json["surprise_prc"],
  };
}

export function EarningsItemToJSON(json: any): EarningsItem {
  return EarningsItemToJSONTyped(json, false);
}

export function EarningsItemToJSONTyped(
  value?: EarningsItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    time: value["time"],
    eps_estimate: value["epsEstimate"],
    eps_actual: value["epsActual"],
    difference: value["difference"],
    surprise_prc: value["surprisePrc"],
  };
}
