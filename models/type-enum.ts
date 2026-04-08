/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
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
