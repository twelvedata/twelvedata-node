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
export const FormatEnum = {
  JSON: "JSON",
  CSV: "CSV",
} as const;
export type FormatEnum = (typeof FormatEnum)[keyof typeof FormatEnum];

export function instanceOfFormatEnum(value: any): boolean {
  for (const key in FormatEnum) {
    if (Object.prototype.hasOwnProperty.call(FormatEnum, key)) {
      if (FormatEnum[key as keyof typeof FormatEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function FormatEnumFromJSON(json: any): FormatEnum {
  return FormatEnumFromJSONTyped(json, false);
}

export function FormatEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): FormatEnum {
  return json as FormatEnum;
}

export function FormatEnumToJSON(value?: FormatEnum | null): any {
  return value as any;
}

export function FormatEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): FormatEnum {
  return value as FormatEnum;
}
