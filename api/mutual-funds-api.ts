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
import type { GetMutualFundsFamily200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsList200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsType200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorld200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldComposition200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldPerformance200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldPurchaseInfo200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldRatings200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldRisk200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldSummary200Response } from "../models";
// @ts-ignore
import type { GetMutualFundsWorldSustainability200Response } from "../models";
/**
 * MutualFundsApi - axios parameter creator
 */
export const MutualFundsApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
     * @summary MFs families
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsFamily: async (
      fundFamily?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/family`;
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

      if (fundFamily !== undefined) {
        localVarQueryParameter["fund_family"] = fundFamily;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
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
     * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
     * @summary MFs directory
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [fundType] Filter by the type of fund
     * @param {number} [performanceRating] Filter by performance rating from &#x60;0&#x60; to &#x60;5&#x60;
     * @param {number} [riskRating] Filter by risk rating from &#x60;0&#x60; to &#x60;5&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsList: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      country?: string,
      fundFamily?: string,
      fundType?: string,
      performanceRating?: number,
      riskRating?: number,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/list`;
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

      if (performanceRating !== undefined) {
        localVarQueryParameter["performance_rating"] = performanceRating;
      }

      if (riskRating !== undefined) {
        localVarQueryParameter["risk_rating"] = riskRating;
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
     * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
     * @summary MFs types
     * @param {string} [fundType] Filter by the type of fund
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsType: async (
      fundType?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/type`;
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

      if (fundType !== undefined) {
        localVarQueryParameter["fund_type"] = fundType;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
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
     * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
     * @summary MF full data
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorld: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world`;
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
     * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
     * @summary Composition
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldComposition: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/composition`;
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
     * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
     * @summary Performance
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldPerformance: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/performance`;
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
     * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
     * @summary Purchase info
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldPurchaseInfo: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/purchase_info`;
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
     * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
     * @summary Ratings
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldRatings: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/ratings`;
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
     * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
     * @summary Risk
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldRisk: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/risk`;
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
     * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
     * @summary Summary
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldSummary: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/summary`;
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
     * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
     * @summary Sustainability
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldSustainability: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/mutual_funds/world/sustainability`;
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
 * MutualFundsApi - functional programming interface
 */
export const MutualFundsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    MutualFundsApiAxiosParamCreator(configuration);
  return {
    /**
     * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
     * @summary MFs families
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsFamily(
      fundFamily?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetMutualFundsFamily200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsFamily(
          fundFamily,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MutualFundsApi.getMutualFundsFamily"]?.[
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
     * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
     * @summary MFs directory
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [fundFamily] Filter by investment company that manages the fund
     * @param {string} [fundType] Filter by the type of fund
     * @param {number} [performanceRating] Filter by performance rating from &#x60;0&#x60; to &#x60;5&#x60;
     * @param {number} [riskRating] Filter by risk rating from &#x60;0&#x60; to &#x60;5&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsList(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      country?: string,
      fundFamily?: string,
      fundType?: string,
      performanceRating?: number,
      riskRating?: number,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetMutualFundsList200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsList(
          symbol,
          figi,
          isin,
          cusip,
          cik,
          country,
          fundFamily,
          fundType,
          performanceRating,
          riskRating,
          page,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MutualFundsApi.getMutualFundsList"]?.[
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
     * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
     * @summary MFs types
     * @param {string} [fundType] Filter by the type of fund
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsType(
      fundType?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetMutualFundsType200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsType(
          fundType,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MutualFundsApi.getMutualFundsType"]?.[
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
     * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
     * @summary MF full data
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorld(
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
      ) => AxiosPromise<GetMutualFundsWorld200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorld(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorld"]?.[
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
     * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
     * @summary Composition
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldComposition(
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
      ) => AxiosPromise<GetMutualFundsWorldComposition200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldComposition(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldComposition"]?.[
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
     * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
     * @summary Performance
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldPerformance(
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
      ) => AxiosPromise<GetMutualFundsWorldPerformance200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldPerformance(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldPerformance"]?.[
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
     * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
     * @summary Purchase info
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldPurchaseInfo(
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
      ) => AxiosPromise<GetMutualFundsWorldPurchaseInfo200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldPurchaseInfo(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldPurchaseInfo"]?.[
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
     * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
     * @summary Ratings
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldRatings(
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
      ) => AxiosPromise<GetMutualFundsWorldRatings200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldRatings(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldRatings"]?.[
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
     * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
     * @summary Risk
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldRisk(
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
      ) => AxiosPromise<GetMutualFundsWorldRisk200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldRisk(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldRisk"]?.[
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
     * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
     * @summary Summary
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldSummary(
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
      ) => AxiosPromise<GetMutualFundsWorldSummary200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldSummary(
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
        operationServerMap["MutualFundsApi.getMutualFundsWorldSummary"]?.[
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
     * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
     * @summary Sustainability
     * @param {string} [symbol] Symbol ticker of mutual fund
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [dp] Number of decimal places for floating values. Accepts value in range [0,11]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMutualFundsWorldSustainability(
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
      ) => AxiosPromise<GetMutualFundsWorldSustainability200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getMutualFundsWorldSustainability(
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
        operationServerMap[
          "MutualFundsApi.getMutualFundsWorldSustainability"
        ]?.[localVarOperationServerIndex]?.url;
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
 * MutualFundsApi - factory interface
 */
export const MutualFundsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = MutualFundsApiFp(configuration);
  return {
    /**
     * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
     * @summary MFs families
     * @param {MutualFundsApiGetMutualFundsFamilyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsFamily(
      requestParameters: MutualFundsApiGetMutualFundsFamilyRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsFamily200Response> {
      return localVarFp
        .getMutualFundsFamily(
          requestParameters.fundFamily,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
     * @summary MFs directory
     * @param {MutualFundsApiGetMutualFundsListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsList(
      requestParameters: MutualFundsApiGetMutualFundsListRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsList200Response> {
      return localVarFp
        .getMutualFundsList(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.cik,
          requestParameters.country,
          requestParameters.fundFamily,
          requestParameters.fundType,
          requestParameters.performanceRating,
          requestParameters.riskRating,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
     * @summary MFs types
     * @param {MutualFundsApiGetMutualFundsTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsType(
      requestParameters: MutualFundsApiGetMutualFundsTypeRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsType200Response> {
      return localVarFp
        .getMutualFundsType(
          requestParameters.fundType,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
     * @summary MF full data
     * @param {MutualFundsApiGetMutualFundsWorldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorld(
      requestParameters: MutualFundsApiGetMutualFundsWorldRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorld200Response> {
      return localVarFp
        .getMutualFundsWorld(
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
     * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
     * @summary Composition
     * @param {MutualFundsApiGetMutualFundsWorldCompositionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldComposition(
      requestParameters: MutualFundsApiGetMutualFundsWorldCompositionRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldComposition200Response> {
      return localVarFp
        .getMutualFundsWorldComposition(
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
     * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
     * @summary Performance
     * @param {MutualFundsApiGetMutualFundsWorldPerformanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldPerformance(
      requestParameters: MutualFundsApiGetMutualFundsWorldPerformanceRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldPerformance200Response> {
      return localVarFp
        .getMutualFundsWorldPerformance(
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
     * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
     * @summary Purchase info
     * @param {MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldPurchaseInfo(
      requestParameters: MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldPurchaseInfo200Response> {
      return localVarFp
        .getMutualFundsWorldPurchaseInfo(
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
     * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
     * @summary Ratings
     * @param {MutualFundsApiGetMutualFundsWorldRatingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldRatings(
      requestParameters: MutualFundsApiGetMutualFundsWorldRatingsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldRatings200Response> {
      return localVarFp
        .getMutualFundsWorldRatings(
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
     * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
     * @summary Risk
     * @param {MutualFundsApiGetMutualFundsWorldRiskRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldRisk(
      requestParameters: MutualFundsApiGetMutualFundsWorldRiskRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldRisk200Response> {
      return localVarFp
        .getMutualFundsWorldRisk(
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
     * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
     * @summary Summary
     * @param {MutualFundsApiGetMutualFundsWorldSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldSummary(
      requestParameters: MutualFundsApiGetMutualFundsWorldSummaryRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldSummary200Response> {
      return localVarFp
        .getMutualFundsWorldSummary(
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
     * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
     * @summary Sustainability
     * @param {MutualFundsApiGetMutualFundsWorldSustainabilityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMutualFundsWorldSustainability(
      requestParameters: MutualFundsApiGetMutualFundsWorldSustainabilityRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMutualFundsWorldSustainability200Response> {
      return localVarFp
        .getMutualFundsWorldSustainability(
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
 * MutualFundsApi - interface
 */
export interface MutualFundsApiInterface {
  /**
   * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
   * @summary MFs families
   * @param {MutualFundsApiGetMutualFundsFamilyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsFamily(
    requestParameters?: MutualFundsApiGetMutualFundsFamilyRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsFamily200Response>;

  /**
   * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
   * @summary MFs directory
   * @param {MutualFundsApiGetMutualFundsListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsList(
    requestParameters?: MutualFundsApiGetMutualFundsListRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsList200Response>;

  /**
   * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
   * @summary MFs types
   * @param {MutualFundsApiGetMutualFundsTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsType(
    requestParameters?: MutualFundsApiGetMutualFundsTypeRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsType200Response>;

  /**
   * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
   * @summary MF full data
   * @param {MutualFundsApiGetMutualFundsWorldRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorld(
    requestParameters?: MutualFundsApiGetMutualFundsWorldRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorld200Response>;

  /**
   * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
   * @summary Composition
   * @param {MutualFundsApiGetMutualFundsWorldCompositionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldComposition(
    requestParameters?: MutualFundsApiGetMutualFundsWorldCompositionRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldComposition200Response>;

  /**
   * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
   * @summary Performance
   * @param {MutualFundsApiGetMutualFundsWorldPerformanceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldPerformance(
    requestParameters?: MutualFundsApiGetMutualFundsWorldPerformanceRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldPerformance200Response>;

  /**
   * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
   * @summary Purchase info
   * @param {MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldPurchaseInfo(
    requestParameters?: MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldPurchaseInfo200Response>;

  /**
   * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
   * @summary Ratings
   * @param {MutualFundsApiGetMutualFundsWorldRatingsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldRatings(
    requestParameters?: MutualFundsApiGetMutualFundsWorldRatingsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldRatings200Response>;

  /**
   * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
   * @summary Risk
   * @param {MutualFundsApiGetMutualFundsWorldRiskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldRisk(
    requestParameters?: MutualFundsApiGetMutualFundsWorldRiskRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldRisk200Response>;

  /**
   * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
   * @summary Summary
   * @param {MutualFundsApiGetMutualFundsWorldSummaryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldSummary(
    requestParameters?: MutualFundsApiGetMutualFundsWorldSummaryRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldSummary200Response>;

  /**
   * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
   * @summary Sustainability
   * @param {MutualFundsApiGetMutualFundsWorldSustainabilityRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMutualFundsWorldSustainability(
    requestParameters?: MutualFundsApiGetMutualFundsWorldSustainabilityRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMutualFundsWorldSustainability200Response>;
}

/**
 * Request parameters for getMutualFundsFamily operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsFamilyRequest {
  /**
   * Filter by investment company that manages the fund
   */
  readonly fundFamily?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getMutualFundsList operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsListRequest {
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
   * Filter by performance rating from &#x60;0&#x60; to &#x60;5&#x60;
   */
  readonly performanceRating?: number;

  /**
   * Filter by risk rating from &#x60;0&#x60; to &#x60;5&#x60;
   */
  readonly riskRating?: number;

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
 * Request parameters for getMutualFundsType operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsTypeRequest {
  /**
   * Filter by the type of fund
   */
  readonly fundType?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getMutualFundsWorld operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldComposition operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldCompositionRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldPerformance operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldPerformanceRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldPurchaseInfo operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldRatings operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldRatingsRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldRisk operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldRiskRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldSummary operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldSummaryRequest {
  /**
   * Symbol ticker of mutual fund
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
 * Request parameters for getMutualFundsWorldSustainability operation in MutualFundsApi.
 */
export interface MutualFundsApiGetMutualFundsWorldSustainabilityRequest {
  /**
   * Symbol ticker of mutual fund
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
 * MutualFundsApi - object-oriented interface
 */
export class MutualFundsApi extends BaseAPI implements MutualFundsApiInterface {
  /**
   * The mutual funds family endpoint provides a comprehensive list of MF families, which are groups of mutual funds managed by the same investment company. This data is useful for users looking to explore or compare different fund families, understand the range of investment options offered by each, and identify potential investment opportunities within specific fund families.
   * @summary MFs families
   * @param {MutualFundsApiGetMutualFundsFamilyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsFamily(
    requestParameters: MutualFundsApiGetMutualFundsFamilyRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsFamily(
        requestParameters.fundFamily,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The mutual funds directory endpoint provides a daily updated list of mutual funds, sorted in descending order by their total assets value. This endpoint is useful for retrieving an organized overview of available mutual funds.
   * @summary MFs directory
   * @param {MutualFundsApiGetMutualFundsListRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsList(
    requestParameters: MutualFundsApiGetMutualFundsListRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsList(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.cik,
        requestParameters.country,
        requestParameters.fundFamily,
        requestParameters.fundType,
        requestParameters.performanceRating,
        requestParameters.riskRating,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * This endpoint provides detailed information on various types of mutual funds, such as equity, bond, and balanced funds, allowing users to understand the different investment options available.
   * @summary MFs types
   * @param {MutualFundsApiGetMutualFundsTypeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsType(
    requestParameters: MutualFundsApiGetMutualFundsTypeRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsType(
        requestParameters.fundType,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The mutual full data endpoint provides detailed information about global mutual funds. It returns a comprehensive dataset that includes a summary of the fund, its performance metrics, risk assessment, ratings, asset composition, purchase details, and sustainability factors. This endpoint is essential for users seeking in-depth insights into mutual funds on a global scale, allowing them to evaluate various aspects such as investment performance, risk levels, and environmental impact.
   * @summary MF full data
   * @param {MutualFundsApiGetMutualFundsWorldRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorld(
    requestParameters: MutualFundsApiGetMutualFundsWorldRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorld(
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
   * The mutual funds compositions endpoint provides detailed information about the portfolio composition of a specified mutual fund. It returns data on sector allocations, individual holdings, and their respective weighted exposures. This endpoint is useful for users seeking to understand the investment distribution and risk profile of a mutual fund.
   * @summary Composition
   * @param {MutualFundsApiGetMutualFundsWorldCompositionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldComposition(
    requestParameters: MutualFundsApiGetMutualFundsWorldCompositionRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldComposition(
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
   * The mutual funds performances endpoint provides comprehensive performance data for mutual funds globally. It returns metrics such as trailing returns, annual returns, quarterly returns, and load-adjusted returns.
   * @summary Performance
   * @param {MutualFundsApiGetMutualFundsWorldPerformanceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldPerformance(
    requestParameters: MutualFundsApiGetMutualFundsWorldPerformanceRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldPerformance(
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
   * The mutual funds purchase information endpoint provides detailed purchasing details for global mutual funds. It returns data on minimum investment requirements, current pricing, and a list of brokerages where the mutual fund can be purchased. This endpoint is useful for users looking to understand the entry requirements and options available for investing in specific mutual funds.
   * @summary Purchase info
   * @param {MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldPurchaseInfo(
    requestParameters: MutualFundsApiGetMutualFundsWorldPurchaseInfoRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldPurchaseInfo(
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
   * The mutual funds ratings endpoint provides detailed ratings for mutual funds across global markets. It returns data on the performance and quality of mutual funds, including ratings calculated in-house by Twelve Data and from various financial institutions.
   * @summary Ratings
   * @param {MutualFundsApiGetMutualFundsWorldRatingsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldRatings(
    requestParameters: MutualFundsApiGetMutualFundsWorldRatingsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldRatings(
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
   * The mutual funds risk endpoint provides detailed risk metrics for global mutual funds. It returns data such as standard deviation, beta, and Sharpe ratio, which help assess the volatility and risk profile of mutual funds across different markets.
   * @summary Risk
   * @param {MutualFundsApiGetMutualFundsWorldRiskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldRisk(
    requestParameters: MutualFundsApiGetMutualFundsWorldRiskRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldRisk(
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
   * The mutual funds summary endpoint provides a concise overview of global mutual funds, including key details such as fund name, symbol, asset class, and region. This endpoint is useful for quickly obtaining essential information about various mutual funds worldwide, aiding in the comparison and selection of funds for investment portfolios.
   * @summary Summary
   * @param {MutualFundsApiGetMutualFundsWorldSummaryRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldSummary(
    requestParameters: MutualFundsApiGetMutualFundsWorldSummaryRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldSummary(
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
   * The mutual funds sustainability endpoint provides detailed information on the sustainability and Environmental, Social, and Governance (ESG) ratings of global mutual funds. It returns data such as ESG scores, sustainability metrics, and fund identifiers.
   * @summary Sustainability
   * @param {MutualFundsApiGetMutualFundsWorldSustainabilityRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMutualFundsWorldSustainability(
    requestParameters: MutualFundsApiGetMutualFundsWorldSustainabilityRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MutualFundsApiFp(this.configuration)
      .getMutualFundsWorldSustainability(
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
