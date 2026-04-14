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
export const OrderEnum = {
  ASC: "asc",
  DESC: "desc",
} as const;
export type OrderEnum = (typeof OrderEnum)[keyof typeof OrderEnum];

export function instanceOfOrderEnum(value: any): boolean {
  for (const key in OrderEnum) {
    if (Object.prototype.hasOwnProperty.call(OrderEnum, key)) {
      if (OrderEnum[key as keyof typeof OrderEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function OrderEnumFromJSON(json: any): OrderEnum {
  return OrderEnumFromJSONTyped(json, false);
}

export function OrderEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OrderEnum {
  return json as OrderEnum;
}

export function OrderEnumToJSON(value?: OrderEnum | null): any {
  return value as any;
}

export function OrderEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): OrderEnum {
  return value as OrderEnum;
}
