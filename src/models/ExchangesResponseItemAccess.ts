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
 * @interface ExchangesResponseItemAccess
 */
export interface ExchangesResponseItemAccess {
  /**
   * Level of access to the symbol
   * @type {string}
   * @memberof ExchangesResponseItemAccess
   */
  global?: string;
  /**
   * The individual plan name for the symbol
   * @type {string}
   * @memberof ExchangesResponseItemAccess
   */
  plan?: string;
  /**
   * The business plan name for the symbol
   * @type {string}
   * @memberof ExchangesResponseItemAccess
   */
  planBusiness?: string;
}

/**
 * Check if a given object implements the ExchangesResponseItemAccess interface.
 */
export function instanceOfExchangesResponseItemAccess(
  value: object,
): value is ExchangesResponseItemAccess {
  return true;
}

export function ExchangesResponseItemAccessFromJSON(
  json: any,
): ExchangesResponseItemAccess {
  return ExchangesResponseItemAccessFromJSONTyped(json, false);
}

export function ExchangesResponseItemAccessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExchangesResponseItemAccess {
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

export function ExchangesResponseItemAccessToJSON(
  json: any,
): ExchangesResponseItemAccess {
  return ExchangesResponseItemAccessToJSONTyped(json, false);
}

export function ExchangesResponseItemAccessToJSONTyped(
  value?: ExchangesResponseItemAccess | null,
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
