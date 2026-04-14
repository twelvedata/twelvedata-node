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
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  /**
   * Symbol ticker of a holding instrument
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
   */
  symbol?: string;
  /**
   * Name of a holding instrument
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
   */
  micCode?: string;
  /**
   * Weight of a holding instrument in overall portfolio composition
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    weight: json["weight"] == null ? undefined : json["weight"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionTopHoldingsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    weight: value["weight"],
  };
}
