/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ForexResponseItem } from "./ForexResponseItem";
import {
  ForexResponseItemFromJSON,
  ForexResponseItemFromJSONTyped,
  ForexResponseItemToJSON,
  ForexResponseItemToJSONTyped,
} from "./ForexResponseItem";

/**
 *
 * @export
 * @interface GetForexPairs200Response
 */
export interface GetForexPairs200Response {
  /**
   * List of forex pairs
   * @type {Array<ForexResponseItem>}
   * @memberof GetForexPairs200Response
   */
  data?: Array<ForexResponseItem>;
  /**
   * Response status
   * @type {string}
   * @memberof GetForexPairs200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetForexPairs200Response interface.
 */
export function instanceOfGetForexPairs200Response(
  value: object,
): value is GetForexPairs200Response {
  return true;
}

export function GetForexPairs200ResponseFromJSON(
  json: any,
): GetForexPairs200Response {
  return GetForexPairs200ResponseFromJSONTyped(json, false);
}

export function GetForexPairs200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetForexPairs200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(ForexResponseItemFromJSON),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetForexPairs200ResponseToJSON(
  json: any,
): GetForexPairs200Response {
  return GetForexPairs200ResponseToJSONTyped(json, false);
}

export function GetForexPairs200ResponseToJSONTyped(
  value?: GetForexPairs200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(ForexResponseItemToJSON),
    status: value["status"],
  };
}
