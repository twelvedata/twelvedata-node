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
 * @interface OptionSide
 */
export interface OptionSide {
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  ask?: number;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  bid?: number;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  change?: number;
  /**
   *
   * @type {string}
   * @memberof OptionSide
   */
  contractName?: string;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  impliedVolatility?: number;
  /**
   *
   * @type {boolean}
   * @memberof OptionSide
   */
  inTheMoney?: boolean;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  lastPrice?: number;
  /**
   *
   * @type {string}
   * @memberof OptionSide
   */
  lastTradeDate?: string;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  openInterest?: number;
  /**
   *
   * @type {string}
   * @memberof OptionSide
   */
  optionId?: string;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  percentChange?: number;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  strike?: number;
  /**
   *
   * @type {number}
   * @memberof OptionSide
   */
  volume?: number;
}

/**
 * Check if a given object implements the OptionSide interface.
 */
export function instanceOfOptionSide(value: object): value is OptionSide {
  return true;
}

export function OptionSideFromJSON(json: any): OptionSide {
  return OptionSideFromJSONTyped(json, false);
}

export function OptionSideFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): OptionSide {
  if (json == null) {
    return json;
  }
  return {
    ask: json["ask"] == null ? undefined : json["ask"],
    bid: json["bid"] == null ? undefined : json["bid"],
    change: json["change"] == null ? undefined : json["change"],
    contractName:
      json["contract_name"] == null ? undefined : json["contract_name"],
    impliedVolatility:
      json["implied_volatility"] == null
        ? undefined
        : json["implied_volatility"],
    inTheMoney: json["in_the_money"] == null ? undefined : json["in_the_money"],
    lastPrice: json["last_price"] == null ? undefined : json["last_price"],
    lastTradeDate:
      json["last_trade_date"] == null ? undefined : json["last_trade_date"],
    openInterest:
      json["open_interest"] == null ? undefined : json["open_interest"],
    optionId: json["option_id"] == null ? undefined : json["option_id"],
    percentChange:
      json["percent_change"] == null ? undefined : json["percent_change"],
    strike: json["strike"] == null ? undefined : json["strike"],
    volume: json["volume"] == null ? undefined : json["volume"],
  };
}

export function OptionSideToJSON(json: any): OptionSide {
  return OptionSideToJSONTyped(json, false);
}

export function OptionSideToJSONTyped(
  value?: OptionSide | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ask: value["ask"],
    bid: value["bid"],
    change: value["change"],
    contract_name: value["contractName"],
    implied_volatility: value["impliedVolatility"],
    in_the_money: value["inTheMoney"],
    last_price: value["lastPrice"],
    last_trade_date: value["lastTradeDate"],
    open_interest: value["openInterest"],
    option_id: value["optionId"],
    percent_change: value["percentChange"],
    strike: value["strike"],
    volume: value["volume"],
  };
}
