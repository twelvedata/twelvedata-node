/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ExchangeScheduleResponseItem } from "./ExchangeScheduleResponseItem";
import {
  ExchangeScheduleResponseItemFromJSON,
  ExchangeScheduleResponseItemFromJSONTyped,
  ExchangeScheduleResponseItemToJSON,
  ExchangeScheduleResponseItemToJSONTyped,
} from "./ExchangeScheduleResponseItem";

/**
 *
 * @export
 * @interface GetExchangeSchedule200Response
 */
export interface GetExchangeSchedule200Response {
  /**
   *
   * @type {Array<ExchangeScheduleResponseItem>}
   * @memberof GetExchangeSchedule200Response
   */
  data?: Array<ExchangeScheduleResponseItem>;
}

/**
 * Check if a given object implements the GetExchangeSchedule200Response interface.
 */
export function instanceOfGetExchangeSchedule200Response(
  value: object,
): value is GetExchangeSchedule200Response {
  return true;
}

export function GetExchangeSchedule200ResponseFromJSON(
  json: any,
): GetExchangeSchedule200Response {
  return GetExchangeSchedule200ResponseFromJSONTyped(json, false);
}

export function GetExchangeSchedule200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetExchangeSchedule200Response {
  if (json == null) {
    return json;
  }
  return {
    data:
      json["data"] == null
        ? undefined
        : (json["data"] as Array<any>).map(
            ExchangeScheduleResponseItemFromJSON,
          ),
  };
}

export function GetExchangeSchedule200ResponseToJSON(
  json: any,
): GetExchangeSchedule200Response {
  return GetExchangeSchedule200ResponseToJSONTyped(json, false);
}

export function GetExchangeSchedule200ResponseToJSONTyped(
  value?: GetExchangeSchedule200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    data:
      value["data"] == null
        ? undefined
        : (value["data"] as Array<any>).map(ExchangeScheduleResponseItemToJSON),
  };
}
