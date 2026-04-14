/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetAnalystRatingsLight200ResponseMeta } from "./GetAnalystRatingsLight200ResponseMeta";
import {
  GetAnalystRatingsLight200ResponseMetaFromJSON,
  GetAnalystRatingsLight200ResponseMetaFromJSONTyped,
  GetAnalystRatingsLight200ResponseMetaToJSON,
  GetAnalystRatingsLight200ResponseMetaToJSONTyped,
} from "./GetAnalystRatingsLight200ResponseMeta";
import type { GetAnalystRatingsLight200ResponseRatingsInner } from "./GetAnalystRatingsLight200ResponseRatingsInner";
import {
  GetAnalystRatingsLight200ResponseRatingsInnerFromJSON,
  GetAnalystRatingsLight200ResponseRatingsInnerFromJSONTyped,
  GetAnalystRatingsLight200ResponseRatingsInnerToJSON,
  GetAnalystRatingsLight200ResponseRatingsInnerToJSONTyped,
} from "./GetAnalystRatingsLight200ResponseRatingsInner";

/**
 *
 * @export
 * @interface GetAnalystRatingsLight200Response
 */
export interface GetAnalystRatingsLight200Response {
  /**
   *
   * @type {GetAnalystRatingsLight200ResponseMeta}
   * @memberof GetAnalystRatingsLight200Response
   */
  meta?: GetAnalystRatingsLight200ResponseMeta;
  /**
   * List of analyst ratings
   * @type {Array<GetAnalystRatingsLight200ResponseRatingsInner>}
   * @memberof GetAnalystRatingsLight200Response
   */
  ratings?: Array<GetAnalystRatingsLight200ResponseRatingsInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetAnalystRatingsLight200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetAnalystRatingsLight200Response interface.
 */
export function instanceOfGetAnalystRatingsLight200Response(
  value: object,
): value is GetAnalystRatingsLight200Response {
  return true;
}

export function GetAnalystRatingsLight200ResponseFromJSON(
  json: any,
): GetAnalystRatingsLight200Response {
  return GetAnalystRatingsLight200ResponseFromJSONTyped(json, false);
}

export function GetAnalystRatingsLight200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAnalystRatingsLight200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetAnalystRatingsLight200ResponseMetaFromJSON(json["meta"]),
    ratings:
      json["ratings"] == null
        ? undefined
        : (json["ratings"] as Array<any>).map(
            GetAnalystRatingsLight200ResponseRatingsInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetAnalystRatingsLight200ResponseToJSON(
  json: any,
): GetAnalystRatingsLight200Response {
  return GetAnalystRatingsLight200ResponseToJSONTyped(json, false);
}

export function GetAnalystRatingsLight200ResponseToJSONTyped(
  value?: GetAnalystRatingsLight200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetAnalystRatingsLight200ResponseMetaToJSON(value["meta"]),
    ratings:
      value["ratings"] == null
        ? undefined
        : (value["ratings"] as Array<any>).map(
            GetAnalystRatingsLight200ResponseRatingsInnerToJSON,
          ),
    status: value["status"],
  };
}
