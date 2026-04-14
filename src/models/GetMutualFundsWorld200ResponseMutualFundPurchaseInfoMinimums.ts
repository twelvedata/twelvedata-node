/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Minimum investment amounts required to purchase or add to the mutual fund, including IRA minimums
 * @export
 * @interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
 */
export interface GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  /**
   * Investment minimum
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
   */
  initialInvestment?: number;
  /**
   * Minimum amount of additional investment
   * @type {number}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
   */
  additionalInvestment?: number;
  /**
   * Investment minimum for IRA
   * @type {object}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
   */
  initialIraInvestment?: object;
  /**
   * Minimum amount of additional investment for IRA
   * @type {object}
   * @memberof GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums
   */
  additionalIraInvestment?: object;
}

/**
 * Check if a given object implements the GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums interface.
 */
export function instanceOfGetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums(
  value: object,
): value is GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  return true;
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  if (json == null) {
    return json;
  }
  return {
    initialInvestment:
      json["initial_investment"] == null
        ? undefined
        : json["initial_investment"],
    additionalInvestment:
      json["additional_investment"] == null
        ? undefined
        : json["additional_investment"],
    initialIraInvestment:
      json["initial_ira_investment"] == null
        ? undefined
        : json["initial_ira_investment"],
    additionalIraInvestment:
      json["additional_ira_investment"] == null
        ? undefined
        : json["additional_ira_investment"],
  };
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSON(
  json: any,
): GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums {
  return GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSONTyped(
    json,
    false,
  );
}

export function GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimumsToJSONTyped(
  value?: GetMutualFundsWorld200ResponseMutualFundPurchaseInfoMinimums | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    initial_investment: value["initialInvestment"],
    additional_investment: value["additionalInvestment"],
    initial_ira_investment: value["initialIraInvestment"],
    additional_ira_investment: value["additionalIraInvestment"],
  };
}
