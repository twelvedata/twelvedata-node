/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Stock price summary of the company
 * @export
 * @interface GetStatistics200ResponseStatisticsStockPriceSummary
 */
export interface GetStatistics200ResponseStatisticsStockPriceSummary {
  /**
   * Refers to the lowest price at which stock traded during a year
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  fiftyTwoWeekLow?: number;
  /**
   * Refers to the highest price at which stock traded during a year
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  fiftyTwoWeekHigh?: number;
  /**
   * Refers to the change between lowest and highest prices during a year
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  fiftyTwoWeekChange?: number;
  /**
   * Refers to beta measure relative to the primary benchmark (index) of the country
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  beta?: number;
  /**
   * Refers to the 50-day simple moving average
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  day50Ma?: number;
  /**
   * Refers to the 200-day simple moving average
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockPriceSummary
   */
  day200Ma?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsStockPriceSummary interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsStockPriceSummary(
  value: object,
): value is GetStatistics200ResponseStatisticsStockPriceSummary {
  return true;
}

export function GetStatistics200ResponseStatisticsStockPriceSummaryFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsStockPriceSummary {
  return GetStatistics200ResponseStatisticsStockPriceSummaryFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsStockPriceSummaryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsStockPriceSummary {
  if (json == null) {
    return json;
  }
  return {
    fiftyTwoWeekLow:
      json["fifty_two_week_low"] == null
        ? undefined
        : json["fifty_two_week_low"],
    fiftyTwoWeekHigh:
      json["fifty_two_week_high"] == null
        ? undefined
        : json["fifty_two_week_high"],
    fiftyTwoWeekChange:
      json["fifty_two_week_change"] == null
        ? undefined
        : json["fifty_two_week_change"],
    beta: json["beta"] == null ? undefined : json["beta"],
    day50Ma: json["day_50_ma"] == null ? undefined : json["day_50_ma"],
    day200Ma: json["day_200_ma"] == null ? undefined : json["day_200_ma"],
  };
}

export function GetStatistics200ResponseStatisticsStockPriceSummaryToJSON(
  json: any,
): GetStatistics200ResponseStatisticsStockPriceSummary {
  return GetStatistics200ResponseStatisticsStockPriceSummaryToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsStockPriceSummaryToJSONTyped(
  value?: GetStatistics200ResponseStatisticsStockPriceSummary | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    fifty_two_week_low: value["fiftyTwoWeekLow"],
    fifty_two_week_high: value["fiftyTwoWeekHigh"],
    fifty_two_week_change: value["fiftyTwoWeekChange"],
    beta: value["beta"],
    day_50_ma: value["day50Ma"],
    day_200_ma: value["day200Ma"],
  };
}
