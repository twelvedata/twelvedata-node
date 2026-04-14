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
 * @interface InlineObject13MetaIndicator
 */
export interface InlineObject13MetaIndicator {
  /**
   *
   * @type {string}
   * @memberof InlineObject13MetaIndicator
   */
  maType?: string;
  /**
   *
   * @type {number}
   * @memberof InlineObject13MetaIndicator
   */
  maxPeriod?: number;
  /**
   *
   * @type {number}
   * @memberof InlineObject13MetaIndicator
   */
  minPeriod?: number;
  /**
   *
   * @type {string}
   * @memberof InlineObject13MetaIndicator
   */
  name?: string;
  /**
   *
   * @type {Array<number>}
   * @memberof InlineObject13MetaIndicator
   */
  periods?: Array<number>;
  /**
   *
   * @type {string}
   * @memberof InlineObject13MetaIndicator
   */
  seriesType?: string;
}

/**
 * Check if a given object implements the InlineObject13MetaIndicator interface.
 */
export function instanceOfInlineObject13MetaIndicator(
  value: object,
): value is InlineObject13MetaIndicator {
  return true;
}

export function InlineObject13MetaIndicatorFromJSON(
  json: any,
): InlineObject13MetaIndicator {
  return InlineObject13MetaIndicatorFromJSONTyped(json, false);
}

export function InlineObject13MetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject13MetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    maType: json["ma_type"] == null ? undefined : json["ma_type"],
    maxPeriod: json["max_period"] == null ? undefined : json["max_period"],
    minPeriod: json["min_period"] == null ? undefined : json["min_period"],
    name: json["name"] == null ? undefined : json["name"],
    periods: json["periods"] == null ? undefined : json["periods"],
    seriesType: json["series_type"] == null ? undefined : json["series_type"],
  };
}

export function InlineObject13MetaIndicatorToJSON(
  json: any,
): InlineObject13MetaIndicator {
  return InlineObject13MetaIndicatorToJSONTyped(json, false);
}

export function InlineObject13MetaIndicatorToJSONTyped(
  value?: InlineObject13MetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ma_type: value["maType"],
    max_period: value["maxPeriod"],
    min_period: value["minPeriod"],
    name: value["name"],
    periods: value["periods"],
    series_type: value["seriesType"],
  };
}
