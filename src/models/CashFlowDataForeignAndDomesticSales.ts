/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Foreign and domestic sales
 * @export
 * @interface CashFlowDataForeignAndDomesticSales
 */
export interface CashFlowDataForeignAndDomesticSales {
  /**
   * Foreign sales
   * @type {number}
   * @memberof CashFlowDataForeignAndDomesticSales
   */
  foreignSales?: number;
  /**
   * Domestic sales
   * @type {number}
   * @memberof CashFlowDataForeignAndDomesticSales
   */
  domesticSales?: number;
  /**
   * Adjusted geography segment data
   * @type {number}
   * @memberof CashFlowDataForeignAndDomesticSales
   */
  adjustedGeographySegmentData?: number;
}

/**
 * Check if a given object implements the CashFlowDataForeignAndDomesticSales interface.
 */
export function instanceOfCashFlowDataForeignAndDomesticSales(
  value: object,
): value is CashFlowDataForeignAndDomesticSales {
  return true;
}

export function CashFlowDataForeignAndDomesticSalesFromJSON(
  json: any,
): CashFlowDataForeignAndDomesticSales {
  return CashFlowDataForeignAndDomesticSalesFromJSONTyped(json, false);
}

export function CashFlowDataForeignAndDomesticSalesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): CashFlowDataForeignAndDomesticSales {
  if (json == null) {
    return json;
  }
  return {
    foreignSales:
      json["foreign_sales"] == null ? undefined : json["foreign_sales"],
    domesticSales:
      json["domestic_sales"] == null ? undefined : json["domestic_sales"],
    adjustedGeographySegmentData:
      json["adjusted_geography_segment_data"] == null
        ? undefined
        : json["adjusted_geography_segment_data"],
  };
}

export function CashFlowDataForeignAndDomesticSalesToJSON(
  json: any,
): CashFlowDataForeignAndDomesticSales {
  return CashFlowDataForeignAndDomesticSalesToJSONTyped(json, false);
}

export function CashFlowDataForeignAndDomesticSalesToJSONTyped(
  value?: CashFlowDataForeignAndDomesticSales | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    foreign_sales: value["foreignSales"],
    domestic_sales: value["domesticSales"],
    adjusted_geography_segment_data: value["adjustedGeographySegmentData"],
  };
}
