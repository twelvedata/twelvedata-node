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
 * @interface InlineObject12MetaIndicator
 */
export interface InlineObject12MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject12MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject12MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject12MetaIndicator interface.
 */
export function instanceOfInlineObject12MetaIndicator(
  value: object,
): value is InlineObject12MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject12MetaIndicatorFromJSON(
  json: any,
): InlineObject12MetaIndicator {
  return InlineObject12MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject12MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject12MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject12MetaIndicatorToJSON(
  json: any,
): InlineObject12MetaIndicator {
  return InlineObject12MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject12MetaIndicatorToJSONTyped(
  value?: InlineObject12MetaIndicator | null,
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
