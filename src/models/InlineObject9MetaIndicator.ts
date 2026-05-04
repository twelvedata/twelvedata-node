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
 * @interface InlineObject9MetaIndicator
 */
export interface InlineObject9MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject9MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject9MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject9MetaIndicator interface.
 */
export function instanceOfInlineObject9MetaIndicator(
  value: object,
): value is InlineObject9MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject9MetaIndicatorFromJSON(
  json: any,
): InlineObject9MetaIndicator {
  return InlineObject9MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject9MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject9MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject9MetaIndicatorToJSON(
  json: any,
): InlineObject9MetaIndicator {
  return InlineObject9MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject9MetaIndicatorToJSONTyped(
  value?: InlineObject9MetaIndicator | null,
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
