/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
  replaceWithSerializableTypeIfNeeded,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import type { ApiBadRequestErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiForbiddenErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiInternalServerErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiNotFoundErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiParameterTooLongErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiTooManyRequestsErrorResponseBody } from "../models";
// @ts-ignore
import type { ApiUnauthorizedErrorResponseBody } from "../models";
// @ts-ignore
import type { GetETFsFamily200Response } from "../models";
// @ts-ignore
import type { GetETFsList200Response } from "../models";
// @ts-ignore
import type { GetETFsType200Response } from "../models";
// @ts-ignore
import type { GetETFsWorld200Response } from "../models";
// @ts-ignore
import type { GetETFsWorldComposition200Response } from "../models";
// @ts-ignore
import type { GetETFsWorldPerformance200Response } from "../models";
// @ts-ignore
import type { GetETFsWorldRisk200Response } from "../models";
// @ts-ignore
import type { GetETFsWorldSummary200Response } from "../models";
/**
 * EtfsApi - axios parameter creator
 */
export const EtfsApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
     * @summary ETFs families
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsFamily: async (
      country?: string,
      fundFamily?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/family`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (fundFamily !== undefined) {
        localVarQueryParameter["fund_family"] = fundFamily;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
     * @summary ETFs directory
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [fundType] Filter by the type of fund
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsList: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      country?: string,
      fundFamily?: string,
      fundType?: string,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/list`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (cik !== undefined) {
        localVarQueryParameter["cik"] = cik;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (fundFamily !== undefined) {
        localVarQueryParameter["fund_family"] = fundFamily;
      }

      if (fundType !== undefined) {
        localVarQueryParameter["fund_type"] = fundType;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
     * @summary ETFs types
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundType] Filter by the type of fund
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsType: async (
      country?: string,
      fundType?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/type`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (fundType !== undefined) {
        localVarQueryParameter["fund_type"] = fundType;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
     * @summary ETF full data
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorld: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/world`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
     * @summary Composition
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldComposition: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/world/composition`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
     * @summary Performance
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldPerformance: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/world/performance`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
     * @summary Risk
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldRisk: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/world/risk`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
     * @summary Summary
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldSummary: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs/world/summary`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication authorizationHeader required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "Authorization",
        configuration,
      );

      if (symbol !== undefined) {
        localVarQueryParameter["symbol"] = symbol;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      localVarHeaderParameter["Accept"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * EtfsApi - functional programming interface
 */
export const EtfsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = EtfsApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
     * @summary ETFs families
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsFamily(
      country?: string,
      fundFamily?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsFamily200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getETFsFamily(
        country,
        fundFamily,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsFamily"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
     * @summary ETFs directory
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [fundType] Filter by the type of fund
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsList(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      country?: string,
      fundFamily?: string,
      fundType?: string,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsList200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getETFsList(
        symbol,
        figi,
        isin,
        cusip,
        cik,
        country,
        fundFamily,
        fundType,
        page,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsList"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
     * @summary ETFs types
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundType] Filter by the type of fund
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsType(
      country?: string,
      fundType?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsType200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getETFsType(
        country,
        fundType,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsType"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
     * @summary ETF full data
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsWorld(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsWorld200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getETFsWorld(
        symbol,
        figi,
        isin,
        cusip,
        country,
        dp,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsWorld"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
     * @summary Composition
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsWorldComposition(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsWorldComposition200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getETFsWorldComposition(
          symbol,
          figi,
          isin,
          cusip,
          country,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsWorldComposition"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
     * @summary Performance
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsWorldPerformance(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsWorldPerformance200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getETFsWorldPerformance(
          symbol,
          figi,
          isin,
          cusip,
          country,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsWorldPerformance"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
     * @summary Risk
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsWorldRisk(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsWorldRisk200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getETFsWorldRisk(
          symbol,
          figi,
          isin,
          cusip,
          country,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsWorldRisk"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
     * @summary Summary
     * @param {string} [symbol] Symbol ticker of etf
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getETFsWorldSummary(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetETFsWorldSummary200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getETFsWorldSummary(
          symbol,
          figi,
          isin,
          cusip,
          country,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["EtfsApi.getETFsWorldSummary"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * EtfsApi - factory interface
 */
export const EtfsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = EtfsApiFp(configuration);
  return {
    /**
     * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
     * @summary ETFs families
     * @param {EtfsApiGetETFsFamilyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsFamily(
      requestParameters: EtfsApiGetETFsFamilyRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsFamily200Response> {
      return localVarFp
        .getETFsFamily(
          requestParameters.country,
          requestParameters.fundFamily,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
     * @summary ETFs directory
     * @param {EtfsApiGetETFsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsList(
      requestParameters: EtfsApiGetETFsListRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsList200Response> {
      return localVarFp
        .getETFsList(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.cik,
          requestParameters.country,
          requestParameters.fundFamily,
          requestParameters.fundType,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
     * @summary ETFs types
     * @param {EtfsApiGetETFsTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsType(
      requestParameters: EtfsApiGetETFsTypeRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsType200Response> {
      return localVarFp
        .getETFsType(
          requestParameters.country,
          requestParameters.fundType,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
     * @summary ETF full data
     * @param {EtfsApiGetETFsWorldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorld(
      requestParameters: EtfsApiGetETFsWorldRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsWorld200Response> {
      return localVarFp
        .getETFsWorld(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
     * @summary Composition
     * @param {EtfsApiGetETFsWorldCompositionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldComposition(
      requestParameters: EtfsApiGetETFsWorldCompositionRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsWorldComposition200Response> {
      return localVarFp
        .getETFsWorldComposition(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
     * @summary Performance
     * @param {EtfsApiGetETFsWorldPerformanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldPerformance(
      requestParameters: EtfsApiGetETFsWorldPerformanceRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsWorldPerformance200Response> {
      return localVarFp
        .getETFsWorldPerformance(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
     * @summary Risk
     * @param {EtfsApiGetETFsWorldRiskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldRisk(
      requestParameters: EtfsApiGetETFsWorldRiskRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsWorldRisk200Response> {
      return localVarFp
        .getETFsWorldRisk(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
     * @summary Summary
     * @param {EtfsApiGetETFsWorldSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getETFsWorldSummary(
      requestParameters: EtfsApiGetETFsWorldSummaryRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetETFsWorldSummary200Response> {
      return localVarFp
        .getETFsWorldSummary(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * EtfsApi - interface
 */
export interface EtfsApiInterface {
  /**
   * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
   * @summary ETFs families
   * @param {EtfsApiGetETFsFamilyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsFamily(
    requestParameters?: EtfsApiGetETFsFamilyRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsFamily200Response>;

  /**
   * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
   * @summary ETFs directory
   * @param {EtfsApiGetETFsListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsList(
    requestParameters?: EtfsApiGetETFsListRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsList200Response>;

  /**
   * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
   * @summary ETFs types
   * @param {EtfsApiGetETFsTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsType(
    requestParameters?: EtfsApiGetETFsTypeRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsType200Response>;

  /**
   * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
   * @summary ETF full data
   * @param {EtfsApiGetETFsWorldRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsWorld(
    requestParameters?: EtfsApiGetETFsWorldRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsWorld200Response>;

  /**
   * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
   * @summary Composition
   * @param {EtfsApiGetETFsWorldCompositionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsWorldComposition(
    requestParameters?: EtfsApiGetETFsWorldCompositionRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsWorldComposition200Response>;

  /**
   * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
   * @summary Performance
   * @param {EtfsApiGetETFsWorldPerformanceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsWorldPerformance(
    requestParameters?: EtfsApiGetETFsWorldPerformanceRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsWorldPerformance200Response>;

  /**
   * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
   * @summary Risk
   * @param {EtfsApiGetETFsWorldRiskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsWorldRisk(
    requestParameters?: EtfsApiGetETFsWorldRiskRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsWorldRisk200Response>;

  /**
   * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
   * @summary Summary
   * @param {EtfsApiGetETFsWorldSummaryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getETFsWorldSummary(
    requestParameters?: EtfsApiGetETFsWorldSummaryRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetETFsWorldSummary200Response>;
}

/**
 * Request parameters for getETFsFamily operation in EtfsApi.
 */
export interface EtfsApiGetETFsFamilyRequest {
  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by investment company that manages the fund
   */
  readonly fundFamily?: string;
}

/**
 * Request parameters for getETFsList operation in EtfsApi.
 */
export interface EtfsApiGetETFsListRequest {
  /**
   * Filter by symbol
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * The CIK of an instrument for which data is requested
   */
  readonly cik?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by investment company that manages the fund
   */
  readonly fundFamily?: string;

  /**
   * Filter by the type of fund
   */
  readonly fundType?: string;

  /**
   * Page number
   */
  readonly page?: number;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getETFsType operation in EtfsApi.
 */
export interface EtfsApiGetETFsTypeRequest {
  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by the type of fund
   */
  readonly fundType?: string;
}

/**
 * Request parameters for getETFsWorld operation in EtfsApi.
 */
export interface EtfsApiGetETFsWorldRequest {
  /**
   * Symbol ticker of etf
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Number of decimal places for floating values. Accepts value in range [0,11]
   */
  readonly dp?: number;
}

/**
 * Request parameters for getETFsWorldComposition operation in EtfsApi.
 */
export interface EtfsApiGetETFsWorldCompositionRequest {
  /**
   * Symbol ticker of etf
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Number of decimal places for floating values. Accepts value in range [0,11]
   */
  readonly dp?: number;
}

/**
 * Request parameters for getETFsWorldPerformance operation in EtfsApi.
 */
export interface EtfsApiGetETFsWorldPerformanceRequest {
  /**
   * Symbol ticker of etf
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Number of decimal places for floating values. Accepts value in range [0,11]
   */
  readonly dp?: number;
}

/**
 * Request parameters for getETFsWorldRisk operation in EtfsApi.
 */
export interface EtfsApiGetETFsWorldRiskRequest {
  /**
   * Symbol ticker of etf
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Number of decimal places for floating values. Accepts value in range [0,11]
   */
  readonly dp?: number;
}

/**
 * Request parameters for getETFsWorldSummary operation in EtfsApi.
 */
export interface EtfsApiGetETFsWorldSummaryRequest {
  /**
   * Symbol ticker of etf
   */
  readonly symbol?: string;

  /**
   * Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Number of decimal places for floating values. Accepts value in range [0,11]
   */
  readonly dp?: number;
}

/**
 * EtfsApi - object-oriented interface
 */
export class EtfsApi extends BaseAPI implements EtfsApiInterface {
  /**
   * Retrieve a comprehensive list of exchange-traded fund (ETF) families, providing users with detailed information on various ETF groups available in the market. This endpoint is ideal for users looking to explore different ETF categories, compare offerings, or integrate ETF family data into their financial applications.
   * @summary ETFs families
   * @param {EtfsApiGetETFsFamilyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsFamily(
    requestParameters: EtfsApiGetETFsFamilyRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsFamily(
        requestParameters.country,
        requestParameters.fundFamily,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs directory endpoint provides a daily updated list of exchange-traded funds, sorted by total assets in descending order. This endpoint is useful for retrieving comprehensive ETF data, including fund names and asset values, to assist users in quickly identifying the ETFs available.
   * @summary ETFs directory
   * @param {EtfsApiGetETFsListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsList(
    requestParameters: EtfsApiGetETFsListRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsList(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.cik,
        requestParameters.country,
        requestParameters.fundFamily,
        requestParameters.fundType,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs Types endpoint provides a concise list of ETF categories by market (e.g., Singapore, United States), including types like \"Equity Precious Metals\" and \"Large Blend.\" It supports targeted investment research and portfolio diversification.
   * @summary ETFs types
   * @param {EtfsApiGetETFsTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsType(
    requestParameters: EtfsApiGetETFsTypeRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsType(
        requestParameters.country,
        requestParameters.fundType,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETF full data endpoint provides detailed information about global Exchange-Traded Funds. It returns comprehensive data, including a summary, performance metrics, risk assessment, and composition details. This endpoint is ideal for users seeking an in-depth analysis of worldwide ETFs, enabling them to access key financial metrics and portfolio breakdowns.
   * @summary ETF full data
   * @param {EtfsApiGetETFsWorldRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsWorld(
    requestParameters: EtfsApiGetETFsWorldRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsWorld(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs composition endpoint provides detailed information about the composition of global Exchange-Traded Funds. It returns data on the sectors included in the ETF, specific holding details, and the weighted exposure of each component. This endpoint is useful for users who need to understand the specific makeup and sector distribution of an ETF portfolio.
   * @summary Composition
   * @param {EtfsApiGetETFsWorldCompositionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsWorldComposition(
    requestParameters: EtfsApiGetETFsWorldCompositionRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsWorldComposition(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs performance endpoint provides comprehensive performance data for exchange-traded funds globally. It returns detailed metrics such as trailing returns and annual returns, enabling users to evaluate the historical performance of various ETFs. This endpoint is ideal for users looking to compare ETF performance over different time periods and assess their investment potential.
   * @summary Performance
   * @param {EtfsApiGetETFsWorldPerformanceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsWorldPerformance(
    requestParameters: EtfsApiGetETFsWorldPerformanceRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsWorldPerformance(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs risk endpoint provides essential risk metrics for global Exchange Traded Funds. It returns data such as volatility, beta, and other risk-related indicators, enabling users to assess the potential risk associated with investing in various ETFs worldwide.
   * @summary Risk
   * @param {EtfsApiGetETFsWorldRiskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsWorldRisk(
    requestParameters: EtfsApiGetETFsWorldRiskRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsWorldRisk(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs summary endpoint provides a concise overview of global Exchange-Traded Funds. It returns key data points such as ETF names, symbols, and current market values, enabling users to quickly assess the performance and status of various international ETFs. This summary is ideal for users who need a snapshot of the global ETF landscape without delving into detailed analysis.
   * @summary Summary
   * @param {EtfsApiGetETFsWorldSummaryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getETFsWorldSummary(
    requestParameters: EtfsApiGetETFsWorldSummaryRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return EtfsApiFp(this.configuration)
      .getETFsWorldSummary(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
