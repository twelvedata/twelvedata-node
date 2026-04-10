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
import type { FormatEnum } from "../models";
// @ts-ignore
import type { GetCurrencyConversion200Response } from "../models";
// @ts-ignore
import type { GetExchangeRate200Response } from "../models";
/**
 * CurrenciesApi - axios parameter creator
 */
export const CurrenciesApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
     * @summary Currency conversion
     * @param {string} symbol The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
     * @param {number} amount Amount of base currency to be converted into quote currency. Supports values in the range from &#x60;0&#x60; and above
     * @param {string} [date] If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
     * @param {FormatEnum} [format] Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
     * @param {string} [delimiter] Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
     * @param {number} [dp] The number of decimal places for the data
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrencyConversion: async (
      symbol: string,
      amount: number,
      date?: string,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'symbol' is not null or undefined
      assertParamExists("getCurrencyConversion", "symbol", symbol);
      // verify required parameter 'amount' is not null or undefined
      assertParamExists("getCurrencyConversion", "amount", amount);
      const localVarPath = `/currency_conversion`;
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

      if (amount !== undefined) {
        localVarQueryParameter["amount"] = amount;
      }

      if (date !== undefined) {
        localVarQueryParameter["date"] = date;
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
     * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
     * @summary Exchange rate
     * @param {string} symbol The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
     * @param {string} [date] If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
     * @param {FormatEnum} [format] Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
     * @param {string} [delimiter] Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
     * @param {number} [dp] The number of decimal places for the data
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchangeRate: async (
      symbol: string,
      date?: string,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      timezone?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'symbol' is not null or undefined
      assertParamExists("getExchangeRate", "symbol", symbol);
      const localVarPath = `/exchange_rate`;
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

      if (date !== undefined) {
        localVarQueryParameter["date"] = date;
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
 * CurrenciesApi - functional programming interface
 */
export const CurrenciesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    CurrenciesApiAxiosParamCreator(configuration);
  return {
    /**
     * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
     * @summary Currency conversion
     * @param {string} symbol The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
     * @param {number} amount Amount of base currency to be converted into quote currency. Supports values in the range from &#x60;0&#x60; and above
     * @param {string} [date] If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
     * @param {FormatEnum} [format] Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
     * @param {string} [delimiter] Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
     * @param {number} [dp] The number of decimal places for the data
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCurrencyConversion(
      symbol: string,
      amount: number,
      date?: string,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCurrencyConversion200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCurrencyConversion(
          symbol,
          amount,
          date,
          format,
          delimiter,
          dp,
          timezone,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["CurrenciesApi.getCurrencyConversion"]?.[
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
     * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
     * @summary Exchange rate
     * @param {string} symbol The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
     * @param {string} [date] If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
     * @param {FormatEnum} [format] Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
     * @param {string} [delimiter] Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
     * @param {number} [dp] The number of decimal places for the data
     * @param {string} [timezone] Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getExchangeRate(
      symbol: string,
      date?: string,
      format?: FormatEnum,
      delimiter?: string,
      dp?: number,
      timezone?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetExchangeRate200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getExchangeRate(
        symbol,
        date,
        format,
        delimiter,
        dp,
        timezone,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["CurrenciesApi.getExchangeRate"]?.[
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
 * CurrenciesApi - factory interface
 */
export const CurrenciesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = CurrenciesApiFp(configuration);
  return {
    /**
     * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
     * @summary Currency conversion
     * @param {CurrenciesApiGetCurrencyConversionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrencyConversion(
      requestParameters: CurrenciesApiGetCurrencyConversionRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCurrencyConversion200Response> {
      return localVarFp
        .getCurrencyConversion(
          requestParameters.symbol,
          requestParameters.amount,
          requestParameters.date,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.dp,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
     * @summary Exchange rate
     * @param {CurrenciesApiGetExchangeRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getExchangeRate(
      requestParameters: CurrenciesApiGetExchangeRateRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetExchangeRate200Response> {
      return localVarFp
        .getExchangeRate(
          requestParameters.symbol,
          requestParameters.date,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.dp,
          requestParameters.timezone,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * CurrenciesApi - interface
 */
export interface CurrenciesApiInterface {
  /**
   * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
   * @summary Currency conversion
   * @param {CurrenciesApiGetCurrencyConversionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCurrencyConversion(
    requestParameters: CurrenciesApiGetCurrencyConversionRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCurrencyConversion200Response>;

  /**
   * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
   * @summary Exchange rate
   * @param {CurrenciesApiGetExchangeRateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getExchangeRate(
    requestParameters: CurrenciesApiGetExchangeRateRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetExchangeRate200Response>;
}

/**
 * Request parameters for getCurrencyConversion operation in CurrenciesApi.
 */
export interface CurrenciesApiGetCurrencyConversionRequest {
  /**
   * The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
   */
  readonly symbol: string;

  /**
   * Amount of base currency to be converted into quote currency. Supports values in the range from &#x60;0&#x60; and above
   */
  readonly amount: number;

  /**
   * If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
   */
  readonly date?: string;

  /**
   * Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
   */
  readonly delimiter?: string;

  /**
   * The number of decimal places for the data
   */
  readonly dp?: number;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * Request parameters for getExchangeRate operation in CurrenciesApi.
 */
export interface CurrenciesApiGetExchangeRateRequest {
  /**
   * The currency pair you want to request can be either forex or cryptocurrency. Slash(&#x60;/&#x60;) delimiter is used. E.g. &#x60;EUR/USD&#x60; or &#x60;BTC/ETH&#x60; will be correct
   */
  readonly symbol: string;

  /**
   * If not null, will use exchange rate from a specific date or time. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;. Is set in the local exchange time zone, use timezone parameter to specify a specific time zone
   */
  readonly date?: string;

  /**
   * Value can be &#x60;JSON&#x60; or &#x60;CSV&#x60;. Default &#x60;JSON&#x60;
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the &#x60;CSV&#x60; file. Default semicolon &#x60;;&#x60;
   */
  readonly delimiter?: string;

  /**
   * The number of decimal places for the data
   */
  readonly dp?: number;

  /**
   * Timezone at which output datetime will be displayed. Supports: &lt;ul&gt; &lt;li&gt;1. &lt;code&gt;Exchange&lt;/code&gt; for local exchange time&lt;/li&gt; &lt;li&gt;2. &lt;code&gt;UTC&lt;/code&gt; for datetime at universal UTC standard&lt;/li&gt; &lt;li&gt;3. Timezone name according to the IANA Time Zone Database. E.g. &lt;code&gt;America/New_York&lt;/code&gt;, &lt;code&gt;Asia/Singapore&lt;/code&gt;. Full list of timezones can be found &lt;a href&#x3D;\&quot;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones\&quot; target&#x3D;\&quot;blank\&quot;&gt;here&lt;/a&gt;.&lt;/li&gt; &lt;/ul&gt; &lt;i&gt;Take note that the IANA Timezone name is case-sensitive&lt;/i&gt;
   */
  readonly timezone?: string;
}

/**
 * CurrenciesApi - object-oriented interface
 */
export class CurrenciesApi extends BaseAPI implements CurrenciesApiInterface {
  /**
   * The currency conversion endpoint provides real-time exchange rates and calculates the converted amount for specified currency pairs, including both forex and cryptocurrencies. This endpoint is useful for obtaining up-to-date conversion values between two currencies, facilitating tasks such as financial reporting, e-commerce transactions, and travel budgeting.
   * @summary Currency conversion
   * @param {CurrenciesApiGetCurrencyConversionRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCurrencyConversion(
    requestParameters: CurrenciesApiGetCurrencyConversionRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CurrenciesApiFp(this.configuration)
      .getCurrencyConversion(
        requestParameters.symbol,
        requestParameters.amount,
        requestParameters.date,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.dp,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The exchange rate endpoint provides real-time exchange rates for specified currency pairs, including both forex and cryptocurrency. It returns the current exchange rate value between two currencies, allowing users to quickly access up-to-date conversion rates for financial transactions or market analysis.
   * @summary Exchange rate
   * @param {CurrenciesApiGetExchangeRateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getExchangeRate(
    requestParameters: CurrenciesApiGetExchangeRateRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return CurrenciesApiFp(this.configuration)
      .getExchangeRate(
        requestParameters.symbol,
        requestParameters.date,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.dp,
        requestParameters.timezone,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
