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
export const SourceEnum = {
  OFAC: "ofac",
  UK: "uk",
  EU: "eu",
  AU: "au",
} as const;
export type SourceEnum = (typeof SourceEnum)[keyof typeof SourceEnum];

export function instanceOfSourceEnum(value: any): boolean {
  for (const key in SourceEnum) {
    if (Object.prototype.hasOwnProperty.call(SourceEnum, key)) {
      if (SourceEnum[key as keyof typeof SourceEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function SourceEnumFromJSON(json: any): SourceEnum {
  return SourceEnumFromJSONTyped(json, false);
}

export function SourceEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SourceEnum {
  return json as SourceEnum;
}

export function SourceEnumToJSON(value?: SourceEnum | null): any {
  return value as any;
}

export function SourceEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): SourceEnum {
  return value as SourceEnum;
}
