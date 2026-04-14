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
 * @interface EtfResponseItemAccess
 */
export interface EtfResponseItemAccess {
  /**
   * Level of access to the symbol
   * @type {string}
   * @memberof EtfResponseItemAccess
   */
  global?: string;
  /**
   * The individual plan name for the symbol
   * @type {string}
   * @memberof EtfResponseItemAccess
   */
  plan?: string;
  /**
   * The business plan name for the symbol
   * @type {string}
   * @memberof EtfResponseItemAccess
   */
  planBusiness?: string;
}

/**
 * Check if a given object implements the EtfResponseItemAccess interface.
 */
export function instanceOfEtfResponseItemAccess(
  value: object,
): value is EtfResponseItemAccess {
  return true;
}

export function EtfResponseItemAccessFromJSON(
  json: any,
): EtfResponseItemAccess {
  return EtfResponseItemAccessFromJSONTyped(json, false);
}

export function EtfResponseItemAccessFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): EtfResponseItemAccess {
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

export function EtfResponseItemAccessToJSON(json: any): EtfResponseItemAccess {
  return EtfResponseItemAccessToJSONTyped(json, false);
}

export function EtfResponseItemAccessToJSONTyped(
  value?: EtfResponseItemAccess | null,
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
