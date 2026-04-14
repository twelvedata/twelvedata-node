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
  GetDirectHolders200Response,
  GetEdgarFilingsArchive200Response,
  GetFundHolders200Response,
  GetInsiderTransactions200Response,
  GetInstitutionalHolders200Response,
  GetSourceSanctionedEntities200Response,
  GetTaxInfo200Response,
  SourceEnum,
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
  GetDirectHolders200ResponseFromJSON,
  GetDirectHolders200ResponseToJSON,
  GetEdgarFilingsArchive200ResponseFromJSON,
  GetEdgarFilingsArchive200ResponseToJSON,
  GetFundHolders200ResponseFromJSON,
  GetFundHolders200ResponseToJSON,
  GetInsiderTransactions200ResponseFromJSON,
  GetInsiderTransactions200ResponseToJSON,
  GetInstitutionalHolders200ResponseFromJSON,
  GetInstitutionalHolders200ResponseToJSON,
  GetSourceSanctionedEntities200ResponseFromJSON,
  GetSourceSanctionedEntities200ResponseToJSON,
  GetTaxInfo200ResponseFromJSON,
  GetTaxInfo200ResponseToJSON,
  SourceEnumFromJSON,
  SourceEnumToJSON,
} from "../models/index";

export interface GetDirectHoldersRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetEdgarFilingsArchiveRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
  formType?: string;
  filledFrom?: string;
  filledTo?: string;
  page?: number;
  pageSize?: number;
}

export interface GetFundHoldersRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetInsiderTransactionsRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetInstitutionalHoldersRequest {
  symbol?: string;
  figi?: string;
  isin?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
  country?: string;
}

export interface GetSourceSanctionedEntitiesRequest {
  source: SourceEnum;
}

export interface GetTaxInfoRequest {
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  exchange?: string;
  micCode?: string;
}

/**
 *
 */
export class RegulatoryApi extends runtime.BaseAPI {
  /**
   * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
   * Direct holders
   */
  async getDirectHoldersRaw(
    requestParameters: GetDirectHoldersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetDirectHolders200Response>> {
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

    let urlPath = `/direct_holders`;

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
      GetDirectHolders200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
   * Direct holders
   */
  async getDirectHolders(
    requestParameters: GetDirectHoldersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetDirectHolders200Response> {
    const response = await this.getDirectHoldersRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
   * EDGAR fillings
   */
  async getEdgarFilingsArchiveRaw(
    requestParameters: GetEdgarFilingsArchiveRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetEdgarFilingsArchive200Response>> {
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

    if (requestParameters["formType"] != null) {
      queryParameters["form_type"] = requestParameters["formType"];
    }

    if (requestParameters["filledFrom"] != null) {
      queryParameters["filled_from"] = requestParameters["filledFrom"];
    }

    if (requestParameters["filledTo"] != null) {
      queryParameters["filled_to"] = requestParameters["filledTo"];
    }

    if (requestParameters["page"] != null) {
      queryParameters["page"] = requestParameters["page"];
    }

    if (requestParameters["pageSize"] != null) {
      queryParameters["page_size"] = requestParameters["pageSize"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/edgar_filings/archive`;

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
      GetEdgarFilingsArchive200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
   * EDGAR fillings
   */
  async getEdgarFilingsArchive(
    requestParameters: GetEdgarFilingsArchiveRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetEdgarFilingsArchive200Response> {
    const response = await this.getEdgarFilingsArchiveRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
   * Fund holders
   */
  async getFundHoldersRaw(
    requestParameters: GetFundHoldersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetFundHolders200Response>> {
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

    let urlPath = `/fund_holders`;

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
      GetFundHolders200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
   * Fund holders
   */
  async getFundHolders(
    requestParameters: GetFundHoldersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetFundHolders200Response> {
    const response = await this.getFundHoldersRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
   * Insider transaction
   */
  async getInsiderTransactionsRaw(
    requestParameters: GetInsiderTransactionsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetInsiderTransactions200Response>> {
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

    let urlPath = `/insider_transactions`;

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
      GetInsiderTransactions200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
   * Insider transaction
   */
  async getInsiderTransactions(
    requestParameters: GetInsiderTransactionsRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetInsiderTransactions200Response> {
    const response = await this.getInsiderTransactionsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
   * Institutional holders
   */
  async getInstitutionalHoldersRaw(
    requestParameters: GetInstitutionalHoldersRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetInstitutionalHolders200Response>> {
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

    let urlPath = `/institutional_holders`;

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
      GetInstitutionalHolders200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
   * Institutional holders
   */
  async getInstitutionalHolders(
    requestParameters: GetInstitutionalHoldersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetInstitutionalHolders200Response> {
    const response = await this.getInstitutionalHoldersRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
   * Sanctioned entities
   */
  async getSourceSanctionedEntitiesRaw(
    requestParameters: GetSourceSanctionedEntitiesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetSourceSanctionedEntities200Response>> {
    if (requestParameters["source"] == null) {
      throw new runtime.RequiredError(
        "source",
        'Required parameter "source" was null or undefined when calling getSourceSanctionedEntities().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sanctions/{source}`;
    urlPath = urlPath.replace(
      `{${"source"}}`,
      encodeURIComponent(String(requestParameters["source"])),
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
      GetSourceSanctionedEntities200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
   * Sanctioned entities
   */
  async getSourceSanctionedEntities(
    requestParameters: GetSourceSanctionedEntitiesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetSourceSanctionedEntities200Response> {
    const response = await this.getSourceSanctionedEntitiesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
   * Tax information
   */
  async getTaxInfoRaw(
    requestParameters: GetTaxInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTaxInfo200Response>> {
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

    if (requestParameters["exchange"] != null) {
      queryParameters["exchange"] = requestParameters["exchange"];
    }

    if (requestParameters["micCode"] != null) {
      queryParameters["mic_code"] = requestParameters["micCode"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/tax_info`;

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
      GetTaxInfo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
   * Tax information
   */
  async getTaxInfo(
    requestParameters: GetTaxInfoRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTaxInfo200Response> {
    const response = await this.getTaxInfoRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
