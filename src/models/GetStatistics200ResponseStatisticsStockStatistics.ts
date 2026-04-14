/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Stock statistics of the company
 * @export
 * @interface GetStatistics200ResponseStatisticsStockStatistics
 */
export interface GetStatistics200ResponseStatisticsStockStatistics {
  /**
   * Refers for the shares outstanding currently held by all its shareholders
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  sharesOutstanding?: number;
  /**
   * Refers to floating stock is the number of public shares a company has available for trading on the open market
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  floatShares?: number;
  /**
   * Refers to the average 10 days volume
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  avg10Volume?: number;
  /**
   * Refers to the average 90 days volume
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  avg90Volume?: number;
  /**
   * Refers to the number of shares that have been shorted
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  sharesShort?: number;
  /**
   * Refers to short ratio measure
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  shortRatio?: number;
  /**
   * Refers to the number of shorted shares divided by the number of shares outstanding
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  shortPercentOfSharesOutstanding?: number;
  /**
   * Refers to the percentage of shares held by the company insiders
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  percentHeldByInsiders?: number;
  /**
   * Refers to the percentage of shares held by the institutions
   * @type {number}
   * @memberof GetStatistics200ResponseStatisticsStockStatistics
   */
  percentHeldByInstitutions?: number;
}

/**
 * Check if a given object implements the GetStatistics200ResponseStatisticsStockStatistics interface.
 */
export function instanceOfGetStatistics200ResponseStatisticsStockStatistics(
  value: object,
): value is GetStatistics200ResponseStatisticsStockStatistics {
  return true;
}

export function GetStatistics200ResponseStatisticsStockStatisticsFromJSON(
  json: any,
): GetStatistics200ResponseStatisticsStockStatistics {
  return GetStatistics200ResponseStatisticsStockStatisticsFromJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsStockStatisticsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetStatistics200ResponseStatisticsStockStatistics {
  if (json == null) {
    return json;
  }
  return {
    sharesOutstanding:
      json["shares_outstanding"] == null
        ? undefined
        : json["shares_outstanding"],
    floatShares:
      json["float_shares"] == null ? undefined : json["float_shares"],
    avg10Volume:
      json["avg_10_volume"] == null ? undefined : json["avg_10_volume"],
    avg90Volume:
      json["avg_90_volume"] == null ? undefined : json["avg_90_volume"],
    sharesShort:
      json["shares_short"] == null ? undefined : json["shares_short"],
    shortRatio: json["short_ratio"] == null ? undefined : json["short_ratio"],
    shortPercentOfSharesOutstanding:
      json["short_percent_of_shares_outstanding"] == null
        ? undefined
        : json["short_percent_of_shares_outstanding"],
    percentHeldByInsiders:
      json["percent_held_by_insiders"] == null
        ? undefined
        : json["percent_held_by_insiders"],
    percentHeldByInstitutions:
      json["percent_held_by_institutions"] == null
        ? undefined
        : json["percent_held_by_institutions"],
  };
}

export function GetStatistics200ResponseStatisticsStockStatisticsToJSON(
  json: any,
): GetStatistics200ResponseStatisticsStockStatistics {
  return GetStatistics200ResponseStatisticsStockStatisticsToJSONTyped(
    json,
    false,
  );
}

export function GetStatistics200ResponseStatisticsStockStatisticsToJSONTyped(
  value?: GetStatistics200ResponseStatisticsStockStatistics | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    shares_outstanding: value["sharesOutstanding"],
    float_shares: value["floatShares"],
    avg_10_volume: value["avg10Volume"],
    avg_90_volume: value["avg90Volume"],
    shares_short: value["sharesShort"],
    short_ratio: value["shortRatio"],
    short_percent_of_shares_outstanding:
      value["shortPercentOfSharesOutstanding"],
    percent_held_by_insiders: value["percentHeldByInsiders"],
    percent_held_by_institutions: value["percentHeldByInstitutions"],
  };
}
