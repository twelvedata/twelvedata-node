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
export const TypeEnum = {
  AMERICAN_DEPOSITARY_RECEIPT: "American Depositary Receipt",
  BOND: "Bond",
  BOND_FUND: "Bond Fund",
  CLOSED_END_FUND: "Closed-end Fund",
  COMMON_STOCK: "Common Stock",
  DEPOSITARY_RECEIPT: "Depositary Receipt",
  DIGITAL_CURRENCY: "Digital Currency",
  ETF: "ETF",
  EXCHANGE_TRADED_NOTE: "Exchange-Traded Note",
  GLOBAL_DEPOSITARY_RECEIPT: "Global Depositary Receipt",
  LIMITED_PARTNERSHIP: "Limited Partnership",
  MUTUAL_FUND: "Mutual Fund",
  PHYSICAL_CURRENCY: "Physical Currency",
  PREFERRED_STOCK: "Preferred Stock",
  REIT: "REIT",
  RIGHT: "Right",
  STRUCTURED_PRODUCT: "Structured Product",
  TRUST: "Trust",
  UNIT: "Unit",
  WARRANT: "Warrant",
} as const;
export type TypeEnum = (typeof TypeEnum)[keyof typeof TypeEnum];

export function instanceOfTypeEnum(value: any): boolean {
  for (const key in TypeEnum) {
    if (Object.prototype.hasOwnProperty.call(TypeEnum, key)) {
      if (TypeEnum[key as keyof typeof TypeEnum] === value) {
        return true;
      }
    }
  }
  return false;
}

export function TypeEnumFromJSON(json: any): TypeEnum {
  return TypeEnumFromJSONTyped(json, false);
}

export function TypeEnumFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): TypeEnum {
  return json as TypeEnum;
}

export function TypeEnumToJSON(value?: TypeEnum | null): any {
  return value as any;
}

export function TypeEnumToJSONTyped(
  value: any,
  ignoreDiscriminator: boolean,
): TypeEnum {
  return value as TypeEnum;
}
