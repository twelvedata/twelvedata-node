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
export const DirectionEnum = {
  GAINERS: "gainers",
  LOSERS: "losers",
} as const;
export type DirectionEnum = (typeof DirectionEnum)[keyof typeof DirectionEnum];

export function instanceOfDirectionEnum(value: any): boolean {
  for (const key in DirectionEnum) {
    if (Object.prototype.hasOwnProperty.call(DirectionEnum, key)) {
      if (DirectionEnum[key as keyof typeof DirectionEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function DirectionEnumFromJSON(json: any): DirectionEnum {
  return DirectionEnumFromJSONTyped(json, false);
}

export function DirectionEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): DirectionEnum {
  return json as DirectionEnum;
}

export function DirectionEnumToJSON(value?: DirectionEnum | null): any {
  return value as any;
}

export function DirectionEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): DirectionEnum {
  return value as DirectionEnum;
}
