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
 * @interface GetTimeSeriesIchimoku200ResponseMetaIndicator
 */
export interface GetTimeSeriesIchimoku200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  name: string;
  /**
   * The time period used for generating the conversation line
   * @type {number}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  conversionLinePeriod: number;
  /**
   * The time period used for generating the base line
   * @type {number}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  baseLinePeriod: number;
  /**
   * The time period used for generating the leading span B line
   * @type {number}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  leadingSpanBPeriod: number;
  /**
   * The time period used for generating the lagging span line
   * @type {number}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  laggingSpanPeriod: number;
  /**
   * Indicates whether to include ahead span period
   * @type {boolean}
   * @memberof GetTimeSeriesIchimoku200ResponseMetaIndicator
   */
  includeAheadSpanPeriod: boolean;
}

/**
 * Check if a given object implements the GetTimeSeriesIchimoku200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesIchimoku200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesIchimoku200ResponseMetaIndicator {
  if (!("name" in value) || value["name"] === undefined) return false;
  if (
    !("conversionLinePeriod" in value) ||
    value["conversionLinePeriod"] === undefined
  )
    return false;
  if (!("baseLinePeriod" in value) || value["baseLinePeriod"] === undefined)
    return false;
  if (
    !("leadingSpanBPeriod" in value) ||
    value["leadingSpanBPeriod"] === undefined
  )
    return false;
  if (
    !("laggingSpanPeriod" in value) ||
    value["laggingSpanPeriod"] === undefined
  )
    return false;
  if (
    !("includeAheadSpanPeriod" in value) ||
    value["includeAheadSpanPeriod"] === undefined
  )
    return false;
  return true;
}

export function GetTimeSeriesIchimoku200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesIchimoku200ResponseMetaIndicator {
  return GetTimeSeriesIchimoku200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesIchimoku200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesIchimoku200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"],
    conversionLinePeriod: json["conversion_line_period"],
    baseLinePeriod: json["base_line_period"],
    leadingSpanBPeriod: json["leading_span_b_period"],
    laggingSpanPeriod: json["lagging_span_period"],
    includeAheadSpanPeriod: json["include_ahead_span_period"],
  };
}

export function GetTimeSeriesIchimoku200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesIchimoku200ResponseMetaIndicator {
  return GetTimeSeriesIchimoku200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesIchimoku200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesIchimoku200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
    conversion_line_period: value["conversionLinePeriod"],
    base_line_period: value["baseLinePeriod"],
    leading_span_b_period: value["leadingSpanBPeriod"],
    lagging_span_period: value["laggingSpanPeriod"],
    include_ahead_span_period: value["includeAheadSpanPeriod"],
  };
}
