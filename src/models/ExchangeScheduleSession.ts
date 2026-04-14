/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * ExchangeScheduleSession represents a trading session
 * @export
 * @interface ExchangeScheduleSession
 */
export interface ExchangeScheduleSession {
  /**
   * Opening time of the session
   * @type {string}
   * @memberof ExchangeScheduleSession
   */
  openTime?: string;
  /**
   * Closing time of the session
   * @type {string}
   * @memberof ExchangeScheduleSession
   */
  closeTime?: string;
  /**
   * Name of the session
   * @type {string}
   * @memberof ExchangeScheduleSession
   */
  sessionName?: string;
  /**
   * Type of the session
   * @type {string}
   * @memberof ExchangeScheduleSession
   */
  sessionType?: string;
}

/**
 * Check if a given object implements the ExchangeScheduleSession interface.
 */
export function instanceOfExchangeScheduleSession(
  value: object,
): value is ExchangeScheduleSession {
  return true;
}

export function ExchangeScheduleSessionFromJSON(
  json: any,
): ExchangeScheduleSession {
  return ExchangeScheduleSessionFromJSONTyped(json, false);
}

export function ExchangeScheduleSessionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ExchangeScheduleSession {
  if (json == null) {
    return json;
  }
  return {
    openTime: json["open_time"] == null ? undefined : json["open_time"],
    closeTime: json["close_time"] == null ? undefined : json["close_time"],
    sessionName:
      json["session_name"] == null ? undefined : json["session_name"],
    sessionType:
      json["session_type"] == null ? undefined : json["session_type"],
  };
}

export function ExchangeScheduleSessionToJSON(
  json: any,
): ExchangeScheduleSession {
  return ExchangeScheduleSessionToJSONTyped(json, false);
}

export function ExchangeScheduleSessionToJSONTyped(
  value?: ExchangeScheduleSession | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    open_time: value["openTime"],
    close_time: value["closeTime"],
    session_name: value["sessionName"],
    session_type: value["sessionType"],
  };
}
