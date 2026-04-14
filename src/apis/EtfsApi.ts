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
  GetETFsFamily200Response,
  GetETFsList200Response,
  GetETFsType200Response,
  GetETFsWorld200Response,
  GetETFsWorldComposition200Response,
  GetETFsWorldPerformance200Response,
  GetETFsWorldRisk200Response,
  GetETFsWorldSummary200Response,
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
  GetETFsFamily200ResponseFromJSON,
  GetETFsFamily200ResponseToJSON,
  GetETFsList200ResponseFromJSON,
  GetETFsList200ResponseToJSON,
  GetETFsType200ResponseFromJSON,
  GetETFsType200ResponseToJSON,
  GetETFsWorld200ResponseFromJSON,
  GetETFsWorld200ResponseToJSON,
  GetETFsWorldComposition200ResponseFromJSON,
  GetETFsWorldComposition200ResponseToJSON,
  GetETFsWorldPerformance200ResponseFromJSON,
  GetETFsWorldPerformance200ResponseToJSON,
  GetETFsWorldRisk200ResponseFromJSON,
  GetETFsWorldRisk200ResponseToJSON,
  GetETFsWorldSummary200ResponseFromJSON,
  GetETFsWorldSummary200ResponseToJSON,
} from "../models/index";

export interface GetETFsFamilyRequest {
  country?: string;
  fundFamily?: string;
}

export interface GetETFsListRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  cik?: string;
  country?: string;
  fundFamily?: string;
  fundType?: string;
  page?: number;
  outputsize?: number;
}

export interface GetETFsTypeRequest {
  country?: string;
  fundType?: string;
}

export interface GetETFsWorldRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetETFsWorldCompositionRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetETFsWorldPerformanceRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetETFsWorldRiskRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetETFsWorldSummaryRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

/**
 *
 */
export class EtfsApi extends runtime.BaseAPI {
  /**
   * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
   * ETFs families
   */
  async getETFsFamilyRaw(
    requestParameters: GetETFsFamilyRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsFamily200Response>> {
    const queryParameters: any = {};

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["fundFamily"] != null) {
      queryParameters["fund_family"] = requestParameters["fundFamily"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/family`;

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
      GetETFsFamily200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
   * ETFs families
   */
  async getETFsFamily(
    requestParameters: GetETFsFamilyRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsFamily200Response> {
    const response = await this.getETFsFamilyRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
   * ETFs directory
   */
  async getETFsListRaw(
    requestParameters: GetETFsListRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsList200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["fundFamily"] != null) {
      queryParameters["fund_family"] = requestParameters["fundFamily"];
    }

    if (requestParameters["fundType"] != null) {
      queryParameters["fund_type"] = requestParameters["fundType"];
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

    let urlPath = `/etfs/list`;

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
      GetETFsList200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
   * ETFs directory
   */
  async getETFsList(
    requestParameters: GetETFsListRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsList200Response> {
    const response = await this.getETFsListRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
   * ETFs types
   */
  async getETFsTypeRaw(
    requestParameters: GetETFsTypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsType200Response>> {
    const queryParameters: any = {};

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["fundType"] != null) {
      queryParameters["fund_type"] = requestParameters["fundType"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/type`;

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
      GetETFsType200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
   * ETFs types
   */
  async getETFsType(
    requestParameters: GetETFsTypeRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsType200Response> {
    const response = await this.getETFsTypeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
   * ETF full data
   */
  async getETFsWorldRaw(
    requestParameters: GetETFsWorldRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsWorld200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/world`;

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
      GetETFsWorld200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
   * ETF full data
   */
  async getETFsWorld(
    requestParameters: GetETFsWorldRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsWorld200Response> {
    const response = await this.getETFsWorldRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
   * Composition
   */
  async getETFsWorldCompositionRaw(
    requestParameters: GetETFsWorldCompositionRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsWorldComposition200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/world/composition`;

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
      GetETFsWorldComposition200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
   * Composition
   */
  async getETFsWorldComposition(
    requestParameters: GetETFsWorldCompositionRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsWorldComposition200Response> {
    const response = await this.getETFsWorldCompositionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
   * Performance
   */
  async getETFsWorldPerformanceRaw(
    requestParameters: GetETFsWorldPerformanceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsWorldPerformance200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/world/performance`;

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
      GetETFsWorldPerformance200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
   * Performance
   */
  async getETFsWorldPerformance(
    requestParameters: GetETFsWorldPerformanceRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsWorldPerformance200Response> {
    const response = await this.getETFsWorldPerformanceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
   * Risk
   */
  async getETFsWorldRiskRaw(
    requestParameters: GetETFsWorldRiskRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsWorldRisk200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/world/risk`;

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
      GetETFsWorldRisk200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
   * Risk
   */
  async getETFsWorldRisk(
    requestParameters: GetETFsWorldRiskRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsWorldRisk200Response> {
    const response = await this.getETFsWorldRiskRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
   * Summary
   */
  async getETFsWorldSummaryRaw(
    requestParameters: GetETFsWorldSummaryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetETFsWorldSummary200Response>> {
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

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/etfs/world/summary`;

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
      GetETFsWorldSummary200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
   * Summary
   */
  async getETFsWorldSummary(
    requestParameters: GetETFsWorldSummaryRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetETFsWorldSummary200Response> {
    const response = await this.getETFsWorldSummaryRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
