/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Technical indicator information
 * @export
 * @interface InlineObject14MetaIndicator
 */
export interface InlineObject14MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject14MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject14MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject14MetaIndicator interface.
 */
export function instanceOfInlineObject14MetaIndicator(
  value: object,
): value is InlineObject14MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject14MetaIndicatorFromJSON(
  json: any,
): InlineObject14MetaIndicator {
  return InlineObject14MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject14MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject14MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject14MetaIndicatorToJSON(
  json: any,
): InlineObject14MetaIndicator {
  return InlineObject14MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject14MetaIndicatorToJSONTyped(
  value?: InlineObject14MetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    series_type: value["seriesType"],
  };
}
