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
 * @interface InlineObject15MetaIndicator
 */
export interface InlineObject15MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject15MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject15MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject15MetaIndicator interface.
 */
export function instanceOfInlineObject15MetaIndicator(
  value: object,
): value is InlineObject15MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject15MetaIndicatorFromJSON(
  json: any,
): InlineObject15MetaIndicator {
  return InlineObject15MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject15MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject15MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject15MetaIndicatorToJSON(
  json: any,
): InlineObject15MetaIndicator {
  return InlineObject15MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject15MetaIndicatorToJSONTyped(
  value?: InlineObject15MetaIndicator | null,
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
