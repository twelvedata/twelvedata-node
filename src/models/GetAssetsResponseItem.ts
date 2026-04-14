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
 * @interface GetAssetsResponseItem
 */
export interface GetAssetsResponseItem {
  /**
   * Currency code
   * @type {string}
   * @memberof GetAssetsResponseItem
   */
  code?: string;
  /**
   * Description of the asset
   * @type {string}
   * @memberof GetAssetsResponseItem
   */
  description?: string;
  /**
   * Market identifier code, e.g. DIGITAL_CURRENCY, PHYSICAL_CURRENCY, etc.
   * @type {string}
   * @memberof GetAssetsResponseItem
   */
  micCode?: string;
  /**
   * Currency symbol
   * @type {string}
   * @memberof GetAssetsResponseItem
   */
  symbol?: string;
}

/**
 * Check if a given object implements the GetAssetsResponseItem interface.
 */
export function instanceOfGetAssetsResponseItem(
  value: object,
): value is GetAssetsResponseItem {
  return true;
}

export function GetAssetsResponseItemFromJSON(
  json: any,
): GetAssetsResponseItem {
  return GetAssetsResponseItemFromJSONTyped(json, false);
}

export function GetAssetsResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAssetsResponseItem {
  if (json == null) {
    return json;
  }
  return {
    code: json["code"] == null ? undefined : json["code"],
    description: json["description"] == null ? undefined : json["description"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    symbol: json["symbol"] == null ? undefined : json["symbol"],
  };
}

export function GetAssetsResponseItemToJSON(json: any): GetAssetsResponseItem {
  return GetAssetsResponseItemToJSONTyped(json, false);
}

export function GetAssetsResponseItemToJSONTyped(
  value?: GetAssetsResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    code: value["code"],
    description: value["description"],
    mic_code: value["micCode"],
    symbol: value["symbol"],
  };
}
