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
export const MaTypeEnum = {
  SMA: "SMA",
  EMA: "EMA",
  WMA: "WMA",
  DEMA: "DEMA",
  TEMA: "TEMA",
  TRIMA: "TRIMA",
  KAMA: "KAMA",
  MAMA: "MAMA",
  T3_MA: "T3MA",
} as const;
export type MaTypeEnum = (typeof MaTypeEnum)[keyof typeof MaTypeEnum];

export function instanceOfMaTypeEnum(value: any): boolean {
  for (const key in MaTypeEnum) {
    if (Object.prototype.hasOwnProperty.call(MaTypeEnum, key)) {
      if (MaTypeEnum[key as keyof typeof MaTypeEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function MaTypeEnumFromJSON(json: any): MaTypeEnum {
  return MaTypeEnumFromJSONTyped(json, false);
}

export function MaTypeEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): MaTypeEnum {
  return json as MaTypeEnum;
}

export function MaTypeEnumToJSON(value?: MaTypeEnum | null): any {
  return value as any;
}

export function MaTypeEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): MaTypeEnum {
  return value as MaTypeEnum;
}
