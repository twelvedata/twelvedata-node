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
import type { FormatEnum } from "../models";
// @ts-ignore
import type { GetBonds200Response } from "../models";
// @ts-ignore
import type { GetCommodities200Response } from "../models";
// @ts-ignore
import type { GetCountries200Response } from "../models";
// @ts-ignore
import type { GetCrossListings200Response } from "../models";
// @ts-ignore
import type { GetCryptocurrencies200Response } from "../models";
// @ts-ignore
import type { GetCryptocurrencyExchanges200Response } from "../models";
// @ts-ignore
import type { GetEarliestTimestamp200Response } from "../models";
// @ts-ignore
import type { GetEtf200Response } from "../models";
// @ts-ignore
import type { GetExchangeSchedule200Response } from "../models";
// @ts-ignore
import type { GetExchanges200Response } from "../models";
// @ts-ignore
import type { GetForexPairs200Response } from "../models";
// @ts-ignore
import type { GetFunds200Response } from "../models";
// @ts-ignore
import type { GetInstrumentType200Response } from "../models";
// @ts-ignore
import type { GetIntervals200Response } from "../models";
// @ts-ignore
import type { GetStocks200Response } from "../models";
// @ts-ignore
import type { GetSymbolSearch200Response } from "../models";
// @ts-ignore
import type { GetTechnicalIndicators200Response } from "../models";
// @ts-ignore
import type { IntervalEnum } from "../models";
// @ts-ignore
import type { MarketStateResponseItem } from "../models";
// @ts-ignore
import type { TypeEnum } from "../models";
/**
 * ReferenceDataApi - axios parameter creator
 */
