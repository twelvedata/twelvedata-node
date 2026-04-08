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
import type { GetDirectHolders200Response } from "../models";
// @ts-ignore
import type { GetEdgarFilingsArchive200Response } from "../models";
// @ts-ignore
import type { GetFundHolders200Response } from "../models";
// @ts-ignore
import type { GetInsiderTransactions200Response } from "../models";
// @ts-ignore
import type { GetInstitutionalHolders200Response } from "../models";
// @ts-ignore
import type { GetSourceSanctionedEntities200Response } from "../models";
// @ts-ignore
import type { GetTaxInfo200Response } from "../models";
// @ts-ignore
import type { SourceEnum } from "../models";
/**
 * RegulatoryApi - axios parameter creator
 */
export const RegulatoryApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
     * @summary Direct holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDirectHolders: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/direct_holders`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
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
     * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
     * @summary EDGAR fillings
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [formType] Filter by form types, example &#x60;8-K&#x60;, &#x60;EX-1.1&#x60;
     * @param {string} [filledFrom] Filter by filled time from
     * @param {string} [filledTo] Filter by filled time to
     * @param {number} [page] Page number
     * @param {number} [pageSize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEdgarFilingsArchive: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      formType?: string,
      filledFrom?: string,
      filledTo?: string,
      page?: number,
      pageSize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/edgar_filings/archive`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (formType !== undefined) {
        localVarQueryParameter["form_type"] = formType;
      }

      if (filledFrom !== undefined) {
        localVarQueryParameter["filled_from"] = filledFrom;
      }

      if (filledTo !== undefined) {
        localVarQueryParameter["filled_to"] = filledTo;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["page_size"] = pageSize;
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
     * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
     * @summary Fund holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFundHolders: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/fund_holders`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
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
     * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
     * @summary Insider transaction
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;TSLA&#x60;. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., United States or US.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInsiderTransactions: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/insider_transactions`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
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
     * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
     * @summary Institutional holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstitutionalHolders: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/institutional_holders`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
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
     * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
     * @summary Sanctioned entities
     * @param {SourceEnum} source Sanctions source
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSourceSanctionedEntities: async (
      source: SourceEnum,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'source' is not null or undefined
      assertParamExists("getSourceSanctionedEntities", "source", source);
      const localVarPath = `/sanctions/{source}`.replace(
        `{${"source"}}`,
        encodeURIComponent(String(source)),
      );
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
     * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
     * @summary Tax information
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested, e.g., &#x60;SKYQ&#x60;, &#x60;AIRE&#x60;, &#x60;ALM:BME&#x60;, &#x60;HSI:HKEX&#x60;.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;Euronext&#x60;
     * @param {string} [micCode] The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaxInfo: async (
      symbol?: string,
      isin?: string,
      figi?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/tax_info`;
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

      if (isin !== undefined) {
        localVarQueryParameter["isin"] = isin;
      }

      if (figi !== undefined) {
        localVarQueryParameter["figi"] = figi;
      }

      if (cusip !== undefined) {
        localVarQueryParameter["cusip"] = cusip;
      }

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
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
 * RegulatoryApi - functional programming interface
 */
export const RegulatoryApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    RegulatoryApiAxiosParamCreator(configuration);
  return {
    /**
     * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
     * @summary Direct holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDirectHolders(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetDirectHolders200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDirectHolders(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getDirectHolders"]?.[
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
     * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
     * @summary EDGAR fillings
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [formType] Filter by form types, example &#x60;8-K&#x60;, &#x60;EX-1.1&#x60;
     * @param {string} [filledFrom] Filter by filled time from
     * @param {string} [filledTo] Filter by filled time to
     * @param {number} [page] Page number
     * @param {number} [pageSize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEdgarFilingsArchive(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      formType?: string,
      filledFrom?: string,
      filledTo?: string,
      page?: number,
      pageSize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEdgarFilingsArchive200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEdgarFilingsArchive(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          formType,
          filledFrom,
          filledTo,
          page,
          pageSize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getEdgarFilingsArchive"]?.[
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
     * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
     * @summary Fund holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFundHolders(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetFundHolders200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFundHolders(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getFundHolders"]?.[
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
     * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
     * @summary Insider transaction
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;TSLA&#x60;. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., United States or US.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInsiderTransactions(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetInsiderTransactions200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getInsiderTransactions(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getInsiderTransactions"]?.[
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
     * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
     * @summary Institutional holders
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInstitutionalHolders(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetInstitutionalHolders200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getInstitutionalHolders(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getInstitutionalHolders"]?.[
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
     * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
     * @summary Sanctioned entities
     * @param {SourceEnum} source Sanctions source
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSourceSanctionedEntities(
      source: SourceEnum,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetSourceSanctionedEntities200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSourceSanctionedEntities(
          source,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getSourceSanctionedEntities"]?.[
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
     * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
     * @summary Tax information
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested, e.g., &#x60;SKYQ&#x60;, &#x60;AIRE&#x60;, &#x60;ALM:BME&#x60;, &#x60;HSI:HKEX&#x60;.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;Euronext&#x60;
     * @param {string} [micCode] The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTaxInfo(
      symbol?: string,
      isin?: string,
      figi?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetTaxInfo200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTaxInfo(
        symbol,
        isin,
        figi,
        cusip,
        exchange,
        micCode,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["RegulatoryApi.getTaxInfo"]?.[
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
 * RegulatoryApi - factory interface
 */
export const RegulatoryApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = RegulatoryApiFp(configuration);
  return {
    /**
     * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
     * @summary Direct holders
     * @param {RegulatoryApiGetDirectHoldersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDirectHolders(
      requestParameters: RegulatoryApiGetDirectHoldersRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetDirectHolders200Response> {
      return localVarFp
        .getDirectHolders(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
     * @summary EDGAR fillings
     * @param {RegulatoryApiGetEdgarFilingsArchiveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEdgarFilingsArchive(
      requestParameters: RegulatoryApiGetEdgarFilingsArchiveRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEdgarFilingsArchive200Response> {
      return localVarFp
        .getEdgarFilingsArchive(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.formType,
          requestParameters.filledFrom,
          requestParameters.filledTo,
          requestParameters.page,
          requestParameters.pageSize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
     * @summary Fund holders
     * @param {RegulatoryApiGetFundHoldersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFundHolders(
      requestParameters: RegulatoryApiGetFundHoldersRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetFundHolders200Response> {
      return localVarFp
        .getFundHolders(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
     * @summary Insider transaction
     * @param {RegulatoryApiGetInsiderTransactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInsiderTransactions(
      requestParameters: RegulatoryApiGetInsiderTransactionsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetInsiderTransactions200Response> {
      return localVarFp
        .getInsiderTransactions(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
     * @summary Institutional holders
     * @param {RegulatoryApiGetInstitutionalHoldersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstitutionalHolders(
      requestParameters: RegulatoryApiGetInstitutionalHoldersRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetInstitutionalHolders200Response> {
      return localVarFp
        .getInstitutionalHolders(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
     * @summary Sanctioned entities
     * @param {RegulatoryApiGetSourceSanctionedEntitiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSourceSanctionedEntities(
      requestParameters: RegulatoryApiGetSourceSanctionedEntitiesRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetSourceSanctionedEntities200Response> {
      return localVarFp
        .getSourceSanctionedEntities(requestParameters.source, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
     * @summary Tax information
     * @param {RegulatoryApiGetTaxInfoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTaxInfo(
      requestParameters: RegulatoryApiGetTaxInfoRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetTaxInfo200Response> {
      return localVarFp
        .getTaxInfo(
          requestParameters.symbol,
          requestParameters.isin,
          requestParameters.figi,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * RegulatoryApi - interface
 */
export interface RegulatoryApiInterface {
  /**
   * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
   * @summary Direct holders
   * @param {RegulatoryApiGetDirectHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDirectHolders(
    requestParameters?: RegulatoryApiGetDirectHoldersRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetDirectHolders200Response>;

  /**
   * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
   * @summary EDGAR fillings
   * @param {RegulatoryApiGetEdgarFilingsArchiveRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEdgarFilingsArchive(
    requestParameters?: RegulatoryApiGetEdgarFilingsArchiveRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEdgarFilingsArchive200Response>;

  /**
   * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
   * @summary Fund holders
   * @param {RegulatoryApiGetFundHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getFundHolders(
    requestParameters?: RegulatoryApiGetFundHoldersRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetFundHolders200Response>;

  /**
   * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
   * @summary Insider transaction
   * @param {RegulatoryApiGetInsiderTransactionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getInsiderTransactions(
    requestParameters?: RegulatoryApiGetInsiderTransactionsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetInsiderTransactions200Response>;

  /**
   * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
   * @summary Institutional holders
   * @param {RegulatoryApiGetInstitutionalHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getInstitutionalHolders(
    requestParameters?: RegulatoryApiGetInstitutionalHoldersRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetInstitutionalHolders200Response>;

  /**
   * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
   * @summary Sanctioned entities
   * @param {RegulatoryApiGetSourceSanctionedEntitiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getSourceSanctionedEntities(
    requestParameters: RegulatoryApiGetSourceSanctionedEntitiesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetSourceSanctionedEntities200Response>;

  /**
   * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
   * @summary Tax information
   * @param {RegulatoryApiGetTaxInfoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTaxInfo(
    requestParameters?: RegulatoryApiGetTaxInfoRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetTaxInfo200Response>;
}

/**
 * Request parameters for getDirectHolders operation in RegulatoryApi.
 */
export interface RegulatoryApiGetDirectHoldersRequest {
  /**
   * Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
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
   * Exchange where instrument is traded
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getEdgarFilingsArchive operation in RegulatoryApi.
 */
export interface RegulatoryApiGetEdgarFilingsArchiveRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
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
   * Filter by market identifier code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Filter by form types, example &#x60;8-K&#x60;, &#x60;EX-1.1&#x60;
   */
  readonly formType?: string;

  /**
   * Filter by filled time from
   */
  readonly filledFrom?: string;

  /**
   * Filter by filled time to
   */
  readonly filledTo?: string;

  /**
   * Page number
   */
  readonly page?: number;

  /**
   * Number of records in response
   */
  readonly pageSize?: number;
}

/**
 * Request parameters for getFundHolders operation in RegulatoryApi.
 */
export interface RegulatoryApiGetFundHoldersRequest {
  /**
   * Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
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
   * Exchange where instrument is traded
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getInsiderTransactions operation in RegulatoryApi.
 */
export interface RegulatoryApiGetInsiderTransactionsRequest {
  /**
   * The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;TSLA&#x60;. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
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
   * Exchange where instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;NSE&#x60;
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Country where instrument is traded, e.g., United States or US.
   */
  readonly country?: string;
}

/**
 * Request parameters for getInstitutionalHolders operation in RegulatoryApi.
 */
export interface RegulatoryApiGetInstitutionalHoldersRequest {
  /**
   * Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
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
   * Exchange where instrument is traded
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getSourceSanctionedEntities operation in RegulatoryApi.
 */
export interface RegulatoryApiGetSourceSanctionedEntitiesRequest {
  /**
   * Sanctions source
   */
  readonly source: SourceEnum;
}

/**
 * Request parameters for getTaxInfo operation in RegulatoryApi.
 */
export interface RegulatoryApiGetTaxInfoRequest {
  /**
   * The ticker symbol of an instrument for which data is requested, e.g., &#x60;SKYQ&#x60;, &#x60;AIRE&#x60;, &#x60;ALM:BME&#x60;, &#x60;HSI:HKEX&#x60;.
   */
  readonly symbol?: string;

  /**
   * Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly isin?: string;

  /**
   * The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
   */
  readonly figi?: string;

  /**
   * The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
   */
  readonly cusip?: string;

  /**
   * The exchange name where the instrument is traded, e.g., &#x60;Nasdaq&#x60;, &#x60;Euronext&#x60;
   */
  readonly exchange?: string;

  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
   */
  readonly micCode?: string;
}

/**
 * RegulatoryApi - object-oriented interface
 */
export class RegulatoryApi extends BaseAPI implements RegulatoryApiInterface {
  /**
   * The direct holders endpoint provides detailed information about the number of shares directly held by individuals or entities as recorded in a company\'s official share registry. This data is essential for understanding the distribution of stock ownership within a company, helping users identify major shareholders and assess shareholder concentration.
   * @summary Direct holders
   * @param {RegulatoryApiGetDirectHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getDirectHolders(
    requestParameters: RegulatoryApiGetDirectHoldersRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getDirectHolders(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The EDGAR fillings endpoint provides access to a comprehensive collection of financial documents submitted to the SEC, including real-time and historical forms, filings, and exhibits. Users can retrieve detailed information about company disclosures, financial statements, and regulatory submissions, enabling them to access essential compliance and financial data directly from the SEC\'s EDGAR system.
   * @summary EDGAR fillings
   * @param {RegulatoryApiGetEdgarFilingsArchiveRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEdgarFilingsArchive(
    requestParameters: RegulatoryApiGetEdgarFilingsArchiveRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getEdgarFilingsArchive(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.formType,
        requestParameters.filledFrom,
        requestParameters.filledTo,
        requestParameters.page,
        requestParameters.pageSize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The fund holders endpoint provides detailed information about the proportion of a company\'s stock that is owned by mutual fund holders. It returns data on the number of shares held, the percentage of total shares outstanding, and the names of the mutual funds involved. This endpoint is useful for users looking to understand mutual fund investment in a specific company.
   * @summary Fund holders
   * @param {RegulatoryApiGetFundHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getFundHolders(
    requestParameters: RegulatoryApiGetFundHoldersRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getFundHolders(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The insider transaction endpoint provides detailed data on trades executed by company insiders, such as executives and directors. It returns information including the insider\'s name, their role, the transaction type, the number of shares, the transaction date, and the price per share. This endpoint is useful for tracking insider activity and understanding potential insider sentiment towards a company\'s stock.
   * @summary Insider transaction
   * @param {RegulatoryApiGetInsiderTransactionsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getInsiderTransactions(
    requestParameters: RegulatoryApiGetInsiderTransactionsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getInsiderTransactions(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The institutional holders endpoint provides detailed information on the percentage and amount of a company\'s stock owned by institutional investors, such as pension funds, insurance companies, and investment firms. This data is essential for understanding the influence and involvement of large entities in a company\'s ownership structure.
   * @summary Institutional holders
   * @param {RegulatoryApiGetInstitutionalHoldersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getInstitutionalHolders(
    requestParameters: RegulatoryApiGetInstitutionalHoldersRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getInstitutionalHolders(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The sanctions entities endpoint provides a comprehensive list of entities sanctioned by a specified authority, such as OFAC, UK, EU, or AU. Users can retrieve detailed information about individuals, organizations, and other entities subject to sanctions from the chosen source, facilitating compliance and risk management processes.
   * @summary Sanctioned entities
   * @param {RegulatoryApiGetSourceSanctionedEntitiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getSourceSanctionedEntities(
    requestParameters: RegulatoryApiGetSourceSanctionedEntitiesRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getSourceSanctionedEntities(requestParameters.source, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The tax information endpoint provides detailed tax-related data for a specified financial instrument, including applicable tax rates and relevant tax codes. This information is essential for users needing to understand the tax implications associated with trading or investing in specific instruments.
   * @summary Tax information
   * @param {RegulatoryApiGetTaxInfoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getTaxInfo(
    requestParameters: RegulatoryApiGetTaxInfoRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return RegulatoryApiFp(this.configuration)
      .getTaxInfo(
        requestParameters.symbol,
        requestParameters.isin,
        requestParameters.figi,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
