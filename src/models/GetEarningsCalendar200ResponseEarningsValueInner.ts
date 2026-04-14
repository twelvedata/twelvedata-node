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
 * @interface GetEarningsCalendar200ResponseEarningsValueInner
 */
export interface GetEarningsCalendar200ResponseEarningsValueInner {
  /**
   * Instrument symbol (ticker)
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  symbol?: string;
  /**
   * Full name of instrument
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  name?: string;
  /**
   * Currency in which instrument is traded by ISO 4217 standard
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  currency?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  micCode?: string;
  /**
   * Country where exchange is located
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  country?: string;
  /**
   * Can be either of the following values: `Pre Market`, `After Hours`, `Time Not Supplied`
   * @type {string}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  time?: string;
  /**
   * Analyst estimate of the future company earning
   * @type {number}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  epsEstimate?: number;
  /**
   * Actual value of reported earning
   * @type {number}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  epsActual?: number;
  /**
   * Delta between `eps_actual` and `eps_estimate`
   * @type {number}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  difference?: number;
  /**
   * Surprise in percentage of the `eps_actual` related to `eps_estimate`
   * @type {number}
   * @memberof GetEarningsCalendar200ResponseEarningsValueInner
   */
  surprisePrc?: number;
}

/**
 * Check if a given object implements the GetEarningsCalendar200ResponseEarningsValueInner interface.
 */
export function instanceOfGetEarningsCalendar200ResponseEarningsValueInner(
  value: object,
): value is GetEarningsCalendar200ResponseEarningsValueInner {
  return true;
}

export function GetEarningsCalendar200ResponseEarningsValueInnerFromJSON(
  json: any,
): GetEarningsCalendar200ResponseEarningsValueInner {
  return GetEarningsCalendar200ResponseEarningsValueInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetEarningsCalendar200ResponseEarningsValueInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEarningsCalendar200ResponseEarningsValueInner {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    country: json["country"] == null ? undefined : json["country"],
    time: json["time"] == null ? undefined : json["time"],
    epsEstimate:
      json["eps_estimate"] == null ? undefined : json["eps_estimate"],
    epsActual: json["eps_actual"] == null ? undefined : json["eps_actual"],
    difference: json["difference"] == null ? undefined : json["difference"],
    surprisePrc:
      json["surprise_prc"] == null ? undefined : json["surprise_prc"],
  };
}

export function GetEarningsCalendar200ResponseEarningsValueInnerToJSON(
  json: any,
): GetEarningsCalendar200ResponseEarningsValueInner {
  return GetEarningsCalendar200ResponseEarningsValueInnerToJSONTyped(
    json,
    false,
  );
}

export function GetEarningsCalendar200ResponseEarningsValueInnerToJSONTyped(
  value?: GetEarningsCalendar200ResponseEarningsValueInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    country: value["country"],
    time: value["time"],
    eps_estimate: value["epsEstimate"],
    eps_actual: value["epsActual"],
    difference: value["difference"],
    surprise_prc: value["surprisePrc"],
  };
}
