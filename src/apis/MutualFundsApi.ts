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
  GetMutualFundsFamily200Response,
  GetMutualFundsList200Response,
  GetMutualFundsType200Response,
  GetMutualFundsWorld200Response,
  GetMutualFundsWorldComposition200Response,
  GetMutualFundsWorldPerformance200Response,
  GetMutualFundsWorldPurchaseInfo200Response,
  GetMutualFundsWorldRatings200Response,
  GetMutualFundsWorldRisk200Response,
  GetMutualFundsWorldSummary200Response,
  GetMutualFundsWorldSustainability200Response,
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
  GetMutualFundsFamily200ResponseFromJSON,
  GetMutualFundsFamily200ResponseToJSON,
  GetMutualFundsList200ResponseFromJSON,
  GetMutualFundsList200ResponseToJSON,
  GetMutualFundsType200ResponseFromJSON,
  GetMutualFundsType200ResponseToJSON,
  GetMutualFundsWorld200ResponseFromJSON,
  GetMutualFundsWorld200ResponseToJSON,
  GetMutualFundsWorldComposition200ResponseFromJSON,
  GetMutualFundsWorldComposition200ResponseToJSON,
  GetMutualFundsWorldPerformance200ResponseFromJSON,
  GetMutualFundsWorldPerformance200ResponseToJSON,
  GetMutualFundsWorldPurchaseInfo200ResponseFromJSON,
  GetMutualFundsWorldPurchaseInfo200ResponseToJSON,
  GetMutualFundsWorldRatings200ResponseFromJSON,
  GetMutualFundsWorldRatings200ResponseToJSON,
  GetMutualFundsWorldRisk200ResponseFromJSON,
  GetMutualFundsWorldRisk200ResponseToJSON,
  GetMutualFundsWorldSummary200ResponseFromJSON,
  GetMutualFundsWorldSummary200ResponseToJSON,
  GetMutualFundsWorldSustainability200ResponseFromJSON,
  GetMutualFundsWorldSustainability200ResponseToJSON,
} from "../models/index";

export interface GetMutualFundsFamilyRequest {
  fundFamily?: string;
  country?: string;
}

export interface GetMutualFundsListRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  cik?: string;
  country?: string;
  fundFamily?: string;
  fundType?: string;
  performanceRating?: number;
  riskRating?: number;
  page?: number;
  outputsize?: number;
}

export interface GetMutualFundsTypeRequest {
  fundType?: string;
  country?: string;
}

export interface GetMutualFundsWorldRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldCompositionRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldPerformanceRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldPurchaseInfoRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldRatingsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldRiskRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldSummaryRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  dp?: number;
}

