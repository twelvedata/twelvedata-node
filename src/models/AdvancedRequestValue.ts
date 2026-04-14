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
 * @interface AdvancedRequestValue
 */
export interface AdvancedRequestValue {
  /**
   * Requested url
   * @type {string}
   * @memberof AdvancedRequestValue
   */
  url?: string;
}

/**
 * Check if a given object implements the AdvancedRequestValue interface.
 */
export function instanceOfAdvancedRequestValue(
  value: object,
): value is AdvancedRequestValue {
  return true;
}

export function AdvancedRequestValueFromJSON(json: any): AdvancedRequestValue {
  return AdvancedRequestValueFromJSONTyped(json, false);
}

export function AdvancedRequestValueFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdvancedRequestValue {
  if (json == null) {
    return json;
  }
  return {
    url: json["url"] == null ? undefined : json["url"],
  };
}

export function AdvancedRequestValueToJSON(json: any): AdvancedRequestValue {
  return AdvancedRequestValueToJSONTyped(json, false);
}

export function AdvancedRequestValueToJSONTyped(
  value?: AdvancedRequestValue | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    url: value["url"],
  };
}
