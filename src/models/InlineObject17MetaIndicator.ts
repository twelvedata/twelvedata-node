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
 * @interface InlineObject17MetaIndicator
 */
export interface InlineObject17MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject17MetaIndicator
   */
  name?: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject17MetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the InlineObject17MetaIndicator interface.
 */
export function instanceOfInlineObject17MetaIndicator(
  value: object,
): value is InlineObject17MetaIndicator {
  return true;
}

export function InlineObject17MetaIndicatorFromJSON(
  json: any,
): InlineObject17MetaIndicator {
  return InlineObject17MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject17MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject17MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function InlineObject17MetaIndicatorToJSON(
  json: any,
): InlineObject17MetaIndicator {
  return InlineObject17MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject17MetaIndicatorToJSONTyped(
  value?: InlineObject17MetaIndicator | null,
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
