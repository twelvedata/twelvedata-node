/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetAnalystRatingsUsEquities200ResponseRatingsInner } from "./GetAnalystRatingsUsEquities200ResponseRatingsInner";
import {
  GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSON,
  GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSONTyped,
  GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSON,
  GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSONTyped,
} from "./GetAnalystRatingsUsEquities200ResponseRatingsInner";
import type { GetAnalystRatingsLight200ResponseMeta } from "./GetAnalystRatingsLight200ResponseMeta";
import {
  GetAnalystRatingsLight200ResponseMetaFromJSON,
  GetAnalystRatingsLight200ResponseMetaFromJSONTyped,
  GetAnalystRatingsLight200ResponseMetaToJSON,
  GetAnalystRatingsLight200ResponseMetaToJSONTyped,
} from "./GetAnalystRatingsLight200ResponseMeta";

/**
 *
 * @export
 * @interface GetAnalystRatingsUsEquities200Response
 */
export interface GetAnalystRatingsUsEquities200Response {
  /**
   *
   * @type {GetAnalystRatingsLight200ResponseMeta}
   * @memberof GetAnalystRatingsUsEquities200Response
   */
  meta?: GetAnalystRatingsLight200ResponseMeta;
  /**
   * List of analyst ratings
   * @type {Array<GetAnalystRatingsUsEquities200ResponseRatingsInner>}
   * @memberof GetAnalystRatingsUsEquities200Response
   */
  ratings?: Array<GetAnalystRatingsUsEquities200ResponseRatingsInner>;
  /**
   * Response status
   * @type {string}
   * @memberof GetAnalystRatingsUsEquities200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetAnalystRatingsUsEquities200Response interface.
 */
export function instanceOfGetAnalystRatingsUsEquities200Response(
  value: object,
): value is GetAnalystRatingsUsEquities200Response {
  return true;
}

export function GetAnalystRatingsUsEquities200ResponseFromJSON(
  json: any,
): GetAnalystRatingsUsEquities200Response {
  return GetAnalystRatingsUsEquities200ResponseFromJSONTyped(json, false);
}

export function GetAnalystRatingsUsEquities200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetAnalystRatingsUsEquities200Response {
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
            GetAnalystRatingsUsEquities200ResponseRatingsInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetAnalystRatingsUsEquities200ResponseToJSON(
  json: any,
): GetAnalystRatingsUsEquities200Response {
  return GetAnalystRatingsUsEquities200ResponseToJSONTyped(json, false);
}

export function GetAnalystRatingsUsEquities200ResponseToJSONTyped(
  value?: GetAnalystRatingsUsEquities200Response | null,
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
            GetAnalystRatingsUsEquities200ResponseRatingsInnerToJSON,
          ),
    status: value["status"],
  };
}
