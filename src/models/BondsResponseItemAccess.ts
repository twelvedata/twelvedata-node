/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Info on which plan symbol is available (displayed then `show_plan` is `true`)
 * @export
 * @interface BondsResponseItemAccess
 */
export interface BondsResponseItemAccess {
  /**
   * Level of access to the symbol
   * @type {string}
   * @memberof BondsResponseItemAccess
   */
  global?: string;
  /**
   * The individual plan name for the symbol
   * @type {string}
   * @memberof BondsResponseItemAccess
   */
  plan?: string;
  /**
   * The business plan name for the symbol
   * @type {string}
   * @memberof BondsResponseItemAccess
   */
  planBusiness?: string;
}

/**
 * Check if a given object implements the BondsResponseItemAccess interface.
 */
export function instanceOfBondsResponseItemAccess(
  value: object,
): value is BondsResponseItemAccess {
  return true;
}

export function BondsResponseItemAccessFromJSON(
  json: any,
): BondsResponseItemAccess {
  return BondsResponseItemAccessFromJSONTyped(json, false);
}

export function BondsResponseItemAccessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BondsResponseItemAccess {
  if (json == null) {
    return json;
  }
  return {
    global: json["global"] == null ? undefined : json["global"],
    plan: json["plan"] == null ? undefined : json["plan"],
    planBusiness:
      json["plan_business"] == null ? undefined : json["plan_business"],
  };
}

export function BondsResponseItemAccessToJSON(
  json: any,
): BondsResponseItemAccess {
  return BondsResponseItemAccessToJSONTyped(json, false);
}

export function BondsResponseItemAccessToJSONTyped(
  value?: BondsResponseItemAccess | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    global: value["global"],
    plan: value["plan"],
    plan_business: value["planBusiness"],
  };
}
