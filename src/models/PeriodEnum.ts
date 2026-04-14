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
export const PeriodEnum = {
  ANNUAL: "annual",
  QUARTERLY: "quarterly",
} as const;
export type PeriodEnum = (typeof PeriodEnum)[keyof typeof PeriodEnum];

export function instanceOfPeriodEnum(value: any): boolean {
  for (const key in PeriodEnum) {
    if (Object.prototype.hasOwnProperty.call(PeriodEnum, key)) {
      if (PeriodEnum[key as keyof typeof PeriodEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function PeriodEnumFromJSON(json: any): PeriodEnum {
  return PeriodEnumFromJSONTyped(json, false);
}

export function PeriodEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PeriodEnum {
  return json as PeriodEnum;
}

export function PeriodEnumToJSON(value?: PeriodEnum | null): any {
  return value as any;
}

export function PeriodEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): PeriodEnum {
  return value as PeriodEnum;
}
