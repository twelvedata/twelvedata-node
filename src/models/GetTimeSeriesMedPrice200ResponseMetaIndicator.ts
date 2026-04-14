/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Technical indicator information
 * @export
 * @interface GetTimeSeriesMedPrice200ResponseMetaIndicator
 */
export interface GetTimeSeriesMedPrice200ResponseMetaIndicator {
  /**
   * Name of the technical indicator
   * @type {string}
   * @memberof GetTimeSeriesMedPrice200ResponseMetaIndicator
   */
  name?: string;
}

/**
 * Check if a given object implements the GetTimeSeriesMedPrice200ResponseMetaIndicator interface.
 */
export function instanceOfGetTimeSeriesMedPrice200ResponseMetaIndicator(
  value: object,
): value is GetTimeSeriesMedPrice200ResponseMetaIndicator {
  return true;
}

export function GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseMetaIndicator {
  return GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSONTyped(
    json,
    false,
  );
}

export function GetTimeSeriesMedPrice200ResponseMetaIndicatorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetTimeSeriesMedPrice200ResponseMetaIndicator {
  if (json == null) {
    return json;
  }
  return {
    name: json["name"] == null ? undefined : json["name"],
  };
}

export function GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSON(
  json: any,
): GetTimeSeriesMedPrice200ResponseMetaIndicator {
  return GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSONTyped(json, false);
}

export function GetTimeSeriesMedPrice200ResponseMetaIndicatorToJSONTyped(
  value?: GetTimeSeriesMedPrice200ResponseMetaIndicator | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    name: value["name"],
  };
}
