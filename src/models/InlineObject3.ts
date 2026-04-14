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
 * @interface InlineObject3
 */
export interface InlineObject3 {
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  performanceRating?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  returnRating?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject3
   */
  riskRating?: number;
}

/**
 * Check if a given object implements the InlineObject3 interface.
 */
export function instanceOfInlineObject3(value: object): value is InlineObject3 {
  return true;
}

export function InlineObject3FromJSON(json: any): InlineObject3 {
  return InlineObject3FromJSONTyped(json, false);
}

export function InlineObject3FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject3 {
  if (json == null) {
    return json;
  }
  return {
    performanceRating:
      json["performance_rating"] == null
        ? undefined
        : json["performance_rating"],
    returnRating:
      json["return_rating"] == null ? undefined : json["return_rating"],
    riskRating: json["risk_rating"] == null ? undefined : json["risk_rating"],
  };
}

export function InlineObject3ToJSON(json: any): InlineObject3 {
  return InlineObject3ToJSONTyped(json, false);
}

export function InlineObject3ToJSONTyped(
  value?: InlineObject3 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    performance_rating: value["performanceRating"],
    return_rating: value["returnRating"],
    risk_rating: value["riskRating"],
  };
}
