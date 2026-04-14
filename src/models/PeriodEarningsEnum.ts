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
export const PeriodEarningsEnum = {
  LATEST: "latest",
  NEXT: "next",
} as const;
export type PeriodEarningsEnum =
  (typeof PeriodEarningsEnum)[keyof typeof PeriodEarningsEnum];

export function instanceOfPeriodEarningsEnum(value: any): boolean {
  for (const key in PeriodEarningsEnum) {
    if (Object.prototype.hasOwnProperty.call(PeriodEarningsEnum, key)) {
      if (
        PeriodEarningsEnum[key as keyof typeof PeriodEarningsEnum] === value
      ) {
        return true;
      }
    }
  }
  return false;
}

export function PeriodEarningsEnumFromJSON(json: any): PeriodEarningsEnum {
  return PeriodEarningsEnumFromJSONTyped(json, false);
}

export function PeriodEarningsEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PeriodEarningsEnum {
  return json as PeriodEarningsEnum;
}

export function PeriodEarningsEnumToJSON(
  value?: PeriodEarningsEnum | null,
): any {
  return value as any;
}

export function PeriodEarningsEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): PeriodEarningsEnum {
  return value as PeriodEarningsEnum;
}
