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
 * @interface GetAnalystRatingsLight200ResponseRatingsInner
 */
export interface GetAnalystRatingsLight200ResponseRatingsInner {
  /**
   * Date when the rating was released
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseRatingsInner
   */
  date: string;
  /**
   * Firm that issued the ranking
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseRatingsInner
   */
  firm: string;
  /**
   * Defines the action of the firm to ranking, could be `Maintains`, `Upgrade`, `Downgrade`, `Initiates` or `Reiterates`
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseRatingsInner
   */
  ratingChange?: string;
  /**
   * Current firm's ranking of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseRatingsInner
   */
  ratingCurrent?: string;
  /**
   * Prior firm's ranking of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseRatingsInner
   */
  ratingPrior?: string;
}

/**
 * Check if a given object implements the GetAnalystRatingsLight200ResponseRatingsInner interface.
 */
export function instanceOfGetAnalystRatingsLight200ResponseRatingsInner(
  value: object,
): value is GetAnalystRatingsLight200ResponseRatingsInner {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("firm" in value) || value["firm"] === undefined) return false;
  return true;
}

export function GetAnalystRatingsLight200ResponseRatingsInnerFromJSON(
  json: any,
): GetAnalystRatingsLight200ResponseRatingsInner {
  return GetAnalystRatingsLight200ResponseRatingsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetAnalystRatingsLight200ResponseRatingsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAnalystRatingsLight200ResponseRatingsInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    firm: json["firm"],
    ratingChange:
      json["rating_change"] == null ? undefined : json["rating_change"],
    ratingCurrent:
      json["rating_current"] == null ? undefined : json["rating_current"],
    ratingPrior:
      json["rating_prior"] == null ? undefined : json["rating_prior"],
  };
}

export function GetAnalystRatingsLight200ResponseRatingsInnerToJSON(
  json: any,
): GetAnalystRatingsLight200ResponseRatingsInner {
  return GetAnalystRatingsLight200ResponseRatingsInnerToJSONTyped(json, false);
}

export function GetAnalystRatingsLight200ResponseRatingsInnerToJSONTyped(
  value?: GetAnalystRatingsLight200ResponseRatingsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    firm: value["firm"],
    rating_change: value["ratingChange"],
    rating_current: value["ratingCurrent"],
    rating_prior: value["ratingPrior"],
  };
}
