/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import * as runtime from "../runtime";
import type {
  ApiBadRequestErrorResponseBody,
  ApiForbiddenErrorResponseBody,
  ApiInternalServerErrorResponseBody,
  ApiNotFoundErrorResponseBody,
  ApiParameterTooLongErrorResponseBody,
  ApiTooManyRequestsErrorResponseBody,
  ApiUnauthorizedErrorResponseBody,
  FormatEnum,
  GetCurrencyConversion200Response,
  GetExchangeRate200Response,
} from "../models/index";
import {
  ApiBadRequestErrorResponseBodyFromJSON,
  ApiBadRequestErrorResponseBodyToJSON,
  ApiForbiddenErrorResponseBodyFromJSON,
  ApiForbiddenErrorResponseBodyToJSON,
  ApiInternalServerErrorResponseBodyFromJSON,
  ApiInternalServerErrorResponseBodyToJSON,
  ApiNotFoundErrorResponseBodyFromJSON,
  ApiNotFoundErrorResponseBodyToJSON,
  ApiParameterTooLongErrorResponseBodyFromJSON,
  ApiParameterTooLongErrorResponseBodyToJSON,
  ApiTooManyRequestsErrorResponseBodyFromJSON,
  ApiTooManyRequestsErrorResponseBodyToJSON,
  ApiUnauthorizedErrorResponseBodyFromJSON,
  ApiUnauthorizedErrorResponseBodyToJSON,
  FormatEnumFromJSON,
  FormatEnumToJSON,
  GetCurrencyConversion200ResponseFromJSON,
  GetCurrencyConversion200ResponseToJSON,
  GetExchangeRate200ResponseFromJSON,
  GetExchangeRate200ResponseToJSON,
} from "../models/index";

export interface GetCurrencyConversionRequest {
  symbol: string;
  amount: number;
  date?: string;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  timezone?: string;
}

export interface GetExchangeRateRequest {
  symbol: string;
  date?: string;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  timezone?: string;
}

/**
 *
 */
export class CurrenciesApi extends runtime.BaseAPI {
  /**
   * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
   * Currency conversion
   */
  async getCurrencyConversionRaw(
    requestParameters: GetCurrencyConversionRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCurrencyConversion200Response>> {
    if (requestParameters["symbol"] == null) {
      throw new runtime.RequiredError(
        "symbol",
        'Required parameter "symbol" was null or undefined when calling getCurrencyConversion().',
      );
    }

    if (requestParameters["amount"] == null) {
      throw new runtime.RequiredError(
        "amount",
        'Required parameter "amount" was null or undefined when calling getCurrencyConversion().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["amount"] != null) {
      queryParameters["amount"] = requestParameters["amount"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/currency_conversion`;

    const response = await this.request(
      {
        path: urlPath,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetCurrencyConversion200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
   * Currency conversion
   */
  async getCurrencyConversion(
    requestParameters: GetCurrencyConversionRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCurrencyConversion200Response> {
    const response = await this.getCurrencyConversionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
   * Exchange rate
   */
  async getExchangeRateRaw(
    requestParameters: GetExchangeRateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetExchangeRate200Response>> {
    if (requestParameters["symbol"] == null) {
      throw new runtime.RequiredError(
        "symbol",
        'Required parameter "symbol" was null or undefined when calling getExchangeRate().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/exchange_rate`;

    const response = await this.request(
      {
        path: urlPath,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetExchangeRate200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
   * Exchange rate
   */
  async getExchangeRate(
    requestParameters: GetExchangeRateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetExchangeRate200Response> {
    const response = await this.getExchangeRateRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