export const ReferenceDataApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
     * @summary Fixed income
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {number} [page] Page number of the results to fetch
     * @param {number} [outputsize] Determines the number of data points returned in the output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBonds: async (
      symbol?: string,
      exchange?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/bonds`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
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
     * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
     * @summary Commodities
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [category] Filter by category of commodity
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommodities: async (
      symbol?: string,
      category?: string,
      format?: FormatEnum,
      delimiter?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/commodities`;
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

      if (category !== undefined) {
        localVarQueryParameter["category"] = category;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
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
     * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
     * @summary Countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCountries: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/countries`;
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
     * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
     * @summary Cross listings
     * @param {string} symbol The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Country to which stock exchange belongs to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCrossListings: async (
      symbol: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'symbol' is not null or undefined
      assertParamExists("getCrossListings", "symbol", symbol);
      const localVarPath = `/cross_listings`;
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
     * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
     * @summary Cryptocurrency pairs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name. E.g. &#x60;Binance&#x60;, &#x60;Coinbase&#x60;, etc.
     * @param {string} [currencyBase] Filter by currency base
     * @param {string} [currencyQuote] Filter by currency quote
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCryptocurrencies: async (
      symbol?: string,
      exchange?: string,
      currencyBase?: string,
      currencyQuote?: string,
      format?: FormatEnum,
      delimiter?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/cryptocurrencies`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (currencyBase !== undefined) {
        localVarQueryParameter["currency_base"] = currencyBase;
      }

      if (currencyQuote !== undefined) {
        localVarQueryParameter["currency_quote"] = currencyQuote;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
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
     * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
     * @summary Cryptocurrency exchanges
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCryptocurrencyExchanges: async (
      format?: FormatEnum,
      delimiter?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/cryptocurrency_exchanges`;
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

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
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
     * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
     * @summary Earliest timestamp
     * @param {IntervalEnum} interval Interval between two consecutive points in time series.
     * @param {string} [symbol] Symbol ticker of the instrument.
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded.
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard.
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarliestTimestamp: async (
      interval: IntervalEnum,
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'interval' is not null or undefined
      assertParamExists("getEarliestTimestamp", "interval", interval);
      const localVarPath = `/earliest_timestamp`;
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

      if (interval !== undefined) {
        localVarQueryParameter["interval"] = interval;
      }

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (timezone !== undefined) {
        localVarQueryParameter["timezone"] = timezone;
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
     * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
     * @summary ETFs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {boolean} [includeDelisted] Include delisted identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEtf: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      includeDelisted?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/etfs`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
      }

      if (includeDelisted !== undefined) {
        localVarQueryParameter["include_delisted"] = includeDelisted;
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
     * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
     * @summary Exchanges schedule
     * @param {string} [micName] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [date] &lt;p&gt; If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. &lt;/p&gt; The date can be specified in one of the following formats: &lt;ul&gt; &lt;li&gt;An exact date (e.g., &lt;code&gt;2021-10-27&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;A human-readable keyword: &lt;code&gt;today&lt;/code&gt; or &lt;code&gt;yesterday&lt;/code&gt;&lt;/li&gt; &lt;li&gt;A full datetime string in UTC (e.g., &lt;code&gt;2025-04-11T20:00:00&lt;/code&gt;) to retrieve the schedule corresponding to the day in the specified time.&lt;/li&gt; &lt;/ul&gt; When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, &lt;code&gt;2025-04-11T20:00:00 UTC&lt;/code&gt; corresponds to: &lt;ul&gt; &lt;li&gt;&lt;code&gt;2025-04-11&lt;/code&gt; in the &lt;code&gt;America/New_York&lt;/code&gt; timezone&lt;/li&gt; &lt;li&gt;&lt;code&gt;2025-04-12&lt;/code&gt; in the &lt;code&gt;Australia/Sydney&lt;/code&gt; timezone&lt;/li&gt; &lt;/ul&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchangeSchedule: async (
      micName?: string,
      micCode?: string,
      country?: string,
      date?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/exchange_schedule`;
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

      if (micName !== undefined) {
        localVarQueryParameter["mic_name"] = micName;
      }

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (date !== undefined) {
        localVarQueryParameter["date"] = date;
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
     * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
     * @summary Exchanges
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [name] Filter by exchange name
     * @param {string} [code] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchanges: async (
      type?: TypeEnum,
      name?: string,
      code?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/exchanges`;
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

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (name !== undefined) {
        localVarQueryParameter["name"] = name;
      }

      if (code !== undefined) {
        localVarQueryParameter["code"] = code;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
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
     * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
     * @summary Forex pairs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [currencyBase] Filter by currency base
     * @param {string} [currencyQuote] Filter by currency quote
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForexPairs: async (
      symbol?: string,
      currencyBase?: string,
      currencyQuote?: string,
      format?: FormatEnum,
      delimiter?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/forex_pairs`;
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

      if (currencyBase !== undefined) {
        localVarQueryParameter["currency_base"] = currencyBase;
      }

      if (currencyQuote !== undefined) {
        localVarQueryParameter["currency_quote"] = currencyQuote;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
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
     * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
     * @summary Funds
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {number} [page] Page number of the results to fetch
     * @param {number} [outputsize] Determines the number of data points returned in the output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFunds: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/funds`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
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
     * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
     * @summary Instrument type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstrumentType: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/instrument_type`;
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
     * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
     * @summary Intervals List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIntervals: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/intervals`;
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
     * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
     * @summary Market state
     * @param {string} [exchange] The exchange name where the instrument is traded.
     * @param {string} [code] The Market Identifier Code (MIC) of the exchange where the instrument is traded.
     * @param {string} [country] The country where the exchange is located. Takes country name or alpha code.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketState: async (
      exchange?: string,
      code?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/market_state`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (code !== undefined) {
        localVarQueryParameter["code"] = code;
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
     * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
     * @summary Stocks
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {boolean} [includeDelisted] Include delisted identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStocks: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      includeDelisted?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/stocks`;
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

      if (exchange !== undefined) {
        localVarQueryParameter["exchange"] = exchange;
      }

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
      }

      if (includeDelisted !== undefined) {
        localVarQueryParameter["include_delisted"] = includeDelisted;
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
     * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
     * @summary Symbol search
     * @param {string} symbol Symbol to search. Supports: &lt;ul&gt; &lt;li&gt;Ticker symbol of instrument.&lt;/li&gt; &lt;li&gt;International securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section&lt;/li&gt; &lt;li&gt;The FIGI (Financial Instrument Global Identifier) parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Composite FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Share Class FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;/ul&gt;
     * @param {number} [outputsize] Number of matches in response. Max &lt;code&gt;120&lt;/code&gt;
     * @param {boolean} [showPlan] Adds info on which plan symbol is available.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSymbolSearch: async (
      symbol: string,
      outputsize?: number,
      showPlan?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'symbol' is not null or undefined
      assertParamExists("getSymbolSearch", "symbol", symbol);
      const localVarPath = `/symbol_search`;
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

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      if (showPlan !== undefined) {
        localVarQueryParameter["show_plan"] = showPlan;
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
     * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
     * @summary Technical indicators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTechnicalIndicators: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/technical_indicators`;
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
  };
};

/**
 * ReferenceDataApi - functional programming interface
 */
export const ReferenceDataApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    ReferenceDataApiAxiosParamCreator(configuration);
  return {
    /**
     * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
     * @summary Fixed income
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {number} [page] Page number of the results to fetch
     * @param {number} [outputsize] Determines the number of data points returned in the output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBonds(
      symbol?: string,
      exchange?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetBonds200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBonds(
        symbol,
        exchange,
        country,
        format,
        delimiter,
        showPlan,
        page,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getBonds"]?.[
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
     * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
     * @summary Commodities
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [category] Filter by category of commodity
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCommodities(
      symbol?: string,
      category?: string,
      format?: FormatEnum,
      delimiter?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCommodities200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCommodities(
        symbol,
        category,
        format,
        delimiter,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getCommodities"]?.[
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
     * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
     * @summary Countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCountries(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCountries200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCountries(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getCountries"]?.[
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
     * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
     * @summary Cross listings
     * @param {string} symbol The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Country to which stock exchange belongs to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCrossListings(
      symbol: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCrossListings200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCrossListings(
          symbol,
          exchange,
          micCode,
          country,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getCrossListings"]?.[
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
     * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
     * @summary Cryptocurrency pairs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name. E.g. &#x60;Binance&#x60;, &#x60;Coinbase&#x60;, etc.
     * @param {string} [currencyBase] Filter by currency base
     * @param {string} [currencyQuote] Filter by currency quote
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCryptocurrencies(
      symbol?: string,
      exchange?: string,
      currencyBase?: string,
      currencyQuote?: string,
      format?: FormatEnum,
      delimiter?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCryptocurrencies200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCryptocurrencies(
          symbol,
          exchange,
          currencyBase,
          currencyQuote,
          format,
          delimiter,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getCryptocurrencies"]?.[
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
     * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
     * @summary Cryptocurrency exchanges
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCryptocurrencyExchanges(
      format?: FormatEnum,
      delimiter?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCryptocurrencyExchanges200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCryptocurrencyExchanges(
          format,
          delimiter,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getCryptocurrencyExchanges"]?.[
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
     * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
     * @summary Earliest timestamp
     * @param {IntervalEnum} interval Interval between two consecutive points in time series.
     * @param {string} [symbol] Symbol ticker of the instrument.
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded.
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard.
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEarliestTimestamp(
      interval: IntervalEnum,
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEarliestTimestamp200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEarliestTimestamp(
          interval,
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          timezone,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getEarliestTimestamp"]?.[
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
     * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
     * @summary ETFs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {boolean} [includeDelisted] Include delisted identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEtf(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      includeDelisted?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEtf200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEtf(
        symbol,
        figi,
        isin,
        cusip,
        cik,
        exchange,
        micCode,
        country,
        format,
        delimiter,
        showPlan,
        includeDelisted,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getEtf"]?.[
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
     * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
     * @summary Exchanges schedule
     * @param {string} [micName] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [date] &lt;p&gt; If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. &lt;/p&gt; The date can be specified in one of the following formats: &lt;ul&gt; &lt;li&gt;An exact date (e.g., &lt;code&gt;2021-10-27&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;A human-readable keyword: &lt;code&gt;today&lt;/code&gt; or &lt;code&gt;yesterday&lt;/code&gt;&lt;/li&gt; &lt;li&gt;A full datetime string in UTC (e.g., &lt;code&gt;2025-04-11T20:00:00&lt;/code&gt;) to retrieve the schedule corresponding to the day in the specified time.&lt;/li&gt; &lt;/ul&gt; When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, &lt;code&gt;2025-04-11T20:00:00 UTC&lt;/code&gt; corresponds to: &lt;ul&gt; &lt;li&gt;&lt;code&gt;2025-04-11&lt;/code&gt; in the &lt;code&gt;America/New_York&lt;/code&gt; timezone&lt;/li&gt; &lt;li&gt;&lt;code&gt;2025-04-12&lt;/code&gt; in the &lt;code&gt;Australia/Sydney&lt;/code&gt; timezone&lt;/li&gt; &lt;/ul&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExchangeSchedule(
      micName?: string,
      micCode?: string,
      country?: string,
      date?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetExchangeSchedule200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getExchangeSchedule(
          micName,
          micCode,
          country,
          date,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getExchangeSchedule"]?.[
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
     * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
     * @summary Exchanges
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [name] Filter by exchange name
     * @param {string} [code] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExchanges(
      type?: TypeEnum,
      name?: string,
      code?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetExchanges200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getExchanges(
        type,
        name,
        code,
        country,
        format,
        delimiter,
        showPlan,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getExchanges"]?.[
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
     * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
     * @summary Forex pairs
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [currencyBase] Filter by currency base
     * @param {string} [currencyQuote] Filter by currency quote
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getForexPairs(
      symbol?: string,
      currencyBase?: string,
      currencyQuote?: string,
      format?: FormatEnum,
      delimiter?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetForexPairs200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getForexPairs(
        symbol,
        currencyBase,
        currencyQuote,
        format,
        delimiter,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getForexPairs"]?.[
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
     * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
     * @summary Funds
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {number} [page] Page number of the results to fetch
     * @param {number} [outputsize] Determines the number of data points returned in the output
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getFunds(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetFunds200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getFunds(
        symbol,
        figi,
        isin,
        cusip,
        cik,
        exchange,
        country,
        format,
        delimiter,
        showPlan,
        page,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getFunds"]?.[
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
     * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
     * @summary Instrument type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInstrumentType(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetInstrumentType200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getInstrumentType(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getInstrumentType"]?.[
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
     * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
     * @summary Intervals List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIntervals(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetIntervals200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getIntervals(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getIntervals"]?.[
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
     * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
     * @summary Market state
     * @param {string} [exchange] The exchange name where the instrument is traded.
     * @param {string} [code] The Market Identifier Code (MIC) of the exchange where the instrument is traded.
     * @param {string} [country] The country where the exchange is located. Takes country name or alpha code.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMarketState(
      exchange?: string,
      code?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<MarketStateResponseItem>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMarketState(
        exchange,
        code,
        country,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getMarketState"]?.[
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
     * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
     * @summary Stocks
     * @param {string} [symbol] The ticker symbol of an instrument for which data is requested
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cik] The CIK of an instrument for which data is requested
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {boolean} [showPlan] Adds info on which plan symbol is available
     * @param {boolean} [includeDelisted] Include delisted identifiers
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStocks(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      cik?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      showPlan?: boolean,
      includeDelisted?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetStocks200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getStocks(
        symbol,
        figi,
        isin,
        cusip,
        cik,
        exchange,
        micCode,
        country,
        type,
        format,
        delimiter,
        showPlan,
        includeDelisted,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getStocks"]?.[
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
     * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
     * @summary Symbol search
     * @param {string} symbol Symbol to search. Supports: &lt;ul&gt; &lt;li&gt;Ticker symbol of instrument.&lt;/li&gt; &lt;li&gt;International securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section&lt;/li&gt; &lt;li&gt;The FIGI (Financial Instrument Global Identifier) parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Composite FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Share Class FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;/ul&gt;
     * @param {number} [outputsize] Number of matches in response. Max &lt;code&gt;120&lt;/code&gt;
     * @param {boolean} [showPlan] Adds info on which plan symbol is available.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSymbolSearch(
      symbol: string,
      outputsize?: number,
      showPlan?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetSymbolSearch200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSymbolSearch(
        symbol,
        outputsize,
        showPlan,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getSymbolSearch"]?.[
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
     * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
     * @summary Technical indicators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTechnicalIndicators(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetTechnicalIndicators200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTechnicalIndicators(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ReferenceDataApi.getTechnicalIndicators"]?.[
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
 * ReferenceDataApi - factory interface
 */
export const ReferenceDataApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ReferenceDataApiFp(configuration);
  return {
    /**
     * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
     * @summary Fixed income
     * @param {ReferenceDataApiGetBondsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBonds(
      requestParameters: ReferenceDataApiGetBondsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetBonds200Response> {
      return localVarFp
        .getBonds(
          requestParameters.symbol,
          requestParameters.exchange,
          requestParameters.country,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.showPlan,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
     * @summary Commodities
     * @param {ReferenceDataApiGetCommoditiesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCommodities(
      requestParameters: ReferenceDataApiGetCommoditiesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCommodities200Response> {
      return localVarFp
        .getCommodities(
          requestParameters.symbol,
          requestParameters.category,
          requestParameters.format,
          requestParameters.delimiter,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
     * @summary Countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCountries(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCountries200Response> {
      return localVarFp
        .getCountries(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
     * @summary Cross listings
     * @param {ReferenceDataApiGetCrossListingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCrossListings(
      requestParameters: ReferenceDataApiGetCrossListingsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCrossListings200Response> {
      return localVarFp
        .getCrossListings(
          requestParameters.symbol,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
     * @summary Cryptocurrency pairs
     * @param {ReferenceDataApiGetCryptocurrenciesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCryptocurrencies(
      requestParameters: ReferenceDataApiGetCryptocurrenciesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCryptocurrencies200Response> {
      return localVarFp
        .getCryptocurrencies(
          requestParameters.symbol,
          requestParameters.exchange,
          requestParameters.currencyBase,
          requestParameters.currencyQuote,
          requestParameters.format,
          requestParameters.delimiter,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
     * @summary Cryptocurrency exchanges
     * @param {ReferenceDataApiGetCryptocurrencyExchangesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCryptocurrencyExchanges(
      requestParameters: ReferenceDataApiGetCryptocurrencyExchangesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCryptocurrencyExchanges200Response> {
      return localVarFp
        .getCryptocurrencyExchanges(
          requestParameters.format,
          requestParameters.delimiter,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
     * @summary Earliest timestamp
     * @param {ReferenceDataApiGetEarliestTimestampRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarliestTimestamp(
      requestParameters: ReferenceDataApiGetEarliestTimestampRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEarliestTimestamp200Response> {
      return localVarFp
        .getEarliestTimestamp(
          requestParameters.interval,
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
     * @summary ETFs
     * @param {ReferenceDataApiGetEtfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEtf(
      requestParameters: ReferenceDataApiGetEtfRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEtf200Response> {
      return localVarFp
        .getEtf(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.cik,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.showPlan,
          requestParameters.includeDelisted,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
     * @summary Exchanges schedule
     * @param {ReferenceDataApiGetExchangeScheduleRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchangeSchedule(
      requestParameters: ReferenceDataApiGetExchangeScheduleRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetExchangeSchedule200Response> {
      return localVarFp
        .getExchangeSchedule(
          requestParameters.micName,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.date,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
     * @summary Exchanges
     * @param {ReferenceDataApiGetExchangesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchanges(
      requestParameters: ReferenceDataApiGetExchangesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetExchanges200Response> {
      return localVarFp
        .getExchanges(
          requestParameters.type,
          requestParameters.name,
          requestParameters.code,
          requestParameters.country,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.showPlan,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
     * @summary Forex pairs
     * @param {ReferenceDataApiGetForexPairsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getForexPairs(
      requestParameters: ReferenceDataApiGetForexPairsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetForexPairs200Response> {
      return localVarFp
        .getForexPairs(
          requestParameters.symbol,
          requestParameters.currencyBase,
          requestParameters.currencyQuote,
          requestParameters.format,
          requestParameters.delimiter,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
     * @summary Funds
     * @param {ReferenceDataApiGetFundsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFunds(
      requestParameters: ReferenceDataApiGetFundsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetFunds200Response> {
      return localVarFp
        .getFunds(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.cik,
          requestParameters.exchange,
          requestParameters.country,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.showPlan,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
     * @summary Instrument type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstrumentType(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetInstrumentType200Response> {
      return localVarFp
        .getInstrumentType(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
     * @summary Intervals List
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIntervals(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetIntervals200Response> {
      return localVarFp
        .getIntervals(options)
        .then((request) => request(axios, basePath));
    },
    /**
     * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
     * @summary Market state
     * @param {ReferenceDataApiGetMarketStateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketState(
      requestParameters: ReferenceDataApiGetMarketStateRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<MarketStateResponseItem>> {
      return localVarFp
        .getMarketState(
          requestParameters.exchange,
          requestParameters.code,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
     * @summary Stocks
     * @param {ReferenceDataApiGetStocksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStocks(
      requestParameters: ReferenceDataApiGetStocksRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetStocks200Response> {
      return localVarFp
        .getStocks(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.cik,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.type,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.showPlan,
          requestParameters.includeDelisted,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
     * @summary Symbol search
     * @param {ReferenceDataApiGetSymbolSearchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSymbolSearch(
      requestParameters: ReferenceDataApiGetSymbolSearchRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetSymbolSearch200Response> {
      return localVarFp
        .getSymbolSearch(
          requestParameters.symbol,
          requestParameters.outputsize,
          requestParameters.showPlan,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
     * @summary Technical indicators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTechnicalIndicators(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetTechnicalIndicators200Response> {
      return localVarFp
        .getTechnicalIndicators(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ReferenceDataApi - interface
 */
export interface ReferenceDataApiInterface {
  /**
   * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
   * @summary Fixed income
   * @param {ReferenceDataApiGetBondsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getBonds(
    requestParameters?: ReferenceDataApiGetBondsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetBonds200Response>;

  /**
   * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
   * @summary Commodities
   * @param {ReferenceDataApiGetCommoditiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCommodities(
    requestParameters?: ReferenceDataApiGetCommoditiesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCommodities200Response>;

  /**
   * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
   * @summary Countries
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCountries(
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCountries200Response>;

  /**
   * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
   * @summary Cross listings
   * @param {ReferenceDataApiGetCrossListingsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCrossListings(
    requestParameters: ReferenceDataApiGetCrossListingsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCrossListings200Response>;

  /**
   * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
   * @summary Cryptocurrency pairs
   * @param {ReferenceDataApiGetCryptocurrenciesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCryptocurrencies(
    requestParameters?: ReferenceDataApiGetCryptocurrenciesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCryptocurrencies200Response>;

  /**
   * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
   * @summary Cryptocurrency exchanges
   * @param {ReferenceDataApiGetCryptocurrencyExchangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCryptocurrencyExchanges(
    requestParameters?: ReferenceDataApiGetCryptocurrencyExchangesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCryptocurrencyExchanges200Response>;

  /**
   * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
   * @summary Earliest timestamp
   * @param {ReferenceDataApiGetEarliestTimestampRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEarliestTimestamp(
    requestParameters: ReferenceDataApiGetEarliestTimestampRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEarliestTimestamp200Response>;

  /**
   * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
   * @summary ETFs
   * @param {ReferenceDataApiGetEtfRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEtf(
    requestParameters?: ReferenceDataApiGetEtfRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEtf200Response>;

  /**
   * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
   * @summary Exchanges schedule
   * @param {ReferenceDataApiGetExchangeScheduleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getExchangeSchedule(
    requestParameters?: ReferenceDataApiGetExchangeScheduleRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetExchangeSchedule200Response>;

  /**
   * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
   * @summary Exchanges
   * @param {ReferenceDataApiGetExchangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getExchanges(
    requestParameters?: ReferenceDataApiGetExchangesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetExchanges200Response>;

  /**
   * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
   * @summary Forex pairs
   * @param {ReferenceDataApiGetForexPairsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getForexPairs(
    requestParameters?: ReferenceDataApiGetForexPairsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetForexPairs200Response>;

  /**
   * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
   * @summary Funds
   * @param {ReferenceDataApiGetFundsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getFunds(
    requestParameters?: ReferenceDataApiGetFundsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetFunds200Response>;

  /**
   * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
   * @summary Instrument type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getInstrumentType(
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetInstrumentType200Response>;

  /**
   * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
   * @summary Intervals List
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getIntervals(
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetIntervals200Response>;

  /**
   * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
   * @summary Market state
   * @param {ReferenceDataApiGetMarketStateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMarketState(
    requestParameters?: ReferenceDataApiGetMarketStateRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<Array<MarketStateResponseItem>>;

  /**
   * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
   * @summary Stocks
   * @param {ReferenceDataApiGetStocksRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getStocks(
    requestParameters?: ReferenceDataApiGetStocksRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetStocks200Response>;

  /**
   * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
   * @summary Symbol search
   * @param {ReferenceDataApiGetSymbolSearchRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getSymbolSearch(
    requestParameters: ReferenceDataApiGetSymbolSearchRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetSymbolSearch200Response>;

  /**
   * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
   * @summary Technical indicators
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTechnicalIndicators(
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetTechnicalIndicators200Response>;
}

/**
 * Request parameters for getBonds operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetBondsRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
   */
  readonly symbol?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Adds info on which plan symbol is available
   */
  readonly showPlan?: boolean;

  /**
   * Page number of the results to fetch
   */
  readonly page?: number;

  /**
   * Determines the number of data points returned in the output
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getCommodities operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetCommoditiesRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
   */
  readonly symbol?: string;

  /**
   * Filter by category of commodity
   */
  readonly category?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;
}

/**
 * Request parameters for getCrossListings operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetCrossListingsRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
   */
  readonly symbol: string;

  /**
   * Exchange where instrument is traded
   */
  readonly exchange?: string;

  /**
   * Market identifier code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Country to which stock exchange belongs to
   */
  readonly country?: string;
}

/**
 * Request parameters for getCryptocurrencies operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetCryptocurrenciesRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
   */
  readonly symbol?: string;

  /**
   * Filter by exchange name. E.g. &#x60;Binance&#x60;, &#x60;Coinbase&#x60;, etc.
   */
  readonly exchange?: string;

  /**
   * Filter by currency base
   */
  readonly currencyBase?: string;

  /**
   * Filter by currency quote
   */
  readonly currencyQuote?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;
}

/**
 * Request parameters for getCryptocurrencyExchanges operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetCryptocurrencyExchangesRequest {
  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the CSV file
   */
  readonly delimiter?: string;
}

/**
 * Request parameters for getEarliestTimestamp operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetEarliestTimestampRequest {
  /**
   * Interval between two consecutive points in time series.
   */
  readonly interval: IntervalEnum;

  /**
   * Symbol ticker of the instrument.
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
   * Exchange where instrument is traded.
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard.
   */
  readonly micCode?: string;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * Request parameters for getEtf operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetEtfRequest {
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
   * The CIK of an instrument for which data is requested
   */
  readonly cik?: string;

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
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Adds info on which plan symbol is available
   */
  readonly showPlan?: boolean;

  /**
   * Include delisted identifiers
   */
  readonly includeDelisted?: boolean;
}

/**
 * Request parameters for getExchangeSchedule operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetExchangeScheduleRequest {
  /**
   * Filter by exchange name
   */
  readonly micName?: string;

  /**
   * Filter by market identifier code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * &lt;p&gt; If a date is provided, the API returns the schedule for the specified date; otherwise, it returns the default (common) schedule. &lt;/p&gt; The date can be specified in one of the following formats: &lt;ul&gt; &lt;li&gt;An exact date (e.g., &lt;code&gt;2021-10-27&lt;/code&gt;)&lt;/li&gt; &lt;li&gt;A human-readable keyword: &lt;code&gt;today&lt;/code&gt; or &lt;code&gt;yesterday&lt;/code&gt;&lt;/li&gt; &lt;li&gt;A full datetime string in UTC (e.g., &lt;code&gt;2025-04-11T20:00:00&lt;/code&gt;) to retrieve the schedule corresponding to the day in the specified time.&lt;/li&gt; &lt;/ul&gt; When using a datetime value, the resulting schedule will correspond to the local calendar day at the specified time. For example, &lt;code&gt;2025-04-11T20:00:00 UTC&lt;/code&gt; corresponds to: &lt;ul&gt; &lt;li&gt;&lt;code&gt;2025-04-11&lt;/code&gt; in the &lt;code&gt;America/New_York&lt;/code&gt; timezone&lt;/li&gt; &lt;li&gt;&lt;code&gt;2025-04-12&lt;/code&gt; in the &lt;code&gt;Australia/Sydney&lt;/code&gt; timezone&lt;/li&gt; &lt;/ul&gt;
   */
  readonly date?: string;
}

/**
 * Request parameters for getExchanges operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetExchangesRequest {
  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * Filter by exchange name
   */
  readonly name?: string;

  /**
   * Filter by market identifier code (MIC) under ISO 10383 standard
   */
  readonly code?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Adds info on which plan symbol is available
   */
  readonly showPlan?: boolean;
}

/**
 * Request parameters for getForexPairs operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetForexPairsRequest {
  /**
   * The ticker symbol of an instrument for which data is requested
   */
  readonly symbol?: string;

  /**
   * Filter by currency base
   */
  readonly currencyBase?: string;

  /**
   * Filter by currency quote
   */
  readonly currencyQuote?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;
}

/**
 * Request parameters for getFunds operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetFundsRequest {
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
   * The CIK of an instrument for which data is requested
   */
  readonly cik?: string;

  /**
   * Filter by exchange name
   */
  readonly exchange?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Adds info on which plan symbol is available
   */
  readonly showPlan?: boolean;

  /**
   * Page number of the results to fetch
   */
  readonly page?: number;

  /**
   * Determines the number of data points returned in the output
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getMarketState operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetMarketStateRequest {
  /**
   * The exchange name where the instrument is traded.
   */
  readonly exchange?: string;

  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded.
   */
  readonly code?: string;

  /**
   * The country where the exchange is located. Takes country name or alpha code.
   */
  readonly country?: string;
}

/**
 * Request parameters for getStocks operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetStocksRequest {
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
   * The CIK of an instrument for which data is requested
   */
  readonly cik?: string;

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
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Adds info on which plan symbol is available
   */
  readonly showPlan?: boolean;

  /**
   * Include delisted identifiers
   */
  readonly includeDelisted?: boolean;
}

/**
 * Request parameters for getSymbolSearch operation in ReferenceDataApi.
 */
export interface ReferenceDataApiGetSymbolSearchRequest {
  /**
   * Symbol to search. Supports: &lt;ul&gt; &lt;li&gt;Ticker symbol of instrument.&lt;/li&gt; &lt;li&gt;International securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section&lt;/li&gt; &lt;li&gt;The FIGI (Financial Instrument Global Identifier) parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Composite FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;li&gt;Share Class FIGI parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.&lt;/li&gt; &lt;/ul&gt;
   */
  readonly symbol: string;

  /**
   * Number of matches in response. Max &lt;code&gt;120&lt;/code&gt;
   */
  readonly outputsize?: number;

  /**
   * Adds info on which plan symbol is available.
   */
  readonly showPlan?: boolean;
}

/**
 * ReferenceDataApi - object-oriented interface
 */
export class ReferenceDataApi
  extends BaseAPI
  implements ReferenceDataApiInterface
{
  /**
   * The fixed income endpoint provides a daily updated list of available bonds. It returns an array containing detailed information about each bond, including identifiers, names, and other relevant attributes.
   * @summary Fixed income
   * @param {ReferenceDataApiGetBondsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getBonds(
    requestParameters: ReferenceDataApiGetBondsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getBonds(
        requestParameters.symbol,
        requestParameters.exchange,
        requestParameters.country,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.showPlan,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The commodities endpoint provides a daily updated list of available commodity pairs, across precious metals, livestock, softs, grains, etc.
   * @summary Commodities
   * @param {ReferenceDataApiGetCommoditiesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCommodities(
    requestParameters: ReferenceDataApiGetCommoditiesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getCommodities(
        requestParameters.symbol,
        requestParameters.category,
        requestParameters.format,
        requestParameters.delimiter,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The countries endpoint provides a comprehensive list of countries, including their ISO codes, official names, capitals, and currencies. This data is essential for applications requiring accurate country information for tasks such as localization, currency conversion, or geographic analysis.
   * @summary Countries
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCountries(options?: RawAxiosRequestConfig) {
    return ReferenceDataApiFp(this.configuration)
      .getCountries(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The cross_listings endpoint provides a daily updated list of cross-listed symbols for a specified financial instrument. Cross-listed symbols represent the same security available on multiple exchanges. This endpoint is useful for identifying all the exchanges where a particular security is traded, allowing users to access comprehensive trading information across different markets.
   * @summary Cross listings
   * @param {ReferenceDataApiGetCrossListingsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCrossListings(
    requestParameters: ReferenceDataApiGetCrossListingsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getCrossListings(
        requestParameters.symbol,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The cryptocurrencies endpoint provides a daily updated list of all available cryptos. It returns an array containing detailed information about each cryptocurrency, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of cryptocurrencies for applications that require up-to-date market listings or need to display available crypto assets to users.
   * @summary Cryptocurrency pairs
   * @param {ReferenceDataApiGetCryptocurrenciesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCryptocurrencies(
    requestParameters: ReferenceDataApiGetCryptocurrenciesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getCryptocurrencies(
        requestParameters.symbol,
        requestParameters.exchange,
        requestParameters.currencyBase,
        requestParameters.currencyQuote,
        requestParameters.format,
        requestParameters.delimiter,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The cryptocurrency exchanges endpoint provides a daily updated list of available cryptocurrency exchanges. It returns an array containing details about each exchange, such as exchange names and identifiers.
   * @summary Cryptocurrency exchanges
   * @param {ReferenceDataApiGetCryptocurrencyExchangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCryptocurrencyExchanges(
    requestParameters: ReferenceDataApiGetCryptocurrencyExchangesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getCryptocurrencyExchanges(
        requestParameters.format,
        requestParameters.delimiter,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The earliest_timestamp endpoint provides the earliest available date and time for a specified financial instrument at a given data interval. This endpoint is useful for determining the starting point of historical data availability for various assets, such as stocks or currencies, allowing users to understand the time range covered by the data.
   * @summary Earliest timestamp
   * @param {ReferenceDataApiGetEarliestTimestampRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEarliestTimestamp(
    requestParameters: ReferenceDataApiGetEarliestTimestampRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getEarliestTimestamp(
        requestParameters.interval,
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The ETFs endpoint provides a daily updated list of all available Exchange-Traded Funds. It returns an array containing detailed information about each ETF, including its symbol, name, and other relevant identifiers. This endpoint is useful for retrieving a comprehensive catalog of ETFs for portfolio management, investment tracking, or financial analysis.
   * @summary ETFs
   * @param {ReferenceDataApiGetEtfRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEtf(
    requestParameters: ReferenceDataApiGetEtfRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getEtf(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.cik,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.showPlan,
        requestParameters.includeDelisted,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The exchanges schedule endpoint provides detailed information about various stock exchanges, including their trading hours and operational days. This data is essential for users who need to know when specific exchanges are open for trading, allowing them to plan their activities around the availability of these markets.
   * @summary Exchanges schedule
   * @param {ReferenceDataApiGetExchangeScheduleRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getExchangeSchedule(
    requestParameters: ReferenceDataApiGetExchangeScheduleRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getExchangeSchedule(
        requestParameters.micName,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.date,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The exchanges endpoint provides a comprehensive list of all available equity exchanges. It returns an array containing detailed information about each exchange, such as exchange code, name, country, and timezone. This data is updated daily.
   * @summary Exchanges
   * @param {ReferenceDataApiGetExchangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getExchanges(
    requestParameters: ReferenceDataApiGetExchangesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getExchanges(
        requestParameters.type,
        requestParameters.name,
        requestParameters.code,
        requestParameters.country,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.showPlan,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The forex pairs endpoint provides a comprehensive list of all available foreign exchange currency pairs. It returns an array of forex pairs, which is updated daily.
   * @summary Forex pairs
   * @param {ReferenceDataApiGetForexPairsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getForexPairs(
    requestParameters: ReferenceDataApiGetForexPairsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getForexPairs(
        requestParameters.symbol,
        requestParameters.currencyBase,
        requestParameters.currencyQuote,
        requestParameters.format,
        requestParameters.delimiter,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The funds endpoint provides a daily updated list of available investment funds. It returns an array containing detailed information about each fund, including identifiers, names, and other relevant attributes.
   * @summary Funds
   * @param {ReferenceDataApiGetFundsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getFunds(
    requestParameters: ReferenceDataApiGetFundsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getFunds(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.cik,
        requestParameters.exchange,
        requestParameters.country,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.showPlan,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The instrument type endpoint lists all available financial instrument types, such as stocks, ETFs, and cryptos. This information is essential for users to identify and categorize different financial instruments when accessing or analyzing market data.
   * @summary Instrument type
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getInstrumentType(options?: RawAxiosRequestConfig) {
    return ReferenceDataApiFp(this.configuration)
      .getInstrumentType(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The intervals endpoint provides a list of supported time intervals that can be used for querying financial data.
   * @summary Intervals List
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getIntervals(options?: RawAxiosRequestConfig) {
    return ReferenceDataApiFp(this.configuration)
      .getIntervals(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The market state endpoint provides real-time information on the operational status of all available stock exchanges. It returns data on whether each exchange is currently open or closed, along with the time remaining until the next opening or closing. This endpoint is useful for users who need to monitor exchange hours and plan their trading activities accordingly.
   * @summary Market state
   * @param {ReferenceDataApiGetMarketStateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMarketState(
    requestParameters: ReferenceDataApiGetMarketStateRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getMarketState(
        requestParameters.exchange,
        requestParameters.code,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The stocks endpoint provides a daily updated list of all available stock symbols. It returns an array containing the symbols, which can be used to identify and access specific stock data across various services. This endpoint is essential for users needing to retrieve the latest stock symbol information for further data requests or integration into financial applications.
   * @summary Stocks
   * @param {ReferenceDataApiGetStocksRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getStocks(
    requestParameters: ReferenceDataApiGetStocksRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getStocks(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.cik,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.type,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.showPlan,
        requestParameters.includeDelisted,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The symbol search endpoint allows users to find financial instruments by name or symbol. It returns a list of matching symbols, ordered by relevance, with the most relevant instrument first. This is useful for quickly locating specific stocks, ETFs, or other financial instruments when only partial information is available.
   * @summary Symbol search
   * @param {ReferenceDataApiGetSymbolSearchRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getSymbolSearch(
    requestParameters: ReferenceDataApiGetSymbolSearchRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return ReferenceDataApiFp(this.configuration)
      .getSymbolSearch(
        requestParameters.symbol,
        requestParameters.outputsize,
        requestParameters.showPlan,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The technical indicators endpoint provides a comprehensive list of available technical indicators, each represented as an object. This endpoint is useful for developers looking to integrate a variety of technical analysis tools into their applications, allowing for streamlined access to indicator data without needing to manually configure each one.
   * @summary Technical indicators
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getTechnicalIndicators(options?: RawAxiosRequestConfig) {
    return ReferenceDataApiFp(this.configuration)
      .getTechnicalIndicators(options)
      .then((request) => request(this.axios, this.basePath));
  }
}
