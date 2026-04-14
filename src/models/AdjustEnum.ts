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
export const AdjustEnum = {
  ALL: "all",
  SPLITS: "splits",
  DIVIDENDS: "dividends",
  NONE: "none",
} as const;
export type AdjustEnum = (typeof AdjustEnum)[keyof typeof AdjustEnum];

export function instanceOfAdjustEnum(value: any): boolean {
  for (const key in AdjustEnum) {
    if (Object.prototype.hasOwnProperty.call(AdjustEnum, key)) {
      if (AdjustEnum[key as keyof typeof AdjustEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function AdjustEnumFromJSON(json: any): AdjustEnum {
  return AdjustEnumFromJSONTyped(json, false);
}

export function AdjustEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AdjustEnum {
  return json as AdjustEnum;
}

export function AdjustEnumToJSON(value?: AdjustEnum | null): any {
  return value as any;
}

export function AdjustEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): AdjustEnum {
  return value as AdjustEnum;
}
