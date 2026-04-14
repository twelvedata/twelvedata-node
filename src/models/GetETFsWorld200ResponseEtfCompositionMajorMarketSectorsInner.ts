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
 * @interface GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner
 */
export interface GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner {
  /**
   * Sector category of a fund exposure
   * @type {string}
   * @memberof GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner
   */
  sector?: string;
  /**
   * Weight of a fund exposure in a sector
   * @type {number}
   * @memberof GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner
   */
  weight?: number;
}

/**
 * Check if a given object implements the GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner interface.
 */
export function instanceOfGetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner(
  value: object,
): value is GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner {
  return true;
}

export function GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner {
  return GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner {
  if (json == null) {
    return json;
  }
  return {
    sector: json["sector"] == null ? undefined : json["sector"],
    weight: json["weight"] == null ? undefined : json["weight"],
  };
}

export function GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSON(
  json: any,
): GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner {
  return GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSONTyped(
    json,
    false,
  );
}

export function GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInnerToJSONTyped(
  value?: GetETFsWorld200ResponseEtfCompositionMajorMarketSectorsInner | null,
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
