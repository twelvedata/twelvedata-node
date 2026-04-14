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
 * @interface InlineObject4
 */
export interface InlineObject4 {
  /**
   *
   * @type {number}
   * @memberof InlineObject4
   */
  corporateAum?: number;
  /**
   *
   * @type {{ [key: string]: number; }}
   * @memberof InlineObject4
   */
  corporateEsgPillars?: { [key: string]: number };
  /**
   *
   * @type {number}
   * @memberof InlineObject4
   */
  score?: number;
  /**
   *
   * @type {boolean}
   * @memberof InlineObject4
   */
  sustainableInvestment?: boolean;
}

/**
 * Check if a given object implements the InlineObject4 interface.
 */
export function instanceOfInlineObject4(value: object): value is InlineObject4 {
  return true;
}

export function InlineObject4FromJSON(json: any): InlineObject4 {
  return InlineObject4FromJSONTyped(json, false);
}

export function InlineObject4FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject4 {
  if (json == null) {
    return json;
  }
  return {
    corporateAum:
      json["corporate_aum"] == null ? undefined : json["corporate_aum"],
    corporateEsgPillars:
      json["corporate_esg_pillars"] == null
        ? undefined
        : json["corporate_esg_pillars"],
    score: json["score"] == null ? undefined : json["score"],
    sustainableInvestment:
      json["sustainable_investment"] == null
        ? undefined
        : json["sustainable_investment"],
  };
}

export function InlineObject4ToJSON(json: any): InlineObject4 {
  return InlineObject4ToJSONTyped(json, false);
}

export function InlineObject4ToJSONTyped(
  value?: InlineObject4 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    corporate_aum: value["corporateAum"],
    corporate_esg_pillars: value["corporateEsgPillars"],
    score: value["score"],
    sustainable_investment: value["sustainableInvestment"],
  };
}
