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
  DividendsCalendarItem,
  EndpointEnum,
  FormatEnum,
  GetBalanceSheet200Response,
  GetBalanceSheetConsolidated200Response,
  GetCashFlow200Response,
  GetCashFlowConsolidated200Response,
  GetDividends200Response,
  GetEarnings200Response,
  GetEarningsCalendar200Response,
  GetIncomeStatement200Response,
  GetIncomeStatementConsolidated200Response,
  GetIpoCalendar200ResponseValueInner,
  GetKeyExecutives200Response,
  GetLastChanges200Response,
  GetLogo200Response,
  GetMarketCap200Response,
  GetProfile200Response,
  GetSplits200Response,
  GetStatistics200Response,
  PeriodEarningsEnum,
  PeriodEnum,
  PressReleasesListParameters200Response,
  RangeEnum,
  RangeSplitsEnum,
  SplitsCalendarResponseItem,
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
  DividendsCalendarItemFromJSON,
  DividendsCalendarItemToJSON,
  EndpointEnumFromJSON,
  EndpointEnumToJSON,
  FormatEnumFromJSON,
  FormatEnumToJSON,
  GetBalanceSheet200ResponseFromJSON,
  GetBalanceSheet200ResponseToJSON,
  GetBalanceSheetConsolidated200ResponseFromJSON,
  GetBalanceSheetConsolidated200ResponseToJSON,
  GetCashFlow200ResponseFromJSON,
  GetCashFlow200ResponseToJSON,
  GetCashFlowConsolidated200ResponseFromJSON,
  GetCashFlowConsolidated200ResponseToJSON,
  GetDividends200ResponseFromJSON,
  GetDividends200ResponseToJSON,
  GetEarnings200ResponseFromJSON,
  GetEarnings200ResponseToJSON,
  GetEarningsCalendar200ResponseFromJSON,
  GetEarningsCalendar200ResponseToJSON,
  GetIncomeStatement200ResponseFromJSON,
  GetIncomeStatement200ResponseToJSON,
  GetIncomeStatementConsolidated200ResponseFromJSON,
  GetIncomeStatementConsolidated200ResponseToJSON,
  GetIpoCalendar200ResponseValueInnerFromJSON,
  GetIpoCalendar200ResponseValueInnerToJSON,
  GetKeyExecutives200ResponseFromJSON,
  GetKeyExecutives200ResponseToJSON,
  GetLastChanges200ResponseFromJSON,
  GetLastChanges200ResponseToJSON,
  GetLogo200ResponseFromJSON,
  GetLogo200ResponseToJSON,
  GetMarketCap200ResponseFromJSON,
  GetMarketCap200ResponseToJSON,
  GetProfile200ResponseFromJSON,
  GetProfile200ResponseToJSON,
  GetSplits200ResponseFromJSON,
  GetSplits200ResponseToJSON,
  GetStatistics200ResponseFromJSON,
  GetStatistics200ResponseToJSON,
  PeriodEarningsEnumFromJSON,
  PeriodEarningsEnumToJSON,
  PeriodEnumFromJSON,
  PeriodEnumToJSON,
  PressReleasesListParameters200ResponseFromJSON,
  PressReleasesListParameters200ResponseToJSON,
  RangeEnumFromJSON,
  RangeEnumToJSON,
  RangeSplitsEnumFromJSON,
  RangeSplitsEnumToJSON,
  SplitsCalendarResponseItemFromJSON,
  SplitsCalendarResponseItemToJSON,
  TypeEnumFromJSON,
  TypeEnumToJSON,
} from "../models/index";

export interface GetBalanceSheetRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetBalanceSheetConsolidatedRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetCashFlowRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetCashFlowConsolidatedRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetDividendsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  range?: RangeEnum;
  startDate?: string;
  endDate?: string;
  adjust?: boolean;
}

export interface GetDividendsCalendarRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
  page?: number;
}

export interface GetEarningsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  period?: PeriodEarningsEnum;
  outputsize?: number;
  format?: FormatEnum;
  delimiter?: string;
  startDate?: string;
  endDate?: string;
  dp?: number;
}

export interface GetEarningsCalendarRequest {
  exchange?: string;
  micCode?: string;
  country?: string;
  format?: FormatEnum;
  delimiter?: string;
  startDate?: string;
  endDate?: string;
  dp?: number;
}

export interface GetIncomeStatementRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetIncomeStatementConsolidatedRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  period?: PeriodEnum;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
}

export interface GetIpoCalendarRequest {
  exchange?: string;
  micCode?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
}

export interface GetKeyExecutivesRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetLastChangesRequest {
  endpoint: EndpointEnum;
  startDate?: string;
  symbol?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  page?: number;
  outputsize?: number;
}

