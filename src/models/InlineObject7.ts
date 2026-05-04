/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { StockExchange } from "./StockExchange";
import {
  StockExchangeFromJSON,
  StockExchangeFromJSONTyped,
  StockExchangeToJSON,
  StockExchangeToJSONTyped,
} from "./StockExchange";

/**
 *
 * @export
 * @interface InlineObject7
 */
export interface InlineObject7 {
  /**
   *
   * @type {Array<StockExchange>}
   * @memberof InlineObject7
   */
  data: Array<StockExchange>;
  /**
   * Response status
   * @type {string}
   * @memberof InlineObject7
   */
  status: string;
}

/**
 * Check if a given object implements the InlineObject7 interface.
 */
export function instanceOfInlineObject7(value: object): value is InlineObject7 {
  if (!("data" in value) || value["data"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function InlineObject7FromJSON(json: any): InlineObject7 {
  return InlineObject7FromJSONTyped(json, false);
}

export function InlineObject7FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineObject7 {
  if (json == null) {
    return json;
  }
  return {
    data: (json["data"] as Array<any>).map(StockExchangeFromJSON),
    status: json["status"],
  };
}

export function InlineObject7ToJSON(json: any): InlineObject7 {
  return InlineObject7ToJSONTyped(json, false);
}

export function InlineObject7ToJSONTyped(
  value?: InlineObject7 | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data: (value["data"] as Array<any>).map(StockExchangeToJSON),
    status: value["status"],
  };
}
