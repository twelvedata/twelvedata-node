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
 * @interface GetProfile200Response
 */
export interface GetProfile200Response {
  /**
   * Ticker of the company
   * @type {string}
   * @memberof GetProfile200Response
   */
  symbol?: string;
  /**
   * Name of the company
   * @type {string}
   * @memberof GetProfile200Response
   */
  name?: string;
  /**
   * Exchange name where the company is listed
   * @type {string}
   * @memberof GetProfile200Response
   */
  exchange?: string;
  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   * @type {string}
   * @memberof GetProfile200Response
   */
  micCode?: string;
  /**
   * Sector at which the company operates
   * @type {string}
   * @memberof GetProfile200Response
   */
  sector?: string;
  /**
   * Industry at which company operates
   * @type {string}
   * @memberof GetProfile200Response
   */
  industry?: string;
  /**
   * Number of employees in the company
   * @type {number}
   * @memberof GetProfile200Response
   */
  employees?: number;
  /**
   * Website of the company
   * @type {string}
   * @memberof GetProfile200Response
   */
  website?: string;
  /**
   * Description of the company activities
   * @type {string}
   * @memberof GetProfile200Response
   */
  description?: string;
  /**
   * Issue type of the stock
   * @type {string}
   * @memberof GetProfile200Response
   */
  type?: string;
  /**
   * Name of the CEO of the company
   * @type {string}
   * @memberof GetProfile200Response
   */
  cEO?: string;
  /**
   * Street address of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  address?: string;
  /**
   * Secondary address of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  address2?: string;
  /**
   * City of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  city?: string;
  /**
   * ZIP code of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  zip?: string;
  /**
   * State of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  state?: string;
  /**
   * Country of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  country?: string;
  /**
   * Phone number of the company if presented
   * @type {string}
   * @memberof GetProfile200Response
   */
  phone?: string;
}

/**
 * Check if a given object implements the GetProfile200Response interface.
 */
export function instanceOfGetProfile200Response(
  value: object,
): value is GetProfile200Response {
  return true;
}

export function GetProfile200ResponseFromJSON(
  json: any,
): GetProfile200Response {
  return GetProfile200ResponseFromJSONTyped(json, false);
}

export function GetProfile200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): GetProfile200Response {
  if (json == null) {
    return json;
  }
  return {
    symbol: json["symbol"] == null ? undefined : json["symbol"],
    name: json["name"] == null ? undefined : json["name"],
    exchange: json["exchange"] == null ? undefined : json["exchange"],
    micCode: json["mic_code"] == null ? undefined : json["mic_code"],
    sector: json["sector"] == null ? undefined : json["sector"],
    industry: json["industry"] == null ? undefined : json["industry"],
    employees: json["employees"] == null ? undefined : json["employees"],
    website: json["website"] == null ? undefined : json["website"],
    description: json["description"] == null ? undefined : json["description"],
    type: json["type"] == null ? undefined : json["type"],
    cEO: json["CEO"] == null ? undefined : json["CEO"],
    address: json["address"] == null ? undefined : json["address"],
    address2: json["address2"] == null ? undefined : json["address2"],
    city: json["city"] == null ? undefined : json["city"],
    zip: json["zip"] == null ? undefined : json["zip"],
    state: json["state"] == null ? undefined : json["state"],
    country: json["country"] == null ? undefined : json["country"],
    phone: json["phone"] == null ? undefined : json["phone"],
  };
}

export function GetProfile200ResponseToJSON(json: any): GetProfile200Response {
  return GetProfile200ResponseToJSONTyped(json, false);
}

export function GetProfile200ResponseToJSONTyped(
  value?: GetProfile200Response | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    symbol: value["symbol"],
    name: value["name"],
    exchange: value["exchange"],
    mic_code: value["micCode"],
    sector: value["sector"],
    industry: value["industry"],
    employees: value["employees"],
    website: value["website"],
    description: value["description"],
    type: value["type"],
    CEO: value["cEO"],
    address: value["address"],
    address2: value["address2"],
    city: value["city"],
    zip: value["zip"],
    state: value["state"],
    country: value["country"],
    phone: value["phone"],
  };
}
