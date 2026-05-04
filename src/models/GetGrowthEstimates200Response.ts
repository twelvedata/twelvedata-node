/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetGrowthEstimates200ResponseGrowthEstimates } from "./GetGrowthEstimates200ResponseGrowthEstimates";
import {
  GetGrowthEstimates200ResponseGrowthEstimatesFromJSON,
  GetGrowthEstimates200ResponseGrowthEstimatesFromJSONTyped,
  GetGrowthEstimates200ResponseGrowthEstimatesToJSON,
  GetGrowthEstimates200ResponseGrowthEstimatesToJSONTyped,
} from "./GetGrowthEstimates200ResponseGrowthEstimates";
import type { GetEarningsEstimate200ResponseMeta } from "./GetEarningsEstimate200ResponseMeta";
import {
  GetEarningsEstimate200ResponseMetaFromJSON,
  GetEarningsEstimate200ResponseMetaFromJSONTyped,
  GetEarningsEstimate200ResponseMetaToJSON,
  GetEarningsEstimate200ResponseMetaToJSONTyped,
} from "./GetEarningsEstimate200ResponseMeta";

/**
 *
 * @export
 * @interface GetGrowthEstimates200Response
 */
export interface GetGrowthEstimates200Response {
  /**
   *
   * @type {GetEarningsEstimate200ResponseMeta}
   * @memberof GetGrowthEstimates200Response
   */
  meta: GetEarningsEstimate200ResponseMeta;
  /**
   *
   * @type {GetGrowthEstimates200ResponseGrowthEstimates}
   * @memberof GetGrowthEstimates200Response
   */
  growthEstimates?: GetGrowthEstimates200ResponseGrowthEstimates;
  /**
   * Status of the request
   * @type {string}
   * @memberof GetGrowthEstimates200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetGrowthEstimates200Response interface.
 */
export function instanceOfGetGrowthEstimates200Response(
  value: object,
): value is GetGrowthEstimates200Response {
  if (!("meta" in value) || value["meta"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetGrowthEstimates200ResponseFromJSON(
  json: any,
): GetGrowthEstimates200Response {
  return GetGrowthEstimates200ResponseFromJSONTyped(json, false);
}

export function GetGrowthEstimates200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetGrowthEstimates200Response {
  if (json == null) {
    return json;
  }
  return {
    meta: GetEarningsEstimate200ResponseMetaFromJSON(json["meta"]),
    growthEstimates:
      json["growth_estimates"] == null
        ? undefined
        : GetGrowthEstimates200ResponseGrowthEstimatesFromJSON(
            json["growth_estimates"],
          ),
    status: json["status"],
  };
}

export function GetGrowthEstimates200ResponseToJSON(
  json: any,
): GetGrowthEstimates200Response {
  return GetGrowthEstimates200ResponseToJSONTyped(json, false);
}

export function GetGrowthEstimates200ResponseToJSONTyped(
  value?: GetGrowthEstimates200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarningsEstimate200ResponseMetaToJSON(value["meta"]),
    growth_estimates: GetGrowthEstimates200ResponseGrowthEstimatesToJSON(
      value["growthEstimates"],
    ),
    status: value["status"],
  };
}
