/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { TechnicalIndicatorsResponseMacdOutputValues } from "./technical-indicators-response-macd-output-values";
// May contain unused imports in some cases
// @ts-ignore
import type { TechnicalIndicatorsResponseMacdParameters } from "./technical-indicators-response-macd-parameters";
// May contain unused imports in some cases
// @ts-ignore
import type { TechnicalIndicatorsResponseMacdTinting } from "./technical-indicators-response-macd-tinting";

export interface GetTechnicalIndicators200ResponseDataValue {
  /**
   * If the indicator is tested, approved and is recommended for use returns <code>true</code>, otherwise returns <code>false</code>
   */
  enable?: boolean;
  /**
   * Full indicator name
   */
  full_name?: string;
  /**
   * Brief description of the indicator
   */
  description?: string;
  /**
   * Group to which indicator belongs to
   */
  type?: string;
  /**
   * If indicator should be plotted over price bars returns <code>true</code>, otherwise returns <code>false</code>
   */
  overlay?: boolean;
  output_values?: TechnicalIndicatorsResponseMacdOutputValues;
  parameters?: TechnicalIndicatorsResponseMacdParameters;
  tinting?: TechnicalIndicatorsResponseMacdTinting;
}
