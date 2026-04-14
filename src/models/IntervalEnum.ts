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
export const IntervalEnum = {
  _1MIN: "1min",
  _5MIN: "5min",
  _15MIN: "15min",
  _30MIN: "30min",
  _45MIN: "45min",
  _1H: "1h",
  _2H: "2h",
  _4H: "4h",
  _8H: "8h",
  _1DAY: "1day",
  _1WEEK: "1week",
  _1MONTH: "1month",
} as const;
export type IntervalEnum = (typeof IntervalEnum)[keyof typeof IntervalEnum];

export function instanceOfIntervalEnum(value: any): boolean {
  for (const key in IntervalEnum) {
    if (Object.prototype.hasOwnProperty.call(IntervalEnum, key)) {
      if (IntervalEnum[key as keyof typeof IntervalEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function IntervalEnumFromJSON(json: any): IntervalEnum {
  return IntervalEnumFromJSONTyped(json, false);
}

export function IntervalEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): IntervalEnum {
  return json as IntervalEnum;
}

export function IntervalEnumToJSON(value?: IntervalEnum | null): any {
  return value as any;
}

export function IntervalEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): IntervalEnum {
  return value as IntervalEnum;
}
