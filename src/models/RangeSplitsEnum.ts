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
export const RangeSplitsEnum = {
  LAST: "last",
  _1M: "1m",
  _3M: "3m",
  _6M: "6m",
  YTD: "ytd",
  _1Y: "1y",
  _2Y: "2y",
  _5Y: "5y",
  FULL: "full",
} as const;
export type RangeSplitsEnum =
  (typeof RangeSplitsEnum)[keyof typeof RangeSplitsEnum];

export function instanceOfRangeSplitsEnum(value: any): boolean {
  for (const key in RangeSplitsEnum) {
    if (Object.prototype.hasOwnProperty.call(RangeSplitsEnum, key)) {
      if (RangeSplitsEnum[key as keyof typeof RangeSplitsEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function RangeSplitsEnumFromJSON(json: any): RangeSplitsEnum {
  return RangeSplitsEnumFromJSONTyped(json, false);
}

export function RangeSplitsEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RangeSplitsEnum {
  return json as RangeSplitsEnum;
}

export function RangeSplitsEnumToJSON(value?: RangeSplitsEnum | null): any {
  return value as any;
}

export function RangeSplitsEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): RangeSplitsEnum {
  return value as RangeSplitsEnum;
}