export interface GetLogoRequest {
  symbol: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetMarketCapRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  outputsize?: number;
}

export interface GetProfileRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetSplitsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  range?: RangeSplitsEnum;
  startDate?: string;
  endDate?: string;
}

export interface GetSplitsCalendarRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
  outputsize?: number;
  page?: string;
}

export interface GetStatisticsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface PressReleasesListParametersRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  startDate?: string;
  endDate?: string;
  timezone?: string;
  language?: string;
  outputsize?: number;
}

/**
 *
 */
export class FundamentalsApi extends runtime.BaseAPI {
  /**
   * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
   * Balance sheet
   */
  async getBalanceSheetRaw(
    requestParameters: GetBalanceSheetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetBalanceSheet200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/balance_sheet`;

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
      GetBalanceSheet200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
   * Balance sheet
   */
  async getBalanceSheet(
    requestParameters: GetBalanceSheetRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetBalanceSheet200Response> {
    const response = await this.getBalanceSheetRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
   * Balance sheet consolidated
   */
  async getBalanceSheetConsolidatedRaw(
    requestParameters: GetBalanceSheetConsolidatedRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetBalanceSheetConsolidated200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/balance_sheet/consolidated`;

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
      GetBalanceSheetConsolidated200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
   * Balance sheet consolidated
   */
  async getBalanceSheetConsolidated(
    requestParameters: GetBalanceSheetConsolidatedRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetBalanceSheetConsolidated200Response> {
    const response = await this.getBalanceSheetConsolidatedRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
   * Cash flow
   */
  async getCashFlowRaw(
    requestParameters: GetCashFlowRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCashFlow200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cash_flow`;

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
      GetCashFlow200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
   * Cash flow
   */
  async getCashFlow(
    requestParameters: GetCashFlowRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCashFlow200Response> {
    const response = await this.getCashFlowRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
   * Cash flow consolidated
   */
  async getCashFlowConsolidatedRaw(
    requestParameters: GetCashFlowConsolidatedRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetCashFlowConsolidated200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cash_flow/consolidated`;

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
      GetCashFlowConsolidated200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
   * Cash flow consolidated
   */
  async getCashFlowConsolidated(
    requestParameters: GetCashFlowConsolidatedRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetCashFlowConsolidated200Response> {
    const response = await this.getCashFlowConsolidatedRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the ex-date, amount, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
   * Dividends
   */
  async getDividendsRaw(
    requestParameters: GetDividendsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetDividends200Response>> {
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

    if (requestParameters["range"] != null) {
      queryParameters["range"] = requestParameters["range"];
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/dividends`;

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
      GetDividends200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the ex-date, amount, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
   * Dividends
   */
  async getDividends(
    requestParameters: GetDividendsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetDividends200Response> {
    const response = await this.getDividendsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
   * Dividends calendar
   */
  async getDividendsCalendarRaw(
    requestParameters: GetDividendsCalendarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<DividendsCalendarItem>>> {
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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/dividends_calendar`;

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
      jsonValue.map(DividendsCalendarItemFromJSON),
    );
  }

  /**
   * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
   * Dividends calendar
   */
  async getDividendsCalendar(
    requestParameters: GetDividendsCalendarRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<DividendsCalendarItem>> {
    const response = await this.getDividendsCalendarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
   * Earnings
   */
  async getEarningsRaw(
    requestParameters: GetEarningsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEarnings200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/earnings`;

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
      GetEarnings200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
   * Earnings
   */
  async getEarnings(
    requestParameters: GetEarningsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEarnings200Response> {
    const response = await this.getEarningsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
   * Earnings calendar
   */
  async getEarningsCalendarRaw(
    requestParameters: GetEarningsCalendarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEarningsCalendar200Response>> {
    const queryParameters: any = {};

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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/earnings_calendar`;

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
      GetEarningsCalendar200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
   * Earnings calendar
   */
  async getEarningsCalendar(
    requestParameters: GetEarningsCalendarRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEarningsCalendar200Response> {
    const response = await this.getEarningsCalendarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
   * Income statement
   */
  async getIncomeStatementRaw(
    requestParameters: GetIncomeStatementRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetIncomeStatement200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/income_statement`;

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
      GetIncomeStatement200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
   * Income statement
   */
  async getIncomeStatement(
    requestParameters: GetIncomeStatementRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetIncomeStatement200Response> {
    const response = await this.getIncomeStatementRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
   * Income statement consolidated
   */
  async getIncomeStatementConsolidatedRaw(
    requestParameters: GetIncomeStatementConsolidatedRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetIncomeStatementConsolidated200Response>> {
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

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/income_statement/consolidated`;

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
      GetIncomeStatementConsolidated200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
   * Income statement consolidated
   */
  async getIncomeStatementConsolidated(
    requestParameters: GetIncomeStatementConsolidatedRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetIncomeStatementConsolidated200Response> {
    const response = await this.getIncomeStatementConsolidatedRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
   * IPO calendar
   */
  async getIpoCalendarRaw(
    requestParameters: GetIpoCalendarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<
    runtime.ApiResponse<{
      [key: string]: Array<GetIpoCalendar200ResponseValueInner>;
    }>
  > {
    const queryParameters: any = {};

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    if (requestParameters["country"] != null) {
      queryParameters["country"] = requestParameters["country"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ipo_calendar`;

    const response = await this.request(
      {
        path: urlPath,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
   * IPO calendar
   */
  async getIpoCalendar(
    requestParameters: GetIpoCalendarRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<{ [key: string]: Array<GetIpoCalendar200ResponseValueInner> }> {
    const response = await this.getIpoCalendarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
   * Key executives
   */
  async getKeyExecutivesRaw(
    requestParameters: GetKeyExecutivesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetKeyExecutives200Response>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/key_executives`;

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
      GetKeyExecutives200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
   * Key executives
   */
  async getKeyExecutives(
    requestParameters: GetKeyExecutivesRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetKeyExecutives200Response> {
    const response = await this.getKeyExecutivesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
   * Last changes
   */
  async getLastChangesRaw(
    requestParameters: GetLastChangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetLastChanges200Response>> {
    if (requestParameters["endpoint"] == null) {
      throw new runtime.RequiredError(
        "endpoint",
        'Required parameter "endpoint" was null or undefined when calling getLastChanges().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

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

    let urlPath = `/last_change/{endpoint}`;
    urlPath = urlPath.replace(
      `{${"endpoint"}}`,
      encodeURIComponent(String(requestParameters["endpoint"])),
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
      GetLastChanges200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
   * Last changes
   */
  async getLastChanges(
    requestParameters: GetLastChangesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetLastChanges200Response> {
    const response = await this.getLastChangesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
   * Logo
   */
  async getLogoRaw(
    requestParameters: GetLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetLogo200Response>> {
    if (requestParameters["symbol"] == null) {
      throw new runtime.RequiredError(
        "symbol",
        'Required parameter "symbol" was null or undefined when calling getLogo().',
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

    let urlPath = `/logo`;

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
      GetLogo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
   * Logo
   */
  async getLogo(
    requestParameters: GetLogoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetLogo200Response> {
    const response = await this.getLogoRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
   * Market capitalization
   */
  async getMarketCapRaw(
    requestParameters: GetMarketCapRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetMarketCap200Response>> {
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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
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

    let urlPath = `/market_cap`;

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
      GetMarketCap200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
   * Market capitalization
   */
  async getMarketCap(
    requestParameters: GetMarketCapRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetMarketCap200Response> {
    const response = await this.getMarketCapRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
   * Profile
   */
  async getProfileRaw(
    requestParameters: GetProfileRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetProfile200Response>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/profile`;

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
      GetProfile200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
   * Profile
   */
  async getProfile(
    requestParameters: GetProfileRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetProfile200Response> {
    const response = await this.getProfileRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
   * Splits
   */
  async getSplitsRaw(
    requestParameters: GetSplitsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetSplits200Response>> {
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

    if (requestParameters["range"] != null) {
      queryParameters["range"] = requestParameters["range"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/splits`;

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
      GetSplits200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
   * Splits
   */
  async getSplits(
    requestParameters: GetSplitsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetSplits200Response> {
    const response = await this.getSplitsRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
   * Splits calendar
   */
  async getSplitsCalendarRaw(
    requestParameters: GetSplitsCalendarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<SplitsCalendarResponseItem>>> {
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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/splits_calendar`;

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
      jsonValue.map(SplitsCalendarResponseItemFromJSON),
    );
  }

  /**
   * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
   * Splits calendar
   */
  async getSplitsCalendar(
    requestParameters: GetSplitsCalendarRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<SplitsCalendarResponseItem>> {
    const response = await this.getSplitsCalendarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
   * Statistics
   */
  async getStatisticsRaw(
    requestParameters: GetStatisticsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetStatistics200Response>> {
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

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/statistics`;

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
      GetStatistics200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
   * Statistics
   */
  async getStatistics(
    requestParameters: GetStatisticsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetStatistics200Response> {
    const response = await this.getStatisticsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
   * Press releases
   */
  async pressReleasesListParametersRaw(
    requestParameters: PressReleasesListParametersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<PressReleasesListParameters200Response>> {
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

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["language"] != null) {
      queryParameters["language"] = requestParameters["language"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/press_releases`;

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
      PressReleasesListParameters200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
   * Press releases
   */
  async pressReleasesListParameters(
    requestParameters: PressReleasesListParametersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<PressReleasesListParameters200Response> {
    const response = await this.pressReleasesListParametersRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
