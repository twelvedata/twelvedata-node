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
export const RatingChangeEnum = {
  MAINTAINS: "Maintains",
  UPGRADE: "Upgrade",
  DOWNGRADE: "Downgrade",
  INITIATES: "Initiates",
  REITERATES: "Reiterates",
} as const;
export type RatingChangeEnum =
  (typeof RatingChangeEnum)[keyof typeof RatingChangeEnum];

export function instanceOfRatingChangeEnum(value: any): boolean {
  for (const key in RatingChangeEnum) {
    if (Object.prototype.hasOwnProperty.call(RatingChangeEnum, key)) {
      if (RatingChangeEnum[key as keyof typeof RatingChangeEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function RatingChangeEnumFromJSON(json: any): RatingChangeEnum {
  return RatingChangeEnumFromJSONTyped(json, false);
}

export function RatingChangeEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): RatingChangeEnum {
  return json as RatingChangeEnum;
}

export function RatingChangeEnumToJSON(value?: RatingChangeEnum | null): any {
  return value as any;
}

export function RatingChangeEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): RatingChangeEnum {
  return value as RatingChangeEnum;
}
