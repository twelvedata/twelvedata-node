/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 *
 * @export
 */
export const MarketEnum = {
  STOCKS: "stocks",
  ETF: "etf",
  MUTUAL_FUNDS: "mutual_funds",
  FOREX: "forex",
  CRYPTO: "crypto",
} as const;
export type MarketEnum = (typeof MarketEnum)[keyof typeof MarketEnum];

export function instanceOfMarketEnum(value: any): boolean {
  for (const key in MarketEnum) {
    if (Object.prototype.hasOwnProperty.call(MarketEnum, key)) {
      if (MarketEnum[key as keyof typeof MarketEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function MarketEnumFromJSON(json: any): MarketEnum {
  return MarketEnumFromJSONTyped(json, false);
}

export function MarketEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MarketEnum {
  return json as MarketEnum;
}

export function MarketEnumToJSON(value?: MarketEnum | null): any {
  return value as any;
}

export function MarketEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): MarketEnum {
  return value as MarketEnum;
}
