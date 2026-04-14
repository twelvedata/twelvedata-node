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
export const SeriesTypeStochrsiEnum = {
  OPEN: "open",
  HIGH: "high",
  LOW: "low",
  CLOSE: "close",
} as const;
export type SeriesTypeStochrsiEnum =
  (typeof SeriesTypeStochrsiEnum)[keyof typeof SeriesTypeStochrsiEnum];

export function instanceOfSeriesTypeStochrsiEnum(value: any): boolean {
  for (const key in SeriesTypeStochrsiEnum) {
    if (Object.prototype.hasOwnProperty.call(SeriesTypeStochrsiEnum, key)) {
      if (
        SeriesTypeStochrsiEnum[key as keyof typeof SeriesTypeStochrsiEnum] ===
        value
      ) {
        return true;
      }
    }
  }
  return false;
}

export function SeriesTypeStochrsiEnumFromJSON(
  json: any,
): SeriesTypeStochrsiEnum {
  return SeriesTypeStochrsiEnumFromJSONTyped(json, false);
}

export function SeriesTypeStochrsiEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SeriesTypeStochrsiEnum {
  return json as SeriesTypeStochrsiEnum;
}

export function SeriesTypeStochrsiEnumToJSON(
  value?: SeriesTypeStochrsiEnum | null,
): any {
  return value as any;
}

export function SeriesTypeStochrsiEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): SeriesTypeStochrsiEnum {
  return value as SeriesTypeStochrsiEnum;
}
