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
export const SeriesTypeEnum = {
  CLOSE: "close",
  OPEN: "open",
  HIGH: "high",
  LOW: "low",
  VOLUME: "volume",
} as const;
export type SeriesTypeEnum =
  (typeof SeriesTypeEnum)[keyof typeof SeriesTypeEnum];

export function instanceOfSeriesTypeEnum(value: any): boolean {
  for (const key in SeriesTypeEnum) {
    if (Object.prototype.hasOwnProperty.call(SeriesTypeEnum, key)) {
      if (SeriesTypeEnum[key as keyof typeof SeriesTypeEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function SeriesTypeEnumFromJSON(json: any): SeriesTypeEnum {
  return SeriesTypeEnumFromJSONTyped(json, false);
}

export function SeriesTypeEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SeriesTypeEnum {
  return json as SeriesTypeEnum;
}

export function SeriesTypeEnumToJSON(value?: SeriesTypeEnum | null): any {
  return value as any;
}

export function SeriesTypeEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): SeriesTypeEnum {
  return value as SeriesTypeEnum;
}
