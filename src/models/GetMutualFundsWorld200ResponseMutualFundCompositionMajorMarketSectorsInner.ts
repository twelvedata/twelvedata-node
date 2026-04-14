/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 *
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner
 */
export interface GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner {
  /**
   * Sector category of a fund exposure
   * @type {string}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner
   */
  sector?: string;
  /**
   * Weight of a fund exposure in a sector
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner {
  if (json == null) {
    return json;
  }
  return {
    sector: json["sector"] == null ? undefined : json["sector"],
    weight: json["weight"] == null ? undefined : json["weight"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner {
  return GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInnerToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundCompositionMajorMarketSectorsInner | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    sector: value["sector"],
    weight: value["weight"],
  };
}
