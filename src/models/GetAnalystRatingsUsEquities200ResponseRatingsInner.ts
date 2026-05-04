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
 * @interface GetAnalystRatingsUsEquities200ResponseRatingsInner
 */
export interface GetAnalystRatingsUsEquities200ResponseRatingsInner {
  /**
   * Date when the rating was released
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  date: string;
  /**
   * Firm that issued the ranking
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  firm: string;
  /**
   * Name of an analyst
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  analystName?: string;
  /**
   * Defines the action of the firm to ranking, could be `Maintains`, `Upgrade`, `Downgrade`, `Initiates`, `Reiterates`, `Assumes`, or `Reinstates`
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  ratingChange?: string;
  /**
   * Current firm's ranking of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  ratingCurrent?: string;
  /**
   * Prior firm's ranking of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  ratingPrior?: string;
  /**
   * Time when the rating was released or updated
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  time?: string;
  /**
   * Action that firm took towards target price
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  actionPriceTarget?: string;
  /**
   * Current firm's price target for the instrument
   * @type {number}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  priceTargetCurrent?: number;
  /**
   * Prior firm's price target for the instrument
   * @type {number}
   * @memberof GetAnalystRatingsUsEquities200ResponseRatingsInner
   */
  priceTargetPrior?: number;
}

/**
 * Check if a given object implements the GetAnalystRatingsUsEquities200ResponseRatingsInner interface.
 */
export function instanceOfGetAnalystRatingsUsEquities200ResponseRatingsInner(
  value: object,
): value is GetAnalystRatingsUsEquities200ResponseRatingsInner {
  if (!("date" in value) || value["date"] === undefined) return false;
  if (!("firm" in value) || value["firm"] === undefined) return false;
  return true;
}

export function GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSON(
  json: any,
): GetAnalystRatingsUsEquities200ResponseRatingsInner {
  return GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAnalystRatingsUsEquities200ResponseRatingsInner {
  if (json == null) {
    return json;
  }
  return {
    date: json["date"],
    firm: json["firm"],
    analystName:
      json["analyst_name"] == null ? undefined : json["analyst_name"],
    ratingChange:
      json["rating_change"] == null ? undefined : json["rating_change"],
    ratingCurrent:
      json["rating_current"] == null ? undefined : json["rating_current"],
    ratingPrior:
      json["rating_prior"] == null ? undefined : json["rating_prior"],
    time: json["time"] == null ? undefined : json["time"],
    actionPriceTarget:
      json["action_price_target"] == null
        ? undefined
        : json["action_price_target"],
    priceTargetCurrent:
      json["price_target_current"] == null
        ? undefined
        : json["price_target_current"],
    priceTargetPrior:
      json["price_target_prior"] == null
        ? undefined
        : json["price_target_prior"],
  };
}

export function GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSON(
  json: any,
): GetAnalystRatingsUsEquities200ResponseRatingsInner {
  return GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSONTyped(
  value?: GetAnalystRatingsUsEquities200ResponseRatingsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    date: value["date"],
    firm: value["firm"],
    analyst_name: value["analystName"],
    rating_change: value["ratingChange"],
    rating_current: value["ratingCurrent"],
    rating_prior: value["ratingPrior"],
    time: value["time"],
    action_price_target: value["actionPriceTarget"],
    price_target_current: value["priceTargetCurrent"],
    price_target_prior: value["priceTargetPrior"],
  };
}
