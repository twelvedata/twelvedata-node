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
 * @interface InlineObject16MetaIndicator
 */
export interface InlineObject16MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject16MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject16MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject16MetaIndicator interface.
 */
export function instanceOfInlineObject16MetaIndicator(
  value: object,
): value is InlineObject16MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject16MetaIndicatorFromJSON(
  json: any,
): InlineObject16MetaIndicator {
  return InlineObject16MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject16MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject16MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject16MetaIndicatorToJSON(
  json: any,
): InlineObject16MetaIndicator {
  return InlineObject16MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject16MetaIndicatorToJSONTyped(
  value?: InlineObject16MetaIndicator | null,
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
