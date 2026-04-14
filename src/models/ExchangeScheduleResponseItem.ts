/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
import type { ExchangeScheduleSession } from "./ExchangeScheduleSession";
import {
  ExchangeScheduleSessionFromJSON,
  ExchangeScheduleSessionFromJSONTyped,
  ExchangeScheduleSessionToJSON,
  ExchangeScheduleSessionToJSONTyped,
} from "./ExchangeScheduleSession";

/**
 * ExchangeScheduleResponseItem represents details of an exchange schedule
 * @export
 * @interface ExchangeScheduleResponseItem
 */
export interface ExchangeScheduleResponseItem {
  /**
   * Official name of exchange
   * @type {string}
   * @memberof ExchangeScheduleResponseItem
   */
  title?: string;
  /**
   * Name of exchange
   * @type {string}
   * @memberof ExchangeScheduleResponseItem
   */
  name?: string;
  /**
   * Market identifier code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof ExchangeScheduleResponseItem
   */
  code?: string;
  /**
   * Country to which stock exchange belongs to
   * @type {string}
   * @memberof ExchangeScheduleResponseItem
   */
  country?: string;
  /**
   * Time zone where exchange is located
   * @type {string}
   * @memberof ExchangeScheduleResponseItem
   */
  timeZone?: string;
  /**
   * Exchange trading hours
   * @type {Array<ExchangeScheduleSession>}
   * @memberof ExchangeScheduleResponseItem
   */
  sessions?: Array<ExchangeScheduleSession>;
}

/**
 * Check if a given object implements the ExchangeScheduleResponseItem interface.
 */
export function instanceOfExchangeScheduleResponseItem(
  value: object,
): value is ExchangeScheduleResponseItem {
  return true;
}

export function ExchangeScheduleResponseItemFromJSON(
  json: any,
): ExchangeScheduleResponseItem {
  return ExchangeScheduleResponseItemFromJSONTyped(json, false);
}

export function ExchangeScheduleResponseItemFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExchangeScheduleResponseItem {
  if (json == null) {
    return json;
  }
  return {
    title: json["title"] == null ? undefined : json["title"],
    name: json["name"] == null ? undefined : json["name"],
    code: json["code"] == null ? undefined : json["code"],
    country: json["country"] == null ? undefined : json["country"],
    timeZone: json["time_zone"] == null ? undefined : json["time_zone"],
    sessions:
      json["sessions"] == null
        ? undefined
        : (json["sessions"] as Array<any>).map(ExchangeScheduleSessionFromJSON),
  };
}

export function ExchangeScheduleResponseItemToJSON(
  json: any,
): ExchangeScheduleResponseItem {
  return ExchangeScheduleResponseItemToJSONTyped(json, false);
}

export function ExchangeScheduleResponseItemToJSONTyped(
  value?: ExchangeScheduleResponseItem | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    title: value["title"],
    name: value["name"],
    code: value["code"],
    country: value["country"],
    time_zone: value["timeZone"],
    sessions:
      value["sessions"] == null
        ? undefined
        : (value["sessions"] as Array<any>).map(ExchangeScheduleSessionToJSON),
  };
}
