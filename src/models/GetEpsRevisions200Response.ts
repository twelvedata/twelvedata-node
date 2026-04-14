/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { GetEpsRevisions200ResponseEpsRevisionInner } from "./GetEpsRevisions200ResponseEpsRevisionInner";
import {
  GetEpsRevisions200ResponseEpsRevisionInnerFromJSON,
  GetEpsRevisions200ResponseEpsRevisionInnerFromJSONTyped,
  GetEpsRevisions200ResponseEpsRevisionInnerToJSON,
  GetEpsRevisions200ResponseEpsRevisionInnerToJSONTyped,
} from "./GetEpsRevisions200ResponseEpsRevisionInner";
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
 * @interface GetEpsRevisions200Response
 */
export interface GetEpsRevisions200Response {
  /**
   *
   * @type {GetEarningsEstimate200ResponseMeta}
   * @memberof GetEpsRevisions200Response
   */
  meta?: GetEarningsEstimate200ResponseMeta;
  /**
   * EPS revision data
   * @type {Array<GetEpsRevisions200ResponseEpsRevisionInner>}
   * @memberof GetEpsRevisions200Response
   */
  epsRevision?: Array<GetEpsRevisions200ResponseEpsRevisionInner>;
  /**
   * Status of the response
   * @type {string}
   * @memberof GetEpsRevisions200Response
   */
  status?: string;
}

/**
 * Check if a given object implements the GetEpsRevisions200Response interface.
 */
export function instanceOfGetEpsRevisions200Response(
  value: object,
): value is GetEpsRevisions200Response {
  return true;
}

export function GetEpsRevisions200ResponseFromJSON(
  json: any,
): GetEpsRevisions200Response {
  return GetEpsRevisions200ResponseFromJSONTyped(json, false);
}

export function GetEpsRevisions200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetEpsRevisions200Response {
  if (json == null) {
    return json;
  }
  return {
    meta:
      json["meta"] == null
        ? undefined
        : GetEarningsEstimate200ResponseMetaFromJSON(json["meta"]),
    epsRevision:
      json["eps_revision"] == null
        ? undefined
        : (json["eps_revision"] as Array<any>).map(
            GetEpsRevisions200ResponseEpsRevisionInnerFromJSON,
          ),
    status: json["status"] == null ? undefined : json["status"],
  };
}

export function GetEpsRevisions200ResponseToJSON(
  json: any,
): GetEpsRevisions200Response {
  return GetEpsRevisions200ResponseToJSONTyped(json, false);
}

export function GetEpsRevisions200ResponseToJSONTyped(
  value?: GetEpsRevisions200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    meta: GetEarningsEstimate200ResponseMetaToJSON(value["meta"]),
    eps_revision:
      value["epsRevision"] == null
        ? undefined
        : (value["epsRevision"] as Array<any>).map(
            GetEpsRevisions200ResponseEpsRevisionInnerToJSON,
          ),
    status: value["status"],
  };
}
