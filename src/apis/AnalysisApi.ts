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
  GetAnalystRatingsLight200Response,
  GetAnalystRatingsUsEquities200Response,
  GetEarningsEstimate200Response,
  GetEpsRevisions200Response,
  GetEpsTrend200Response,
  GetGrowthEstimates200Response,
  GetPriceTarget200Response,
  GetRecommendations200Response,
  GetRevenueEstimate200Response,
  RatingChangeEnum,
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
  GetAnalystRatingsLight200ResponseFromJSON,
  GetAnalystRatingsLight200ResponseToJSON,
  GetAnalystRatingsUsEquities200ResponseFromJSON,
  GetAnalystRatingsUsEquities200ResponseToJSON,
  GetEarningsEstimate200ResponseFromJSON,
  GetEarningsEstimate200ResponseToJSON,
  GetEpsRevisions200ResponseFromJSON,
  GetEpsRevisions200ResponseToJSON,
  GetEpsTrend200ResponseFromJSON,
  GetEpsTrend200ResponseToJSON,
  GetGrowthEstimates200ResponseFromJSON,
  GetGrowthEstimates200ResponseToJSON,
  GetPriceTarget200ResponseFromJSON,
  GetPriceTarget200ResponseToJSON,
  GetRecommendations200ResponseFromJSON,
  GetRecommendations200ResponseToJSON,
  GetRevenueEstimate200ResponseFromJSON,
  GetRevenueEstimate200ResponseToJSON,
  RatingChangeEnumFromJSON,
  RatingChangeEnumToJSON,
} from "../models/index";

export interface GetAnalystRatingsLightRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  ratingChange?: RatingChangeEnum;
  outputsize?: number;
  country?: string;
}

export interface GetAnalystRatingsUsEquitiesRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  ratingChange?: RatingChangeEnum;
  outputsize?: number;
}

export interface GetEarningsEstimateRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetEpsRevisionsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetEpsTrendRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetGrowthEstimatesRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetPriceTargetRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetRecommendationsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
}

export interface GetRevenueEstimateRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  country?: string;
  exchange?: string;
  dp?: number;
}

/**
 *
 */
export class AnalysisApi extends runtime.BaseAPI {
  /**
   * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
   * Analyst ratings snapshot
   */
  async getAnalystRatingsLightRaw(
    requestParameters: GetAnalystRatingsLightRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetAnalystRatingsLight200Response>> {
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

    if (requestParameters["ratingChange"] != null) {
      queryParameters["rating_change"] = requestParameters["ratingChange"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/analyst_ratings/light`;

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
      GetAnalystRatingsLight200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
   * Analyst ratings snapshot
   */
  async getAnalystRatingsLight(
    requestParameters: GetAnalystRatingsLightRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetAnalystRatingsLight200Response> {
    const response = await this.getAnalystRatingsLightRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
   * Analyst ratings US equities
   */
  async getAnalystRatingsUsEquitiesRaw(
    requestParameters: GetAnalystRatingsUsEquitiesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetAnalystRatingsUsEquities200Response>> {
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

    if (requestParameters["ratingChange"] != null) {
      queryParameters["rating_change"] = requestParameters["ratingChange"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/analyst_ratings/us_equities`;

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
      GetAnalystRatingsUsEquities200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
   * Analyst ratings US equities
   */
  async getAnalystRatingsUsEquities(
    requestParameters: GetAnalystRatingsUsEquitiesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetAnalystRatingsUsEquities200Response> {
    const response = await this.getAnalystRatingsUsEquitiesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
   * Earnings estimate
   */
  async getEarningsEstimateRaw(
    requestParameters: GetEarningsEstimateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEarningsEstimate200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/earnings_estimate`;

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
      GetEarningsEstimate200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
   * Earnings estimate
   */
  async getEarningsEstimate(
    requestParameters: GetEarningsEstimateRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEarningsEstimate200Response> {
    const response = await this.getEarningsEstimateRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
   * EPS revisions
   */
  async getEpsRevisionsRaw(
    requestParameters: GetEpsRevisionsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEpsRevisions200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/eps_revisions`;

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
      GetEpsRevisions200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
   * EPS revisions
   */
  async getEpsRevisions(
    requestParameters: GetEpsRevisionsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEpsRevisions200Response> {
    const response = await this.getEpsRevisionsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
   * EPS trend
   */
  async getEpsTrendRaw(
    requestParameters: GetEpsTrendRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEpsTrend200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/eps_trend`;

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
      GetEpsTrend200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
   * EPS trend
   */
  async getEpsTrend(
    requestParameters: GetEpsTrendRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEpsTrend200Response> {
    const response = await this.getEpsTrendRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
   * Growth estimates
   */
  async getGrowthEstimatesRaw(
    requestParameters: GetGrowthEstimatesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetGrowthEstimates200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/growth_estimates`;

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
      GetGrowthEstimates200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
   * Growth estimates
   */
  async getGrowthEstimates(
    requestParameters: GetGrowthEstimatesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetGrowthEstimates200Response> {
    const response = await this.getGrowthEstimatesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
   * Price target
   */
  async getPriceTargetRaw(
    requestParameters: GetPriceTargetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetPriceTarget200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/price_target`;

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
      GetPriceTarget200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
   * Price target
   */
  async getPriceTarget(
    requestParameters: GetPriceTargetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetPriceTarget200Response> {
    const response = await this.getPriceTargetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
   * Recommendations
   */
  async getRecommendationsRaw(
    requestParameters: GetRecommendationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetRecommendations200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/recommendations`;

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
      GetRecommendations200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
   * Recommendations
   */
  async getRecommendations(
    requestParameters: GetRecommendationsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetRecommendations200Response> {
    const response = await this.getRecommendationsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
   * Revenue estimate
   */
  async getRevenueEstimateRaw(
    requestParameters: GetRevenueEstimateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetRevenueEstimate200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/revenue_estimate`;

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
      GetRevenueEstimate200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
   * Revenue estimate
   */
  async getRevenueEstimate(
    requestParameters: GetRevenueEstimateRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetRevenueEstimate200Response> {
    const response = await this.getRevenueEstimateRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
