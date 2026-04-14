/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import * as runtime from "../runtime";
import type {
  AdjustEnum,
  ApiBadRequestErrorResponseBody,
  ApiForbiddenErrorResponseBody,
  ApiInternalServerErrorResponseBody,
  ApiNotFoundErrorResponseBody,
  ApiParameterTooLongErrorResponseBody,
  ApiTooManyRequestsErrorResponseBody,
  ApiUnauthorizedErrorResponseBody,
  DirectionEnum,
  FormatEnum,
  GetEod200Response,
  GetPrice200Response,
  GetQuote200Response,
  GetTimeSeries200Response,
  GetTimeSeriesCross200Response,
  IntervalEnum,
  MarketEnum,
  MarketMoversResponseBody,
  OrderEnum,
  TypeEnum,
} from "../models/index";
import {
  AdjustEnumFromJSON,
  AdjustEnumToJSON,
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
  DirectionEnumFromJSON,
  DirectionEnumToJSON,
  FormatEnumFromJSON,
  FormatEnumToJSON,
  GetEod200ResponseFromJSON,
  GetEod200ResponseToJSON,
  GetPrice200ResponseFromJSON,
  GetPrice200ResponseToJSON,
  GetQuote200ResponseFromJSON,
  GetQuote200ResponseToJSON,
  GetTimeSeries200ResponseFromJSON,
  GetTimeSeries200ResponseToJSON,
  GetTimeSeriesCross200ResponseFromJSON,
  GetTimeSeriesCross200ResponseToJSON,
  IntervalEnumFromJSON,
  IntervalEnumToJSON,
  MarketEnumFromJSON,
  MarketEnumToJSON,
  MarketMoversResponseBodyFromJSON,
  MarketMoversResponseBodyToJSON,
  OrderEnumFromJSON,
  OrderEnumToJSON,
  TypeEnumFromJSON,
  TypeEnumToJSON,
} from "../models/index";

export interface GetEodRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  date?: string;
  prepost?: boolean;
  dp?: number;
}

export interface GetMarketMoversRequest {
  market: MarketEnum;
  direction?: DirectionEnum;
  outputsize?: number;
  country?: string;
  priceGreaterThan?: string;
  dp?: string;
}

export interface GetPriceRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  format?: FormatEnum;
  delimiter?: string;
  prepost?: boolean;
  dp?: number;
}

export interface GetQuoteRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  interval?: IntervalEnum;
  exchange?: string;
  micCode?: string;
  country?: string;
  volumeTimePeriod?: number;
  type?: TypeEnum;
  format?: FormatEnum;
  delimiter?: string;
  prepost?: boolean;
  eod?: boolean;
  rollingPeriod?: number;
  dp?: number;
  timezone?: string;
}

export interface GetTimeSeriesRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
}

export interface GetTimeSeriesCrossRequest {
  base: string;
  quote: string;
  interval: IntervalEnum;
  baseType?: string;
  baseExchange?: string;
  baseMicCode?: string;
  quoteType?: string;
  quoteExchange?: string;
  quoteMicCode?: string;
  outputsize?: number;
  format?: FormatEnum;
  delimiter?: string;
  prepost?: boolean;
  startDate?: string;
  endDate?: string;
  adjust?: boolean;
  dp?: number;
  timezone?: string;
}

/**
 *
 */
export class MarketDataApi extends runtime.BaseAPI {
  /**
   * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
   * End of day price
   */
  async getEodRaw(
    requestParameters: GetEodRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEod200Response>> {
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

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/eod`;

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
      GetEod200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
   * End of day price
   */
  async getEod(
    requestParameters: GetEodRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEod200Response> {
    const response = await this.getEodRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
   * Market movers
   */
  async getMarketMoversRaw(
    requestParameters: GetMarketMoversRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<MarketMoversResponseBody>> {
    if (requestParameters["market"] == null) {
      throw new runtime.RequiredError(
        "market",
        'Required parameter "market" was null or undefined when calling getMarketMovers().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["direction"] != null) {
      queryParameters["direction"] = requestParameters["direction"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["priceGreaterThan"] != null) {
      queryParameters["price_greater_than"] =
        requestParameters["priceGreaterThan"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/market_movers/{market}`;
    urlPath = urlPath.replace(
      `{${"market"}}`,
      encodeURIComponent(String(requestParameters["market"])),
    );

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
      MarketMoversResponseBodyFromJSON(jsonValue),
    );
  }

