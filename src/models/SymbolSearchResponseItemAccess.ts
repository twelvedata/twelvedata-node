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
 * @interface SymbolSearchResponseItemAccess
 */
export interface SymbolSearchResponseItemAccess {
  /**
   * Level of access to the symbol
   * @type {string}
   * @memberof SymbolSearchResponseItemAccess
   */
  global: string;
  /**
   * The individual plan name for the symbol
   * @type {string}
   * @memberof SymbolSearchResponseItemAccess
   */
  plan: string;
  /**
   * The business plan name for the symbol
   * @type {string}
   * @memberof SymbolSearchResponseItemAccess
   */
  planBusiness: string;
}

/**
 * Check if a given object implements the SymbolSearchResponseItemAccess interface.
 */
export function instanceOfSymbolSearchResponseItemAccess(
  value: object,
): value is SymbolSearchResponseItemAccess {
  if (!("global" in value) || value["global"] === undefined) return false;
  if (!("plan" in value) || value["plan"] === undefined) return false;
  if (!("planBusiness" in value) || value["planBusiness"] === undefined)
    return false;
  return true;
}

export function SymbolSearchResponseItemAccessFromJSON(
  json: any,
): SymbolSearchResponseItemAccess {
  return SymbolSearchResponseItemAccessFromJSONTyped(json, false);
}

export function SymbolSearchResponseItemAccessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SymbolSearchResponseItemAccess {
  if (json == null) {
    return json;
  }
  return {
    global: json["global"],
    plan: json["plan"],
    planBusiness: json["plan_business"],
  };
}

export function SymbolSearchResponseItemAccessToJSON(
  json: any,
): SymbolSearchResponseItemAccess {
  return SymbolSearchResponseItemAccessToJSONTyped(json, false);
}

export function SymbolSearchResponseItemAccessToJSONTyped(
  value?: SymbolSearchResponseItemAccess | null,
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
