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
 * @interface InlineObject10MetaIndicator
 */
export interface InlineObject10MetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof InlineObject10MetaIndicator
   */
  name: string;
  /**
   * Price type on which technical indicator is calculated
   * @type {string}
   * @memberof InlineObject10MetaIndicator
   */
  seriesType: string;
}

/**
 * Check if a given object implements the InlineObject10MetaIndicator interface.
 */
export function instanceOfInlineObject10MetaIndicator(
  value: object,
): value is InlineObject10MetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("seriesType" in value) || value["seriesType"] === undefined)
    return false;
  return true;
}

export function InlineObject10MetaIndicatorFromJSON(
  json: any,
): InlineObject10MetaIndicator {
  return InlineObject10MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject10MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject10MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    seriesType: json["series_type"],
  };
}

export function InlineObject10MetaIndicatorToJSON(
  json: any,
): InlineObject10MetaIndicator {
  return InlineObject10MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject10MetaIndicatorToJSONTyped(
  value?: InlineObject10MetaIndicator | null,
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
