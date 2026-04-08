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
import type { AdjustEnum } from "../models";
// @ts-ignore
import type { DirectionEnum } from "../models";
// @ts-ignore
import type { FormatEnum } from "../models";
// @ts-ignore
import type { GetEod200Response } from "../models";
// @ts-ignore
import type { GetPrice200Response } from "../models";
// @ts-ignore
import type { GetQuote200Response } from "../models";
// @ts-ignore
import type { GetTimeSeries200Response } from "../models";
// @ts-ignore
import type { GetTimeSeriesCross200Response } from "../models";
// @ts-ignore
import type { IntervalEnum } from "../models";
// @ts-ignore
import type { MarketEnum } from "../models";
// @ts-ignore
import type { MarketMoversResponseBody } from "../models";
// @ts-ignore
import type { OrderEnum } from "../models";
// @ts-ignore
import type { TypeEnum } from "../models";
/**
 * MarketDataApi - axios parameter creator
 */
export const MarketDataApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
     * @summary End of day price
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [date] If not null, then return data from a specific date
     * @param {boolean} [prepost] Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
     * @param {number} [dp] Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEod: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      date?: string,
      prepost?: boolean,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/eod`;
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

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (date !== undefined) {
        localVarQueryParameter["date"] = date;
      }

      if (prepost !== undefined) {
        localVarQueryParameter["prepost"] = prepost;
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
     * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
     * @summary Market movers
     * @param {MarketEnum} market Maket type
     * @param {DirectionEnum} [direction] Specifies direction of the snapshot gainers or losers
     * @param {number} [outputsize] Specifies the size of the snapshot. Can be in a range from &#x60;1&#x60; to &#x60;50&#x60;
     * @param {string} [country] Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code
     * @param {string} [priceGreaterThan] Takes values with price grater than specified value
     * @param {string} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketMovers: async (
      market: MarketEnum,
      direction?: DirectionEnum,
      outputsize?: number,
      country?: string,
      priceGreaterThan?: string,
      dp?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'market' is not null or undefined
      assertParamExists("getMarketMovers", "market", market);
      const localVarPath = `/market_movers/{market}`.replace(
        `{${"market"}}`,
        encodeURIComponent(String(market)),
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

      if (direction !== undefined) {
        localVarQueryParameter["direction"] = direction;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (priceGreaterThan !== undefined) {
        localVarQueryParameter["price_greater_than"] = priceGreaterThan;
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
     * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
     * @summary Latest price
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] Value can be JSON or CSV
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {boolean} [prepost] Parameter is optional. Only for Pro or Venture, and above plans. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPrice: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/price`;
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

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (prepost !== undefined) {
        localVarQueryParameter["prepost"] = prepost;
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
     * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
     * @summary Quote
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {IntervalEnum} [interval] Interval of the quote
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [volumeTimePeriod] Number of periods for Average Volume
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] Value can be JSON or CSV Default JSON
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {boolean} [prepost] Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {boolean} [eod] If true, then return data for closed day
     * @param {number} [rollingPeriod] Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168].
     * @param {number} [dp] Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQuote: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      interval?: IntervalEnum,
      exchange?: string,
      micCode?: string,
      country?: string,
      volumeTimePeriod?: number,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      eod?: boolean,
      rollingPeriod?: number,
      dp?: number,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/quote`;
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

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (volumeTimePeriod !== undefined) {
        localVarQueryParameter["volume_time_period"] = volumeTimePeriod;
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

      if (prepost !== undefined) {
        localVarQueryParameter["prepost"] = prepost;
      }

      if (eod !== undefined) {
        localVarQueryParameter["eod"] = eod;
      }

      if (rollingPeriod !== undefined) {
        localVarQueryParameter["rolling_period"] = rollingPeriod;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
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
     * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
     * @summary Time series
     * @param {IntervalEnum} interval Interval between two consecutive points in time series
     * @param {string} [symbol] Symbol ticker of the instrument. E.g. &#x60;AAPL&#x60;, &#x60;EUR/USD&#x60;, &#x60;ETH/BTC&#x60;, ...
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {string} [startDate] Can be used separately and together with &#x60;end_date&#x60;. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;  Default location: &lt;ul&gt; &lt;li&gt;Forex and Cryptocurrencies - &lt;code&gt;UTC&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Stocks - where exchange is located (e.g. for AAPL it will be &lt;code&gt;America/New_York&lt;/code&gt;)&lt;/li&gt; &lt;/ul&gt; Both parameters take into account if &lt;code&gt;timezone&lt;/code&gt; parameter is provided.&lt;br/&gt; If &lt;code&gt;timezone&lt;/code&gt; is given then, &lt;code&gt;start_date&lt;/code&gt; and &lt;code&gt;end_date&lt;/code&gt; will be used in the specified location  Examples: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;&amp;symbol&#x3D;AAPL&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 New York time up to current date&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;&amp;symbol&#x3D;EUR/USD&amp;timezone&#x3D;Asia/Singapore&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date&lt;/li&gt; &lt;li&gt;3. &lt;code&gt;&amp;symbol&#x3D;ETH/BTC&amp;timezone&#x3D;Europe/Zurich&amp;start_date&#x3D;2019-08-09T15:50:00&amp;end_date&#x3D;2019-08-09T15:55:00&amp;...&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00&lt;/li&gt; &lt;/ul&gt;
     * @param {string} [endDate] The ending date and time for data selection, see &#x60;start_date&#x60; description for details.
     * @param {string} [date] Specifies the exact date to get the data for. Could be the exact date, e.g. &#x60;2021-10-27&#x60;, or in human language &#x60;today&#x60; or &#x60;yesterday&#x60;
     * @param {OrderEnum} [order] Sorting order of the output
     * @param {boolean} [prepost] Returns quotes that include pre-market and post-market data. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided
     * @param {boolean} [previousClose] A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object
     * @param {AdjustEnum} [adjust] Adjusting mode for prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSeries: async (
      interval: IntervalEnum,
      symbol?: string,
      isin?: string,
      figi?: string,
      cusip?: string,
      outputsize?: number,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      timezone?: string,
      startDate?: string,
      endDate?: string,
      date?: string,
      order?: OrderEnum,
      prepost?: boolean,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      previousClose?: boolean,
      adjust?: AdjustEnum,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'interval' is not null or undefined
      assertParamExists("getTimeSeries", "interval", interval);
      const localVarPath = `/time_series`;
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

      if (interval !== undefined) {
        localVarQueryParameter["interval"] = interval;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
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

      if (timezone !== undefined) {
        localVarQueryParameter["timezone"] = timezone;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
      }

      if (date !== undefined) {
        localVarQueryParameter["date"] = date;
      }

      if (order !== undefined) {
        localVarQueryParameter["order"] = order;
      }

      if (prepost !== undefined) {
        localVarQueryParameter["prepost"] = prepost;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
      }

      if (previousClose !== undefined) {
        localVarQueryParameter["previous_close"] = previousClose;
      }

      if (adjust !== undefined) {
        localVarQueryParameter["adjust"] = adjust;
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
     * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
     * @summary Time series cross
     * @param {string} base Base currency symbol
     * @param {string} quote Quote currency symbol
     * @param {IntervalEnum} interval Interval between two consecutive points in time series
     * @param {string} [baseType] Base instrument type according to the &#x60;/instrument_type&#x60; endpoint
     * @param {string} [baseExchange] Base exchange
     * @param {string} [baseMicCode] Base MIC code
     * @param {string} [quoteType] Quote instrument type according to the &#x60;/instrument_type&#x60; endpoint
     * @param {string} [quoteExchange] Quote exchange
     * @param {string} [quoteMicCode] Quote MIC code
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
     * @param {FormatEnum} [format] Format of the response data
     * @param {string} [delimiter] Delimiter used in CSV file
     * @param {boolean} [prepost] Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {string} [startDate] Start date for the time series data
     * @param {string} [endDate] End date for the time series data
     * @param {boolean} [adjust] Specifies if there should be an adjustment
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive.
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSeriesCross: async (
      base: string,
      quote: string,
      interval: IntervalEnum,
      baseType?: string,
      baseExchange?: string,
      baseMicCode?: string,
      quoteType?: string,
      quoteExchange?: string,
      quoteMicCode?: string,
      outputsize?: number,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      startDate?: string,
      endDate?: string,
      adjust?: boolean,
      dp?: number,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'base' is not null or undefined
      assertParamExists("getTimeSeriesCross", "base", base);
      // verify required parameter 'quote' is not null or undefined
      assertParamExists("getTimeSeriesCross", "quote", quote);
      // verify required parameter 'interval' is not null or undefined
      assertParamExists("getTimeSeriesCross", "interval", interval);
      const localVarPath = `/time_series/cross`;
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

      if (base !== undefined) {
        localVarQueryParameter["base"] = base;
      }

      if (baseType !== undefined) {
        localVarQueryParameter["base_type"] = baseType;
      }

      if (baseExchange !== undefined) {
        localVarQueryParameter["base_exchange"] = baseExchange;
      }

      if (baseMicCode !== undefined) {
        localVarQueryParameter["base_mic_code"] = baseMicCode;
      }

      if (quote !== undefined) {
        localVarQueryParameter["quote"] = quote;
      }

      if (quoteType !== undefined) {
        localVarQueryParameter["quote_type"] = quoteType;
      }

      if (quoteExchange !== undefined) {
        localVarQueryParameter["quote_exchange"] = quoteExchange;
      }

      if (quoteMicCode !== undefined) {
        localVarQueryParameter["quote_mic_code"] = quoteMicCode;
      }

      if (interval !== undefined) {
        localVarQueryParameter["interval"] = interval;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      if (format !== undefined) {
        localVarQueryParameter["format"] = format;
      }

      if (delimiter !== undefined) {
        localVarQueryParameter["delimiter"] = delimiter;
      }

      if (prepost !== undefined) {
        localVarQueryParameter["prepost"] = prepost;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
      }

      if (adjust !== undefined) {
        localVarQueryParameter["adjust"] = adjust;
      }

      if (dp !== undefined) {
        localVarQueryParameter["dp"] = dp;
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
  };
};

/**
 * MarketDataApi - functional programming interface
 */
export const MarketDataApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    MarketDataApiAxiosParamCreator(configuration);
  return {
    /**
     * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
     * @summary End of day price
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [date] If not null, then return data from a specific date
     * @param {boolean} [prepost] Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
     * @param {number} [dp] Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEod(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      date?: string,
      prepost?: boolean,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEod200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEod(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        type,
        date,
        prepost,
        dp,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getEod"]?.[
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
     * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
     * @summary Market movers
     * @param {MarketEnum} market Maket type
     * @param {DirectionEnum} [direction] Specifies direction of the snapshot gainers or losers
     * @param {number} [outputsize] Specifies the size of the snapshot. Can be in a range from &#x60;1&#x60; to &#x60;50&#x60;
     * @param {string} [country] Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code
     * @param {string} [priceGreaterThan] Takes values with price grater than specified value
     * @param {string} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMarketMovers(
      market: MarketEnum,
      direction?: DirectionEnum,
      outputsize?: number,
      country?: string,
      priceGreaterThan?: string,
      dp?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<MarketMoversResponseBody>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMarketMovers(
        market,
        direction,
        outputsize,
        country,
        priceGreaterThan,
        dp,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getMarketMovers"]?.[
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
     * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
     * @summary Latest price
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] Value can be JSON or CSV
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {boolean} [prepost] Parameter is optional. Only for Pro or Venture, and above plans. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPrice(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetPrice200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPrice(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        type,
        format,
        delimiter,
        prepost,
        dp,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getPrice"]?.[
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
     * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
     * @summary Quote
     * @param {string} [symbol] Symbol ticker of the instrument
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {IntervalEnum} [interval] Interval of the quote
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [volumeTimePeriod] Number of periods for Average Volume
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {FormatEnum} [format] Value can be JSON or CSV Default JSON
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {boolean} [prepost] Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {boolean} [eod] If true, then return data for closed day
     * @param {number} [rollingPeriod] Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168].
     * @param {number} [dp] Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getQuote(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      interval?: IntervalEnum,
      exchange?: string,
      micCode?: string,
      country?: string,
      volumeTimePeriod?: number,
      type?: TypeEnum,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      eod?: boolean,
      rollingPeriod?: number,
      dp?: number,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetQuote200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getQuote(
        symbol,
        figi,
        isin,
        cusip,
        interval,
        exchange,
        micCode,
        country,
        volumeTimePeriod,
        type,
        format,
        delimiter,
        prepost,
        eod,
        rollingPeriod,
        dp,
        timezone,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getQuote"]?.[
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
     * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
     * @summary Time series
     * @param {IntervalEnum} interval Interval between two consecutive points in time series
     * @param {string} [symbol] Symbol ticker of the instrument. E.g. &#x60;AAPL&#x60;, &#x60;EUR/USD&#x60;, &#x60;ETH/BTC&#x60;, ...
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [figi] The FIGI of an instrument for which data is requested. This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {string} [startDate] Can be used separately and together with &#x60;end_date&#x60;. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;  Default location: &lt;ul&gt; &lt;li&gt;Forex and Cryptocurrencies - &lt;code&gt;UTC&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Stocks - where exchange is located (e.g. for AAPL it will be &lt;code&gt;America/New_York&lt;/code&gt;)&lt;/li&gt; &lt;/ul&gt; Both parameters take into account if &lt;code&gt;timezone&lt;/code&gt; parameter is provided.&lt;br/&gt; If &lt;code&gt;timezone&lt;/code&gt; is given then, &lt;code&gt;start_date&lt;/code&gt; and &lt;code&gt;end_date&lt;/code&gt; will be used in the specified location  Examples: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;&amp;symbol&#x3D;AAPL&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 New York time up to current date&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;&amp;symbol&#x3D;EUR/USD&amp;timezone&#x3D;Asia/Singapore&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date&lt;/li&gt; &lt;li&gt;3. &lt;code&gt;&amp;symbol&#x3D;ETH/BTC&amp;timezone&#x3D;Europe/Zurich&amp;start_date&#x3D;2019-08-09T15:50:00&amp;end_date&#x3D;2019-08-09T15:55:00&amp;...&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00&lt;/li&gt; &lt;/ul&gt;
     * @param {string} [endDate] The ending date and time for data selection, see &#x60;start_date&#x60; description for details.
     * @param {string} [date] Specifies the exact date to get the data for. Could be the exact date, e.g. &#x60;2021-10-27&#x60;, or in human language &#x60;today&#x60; or &#x60;yesterday&#x60;
     * @param {OrderEnum} [order] Sorting order of the output
     * @param {boolean} [prepost] Returns quotes that include pre-market and post-market data. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided
     * @param {boolean} [previousClose] A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object
     * @param {AdjustEnum} [adjust] Adjusting mode for prices
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimeSeries(
      interval: IntervalEnum,
      symbol?: string,
      isin?: string,
      figi?: string,
      cusip?: string,
      outputsize?: number,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      timezone?: string,
      startDate?: string,
      endDate?: string,
      date?: string,
      order?: OrderEnum,
      prepost?: boolean,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      previousClose?: boolean,
      adjust?: AdjustEnum,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetTimeSeries200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTimeSeries(
        interval,
        symbol,
        isin,
        figi,
        cusip,
        outputsize,
        exchange,
        micCode,
        country,
        type,
        timezone,
        startDate,
        endDate,
        date,
        order,
        prepost,
        format,
        delimiter,
        dp,
        previousClose,
        adjust,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getTimeSeries"]?.[
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
     * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
     * @summary Time series cross
     * @param {string} base Base currency symbol
     * @param {string} quote Quote currency symbol
     * @param {IntervalEnum} interval Interval between two consecutive points in time series
     * @param {string} [baseType] Base instrument type according to the &#x60;/instrument_type&#x60; endpoint
     * @param {string} [baseExchange] Base exchange
     * @param {string} [baseMicCode] Base MIC code
     * @param {string} [quoteType] Quote instrument type according to the &#x60;/instrument_type&#x60; endpoint
     * @param {string} [quoteExchange] Quote exchange
     * @param {string} [quoteMicCode] Quote MIC code
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
     * @param {FormatEnum} [format] Format of the response data
     * @param {string} [delimiter] Delimiter used in CSV file
     * @param {boolean} [prepost] Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
     * @param {string} [startDate] Start date for the time series data
     * @param {string} [endDate] End date for the time series data
     * @param {boolean} [adjust] Specifies if there should be an adjustment
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive.
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTimeSeriesCross(
      base: string,
      quote: string,
      interval: IntervalEnum,
      baseType?: string,
      baseExchange?: string,
      baseMicCode?: string,
      quoteType?: string,
      quoteExchange?: string,
      quoteMicCode?: string,
      outputsize?: number,
      format?: FormatEnum,
      delimiter?: string,
      prepost?: boolean,
      startDate?: string,
      endDate?: string,
      adjust?: boolean,
      dp?: number,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetTimeSeriesCross200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getTimeSeriesCross(
          base,
          quote,
          interval,
          baseType,
          baseExchange,
          baseMicCode,
          quoteType,
          quoteExchange,
          quoteMicCode,
          outputsize,
          format,
          delimiter,
          prepost,
          startDate,
          endDate,
          adjust,
          dp,
          timezone,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["MarketDataApi.getTimeSeriesCross"]?.[
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
 * MarketDataApi - factory interface
 */
export const MarketDataApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = MarketDataApiFp(configuration);
  return {
    /**
     * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
     * @summary End of day price
     * @param {MarketDataApiGetEodRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEod(
      requestParameters: MarketDataApiGetEodRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEod200Response> {
      return localVarFp
        .getEod(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.type,
          requestParameters.date,
          requestParameters.prepost,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
     * @summary Market movers
     * @param {MarketDataApiGetMarketMoversRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketMovers(
      requestParameters: MarketDataApiGetMarketMoversRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<MarketMoversResponseBody> {
      return localVarFp
        .getMarketMovers(
          requestParameters.market,
          requestParameters.direction,
          requestParameters.outputsize,
          requestParameters.country,
          requestParameters.priceGreaterThan,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
     * @summary Latest price
     * @param {MarketDataApiGetPriceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPrice(
      requestParameters: MarketDataApiGetPriceRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetPrice200Response> {
      return localVarFp
        .getPrice(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.type,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.prepost,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
     * @summary Quote
     * @param {MarketDataApiGetQuoteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getQuote(
      requestParameters: MarketDataApiGetQuoteRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetQuote200Response> {
      return localVarFp
        .getQuote(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.interval,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.volumeTimePeriod,
          requestParameters.type,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.prepost,
          requestParameters.eod,
          requestParameters.rollingPeriod,
          requestParameters.dp,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
     * @summary Time series
     * @param {MarketDataApiGetTimeSeriesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSeries(
      requestParameters: MarketDataApiGetTimeSeriesRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetTimeSeries200Response> {
      return localVarFp
        .getTimeSeries(
          requestParameters.interval,
          requestParameters.symbol,
          requestParameters.isin,
          requestParameters.figi,
          requestParameters.cusip,
          requestParameters.outputsize,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.type,
          requestParameters.timezone,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.date,
          requestParameters.order,
          requestParameters.prepost,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.dp,
          requestParameters.previousClose,
          requestParameters.adjust,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
     * @summary Time series cross
     * @param {MarketDataApiGetTimeSeriesCrossRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTimeSeriesCross(
      requestParameters: MarketDataApiGetTimeSeriesCrossRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetTimeSeriesCross200Response> {
      return localVarFp
        .getTimeSeriesCross(
          requestParameters.base,
          requestParameters.quote,
          requestParameters.interval,
          requestParameters.baseType,
          requestParameters.baseExchange,
          requestParameters.baseMicCode,
          requestParameters.quoteType,
          requestParameters.quoteExchange,
          requestParameters.quoteMicCode,
          requestParameters.outputsize,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.prepost,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.adjust,
          requestParameters.dp,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * MarketDataApi - interface
 */
export interface MarketDataApiInterface {
  /**
   * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
   * @summary End of day price
   * @param {MarketDataApiGetEodRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEod(
    requestParameters?: MarketDataApiGetEodRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEod200Response>;

  /**
   * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
   * @summary Market movers
   * @param {MarketDataApiGetMarketMoversRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMarketMovers(
    requestParameters: MarketDataApiGetMarketMoversRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<MarketMoversResponseBody>;

  /**
   * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
   * @summary Latest price
   * @param {MarketDataApiGetPriceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getPrice(
    requestParameters?: MarketDataApiGetPriceRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetPrice200Response>;

  /**
   * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
   * @summary Quote
   * @param {MarketDataApiGetQuoteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getQuote(
    requestParameters?: MarketDataApiGetQuoteRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetQuote200Response>;

  /**
   * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
   * @summary Time series
   * @param {MarketDataApiGetTimeSeriesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTimeSeries(
    requestParameters: MarketDataApiGetTimeSeriesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetTimeSeries200Response>;

  /**
   * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
   * @summary Time series cross
   * @param {MarketDataApiGetTimeSeriesCrossRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getTimeSeriesCross(
    requestParameters: MarketDataApiGetTimeSeriesCrossRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetTimeSeriesCross200Response>;
}

/**
 * Request parameters for getEod operation in MarketDataApi.
 */
export interface MarketDataApiGetEodRequest {
  /**
   * Symbol ticker of the instrument
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

  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * If not null, then return data from a specific date
   */
  readonly date?: string;

  /**
   * Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
   */
  readonly prepost?: boolean;

  /**
   * Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
   */
  readonly dp?: number;
}

/**
 * Request parameters for getMarketMovers operation in MarketDataApi.
 */
export interface MarketDataApiGetMarketMoversRequest {
  /**
   * Maket type
   */
  readonly market: MarketEnum;

  /**
   * Specifies direction of the snapshot gainers or losers
   */
  readonly direction?: DirectionEnum;

  /**
   * Specifies the size of the snapshot. Can be in a range from &#x60;1&#x60; to &#x60;50&#x60;
   */
  readonly outputsize?: number;

  /**
   * Country of the snapshot, applicable to non-currencies only. Takes country name or alpha code
   */
  readonly country?: string;

  /**
   * Takes values with price grater than specified value
   */
  readonly priceGreaterThan?: string;

  /**
   * Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
   */
  readonly dp?: string;
}

/**
 * Request parameters for getPrice operation in MarketDataApi.
 */
export interface MarketDataApiGetPriceRequest {
  /**
   * Symbol ticker of the instrument
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

  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * Value can be JSON or CSV
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the CSV file
   */
  readonly delimiter?: string;

  /**
   * Parameter is optional. Only for Pro or Venture, and above plans. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
   */
  readonly prepost?: boolean;

  /**
   * Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
   */
  readonly dp?: number;
}

/**
 * Request parameters for getQuote operation in MarketDataApi.
 */
export interface MarketDataApiGetQuoteRequest {
  /**
   * Symbol ticker of the instrument
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
   * Interval of the quote
   */
  readonly interval?: IntervalEnum;

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

  /**
   * Number of periods for Average Volume
   */
  readonly volumeTimePeriod?: number;

  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * Value can be JSON or CSV Default JSON
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the CSV file
   */
  readonly delimiter?: string;

  /**
   * Parameter is optional. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
   */
  readonly prepost?: boolean;

  /**
   * If true, then return data for closed day
   */
  readonly eod?: boolean;

  /**
   * Number of hours for calculate rolling change at period. By default set to 24, it can be in range [1, 168].
   */
  readonly rollingPeriod?: number;

  /**
   * Specifies the number of decimal places for floating values Should be in range [0,11] inclusive
   */
  readonly dp?: number;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * Request parameters for getTimeSeries operation in MarketDataApi.
 */
export interface MarketDataApiGetTimeSeriesRequest {
  /**
   * Interval between two consecutive points in time series
   */
  readonly interval: IntervalEnum;

  /**
   * Symbol ticker of the instrument. E.g. &#x60;AAPL&#x60;, &#x60;EUR/USD&#x60;, &#x60;ETH/BTC&#x60;, ...
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
   * Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
   */
  readonly outputsize?: number;

  /**
   * Exchange where instrument is traded
   */
  readonly exchange?: string;

  /**
   * Market Identifier Code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;

  /**
   * Can be used separately and together with &#x60;end_date&#x60;. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;  Default location: &lt;ul&gt; &lt;li&gt;Forex and Cryptocurrencies - &lt;code&gt;UTC&lt;/code&gt;&lt;/li&gt; &lt;li&gt;Stocks - where exchange is located (e.g. for AAPL it will be &lt;code&gt;America/New_York&lt;/code&gt;)&lt;/li&gt; &lt;/ul&gt; Both parameters take into account if &lt;code&gt;timezone&lt;/code&gt; parameter is provided.&lt;br/&gt; If &lt;code&gt;timezone&lt;/code&gt; is given then, &lt;code&gt;start_date&lt;/code&gt; and &lt;code&gt;end_date&lt;/code&gt; will be used in the specified location  Examples: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;&amp;symbol&#x3D;AAPL&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 New York time up to current date&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;&amp;symbol&#x3D;EUR/USD&amp;timezone&#x3D;Asia/Singapore&amp;start_date&#x3D;2019-08-09T15:50:00&amp;…&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Singapore time up to current date&lt;/li&gt; &lt;li&gt;3. &lt;code&gt;&amp;symbol&#x3D;ETH/BTC&amp;timezone&#x3D;Europe/Zurich&amp;start_date&#x3D;2019-08-09T15:50:00&amp;end_date&#x3D;2019-08-09T15:55:00&amp;...&lt;/code&gt;&lt;br/&gt; Returns all records starting from 2019-08-09T15:50:00 Zurich time up to 2019-08-09T15:55:00&lt;/li&gt; &lt;/ul&gt;
   */
  readonly startDate?: string;

  /**
   * The ending date and time for data selection, see &#x60;start_date&#x60; description for details.
   */
  readonly endDate?: string;

  /**
   * Specifies the exact date to get the data for. Could be the exact date, e.g. &#x60;2021-10-27&#x60;, or in human language &#x60;today&#x60; or &#x60;yesterday&#x60;
   */
  readonly date?: string;

  /**
   * Sorting order of the output
   */
  readonly order?: OrderEnum;

  /**
   * Returns quotes that include pre-market and post-market data. Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume
   */
  readonly prepost?: boolean;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive. By default, the number of decimal places is automatically determined based on the values provided
   */
  readonly dp?: number;

  /**
   * A boolean parameter to include the previous closing price in the time_series data. If true, adds previous bar close price value to the current object
   */
  readonly previousClose?: boolean;

  /**
   * Adjusting mode for prices
   */
  readonly adjust?: AdjustEnum;
}

/**
 * Request parameters for getTimeSeriesCross operation in MarketDataApi.
 */
export interface MarketDataApiGetTimeSeriesCrossRequest {
  /**
   * Base currency symbol
   */
  readonly base: string;

  /**
   * Quote currency symbol
   */
  readonly quote: string;

  /**
   * Interval between two consecutive points in time series
   */
  readonly interval: IntervalEnum;

  /**
   * Base instrument type according to the &#x60;/instrument_type&#x60; endpoint
   */
  readonly baseType?: string;

  /**
   * Base exchange
   */
  readonly baseExchange?: string;

  /**
   * Base MIC code
   */
  readonly baseMicCode?: string;

  /**
   * Quote instrument type according to the &#x60;/instrument_type&#x60; endpoint
   */
  readonly quoteType?: string;

  /**
   * Quote exchange
   */
  readonly quoteExchange?: string;

  /**
   * Quote MIC code
   */
  readonly quoteMicCode?: string;

  /**
   * Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;5000&#x60;. Default &#x60;30&#x60; when no date parameters are set, otherwise set to maximum
   */
  readonly outputsize?: number;

  /**
   * Format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * Delimiter used in CSV file
   */
  readonly delimiter?: string;

  /**
   * Only for the &#x60;Pro&#x60; plan (individual) and &#x60;Venture&#x60; plan (business) and above. Available at the &#x60;1min&#x60;, &#x60;5min&#x60;, &#x60;15min&#x60;, and &#x60;30min&#x60; intervals for US equities. Open, high, low, close values are supplied without volume.
   */
  readonly prepost?: boolean;

  /**
   * Start date for the time series data
   */
  readonly startDate?: string;

  /**
   * End date for the time series data
   */
  readonly endDate?: string;

  /**
   * Specifies if there should be an adjustment
   */
  readonly adjust?: boolean;

  /**
   * Specifies the number of decimal places for floating values. Should be in range [0, 11] inclusive.
   */
  readonly dp?: number;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * MarketDataApi - object-oriented interface
 */
export class MarketDataApi extends BaseAPI implements MarketDataApiInterface {
  /**
   * The End of Day (EOD) Prices endpoint provides the closing price and other relevant metadata for a financial instrument at the end of a trading day. This endpoint is useful for retrieving daily historical data for stocks, ETFs, or other securities, allowing users to track performance over time and compare daily market movements.
   * @summary End of day price
   * @param {MarketDataApiGetEodRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEod(
    requestParameters: MarketDataApiGetEodRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getEod(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.type,
        requestParameters.date,
        requestParameters.prepost,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The market movers endpoint provides a ranked list of the top-gaining and losing assets for the current trading day. It returns detailed data on the highest percentage price increases and decreases since the previous day\'s close. This endpoint supports international equities, forex, and cryptocurrencies, enabling users to quickly identify significant market movements across various asset classes.
   * @summary Market movers
   * @param {MarketDataApiGetMarketMoversRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMarketMovers(
    requestParameters: MarketDataApiGetMarketMoversRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getMarketMovers(
        requestParameters.market,
        requestParameters.direction,
        requestParameters.outputsize,
        requestParameters.country,
        requestParameters.priceGreaterThan,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The latest price endpoint provides the latest market price for a specified financial instrument. It returns a single data point representing the current (or the most recently available) trading price.
   * @summary Latest price
   * @param {MarketDataApiGetPriceRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getPrice(
    requestParameters: MarketDataApiGetPriceRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getPrice(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.type,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.prepost,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The quote endpoint provides real-time data for a selected financial instrument, returning essential information such as the latest price, open, high, low, close, volume, and price change. This endpoint is ideal for users needing up-to-date market data to track price movements and trading activity for specific stocks, ETFs, or other securities.
   * @summary Quote
   * @param {MarketDataApiGetQuoteRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getQuote(
    requestParameters: MarketDataApiGetQuoteRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getQuote(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.interval,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.volumeTimePeriod,
        requestParameters.type,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.prepost,
        requestParameters.eod,
        requestParameters.rollingPeriod,
        requestParameters.dp,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The time series endpoint provides detailed historical data for a specified financial instrument. It returns two main components: metadata, which includes essential information about the instrument, and a time series dataset. The time series consists of chronological entries with Open, High, Low, and Close prices, and for applicable instruments, it also includes trading volume. This endpoint is ideal for retrieving comprehensive historical price data for analysis or visualization purposes.
   * @summary Time series
   * @param {MarketDataApiGetTimeSeriesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getTimeSeries(
    requestParameters: MarketDataApiGetTimeSeriesRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getTimeSeries(
        requestParameters.interval,
        requestParameters.symbol,
        requestParameters.isin,
        requestParameters.figi,
        requestParameters.cusip,
        requestParameters.outputsize,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.type,
        requestParameters.timezone,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.date,
        requestParameters.order,
        requestParameters.prepost,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.dp,
        requestParameters.previousClose,
        requestParameters.adjust,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The Time Series Cross endpoint calculates and returns historical cross-rate data for exotic forex pairs, cryptocurrencies, or stocks (e.g., Apple Inc. price in Indian Rupees) on the fly. It provides metadata about the requested symbol and a time series array with Open, High, Low, and Close prices, sorted descending by time, enabling analysis of price history and market trends.
   * @summary Time series cross
   * @param {MarketDataApiGetTimeSeriesCrossRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getTimeSeriesCross(
    requestParameters: MarketDataApiGetTimeSeriesCrossRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return MarketDataApiFp(this.configuration)
      .getTimeSeriesCross(
        requestParameters.base,
        requestParameters.quote,
        requestParameters.interval,
        requestParameters.baseType,
        requestParameters.baseExchange,
        requestParameters.baseMicCode,
        requestParameters.quoteType,
        requestParameters.quoteExchange,
        requestParameters.quoteMicCode,
        requestParameters.outputsize,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.prepost,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.adjust,
        requestParameters.dp,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
