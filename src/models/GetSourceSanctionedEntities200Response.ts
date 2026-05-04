/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ResponseSanctionedEntitiy } from "./ResponseSanctionedEntitiy";
import {
  ResponseSanctionedEntitiyFromJSON,
  ResponseSanctionedEntitiyFromJSONTyped,
  ResponseSanctionedEntitiyToJSON,
  ResponseSanctionedEntitiyToJSONTyped,
} from "./ResponseSanctionedEntitiy";

/**
 *
 * @export
 * @interface GetSourceSanctionedEntities200Response
 */
export interface GetSourceSanctionedEntities200Response {
  /**
   * List of sanctioned entities
   * @type {Array<ResponseSanctionedEntitiy>}
   * @memberof GetSourceSanctionedEntities200Response
   */
  sanctions: Array<ResponseSanctionedEntitiy>;
  /**
   * Total number of sanctioned entities
   * @type {number}
   * @memberof GetSourceSanctionedEntities200Response
   */
  count: number;
  /**
   * Response status
   * @type {string}
   * @memberof GetSourceSanctionedEntities200Response
   */
  status: string;
}

/**
 * Check if a given object implements the GetSourceSanctionedEntities200Response interface.
 */
export function instanceOfGetSourceSanctionedEntities200Response(
  value: object,
): value is GetSourceSanctionedEntities200Response {
  if (!("sanctions" in value) || value["sanctions"] === undefined) return false;
  if (!("count" in value) || value["count"] === undefined) return false;
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function GetSourceSanctionedEntities200ResponseFromJSON(
  json: any,
): GetSourceSanctionedEntities200Response {
  return GetSourceSanctionedEntities200ResponseFromJSONTyped(json, false);
}

export function GetSourceSanctionedEntities200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetSourceSanctionedEntities200Response {
  if (json == null) {
    return json;
  }
  return {
    sanctions: (json["sanctions"] as Array<any>).map(
      ResponseSanctionedEntitiyFromJSON,
    ),
    count: json["count"],
    status: json["status"],
  };
}

export function GetSourceSanctionedEntities200ResponseToJSON(
  json: any,
): GetSourceSanctionedEntities200Response {
  return GetSourceSanctionedEntities200ResponseToJSONTyped(json, false);
}

export function GetSourceSanctionedEntities200ResponseToJSONTyped(
  value?: GetSourceSanctionedEntities200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    sanctions: (value["sanctions"] as Array<any>).map(
      ResponseSanctionedEntitiyToJSON,
    ),
    count: value["count"],
    status: value["status"],
  };
}
