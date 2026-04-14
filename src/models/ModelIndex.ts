/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Indices info
 * @export
 * @interface ModelIndex
 */
export interface ModelIndex {
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  currency?: string;
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  exchange?: string;
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  micCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelIndex
   */
  symbol?: string;
}

/**
 * Check if a given object implements the ModelIndex interface.
 */
export function instanceOfModelIndex(value: object): value is ModelIndex {
  return true;
}

export function ModelIndexFromJSON(json: any): ModelIndex {
  return ModelIndexFromJSONTyped(json, false);
}

export function ModelIndexFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ModelIndex {
  if (json == null) {
    return json;
  }
  return {
    country: json["country"] == null ? undefined : json["country"],
    currency: json["currency"] == null ? undefined : json["currency"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    name: json["name"] == null ? undefined : json["name"],
    symbol: json["symbol"] == null ? undefined : json["symbol"],
  };
}

export function ModelIndexToJSON(json: any): ModelIndex {
  return ModelIndexToJSONTyped(json, false);
}

export function ModelIndexToJSONTyped(
  value?: ModelIndex | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    country: value["country"],
    currency: value["currency"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    name: value["name"],
    symbol: value["symbol"],
  };
}
