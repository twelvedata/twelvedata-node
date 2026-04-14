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
export const RangeEnum = {
  LAST: "last",
  NEXT: "next",
  _1M: "1m",
  _3M: "3m",
  _6M: "6m",
  YTD: "ytd",
  _1Y: "1y",
  _2Y: "2y",
  _5Y: "5y",
  FULL: "full",
} as const;
export type RangeEnum = (typeof RangeEnum)[keyof typeof RangeEnum];

export function instanceOfRangeEnum(value: any): boolean {
  for (const key in RangeEnum) {
    if (Object.prototype.hasOwnProperty.call(RangeEnum, key)) {
      if (RangeEnum[key as keyof typeof RangeEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function RangeEnumFromJSON(json: any): RangeEnum {
  return RangeEnumFromJSONTyped(json, false);
}

export function RangeEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RangeEnum {
  return json as RangeEnum;
}

export function RangeEnumToJSON(value?: RangeEnum | null): any {
  return value as any;
}

export function RangeEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): RangeEnum {
  return value as RangeEnum;
}
