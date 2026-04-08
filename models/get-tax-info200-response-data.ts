/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

/**
 * Tax information data containing the tax indicator for the requested instrument
 */
export interface GetTaxInfo200ResponseData {
  /**
   * The instrument tax indicator, can be `null`, `us_1446f`, `spanish_ftt`, `uk_stamp_duty`, `hk_stamp_duty`, `french_ftt` or `italian_ftt`
   */
  tax_indicator?: string;
}
