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
 * @interface GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
 */
export interface GetETFsWorld200ResponseEtfCompositionTopHoldingsInner {
  /**
   * Symbol ticker of a holding instrument
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
   */
  symbol?: string;
  /**
   * Name of a holding instrument
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
   */
  name?: string;
  /**
   * Exchange where instrument is traded
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
   */
  micCode?: string;
  /**
   * Weight of a holding instrument in overall portfolio composition
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionTopHoldingsInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionTopHoldingsInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionTopHoldingsInner(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionTopHoldingsInner {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionTopHoldingsInner {
  return GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionTopHoldingsInner {
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

export function GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionTopHoldingsInner {
  return GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionTopHoldingsInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionTopHoldingsInner | null,
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
