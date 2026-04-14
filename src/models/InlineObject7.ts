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
  data?: Array<StockExchange>;
}

/**
 * Check if a given object implements the InlineObject7 interface.
 */
export function instanceOfInlineObject7(value: object): value is InlineObject7 {
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
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(StockExchangeFromJSON),
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
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(StockExchangeToJSON),
  };
}
