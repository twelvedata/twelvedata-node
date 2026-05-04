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
 * @interface InlineObject11MetaIndicator
 */
export interface InlineObject11MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject11MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject11MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject11MetaIndicator interface.
 */
export function instanceOfInlineObject11MetaIndicator(
  value: object,
): value is InlineObject11MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject11MetaIndicatorFromJSON(
  json: any,
): InlineObject11MetaIndicator {
  return InlineObject11MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject11MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject11MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject11MetaIndicatorToJSON(
  json: any,
): InlineObject11MetaIndicator {
  return InlineObject11MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject11MetaIndicatorToJSONTyped(
  value?: InlineObject11MetaIndicator | null,
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
