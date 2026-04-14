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
  GetBonds200Response,
  GetCommodities200Response,
  GetCountries200Response,
  GetCrossListings200Response,
  GetCryptocurrencies200Response,
  GetCryptocurrencyExchanges200Response,
  GetEarliestTimestamp200Response,
  GetEtf200Response,
  GetExchangeSchedule200Response,
  GetExchanges200Response,
  GetForexPairs200Response,
  GetFunds200Response,
  GetInstrumentType200Response,
  GetIntervals200Response,
  GetStocks200Response,
  GetSymbolSearch200Response,
  GetTechnicalIndicators200Response,
  IntervalEnum,
  MarketStateResponseItem,
  TypeEnum,
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
  GetBonds200ResponseFromJSON,
  GetBonds200ResponseToJSON,
  GetCommodities200ResponseFromJSON,
  GetCommodities200ResponseToJSON,
  GetCountries200ResponseFromJSON,
  GetCountries200ResponseToJSON,
  GetCrossListings200ResponseFromJSON,
  GetCrossListings200ResponseToJSON,
  GetCryptocurrencies200ResponseFromJSON,
  GetCryptocurrencies200ResponseToJSON,
  GetCryptocurrencyExchanges200ResponseFromJSON,
  GetCryptocurrencyExchanges200ResponseToJSON,
  GetEarliestTimestamp200ResponseFromJSON,
  GetEarliestTimestamp200ResponseToJSON,
  GetEtf200ResponseFromJSON,
  GetEtf200ResponseToJSON,
  GetExchangeSchedule200ResponseFromJSON,
  GetExchangeSchedule200ResponseToJSON,
  GetExchanges200ResponseFromJSON,
  GetExchanges200ResponseToJSON,
  GetForexPairs200ResponseFromJSON,
  GetForexPairs200ResponseToJSON,
  GetFunds200ResponseFromJSON,
  GetFunds200ResponseToJSON,
  GetInstrumentType200ResponseFromJSON,
  GetInstrumentType200ResponseToJSON,
  GetIntervals200ResponseFromJSON,
  GetIntervals200ResponseToJSON,
  GetStocks200ResponseFromJSON,
  GetStocks200ResponseToJSON,
  GetSymbolSearch200ResponseFromJSON,
  GetSymbolSearch200ResponseToJSON,
  GetTechnicalIndicators200ResponseFromJSON,
  GetTechnicalIndicators200ResponseToJSON,
  IntervalEnumFromJSON,
  IntervalEnumToJSON,
  MarketStateResponseItemFromJSON,
  MarketStateResponseItemToJSON,
  TypeEnumFromJSON,
  TypeEnumToJSON,
} from "../models/index";

export interface GetBondsRequest {
  symbol?: string;
  exchange?: string;
  country?: string;
  format?: FormatEnum;
  delimiter?: string;
  showPlan?: boolean;
  page?: number;
  outputsize?: number;
}

export interface GetCommoditiesRequest {
  symbol?: string;
  category?: string;
  format?: FormatEnum;
  delimiter?: string;
}

export interface GetCrossListingsRequest {
  symbol: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetCryptocurrenciesRequest {
  symbol?: string;
  exchange?: string;
  currencyBase?: string;
  currencyQuote?: string;
  format?: FormatEnum;
  delimiter?: string;
}

export interface GetCryptocurrencyExchangesRequest {
  format?: FormatEnum;
  delimiter?: string;
}

export interface GetEarliestTimestampRequest {
  interval: IntervalEnum;
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  timezone?: string;
}

export interface GetEtfRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  cik?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  format?: FormatEnum;
  delimiter?: string;
  showPlan?: boolean;
  includeDelisted?: boolean;
}

export interface GetExchangeScheduleRequest {
  micName?: string;
  micCode?: string;
  country?: string;
  date?: string;
}

export interface GetExchangesRequest {
  type?: TypeEnum;
  name?: string;
  code?: string;
  country?: string;
  format?: FormatEnum;
  delimiter?: string;
  showPlan?: boolean;
}

export interface GetForexPairsRequest {
  symbol?: string;
  currencyBase?: string;
  currencyQuote?: string;
  format?: FormatEnum;
  delimiter?: string;
}

export interface GetFundsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  cik?: string;
  exchange?: string;
  country?: string;
  format?: FormatEnum;
  delimiter?: string;
  showPlan?: boolean;
  page?: number;
  outputsize?: number;
}

export interface GetMarketStateRequest {
  exchange?: string;
  code?: string;
  country?: string;
}

export interface GetStocksRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  cik?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  format?: FormatEnum;
  delimiter?: string;
  showPlan?: boolean;
  includeDelisted?: boolean;
}

export interface GetSymbolSearchRequest {
  symbol: string;
  outputsize?: number;
  showPlan?: boolean;
}

/**
 *
 */
