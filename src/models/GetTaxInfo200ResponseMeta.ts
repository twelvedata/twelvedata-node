/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Metadata about the requested instrument
 * @export
 * @interface GetTaxInfo200ResponseMeta
 */
export interface GetTaxInfo200ResponseMeta {
  /**
   * The ticker symbol of an instrument for which data was requested
   * @type {string}
   * @memberof GetTaxInfo200ResponseMeta
   */
  symbol: string;
  /**
   * The instrument name
   * @type {string}
   * @memberof GetTaxInfo200ResponseMeta
   */
  name: string;
  /**
   * The exchange name where the instrument is traded
   * @type {string}
   * @memberof GetTaxInfo200ResponseMeta
   */
  exchange: string;
  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded
   * @type {string}
   * @memberof GetTaxInfo200ResponseMeta
   */
  micCode: string;
  /**
   * The instrument country name
   * @type {string}
   * @memberof GetTaxInfo200ResponseMeta
   */
  country: string;
}

/**
 * Check if a given object implements the GetTaxInfo200ResponseMeta interface.
 */
export function instanceOfGetTaxInfo200ResponseMeta(
  value: object,
): value is GetTaxInfo200ResponseMeta {
  if (!("symbol" in value) || value["symbol"] === undefined) return false;
  if (!("name" in value) || value["name"] === undefined) return false;
  if (!("exchange" in value) || value["exchange"] === undefined) return false;
  if (!("micCode" in value) || value["micCode"] === undefined) return false;
  if (!("country" in value) || value["country"] === undefined) return false;
  return true;
}

export function GetTaxInfo200ResponseMetaFromJSON(
  json: any,
): GetTaxInfo200ResponseMeta {
  return GetTaxInfo200ResponseMetaFromJSONTyped(json, false);
}

export function GetTaxInfo200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTaxInfo200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: json["name"],
    exchange: json["exchange"],
    micCode: json["mic_code"],
    country: json["country"],
  };
}

export function GetTaxInfo200ResponseMetaToJSON(
  json: any,
): GetTaxInfo200ResponseMeta {
  return GetTaxInfo200ResponseMetaToJSONTyped(json, false);
}

export function GetTaxInfo200ResponseMetaToJSONTyped(
  value?: GetTaxInfo200ResponseMeta | null,
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
    country: value["country"],
  };
}
