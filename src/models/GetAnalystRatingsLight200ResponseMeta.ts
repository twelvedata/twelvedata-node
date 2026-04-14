/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Meta information about the instrument
 * @export
 * @interface GetAnalystRatingsLight200ResponseMeta
 */
export interface GetAnalystRatingsLight200ResponseMeta {
  /**
   * Symbol ticker of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  symbol?: string;
  /**
   * Name of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  name?: string;
  /**
   * Currency in which the instrument is traded
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  currency?: string;
  /**
   * Timezone of the exchange
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  exchangeTimezone?: string;
  /**
   * Exchange where the instrument is traded
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  exchange?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  micCode?: string;
  /**
   * Type of the instrument
   * @type {string}
   * @memberof GetAnalystRatingsLight200ResponseMeta
   */
  type?: string;
}

/**
 * Check if a given object implements the GetAnalystRatingsLight200ResponseMeta interface.
 */
export function instanceOfGetAnalystRatingsLight200ResponseMeta(
  value: object,
): value is GetAnalystRatingsLight200ResponseMeta {
  return true;
}

export function GetAnalystRatingsLight200ResponseMetaFromJSON(
  json: any,
): GetAnalystRatingsLight200ResponseMeta {
  return GetAnalystRatingsLight200ResponseMetaFromJSONTyped(json, false);
}

export function GetAnalystRatingsLight200ResponseMetaFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAnalystRatingsLight200ResponseMeta {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchangeTimezone:
      json["exchange_timezone"] == null ? undefined : json["exchange_timezone"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    type: json["type"] == null ? undefined : json["type"],
  };
}

export function GetAnalystRatingsLight200ResponseMetaToJSON(
  json: any,
): GetAnalystRatingsLight200ResponseMeta {
  return GetAnalystRatingsLight200ResponseMetaToJSONTyped(json, false);
}

export function GetAnalystRatingsLight200ResponseMetaToJSONTyped(
  value?: GetAnalystRatingsLight200ResponseMeta | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    currency: value["currency"],
    exchange_timezone: value["exchangeTimezone"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    type: value["type"],
  };
}
