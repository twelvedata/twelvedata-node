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
import type { GetAnalystRatingsLight200Response } from "../models";
// @ts-ignore
import type { GetAnalystRatingsUsEquities200Response } from "../models";
// @ts-ignore
import type { GetEarningsEstimate200Response } from "../models";
// @ts-ignore
import type { GetEpsRevisions200Response } from "../models";
// @ts-ignore
import type { GetEpsTrend200Response } from "../models";
// @ts-ignore
import type { GetGrowthEstimates200Response } from "../models";
// @ts-ignore
import type { GetPriceTarget200Response } from "../models";
// @ts-ignore
import type { GetRecommendations200Response } from "../models";
// @ts-ignore
import type { GetRevenueEstimate200Response } from "../models";
// @ts-ignore
import type { RatingChangeEnum } from "../models";
/**
 * AnalysisApi - axios parameter creator
 */
export const AnalysisApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
     * @summary Analyst ratings snapshot
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {RatingChangeEnum} [ratingChange] Filter by rating change action
     * @param {number} [outputsize] Number of records in response
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalystRatingsLight: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      ratingChange?: RatingChangeEnum,
      outputsize?: number,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/analyst_ratings/light`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (ratingChange !== undefined) {
        localVarQueryParameter["rating_change"] = ratingChange;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
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
     * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
     * @summary Analyst ratings US equities
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {RatingChangeEnum} [ratingChange] Filter by rating change action
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalystRatingsUsEquities: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      ratingChange?: RatingChangeEnum,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/analyst_ratings/us_equities`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (ratingChange !== undefined) {
        localVarQueryParameter["rating_change"] = ratingChange;
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
     * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
     * @summary Earnings estimate
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarningsEstimate: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/earnings_estimate`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
     * @summary EPS revisions
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEpsRevisions: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/eps_revisions`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
     * @summary EPS trend
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEpsTrend: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/eps_trend`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
     * @summary Growth estimates
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGrowthEstimates: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/growth_estimates`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
     * @summary Price target
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPriceTarget: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/price_target`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
     * @summary Recommendations
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecommendations: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/recommendations`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
     * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
     * @summary Revenue estimate
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {number} [dp] Number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRevenueEstimate: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/revenue_estimate`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
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
 * AnalysisApi - functional programming interface
 */
export const AnalysisApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AnalysisApiAxiosParamCreator(configuration);
  return {
    /**
     * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
     * @summary Analyst ratings snapshot
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {RatingChangeEnum} [ratingChange] Filter by rating change action
     * @param {number} [outputsize] Number of records in response
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAnalystRatingsLight(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      ratingChange?: RatingChangeEnum,
      outputsize?: number,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetAnalystRatingsLight200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalystRatingsLight(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          ratingChange,
          outputsize,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getAnalystRatingsLight"]?.[
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
     * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
     * @summary Analyst ratings US equities
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {RatingChangeEnum} [ratingChange] Filter by rating change action
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAnalystRatingsUsEquities(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      ratingChange?: RatingChangeEnum,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetAnalystRatingsUsEquities200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalystRatingsUsEquities(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          ratingChange,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getAnalystRatingsUsEquities"]?.[
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
     * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
     * @summary Earnings estimate
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEarningsEstimate(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEarningsEstimate200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEarningsEstimate(
          symbol,
          figi,
          isin,
          cusip,
          country,
          exchange,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getEarningsEstimate"]?.[
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
     * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
     * @summary EPS revisions
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEpsRevisions(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEpsRevisions200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEpsRevisions(
        symbol,
        figi,
        isin,
        cusip,
        country,
        exchange,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getEpsRevisions"]?.[
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
     * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
     * @summary EPS trend
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEpsTrend(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEpsTrend200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEpsTrend(
        symbol,
        figi,
        isin,
        cusip,
        country,
        exchange,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getEpsTrend"]?.[
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
     * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
     * @summary Growth estimates
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getGrowthEstimates(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetGrowthEstimates200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getGrowthEstimates(
          symbol,
          figi,
          isin,
          cusip,
          country,
          exchange,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getGrowthEstimates"]?.[
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
     * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
     * @summary Price target
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPriceTarget(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetPriceTarget200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPriceTarget(
        symbol,
        figi,
        isin,
        cusip,
        country,
        exchange,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getPriceTarget"]?.[
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
     * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
     * @summary Recommendations
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRecommendations(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetRecommendations200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRecommendations(
          symbol,
          figi,
          isin,
          cusip,
          country,
          exchange,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getRecommendations"]?.[
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
     * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
     * @summary Revenue estimate
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [exchange] Filter by exchange name
     * @param {number} [dp] Number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getRevenueEstimate(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      country?: string,
      exchange?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetRevenueEstimate200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getRevenueEstimate(
          symbol,
          figi,
          isin,
          cusip,
          country,
          exchange,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AnalysisApi.getRevenueEstimate"]?.[
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
 * AnalysisApi - factory interface
 */
export const AnalysisApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AnalysisApiFp(configuration);
  return {
    /**
     * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
     * @summary Analyst ratings snapshot
     * @param {AnalysisApiGetAnalystRatingsLightRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalystRatingsLight(
      requestParameters: AnalysisApiGetAnalystRatingsLightRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetAnalystRatingsLight200Response> {
      return localVarFp
        .getAnalystRatingsLight(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.ratingChange,
          requestParameters.outputsize,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
     * @summary Analyst ratings US equities
     * @param {AnalysisApiGetAnalystRatingsUsEquitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalystRatingsUsEquities(
      requestParameters: AnalysisApiGetAnalystRatingsUsEquitiesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetAnalystRatingsUsEquities200Response> {
      return localVarFp
        .getAnalystRatingsUsEquities(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.ratingChange,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
     * @summary Earnings estimate
     * @param {AnalysisApiGetEarningsEstimateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarningsEstimate(
      requestParameters: AnalysisApiGetEarningsEstimateRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEarningsEstimate200Response> {
      return localVarFp
        .getEarningsEstimate(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
     * @summary EPS revisions
     * @param {AnalysisApiGetEpsRevisionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEpsRevisions(
      requestParameters: AnalysisApiGetEpsRevisionsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEpsRevisions200Response> {
      return localVarFp
        .getEpsRevisions(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
     * @summary EPS trend
     * @param {AnalysisApiGetEpsTrendRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEpsTrend(
      requestParameters: AnalysisApiGetEpsTrendRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEpsTrend200Response> {
      return localVarFp
        .getEpsTrend(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
     * @summary Growth estimates
     * @param {AnalysisApiGetGrowthEstimatesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getGrowthEstimates(
      requestParameters: AnalysisApiGetGrowthEstimatesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetGrowthEstimates200Response> {
      return localVarFp
        .getGrowthEstimates(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
     * @summary Price target
     * @param {AnalysisApiGetPriceTargetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPriceTarget(
      requestParameters: AnalysisApiGetPriceTargetRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetPriceTarget200Response> {
      return localVarFp
        .getPriceTarget(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
     * @summary Recommendations
     * @param {AnalysisApiGetRecommendationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRecommendations(
      requestParameters: AnalysisApiGetRecommendationsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetRecommendations200Response> {
      return localVarFp
        .getRecommendations(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
     * @summary Revenue estimate
     * @param {AnalysisApiGetRevenueEstimateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRevenueEstimate(
      requestParameters: AnalysisApiGetRevenueEstimateRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetRevenueEstimate200Response> {
      return localVarFp
        .getRevenueEstimate(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.country,
          requestParameters.exchange,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * AnalysisApi - interface
 */
export interface AnalysisApiInterface {
  /**
   * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
   * @summary Analyst ratings snapshot
   * @param {AnalysisApiGetAnalystRatingsLightRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAnalystRatingsLight(
    requestParameters?: AnalysisApiGetAnalystRatingsLightRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetAnalystRatingsLight200Response>;

  /**
   * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
   * @summary Analyst ratings US equities
   * @param {AnalysisApiGetAnalystRatingsUsEquitiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getAnalystRatingsUsEquities(
    requestParameters?: AnalysisApiGetAnalystRatingsUsEquitiesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetAnalystRatingsUsEquities200Response>;

  /**
   * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
   * @summary Earnings estimate
   * @param {AnalysisApiGetEarningsEstimateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEarningsEstimate(
    requestParameters?: AnalysisApiGetEarningsEstimateRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEarningsEstimate200Response>;

  /**
   * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
   * @summary EPS revisions
   * @param {AnalysisApiGetEpsRevisionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEpsRevisions(
    requestParameters?: AnalysisApiGetEpsRevisionsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEpsRevisions200Response>;

  /**
   * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
   * @summary EPS trend
   * @param {AnalysisApiGetEpsTrendRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEpsTrend(
    requestParameters?: AnalysisApiGetEpsTrendRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEpsTrend200Response>;

  /**
   * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
   * @summary Growth estimates
   * @param {AnalysisApiGetGrowthEstimatesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getGrowthEstimates(
    requestParameters?: AnalysisApiGetGrowthEstimatesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetGrowthEstimates200Response>;

  /**
   * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
   * @summary Price target
   * @param {AnalysisApiGetPriceTargetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getPriceTarget(
    requestParameters?: AnalysisApiGetPriceTargetRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetPriceTarget200Response>;

  /**
   * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
   * @summary Recommendations
   * @param {AnalysisApiGetRecommendationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getRecommendations(
    requestParameters?: AnalysisApiGetRecommendationsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetRecommendations200Response>;

  /**
   * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
   * @summary Revenue estimate
   * @param {AnalysisApiGetRevenueEstimateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getRevenueEstimate(
    requestParameters?: AnalysisApiGetRevenueEstimateRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetRevenueEstimate200Response>;
}

/**
 * Request parameters for getAnalystRatingsLight operation in AnalysisApi.
 */
export interface AnalysisApiGetAnalystRatingsLightRequest {
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
   * Filter by exchange name
   */
  readonly exchange?: string;

  /**
   * Filter by rating change action
   */
  readonly ratingChange?: RatingChangeEnum;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getAnalystRatingsUsEquities operation in AnalysisApi.
 */
export interface AnalysisApiGetAnalystRatingsUsEquitiesRequest {
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
   * Filter by exchange name
   */
  readonly exchange?: string;

  /**
   * Filter by rating change action
   */
  readonly ratingChange?: RatingChangeEnum;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getEarningsEstimate operation in AnalysisApi.
 */
export interface AnalysisApiGetEarningsEstimateRequest {
  /**
   * Filter by symbol
   */
  readonly symbol?: string;

  /**
   * The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
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
   * The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Exchange where instrument is traded
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getEpsRevisions operation in AnalysisApi.
 */
export interface AnalysisApiGetEpsRevisionsRequest {
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
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getEpsTrend operation in AnalysisApi.
 */
export interface AnalysisApiGetEpsTrendRequest {
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
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getGrowthEstimates operation in AnalysisApi.
 */
export interface AnalysisApiGetGrowthEstimatesRequest {
  /**
   * Filter by symbol
   */
  readonly symbol?: string;

  /**
   * The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
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
   * The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Exchange where instrument is traded
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getPriceTarget operation in AnalysisApi.
 */
export interface AnalysisApiGetPriceTargetRequest {
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
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getRecommendations operation in AnalysisApi.
 */
export interface AnalysisApiGetRecommendationsRequest {
  /**
   * Filter by symbol
   */
  readonly symbol?: string;

  /**
   * The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
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
   * The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;.
   */
  readonly exchange?: string;
}

/**
 * Request parameters for getRevenueEstimate operation in AnalysisApi.
 */
export interface AnalysisApiGetRevenueEstimateRequest {
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
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;

  /**
   * Number of decimal places for floating values. Should be in range [0,11] inclusive
   */
  readonly dp?: number;
}

/**
 * AnalysisApi - object-oriented interface
 */
export class AnalysisApi extends BaseAPI implements AnalysisApiInterface {
  /**
   * The analyst ratings snapshot endpoint provides a streamlined summary of ratings from analyst firms for both US and international markets. It delivers essential data on analyst recommendations, including buy, hold, and sell ratings, allowing users to quickly assess the general sentiment of analysts towards a particular stock.
   * @summary Analyst ratings snapshot
   * @param {AnalysisApiGetAnalystRatingsLightRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getAnalystRatingsLight(
    requestParameters: AnalysisApiGetAnalystRatingsLightRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getAnalystRatingsLight(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.ratingChange,
        requestParameters.outputsize,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The analyst ratings US equities endpoint provides detailed information on analyst ratings for U.S. stocks. It returns data on the latest ratings issued by various analyst firms, including the rating itself, the firm issuing the rating, and any changes in the rating. This endpoint is useful for users tracking analyst opinions on U.S. equities, allowing them to see how professional analysts view the potential performance of specific stocks.
   * @summary Analyst ratings US equities
   * @param {AnalysisApiGetAnalystRatingsUsEquitiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getAnalystRatingsUsEquities(
    requestParameters: AnalysisApiGetAnalystRatingsUsEquitiesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getAnalystRatingsUsEquities(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.ratingChange,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The earnings estimate endpoint provides access to analysts\' projected earnings per share (EPS) for a specific company, covering both upcoming quarterly and annual periods. This data is crucial for users who need to track and compare expected financial performance across different timeframes, aiding in the evaluation of a company\'s future profitability.
   * @summary Earnings estimate
   * @param {AnalysisApiGetEarningsEstimateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEarningsEstimate(
    requestParameters: AnalysisApiGetEarningsEstimateRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getEarningsEstimate(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The EPS revisions endpoint provides updated analyst forecasts for a company\'s earnings per share (EPS) on both a quarterly and annual basis. It delivers data on how these EPS predictions have changed over the past week and month, allowing users to track recent adjustments in analyst expectations. This endpoint is useful for monitoring shifts in market sentiment regarding a company\'s financial performance.
   * @summary EPS revisions
   * @param {AnalysisApiGetEpsRevisionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEpsRevisions(
    requestParameters: AnalysisApiGetEpsRevisionsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getEpsRevisions(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The EPS trend endpoint provides detailed historical data on Earnings Per Share (EPS) trends over specified periods. It returns a comprehensive breakdown of estimated EPS changes, allowing users to track and analyze the progression of a company\'s earnings performance over time. This endpoint is ideal for users seeking to understand historical EPS fluctuations and assess financial growth patterns.
   * @summary EPS trend
   * @param {AnalysisApiGetEpsTrendRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEpsTrend(
    requestParameters: AnalysisApiGetEpsTrendRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getEpsTrend(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The growth estimates endpoint provides consensus analyst projections on a company\'s growth rates over various timeframes. It aggregates and averages estimates from multiple analysts, focusing on key financial metrics such as earnings per share and revenue. This endpoint is useful for obtaining a comprehensive view of expected company performance based on expert analysis.
   * @summary Growth estimates
   * @param {AnalysisApiGetGrowthEstimatesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getGrowthEstimates(
    requestParameters: AnalysisApiGetGrowthEstimatesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getGrowthEstimates(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The price target endpoint provides detailed projections of a security\'s future price as estimated by financial analysts. It returns data including the high, low, and average price targets. This endpoint is useful for users seeking to understand potential future valuations of specific securities based on expert analysis.
   * @summary Price target
   * @param {AnalysisApiGetPriceTargetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getPriceTarget(
    requestParameters: AnalysisApiGetPriceTargetRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getPriceTarget(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The recommendations endpoint provides a summary of analyst opinions for a specific stock, delivering an average recommendation categorized as Strong Buy, Buy, Hold, or Sell. It also includes a numerical recommendation score, offering a quick overview of market sentiment based on expert analysis.
   * @summary Recommendations
   * @param {AnalysisApiGetRecommendationsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getRecommendations(
    requestParameters: AnalysisApiGetRecommendationsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getRecommendations(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The revenue estimate endpoint provides a company\'s projected quarterly and annual revenue figures based on analysts\' estimates. This data is useful for users seeking insights into expected company performance, allowing them to compare forecasted sales with historical data or other companies\' estimates.
   * @summary Revenue estimate
   * @param {AnalysisApiGetRevenueEstimateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getRevenueEstimate(
    requestParameters: AnalysisApiGetRevenueEstimateRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return AnalysisApiFp(this.configuration)
      .getRevenueEstimate(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.country,
        requestParameters.exchange,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
