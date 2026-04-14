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
 * @interface InlineObject2Minimums
 */
export interface InlineObject2Minimums {
  /**
   *
   * @type {number}
   * @memberof InlineObject2Minimums
   */
  additionalInvestment?: number;
  /**
   *
   * @type {object}
   * @memberof InlineObject2Minimums
   */
  additionalIraInvestment?: object;
  /**
   *
   * @type {number}
   * @memberof InlineObject2Minimums
   */
  initialInvestment?: number;
  /**
   *
   * @type {object}
   * @memberof InlineObject2Minimums
   */
  initialIraInvestment?: object;
}

/**
 * Check if a given object implements the InlineObject2Minimums interface.
 */
export function instanceOfInlineObject2Minimums(
  value: object,
): value is InlineObject2Minimums {
  return true;
}

export function InlineObject2MinimumsFromJSON(
  json: any,
): InlineObject2Minimums {
  return InlineObject2MinimumsFromJSONTyped(json, false);
}

export function InlineObject2MinimumsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject2Minimums {
  if (json == null) {
    return json;
  }
  return {
    additionalInvestment:
      json["additional_investment"] == null
        ? undefined
        : json["additional_investment"],
    additionalIraInvestment:
      json["additional_ira_investment"] == null
        ? undefined
        : json["additional_ira_investment"],
    initialInvestment:
      json["initial_investment"] == null
        ? undefined
        : json["initial_investment"],
    initialIraInvestment:
      json["initial_ira_investment"] == null
        ? undefined
        : json["initial_ira_investment"],
  };
}

export function InlineObject2MinimumsToJSON(json: any): InlineObject2Minimums {
  return InlineObject2MinimumsToJSONTyped(json, false);
}

export function InlineObject2MinimumsToJSONTyped(
  value?: InlineObject2Minimums | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    additional_investment: value["additionalInvestment"],
    additional_ira_investment: value["additionalIraInvestment"],
    initial_investment: value["initialInvestment"],
    initial_ira_investment: value["initialIraInvestment"],
  };
}