export interface GetMutualFundsWorldSustainabilityRequest {
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
export class MutualFundsApi extends runtime.BaseAPI {
  /**
   * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
   * MFs families
   */
  async getMutualFundsFamilyRaw(
    requestParameters: GetMutualFundsFamilyRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsFamily200Response>> {
    const queryParameters: any = {};

    if (requestParameters["fundFamily"] != null) {
      queryParameters["fund_family"] = requestParameters["fundFamily"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mutual_funds/family`;

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
      GetMutualFundsFamily200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
   * MFs families
   */
  async getMutualFundsFamily(
    requestParameters: GetMutualFundsFamilyRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsFamily200Response> {
    const response = await this.getMutualFundsFamilyRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
   * MFs directory
   */
  async getMutualFundsListRaw(
    requestParameters: GetMutualFundsListRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsList200Response>> {
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

    if (requestParameters["performanceRating"] != null) {
      queryParameters["performance_rating"] =
        requestParameters["performanceRating"];
    }

    if (requestParameters["riskRating"] != null) {
      queryParameters["risk_rating"] = requestParameters["riskRating"];
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

    let urlPath = `/mutual_funds/list`;

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
      GetMutualFundsList200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
   * MFs directory
   */
  async getMutualFundsList(
    requestParameters: GetMutualFundsListRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsList200Response> {
    const response = await this.getMutualFundsListRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
   * MFs types
   */
  async getMutualFundsTypeRaw(
    requestParameters: GetMutualFundsTypeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsType200Response>> {
    const queryParameters: any = {};

    if (requestParameters["fundType"] != null) {
      queryParameters["fund_type"] = requestParameters["fundType"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mutual_funds/type`;

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
      GetMutualFundsType200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
   * MFs types
   */
  async getMutualFundsType(
    requestParameters: GetMutualFundsTypeRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsType200Response> {
    const response = await this.getMutualFundsTypeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
   * MF full data
   */
  async getMutualFundsWorldRaw(
    requestParameters: GetMutualFundsWorldRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorld200Response>> {
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

    let urlPath = `/mutual_funds/world`;

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
      GetMutualFundsWorld200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
   * MF full data
   */
  async getMutualFundsWorld(
    requestParameters: GetMutualFundsWorldRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorld200Response> {
    const response = await this.getMutualFundsWorldRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
   * Composition
   */
  async getMutualFundsWorldCompositionRaw(
    requestParameters: GetMutualFundsWorldCompositionRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldComposition200Response>> {
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

    let urlPath = `/mutual_funds/world/composition`;

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
      GetMutualFundsWorldComposition200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
   * Composition
   */
  async getMutualFundsWorldComposition(
    requestParameters: GetMutualFundsWorldCompositionRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldComposition200Response> {
    const response = await this.getMutualFundsWorldCompositionRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
   * Performance
   */
  async getMutualFundsWorldPerformanceRaw(
    requestParameters: GetMutualFundsWorldPerformanceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldPerformance200Response>> {
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

    let urlPath = `/mutual_funds/world/performance`;

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
      GetMutualFundsWorldPerformance200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
   * Performance
   */
  async getMutualFundsWorldPerformance(
    requestParameters: GetMutualFundsWorldPerformanceRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldPerformance200Response> {
    const response = await this.getMutualFundsWorldPerformanceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
   * Purchase info
   */
  async getMutualFundsWorldPurchaseInfoRaw(
    requestParameters: GetMutualFundsWorldPurchaseInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldPurchaseInfo200Response>> {
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

    let urlPath = `/mutual_funds/world/purchase_info`;

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
      GetMutualFundsWorldPurchaseInfo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
   * Purchase info
   */
  async getMutualFundsWorldPurchaseInfo(
    requestParameters: GetMutualFundsWorldPurchaseInfoRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldPurchaseInfo200Response> {
    const response = await this.getMutualFundsWorldPurchaseInfoRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
   * Ratings
   */
  async getMutualFundsWorldRatingsRaw(
    requestParameters: GetMutualFundsWorldRatingsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldRatings200Response>> {
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

    let urlPath = `/mutual_funds/world/ratings`;

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
      GetMutualFundsWorldRatings200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
   * Ratings
   */
  async getMutualFundsWorldRatings(
    requestParameters: GetMutualFundsWorldRatingsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldRatings200Response> {
    const response = await this.getMutualFundsWorldRatingsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
   * Risk
   */
  async getMutualFundsWorldRiskRaw(
    requestParameters: GetMutualFundsWorldRiskRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldRisk200Response>> {
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

    let urlPath = `/mutual_funds/world/risk`;

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
      GetMutualFundsWorldRisk200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
   * Risk
   */
  async getMutualFundsWorldRisk(
    requestParameters: GetMutualFundsWorldRiskRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldRisk200Response> {
    const response = await this.getMutualFundsWorldRiskRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
   * Summary
   */
  async getMutualFundsWorldSummaryRaw(
    requestParameters: GetMutualFundsWorldSummaryRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMutualFundsWorldSummary200Response>> {
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

    let urlPath = `/mutual_funds/world/summary`;

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
      GetMutualFundsWorldSummary200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
   * Summary
   */
  async getMutualFundsWorldSummary(
    requestParameters: GetMutualFundsWorldSummaryRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldSummary200Response> {
    const response = await this.getMutualFundsWorldSummaryRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
   * Sustainability
   */
  async getMutualFundsWorldSustainabilityRaw(
    requestParameters: GetMutualFundsWorldSustainabilityRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<
    runtime.ApiResponse<GetMutualFundsWorldSustainability200Response>
  > {
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

    let urlPath = `/mutual_funds/world/sustainability`;

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
      GetMutualFundsWorldSustainability200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
   * Sustainability
   */
  async getMutualFundsWorldSustainability(
    requestParameters: GetMutualFundsWorldSustainabilityRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMutualFundsWorldSustainability200Response> {
    const response = await this.getMutualFundsWorldSustainabilityRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