  /**
   * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
   * Market movers
   */
  async getMarketMovers(
    requestParameters: GetMarketMoversRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<MarketMoversResponseBody> {
    const response = await this.getMarketMoversRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
   * Latest price
   */
  async getPriceRaw(
    requestParameters: GetPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetPrice200Response>> {
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

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/price`;

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
      GetPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
   * Latest price
   */
  async getPrice(
    requestParameters: GetPriceRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetPrice200Response> {
    const response = await this.getPriceRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
   * Quote
   */
  async getQuoteRaw(
    requestParameters: GetQuoteRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetQuote200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["volumeTimePeriod"] != null) {
      queryParameters["volume_time_period"] =
        requestParameters["volumeTimePeriod"];
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

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["eod"] != null) {
      queryParameters["eod"] = requestParameters["eod"];
    }

    if (requestParameters["rollingPeriod"] != null) {
      queryParameters["rolling_period"] = requestParameters["rollingPeriod"];
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

    let urlPath = `/quote`;

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
      GetQuote200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
   * Quote
   */
  async getQuote(
    requestParameters: GetQuoteRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetQuote200Response> {
    const response = await this.getQuoteRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
   * Time series
   */
  async getTimeSeriesRaw(
    requestParameters: GetTimeSeriesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeries200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeries().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["symbol"] != null) {
      queryParameters["symbol"] = requestParameters["symbol"];
    }

    if (requestParameters["isin"] != null) {
      queryParameters["isin"] = requestParameters["isin"];
    }

    if (requestParameters["figi"] != null) {
      queryParameters["figi"] = requestParameters["figi"];
    }

    if (requestParameters["cusip"] != null) {
      queryParameters["cusip"] = requestParameters["cusip"];
    }

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
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

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/time_series`;

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
      GetTimeSeries200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
   * Time series
   */
  async getTimeSeries(
    requestParameters: GetTimeSeriesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeries200Response> {
    const response = await this.getTimeSeriesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
   * Time series cross
   */
  async getTimeSeriesCrossRaw(
    requestParameters: GetTimeSeriesCrossRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCross200Response>> {
    if (requestParameters["base"] == null) {
      throw new runtime.RequiredError(
        "base",
        'Required parameter "base" was null or undefined when calling getTimeSeriesCross().',
      );
    }

    if (requestParameters["quote"] == null) {
      throw new runtime.RequiredError(
        "quote",
        'Required parameter "quote" was null or undefined when calling getTimeSeriesCross().',
      );
    }

    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCross().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["base"] != null) {
      queryParameters["base"] = requestParameters["base"];
    }

    if (requestParameters["baseType"] != null) {
      queryParameters["base_type"] = requestParameters["baseType"];
    }

    if (requestParameters["baseExchange"] != null) {
      queryParameters["base_exchange"] = requestParameters["baseExchange"];
    }

    if (requestParameters["baseMicCode"] != null) {
      queryParameters["base_mic_code"] = requestParameters["baseMicCode"];
    }

    if (requestParameters["quote"] != null) {
      queryParameters["quote"] = requestParameters["quote"];
    }

    if (requestParameters["quoteType"] != null) {
      queryParameters["quote_type"] = requestParameters["quoteType"];
    }

    if (requestParameters["quoteExchange"] != null) {
      queryParameters["quote_exchange"] = requestParameters["quoteExchange"];
    }

    if (requestParameters["quoteMicCode"] != null) {
      queryParameters["quote_mic_code"] = requestParameters["quoteMicCode"];
    }

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
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

    let urlPath = `/time_series/cross`;

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
      GetTimeSeriesCross200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
   * Time series cross
   */
  async getTimeSeriesCross(
    requestParameters: GetTimeSeriesCrossRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCross200Response> {
    const response = await this.getTimeSeriesCrossRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
