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
 * @interface InlineObject8MetaIndicator
 */
export interface InlineObject8MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject8MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject8MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject8MetaIndicator interface.
 */
export function instanceOfInlineObject8MetaIndicator(
  value: object,
): value is InlineObject8MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject8MetaIndicatorFromJSON(
  json: any,
): InlineObject8MetaIndicator {
  return InlineObject8MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject8MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject8MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject8MetaIndicatorToJSON(
  json: any,
): InlineObject8MetaIndicator {
  return InlineObject8MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject8MetaIndicatorToJSONTyped(
  value?: InlineObject8MetaIndicator | null,
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