export class ReferenceDataApi extends runtime.BaseAPI {
  /**
   * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
   * Fixed income
   */
  async getBondsRaw(
    requestParameters: GetBondsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetBonds200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/bonds`;

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
      GetBonds200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
   * Fixed income
   */
  async getBonds(
    requestParameters: GetBondsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetBonds200Response> {
    const response = await this.getBondsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
   * Commodities
   */
  async getCommoditiesRaw(
    requestParameters: GetCommoditiesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCommodities200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["category"] != null) {
      queryParameters["category"] = requestParameters["category"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/commodities`;

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
      GetCommodities200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
   * Commodities
   */
  async getCommodities(
    requestParameters: GetCommoditiesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCommodities200Response> {
    const response = await this.getCommoditiesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
   * Countries
   */
  async getCountriesRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCountries200Response>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/countries`;

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
      GetCountries200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
   * Countries
   */
  async getCountries(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCountries200Response> {
    const response = await this.getCountriesRaw(initOverrides);
    return await response.value();
  }

  /**
   * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
   * Cross listings
   */
  async getCrossListingsRaw(
    requestParameters: GetCrossListingsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCrossListings200Response>> {
    if (requestParameters["symbol"] == null) {
      throw new runtime.RequiredError(
        "symbol",
        'Required parameter "symbol" was null or undefined when calling getCrossListings().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cross_listings`;

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
      GetCrossListings200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
   * Cross listings
   */
  async getCrossListings(
    requestParameters: GetCrossListingsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCrossListings200Response> {
    const response = await this.getCrossListingsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
   * Cryptocurrency pairs
   */
  async getCryptocurrenciesRaw(
    requestParameters: GetCryptocurrenciesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCryptocurrencies200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["currencyBase"] != null) {
      queryParameters["currency_base"] = requestParameters["currencyBase"];
    }

    if (requestParameters["currencyQuote"] != null) {
      queryParameters["currency_quote"] = requestParameters["currencyQuote"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cryptocurrencies`;

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
      GetCryptocurrencies200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
   * Cryptocurrency pairs
   */
  async getCryptocurrencies(
    requestParameters: GetCryptocurrenciesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCryptocurrencies200Response> {
    const response = await this.getCryptocurrenciesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
   * Cryptocurrency exchanges
   */
  async getCryptocurrencyExchangesRaw(
    requestParameters: GetCryptocurrencyExchangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCryptocurrencyExchanges200Response>> {
    const queryParameters: any = {};

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cryptocurrency_exchanges`;

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
      GetCryptocurrencyExchanges200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
   * Cryptocurrency exchanges
   */
  async getCryptocurrencyExchanges(
    requestParameters: GetCryptocurrencyExchangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCryptocurrencyExchanges200Response> {
    const response = await this.getCryptocurrencyExchangesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
   * Earliest timestamp
   */
  async getEarliestTimestampRaw(
    requestParameters: GetEarliestTimestampRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEarliestTimestamp200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getEarliestTimestamp().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["figi"] != null) {
      queryParameters["figi"] = requestParameters["figi"];
    }

    if (requestParameters["isin"] != null) {
      queryParameters["isin"] = requestParameters["isin"];
    }

    if (requestParameters["cusip"] != null) {
      queryParameters["cusip"] = requestParameters["cusip"];
    }

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/earliest_timestamp`;

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
      GetEarliestTimestamp200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
   * Earliest timestamp
   */
  async getEarliestTimestamp(
    requestParameters: GetEarliestTimestampRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEarliestTimestamp200Response> {
    const response = await this.getEarliestTimestampRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
   * ETFs
   */
  async getEtfRaw(
    requestParameters: GetEtfRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEtf200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["figi"] != null) {
      queryParameters["figi"] = requestParameters["figi"];
    }

    if (requestParameters["isin"] != null) {
      queryParameters["isin"] = requestParameters["isin"];
    }

    if (requestParameters["cusip"] != null) {
      queryParameters["cusip"] = requestParameters["cusip"];
    }

    if (requestParameters["cik"] != null) {
      queryParameters["cik"] = requestParameters["cik"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    if (requestParameters["includeDelisted"] != null) {
      queryParameters["include_delisted"] =
        requestParameters["includeDelisted"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs`;

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
      GetEtf200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
   * ETFs
   */
  async getEtf(
    requestParameters: GetEtfRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEtf200Response> {
    const response = await this.getEtfRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
   * Exchanges schedule
   */
  async getExchangeScheduleRaw(
    requestParameters: GetExchangeScheduleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetExchangeSchedule200Response>> {
    const queryParameters: any = {};

    if (requestParameters["micName"] != null) {
      queryParameters["mic_name"] = requestParameters["micName"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/exchange_schedule`;

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
      GetExchangeSchedule200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
   * Exchanges schedule
   */
  async getExchangeSchedule(
    requestParameters: GetExchangeScheduleRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetExchangeSchedule200Response> {
    const response = await this.getExchangeScheduleRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
   * Exchanges
   */
  async getExchangesRaw(
    requestParameters: GetExchangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetExchanges200Response>> {
    const queryParameters: any = {};

    if (requestParameters["type"] != null) {
      queryParameters["type"] = requestParameters["type"];
    }

    if (requestParameters["name"] != null) {
      queryParameters["name"] = requestParameters["name"];
    }

    if (requestParameters["code"] != null) {
      queryParameters["code"] = requestParameters["code"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/exchanges`;

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
      GetExchanges200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
   * Exchanges
   */
  async getExchanges(
    requestParameters: GetExchangesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetExchanges200Response> {
    const response = await this.getExchangesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
   * Forex pairs
   */
  async getForexPairsRaw(
    requestParameters: GetForexPairsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetForexPairs200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["currencyBase"] != null) {
      queryParameters["currency_base"] = requestParameters["currencyBase"];
    }

    if (requestParameters["currencyQuote"] != null) {
      queryParameters["currency_quote"] = requestParameters["currencyQuote"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/forex_pairs`;

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
      GetForexPairs200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
   * Forex pairs
   */
  async getForexPairs(
    requestParameters: GetForexPairsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetForexPairs200Response> {
    const response = await this.getForexPairsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
   * Funds
   */
  async getFundsRaw(
    requestParameters: GetFundsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetFunds200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["figi"] != null) {
      queryParameters["figi"] = requestParameters["figi"];
    }

    if (requestParameters["isin"] != null) {
      queryParameters["isin"] = requestParameters["isin"];
    }

    if (requestParameters["cusip"] != null) {
      queryParameters["cusip"] = requestParameters["cusip"];
    }

    if (requestParameters["cik"] != null) {
      queryParameters["cik"] = requestParameters["cik"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/funds`;

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
      GetFunds200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
   * Funds
   */
  async getFunds(
    requestParameters: GetFundsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetFunds200Response> {
    const response = await this.getFundsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
   * Instrument type
   */
  async getInstrumentTypeRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetInstrumentType200Response>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/instrument_type`;

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
      GetInstrumentType200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
   * Instrument type
   */
  async getInstrumentType(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetInstrumentType200Response> {
    const response = await this.getInstrumentTypeRaw(initOverrides);
    return await response.value();
  }

  /**
   * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
   * Intervals List
   */
  async getIntervalsRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetIntervals200Response>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/intervals`;

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
      GetIntervals200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
   * Intervals List
   */
  async getIntervals(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetIntervals200Response> {
    const response = await this.getIntervalsRaw(initOverrides);
    return await response.value();
  }

  /**
   * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
   * Market state
   */
  async getMarketStateRaw(
    requestParameters: GetMarketStateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<MarketStateResponseItem>>> {
    const queryParameters: any = {};

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["code"] != null) {
      queryParameters["code"] = requestParameters["code"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/market_state`;

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
      jsonValue.map(MarketStateResponseItemFromJSON),
    );
  }

  /**
   * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
   * Market state
   */
  async getMarketState(
    requestParameters: GetMarketStateRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<MarketStateResponseItem>> {
    const response = await this.getMarketStateRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
   * Stocks
   */
  async getStocksRaw(
    requestParameters: GetStocksRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetStocks200Response>> {
    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["figi"] != null) {
      queryParameters["figi"] = requestParameters["figi"];
    }

    if (requestParameters["isin"] != null) {
      queryParameters["isin"] = requestParameters["isin"];
    }

    if (requestParameters["cusip"] != null) {
      queryParameters["cusip"] = requestParameters["cusip"];
    }

    if (requestParameters["cik"] != null) {
      queryParameters["cik"] = requestParameters["cik"];
    }

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["type"] != null) {
      queryParameters["type"] = requestParameters["type"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    if (requestParameters["includeDelisted"] != null) {
      queryParameters["include_delisted"] =
        requestParameters["includeDelisted"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/stocks`;

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
      GetStocks200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
   * Stocks
   */
  async getStocks(
    requestParameters: GetStocksRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetStocks200Response> {
    const response = await this.getStocksRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
   * Symbol search
   */
  async getSymbolSearchRaw(
    requestParameters: GetSymbolSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetSymbolSearch200Response>> {
    if (requestParameters["symbol"] == null) {
      throw new runtime.RequiredError(
        "symbol",
        'Required parameter "symbol" was null or undefined when calling getSymbolSearch().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["showPlan"] != null) {
      queryParameters["show_plan"] = requestParameters["showPlan"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/symbol_search`;

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
      GetSymbolSearch200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
   * Symbol search
   */
  async getSymbolSearch(
    requestParameters: GetSymbolSearchRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetSymbolSearch200Response> {
    const response = await this.getSymbolSearchRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
   * Technical indicators
   */
  async getTechnicalIndicatorsRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTechnicalIndicators200Response>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/technical_indicators`;

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
      GetTechnicalIndicators200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
   * Technical indicators
   */
  async getTechnicalIndicators(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTechnicalIndicators200Response> {
    const response = await this.getTechnicalIndicatorsRaw(initOverrides);
    return await response.value();
  }
}
