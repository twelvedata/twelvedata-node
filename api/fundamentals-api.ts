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
import type { DividendsCalendarItem } from "../models";
// @ts-ignore
import type { EndpointEnum } from "../models";
// @ts-ignore
import type { FormatEnum } from "../models";
// @ts-ignore
import type { GetBalanceSheet200Response } from "../models";
// @ts-ignore
import type { GetBalanceSheetConsolidated200Response } from "../models";
// @ts-ignore
import type { GetCashFlow200Response } from "../models";
// @ts-ignore
import type { GetCashFlowConsolidated200Response } from "../models";
// @ts-ignore
import type { GetDividends200Response } from "../models";
// @ts-ignore
import type { GetEarnings200Response } from "../models";
// @ts-ignore
import type { GetEarningsCalendar200Response } from "../models";
// @ts-ignore
import type { GetIncomeStatement200Response } from "../models";
// @ts-ignore
import type { GetIncomeStatementConsolidated200Response } from "../models";
// @ts-ignore
import type { GetIpoCalendar200ResponseValueInner } from "../models";
// @ts-ignore
import type { GetKeyExecutives200Response } from "../models";
// @ts-ignore
import type { GetLastChanges200Response } from "../models";
// @ts-ignore
import type { GetLogo200Response } from "../models";
// @ts-ignore
import type { GetMarketCap200Response } from "../models";
// @ts-ignore
import type { GetProfile200Response } from "../models";
// @ts-ignore
import type { GetSplits200Response } from "../models";
// @ts-ignore
import type { GetStatistics200Response } from "../models";
// @ts-ignore
import type { PeriodEarningsEnum } from "../models";
// @ts-ignore
import type { PeriodEnum } from "../models";
// @ts-ignore
import type { PressReleasesListParameters200Response } from "../models";
// @ts-ignore
import type { RangeEnum } from "../models";
// @ts-ignore
import type { RangeSplitsEnum } from "../models";
// @ts-ignore
import type { SplitsCalendarResponseItem } from "../models";
// @ts-ignore
import type { TypeEnum } from "../models";
/**
 * FundamentalsApi - axios parameter creator
 */
export const FundamentalsApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
     * @summary Balance sheet
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the balane sheet data
     * @param {string} [startDate] Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalanceSheet: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/balance_sheet`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
     * @summary Balance sheet consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the balance sheet data.
     * @param {string} [startDate] Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalanceSheetConsolidated: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/balance_sheet/consolidated`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
     * @summary Cash flow
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the cash flow statements
     * @param {string} [startDate] Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashFlow: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/cash_flow`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
     * @summary Cash flow consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the cash flow statements
     * @param {string} [startDate] Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashFlowConsolidated: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/cash_flow/consolidated`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
     * @summary Dividends
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {RangeEnum} [range] Specifies the time range for which to retrieve dividend data. Accepts values such as &#x60;last&#x60; (most recent dividend), &#x60;next&#x60; (upcoming dividend), &#x60;1m&#x60; - &#x60;5y&#x60; for respective periods, or &#x60;full&#x60; for all available data. If provided together with &#x60;start_date&#x60; and/or &#x60;end_date&#x60;, this parameter takes precedence.
     * @param {string} [startDate] Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
     * @param {string} [endDate] End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
     * @param {boolean} [adjust] Specifies if there should be an adjustment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDividends: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      range?: RangeEnum,
      startDate?: string,
      endDate?: string,
      adjust?: boolean,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/dividends`;
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

      if (range !== undefined) {
        localVarQueryParameter["range"] = range;
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
     * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
     * @summary Dividends calendar
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
     * @param {number} [page] Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDividendsCalendar: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      page?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/dividends_calendar`;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
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
     * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
     * @summary Earnings
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {PeriodEarningsEnum} [period] Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;1000&#x60;. Default &#x60;10&#x60; when no date parameters are set, otherwise set to maximum
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {string} [startDate] The date from which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
     * @param {string} [endDate] The date to which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
     * @param {number} [dp] The number of decimal places in the response data. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarnings: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      period?: PeriodEarningsEnum,
      outputsize?: number,
      format?: FormatEnum,
      delimiter?: string,
      startDate?: string,
      endDate?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/earnings`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
     * @summary Earnings calendar
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] Value can be JSON or CSV
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {string} [startDate] Can be used separately and together with end_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
     * @param {string} [endDate] Can be used separately and together with start_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarningsCalendar: async (
      exchange?: string,
      micCode?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      startDate?: string,
      endDate?: string,
      dp?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/earnings_calendar`;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
     * @summary Income statement
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the income statement data
     * @param {string} [startDate] Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIncomeStatement: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/income_statement`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
     * @summary Income statement consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the income statement data
     * @param {string} [startDate] Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIncomeStatementConsolidated: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/income_statement/consolidated`;
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

      if (period !== undefined) {
        localVarQueryParameter["period"] = period;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
     * @summary IPO calendar
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] The earliest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The latest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIpoCalendar: async (
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/ipo_calendar`;
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

      if (micCode !== undefined) {
        localVarQueryParameter["mic_code"] = micCode;
      }

      if (country !== undefined) {
        localVarQueryParameter["country"] = country;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
     * @summary Key executives
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
    getKeyExecutives: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/key_executives`;
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
     * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
     * @summary Last changes
     * @param {EndpointEnum} endpoint Endpoint name
     * @param {string} [startDate] The starting date and time for data selection, in &#x60;2006-01-02T15:04:05&#x60; format
     * @param {string} [symbol] Filter by symbol
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLastChanges: async (
      endpoint: EndpointEnum,
      startDate?: string,
      symbol?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'endpoint' is not null or undefined
      assertParamExists("getLastChanges", "endpoint", endpoint);
      const localVarPath = `/last_change/{endpoint}`.replace(
        `{${"endpoint"}}`,
        encodeURIComponent(String(endpoint)),
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

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
     * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
     * @summary Logo
     * @param {string} symbol The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;BTC/USD&#x60;, &#x60;EUR/USD&#x60;.
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;NASDAQ&#x60;, &#x60;NSE&#x60;
     * @param {string} [micCode] The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogo: async (
      symbol: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'symbol' is not null or undefined
      assertParamExists("getLogo", "symbol", symbol);
      const localVarPath = `/logo`;
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
     * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
     * @summary Market capitalization
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for market capitalization data retrieval. Data will be returned up to and including this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketCap: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      page?: number,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/market_cap`;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
     * @summary Profile
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
    getProfile: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/profile`;
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
     * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
     * @summary Splits
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {RangeSplitsEnum} [range] Range of data to be returned
     * @param {string} [startDate] The starting date for data selection. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The ending date for data selection. Format &#x60;2006-01-02&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSplits: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      range?: RangeSplitsEnum,
      startDate?: string,
      endDate?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/splits`;
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

      if (range !== undefined) {
        localVarQueryParameter["range"] = range;
      }

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
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
     * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
     * @summary Splits calendar
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] The starting date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The ending date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
     * @param {string} [page] Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSplitsCalendar: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      page?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/splits_calendar`;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
      }

      if (outputsize !== undefined) {
        localVarQueryParameter["outputsize"] = outputsize;
      }

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
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
     * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
     * @summary Statistics
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
    getStatistics: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/statistics`;
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
     * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
     * @summary Press releases
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [startDate] Begin date for filtering items. Returns press releases with release date on or after this date. Format &#x60;2025-12-24T02:07:00&#x60;
     * @param {string} [endDate] End date for filtering items. Returns press releases with release date on or before this date. Format &#x60;2025-12-24T02:07:00&#x60;
     * @param {string} [timezone] Time zone for date filtering. Default is the identifier time zone.
     * @param {string} [language] Comma-separated list of languages to filter press releases by language.
     * @param {number} [outputsize] Number of latest press releases returned. Only used if no data range is specified. Maximum value is &#x60;10&#x60;.  type: number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pressReleasesListParameters: async (
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      startDate?: string,
      endDate?: string,
      timezone?: string,
      language?: string,
      outputsize?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/press_releases`;
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

      if (startDate !== undefined) {
        localVarQueryParameter["start_date"] = startDate;
      }

      if (endDate !== undefined) {
        localVarQueryParameter["end_date"] = endDate;
      }

      if (timezone !== undefined) {
        localVarQueryParameter["timezone"] = timezone;
      }

      if (language !== undefined) {
        localVarQueryParameter["language"] = language;
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
  };
};

/**
 * FundamentalsApi - functional programming interface
 */
export const FundamentalsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    FundamentalsApiAxiosParamCreator(configuration);
  return {
    /**
     * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
     * @summary Balance sheet
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the balane sheet data
     * @param {string} [startDate] Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBalanceSheet(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetBalanceSheet200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBalanceSheet(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        period,
        startDate,
        endDate,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getBalanceSheet"]?.[
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
     * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
     * @summary Balance sheet consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the balance sheet data.
     * @param {string} [startDate] Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBalanceSheetConsolidated(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetBalanceSheetConsolidated200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBalanceSheetConsolidated(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          period,
          startDate,
          endDate,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getBalanceSheetConsolidated"]?.[
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
     * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
     * @summary Cash flow
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the cash flow statements
     * @param {string} [startDate] Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCashFlow(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCashFlow200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getCashFlow(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        period,
        startDate,
        endDate,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getCashFlow"]?.[
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
     * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
     * @summary Cash flow consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the cash flow statements
     * @param {string} [startDate] Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCashFlowConsolidated(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetCashFlowConsolidated200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCashFlowConsolidated(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          period,
          startDate,
          endDate,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getCashFlowConsolidated"]?.[
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
     * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
     * @summary Dividends
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {RangeEnum} [range] Specifies the time range for which to retrieve dividend data. Accepts values such as &#x60;last&#x60; (most recent dividend), &#x60;next&#x60; (upcoming dividend), &#x60;1m&#x60; - &#x60;5y&#x60; for respective periods, or &#x60;full&#x60; for all available data. If provided together with &#x60;start_date&#x60; and/or &#x60;end_date&#x60;, this parameter takes precedence.
     * @param {string} [startDate] Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
     * @param {string} [endDate] End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
     * @param {boolean} [adjust] Specifies if there should be an adjustment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDividends(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      range?: RangeEnum,
      startDate?: string,
      endDate?: string,
      adjust?: boolean,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetDividends200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDividends(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        range,
        startDate,
        endDate,
        adjust,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getDividends"]?.[
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
     * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
     * @summary Dividends calendar
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
     * @param {number} [page] Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDividendsCalendar(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      page?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<DividendsCalendarItem>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getDividendsCalendar(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          startDate,
          endDate,
          outputsize,
          page,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getDividendsCalendar"]?.[
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
     * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
     * @summary Earnings
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {TypeEnum} [type] The asset class to which the instrument belongs
     * @param {PeriodEarningsEnum} [period] Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;1000&#x60;. Default &#x60;10&#x60; when no date parameters are set, otherwise set to maximum
     * @param {FormatEnum} [format] The format of the response data
     * @param {string} [delimiter] The separator used in the CSV response data
     * @param {string} [startDate] The date from which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
     * @param {string} [endDate] The date to which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
     * @param {number} [dp] The number of decimal places in the response data. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEarnings(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      type?: TypeEnum,
      period?: PeriodEarningsEnum,
      outputsize?: number,
      format?: FormatEnum,
      delimiter?: string,
      startDate?: string,
      endDate?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEarnings200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getEarnings(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        type,
        period,
        outputsize,
        format,
        delimiter,
        startDate,
        endDate,
        dp,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getEarnings"]?.[
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
     * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
     * @summary Earnings calendar
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {FormatEnum} [format] Value can be JSON or CSV
     * @param {string} [delimiter] Specify the delimiter used when downloading the CSV file
     * @param {string} [startDate] Can be used separately and together with end_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
     * @param {string} [endDate] Can be used separately and together with start_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
     * @param {number} [dp] Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getEarningsCalendar(
      exchange?: string,
      micCode?: string,
      country?: string,
      format?: FormatEnum,
      delimiter?: string,
      startDate?: string,
      endDate?: string,
      dp?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetEarningsCalendar200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getEarningsCalendar(
          exchange,
          micCode,
          country,
          format,
          delimiter,
          startDate,
          endDate,
          dp,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getEarningsCalendar"]?.[
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
     * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
     * @summary Income statement
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the income statement data
     * @param {string} [startDate] Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIncomeStatement(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetIncomeStatement200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getIncomeStatement(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          period,
          startDate,
          endDate,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getIncomeStatement"]?.[
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
     * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
     * @summary Income statement consolidated
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {PeriodEnum} [period] The reporting period for the income statement data
     * @param {string} [startDate] Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIncomeStatementConsolidated(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      period?: PeriodEnum,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetIncomeStatementConsolidated200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getIncomeStatementConsolidated(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          period,
          startDate,
          endDate,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getIncomeStatementConsolidated"]?.[
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
     * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
     * @summary IPO calendar
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] The earliest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The latest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getIpoCalendar(
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<{
        [key: string]: Array<GetIpoCalendar200ResponseValueInner>;
      }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getIpoCalendar(
        exchange,
        micCode,
        country,
        startDate,
        endDate,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getIpoCalendar"]?.[
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
     * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
     * @summary Key executives
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
    async getKeyExecutives(
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
      ) => AxiosPromise<GetKeyExecutives200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getKeyExecutives(
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
        operationServerMap["FundamentalsApi.getKeyExecutives"]?.[
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
     * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
     * @summary Last changes
     * @param {EndpointEnum} endpoint Endpoint name
     * @param {string} [startDate] The starting date and time for data selection, in &#x60;2006-01-02T15:04:05&#x60; format
     * @param {string} [symbol] Filter by symbol
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLastChanges(
      endpoint: EndpointEnum,
      startDate?: string,
      symbol?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetLastChanges200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLastChanges(
        endpoint,
        startDate,
        symbol,
        exchange,
        micCode,
        country,
        page,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getLastChanges"]?.[
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
     * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
     * @summary Logo
     * @param {string} symbol The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;BTC/USD&#x60;, &#x60;EUR/USD&#x60;.
     * @param {string} [exchange] The exchange name where the instrument is traded, e.g., &#x60;NASDAQ&#x60;, &#x60;NSE&#x60;
     * @param {string} [micCode] The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
     * @param {string} [country] The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getLogo(
      symbol: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetLogo200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getLogo(
        symbol,
        exchange,
        micCode,
        country,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getLogo"]?.[
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
     * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
     * @summary Market capitalization
     * @param {string} [symbol] Filter by symbol
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Filter by exchange name
     * @param {string} [micCode] Filter by market identifier code (MIC) under ISO 10383 standard
     * @param {string} [country] Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] End date for market capitalization data retrieval. Data will be returned up to and including this date. Format &#x60;2006-01-02&#x60;
     * @param {number} [page] Page number
     * @param {number} [outputsize] Number of records in response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getMarketCap(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      page?: number,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetMarketCap200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getMarketCap(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        startDate,
        endDate,
        page,
        outputsize,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getMarketCap"]?.[
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
     * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
     * @summary Profile
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
    async getProfile(
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
      ) => AxiosPromise<GetProfile200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProfile(
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
        operationServerMap["FundamentalsApi.getProfile"]?.[
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
     * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
     * @summary Splits
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {RangeSplitsEnum} [range] Range of data to be returned
     * @param {string} [startDate] The starting date for data selection. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The ending date for data selection. Format &#x60;2006-01-02&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSplits(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      range?: RangeSplitsEnum,
      startDate?: string,
      endDate?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<GetSplits200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSplits(
        symbol,
        figi,
        isin,
        cusip,
        exchange,
        micCode,
        country,
        range,
        startDate,
        endDate,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getSplits"]?.[
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
     * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
     * @summary Splits calendar
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [country] Country where instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
     * @param {string} [startDate] The starting date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
     * @param {string} [endDate] The ending date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
     * @param {number} [outputsize] Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
     * @param {string} [page] Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSplitsCalendar(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      country?: string,
      startDate?: string,
      endDate?: string,
      outputsize?: number,
      page?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<Array<SplitsCalendarResponseItem>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSplitsCalendar(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          country,
          startDate,
          endDate,
          outputsize,
          page,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.getSplitsCalendar"]?.[
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
     * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
     * @summary Statistics
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
    async getStatistics(
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
      ) => AxiosPromise<GetStatistics200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getStatistics(
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
        operationServerMap["FundamentalsApi.getStatistics"]?.[
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
     * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
     * @summary Press releases
     * @param {string} [symbol] Symbol ticker of instrument. For preffered stocks use dot(.) delimiter. E.g. &#x60;BRK.A&#x60; or &#x60;BRK.B&#x60; will be correct
     * @param {string} [figi] Filter by financial instrument global identifier (FIGI). This parameter is available on the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing\&quot;&gt;Ultra&lt;/a&gt; plan (individual) and the &lt;a href&#x3D;\&quot;https://twelvedata.com/pricing-business\&quot;&gt;Enterprise&lt;/a&gt; plan (business) and above.
     * @param {string} [isin] Filter by international securities identification number (ISIN). ISIN access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [cusip] The CUSIP of an instrument for which data is requested. CUSIP access is activating in the &lt;a href&#x3D;\&quot;https://twelvedata.com/account/add-ons\&quot;&gt;Data add-ons&lt;/a&gt; section
     * @param {string} [exchange] Exchange where instrument is traded
     * @param {string} [micCode] Market Identifier Code (MIC) under ISO 10383 standard
     * @param {string} [startDate] Begin date for filtering items. Returns press releases with release date on or after this date. Format &#x60;2025-12-24T02:07:00&#x60;
     * @param {string} [endDate] End date for filtering items. Returns press releases with release date on or before this date. Format &#x60;2025-12-24T02:07:00&#x60;
     * @param {string} [timezone] Time zone for date filtering. Default is the identifier time zone.
     * @param {string} [language] Comma-separated list of languages to filter press releases by language.
     * @param {number} [outputsize] Number of latest press releases returned. Only used if no data range is specified. Maximum value is &#x60;10&#x60;.  type: number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async pressReleasesListParameters(
      symbol?: string,
      figi?: string,
      isin?: string,
      cusip?: string,
      exchange?: string,
      micCode?: string,
      startDate?: string,
      endDate?: string,
      timezone?: string,
      language?: string,
      outputsize?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<PressReleasesListParameters200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.pressReleasesListParameters(
          symbol,
          figi,
          isin,
          cusip,
          exchange,
          micCode,
          startDate,
          endDate,
          timezone,
          language,
          outputsize,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["FundamentalsApi.pressReleasesListParameters"]?.[
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
 * FundamentalsApi - factory interface
 */
export const FundamentalsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = FundamentalsApiFp(configuration);
  return {
    /**
     * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
     * @summary Balance sheet
     * @param {FundamentalsApiGetBalanceSheetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalanceSheet(
      requestParameters: FundamentalsApiGetBalanceSheetRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetBalanceSheet200Response> {
      return localVarFp
        .getBalanceSheet(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
     * @summary Balance sheet consolidated
     * @param {FundamentalsApiGetBalanceSheetConsolidatedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBalanceSheetConsolidated(
      requestParameters: FundamentalsApiGetBalanceSheetConsolidatedRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetBalanceSheetConsolidated200Response> {
      return localVarFp
        .getBalanceSheetConsolidated(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
     * @summary Cash flow
     * @param {FundamentalsApiGetCashFlowRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashFlow(
      requestParameters: FundamentalsApiGetCashFlowRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCashFlow200Response> {
      return localVarFp
        .getCashFlow(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
     * @summary Cash flow consolidated
     * @param {FundamentalsApiGetCashFlowConsolidatedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCashFlowConsolidated(
      requestParameters: FundamentalsApiGetCashFlowConsolidatedRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetCashFlowConsolidated200Response> {
      return localVarFp
        .getCashFlowConsolidated(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
     * @summary Dividends
     * @param {FundamentalsApiGetDividendsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDividends(
      requestParameters: FundamentalsApiGetDividendsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetDividends200Response> {
      return localVarFp
        .getDividends(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.range,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.adjust,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
     * @summary Dividends calendar
     * @param {FundamentalsApiGetDividendsCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDividendsCalendar(
      requestParameters: FundamentalsApiGetDividendsCalendarRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<DividendsCalendarItem>> {
      return localVarFp
        .getDividendsCalendar(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          requestParameters.page,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
     * @summary Earnings
     * @param {FundamentalsApiGetEarningsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarnings(
      requestParameters: FundamentalsApiGetEarningsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEarnings200Response> {
      return localVarFp
        .getEarnings(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.type,
          requestParameters.period,
          requestParameters.outputsize,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
     * @summary Earnings calendar
     * @param {FundamentalsApiGetEarningsCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getEarningsCalendar(
      requestParameters: FundamentalsApiGetEarningsCalendarRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetEarningsCalendar200Response> {
      return localVarFp
        .getEarningsCalendar(
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.format,
          requestParameters.delimiter,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.dp,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
     * @summary Income statement
     * @param {FundamentalsApiGetIncomeStatementRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIncomeStatement(
      requestParameters: FundamentalsApiGetIncomeStatementRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetIncomeStatement200Response> {
      return localVarFp
        .getIncomeStatement(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
     * @summary Income statement consolidated
     * @param {FundamentalsApiGetIncomeStatementConsolidatedRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIncomeStatementConsolidated(
      requestParameters: FundamentalsApiGetIncomeStatementConsolidatedRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetIncomeStatementConsolidated200Response> {
      return localVarFp
        .getIncomeStatementConsolidated(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.period,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
     * @summary IPO calendar
     * @param {FundamentalsApiGetIpoCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getIpoCalendar(
      requestParameters: FundamentalsApiGetIpoCalendarRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<{
      [key: string]: Array<GetIpoCalendar200ResponseValueInner>;
    }> {
      return localVarFp
        .getIpoCalendar(
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.startDate,
          requestParameters.endDate,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
     * @summary Key executives
     * @param {FundamentalsApiGetKeyExecutivesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getKeyExecutives(
      requestParameters: FundamentalsApiGetKeyExecutivesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetKeyExecutives200Response> {
      return localVarFp
        .getKeyExecutives(
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
     * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
     * @summary Last changes
     * @param {FundamentalsApiGetLastChangesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLastChanges(
      requestParameters: FundamentalsApiGetLastChangesRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetLastChanges200Response> {
      return localVarFp
        .getLastChanges(
          requestParameters.endpoint,
          requestParameters.startDate,
          requestParameters.symbol,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
     * @summary Logo
     * @param {FundamentalsApiGetLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getLogo(
      requestParameters: FundamentalsApiGetLogoRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetLogo200Response> {
      return localVarFp
        .getLogo(
          requestParameters.symbol,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
     * @summary Market capitalization
     * @param {FundamentalsApiGetMarketCapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMarketCap(
      requestParameters: FundamentalsApiGetMarketCapRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetMarketCap200Response> {
      return localVarFp
        .getMarketCap(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.page,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
     * @summary Profile
     * @param {FundamentalsApiGetProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProfile(
      requestParameters: FundamentalsApiGetProfileRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetProfile200Response> {
      return localVarFp
        .getProfile(
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
     * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
     * @summary Splits
     * @param {FundamentalsApiGetSplitsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSplits(
      requestParameters: FundamentalsApiGetSplitsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetSplits200Response> {
      return localVarFp
        .getSplits(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.range,
          requestParameters.startDate,
          requestParameters.endDate,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
     * @summary Splits calendar
     * @param {FundamentalsApiGetSplitsCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSplitsCalendar(
      requestParameters: FundamentalsApiGetSplitsCalendarRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Array<SplitsCalendarResponseItem>> {
      return localVarFp
        .getSplitsCalendar(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.country,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.outputsize,
          requestParameters.page,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
     * @summary Statistics
     * @param {FundamentalsApiGetStatisticsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStatistics(
      requestParameters: FundamentalsApiGetStatisticsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<GetStatistics200Response> {
      return localVarFp
        .getStatistics(
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
     * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
     * @summary Press releases
     * @param {FundamentalsApiPressReleasesListParametersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pressReleasesListParameters(
      requestParameters: FundamentalsApiPressReleasesListParametersRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<PressReleasesListParameters200Response> {
      return localVarFp
        .pressReleasesListParameters(
          requestParameters.symbol,
          requestParameters.figi,
          requestParameters.isin,
          requestParameters.cusip,
          requestParameters.exchange,
          requestParameters.micCode,
          requestParameters.startDate,
          requestParameters.endDate,
          requestParameters.timezone,
          requestParameters.language,
          requestParameters.outputsize,
          options,
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * FundamentalsApi - interface
 */
export interface FundamentalsApiInterface {
  /**
   * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
   * @summary Balance sheet
   * @param {FundamentalsApiGetBalanceSheetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getBalanceSheet(
    requestParameters?: FundamentalsApiGetBalanceSheetRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetBalanceSheet200Response>;

  /**
   * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
   * @summary Balance sheet consolidated
   * @param {FundamentalsApiGetBalanceSheetConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getBalanceSheetConsolidated(
    requestParameters?: FundamentalsApiGetBalanceSheetConsolidatedRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetBalanceSheetConsolidated200Response>;

  /**
   * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
   * @summary Cash flow
   * @param {FundamentalsApiGetCashFlowRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCashFlow(
    requestParameters?: FundamentalsApiGetCashFlowRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCashFlow200Response>;

  /**
   * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
   * @summary Cash flow consolidated
   * @param {FundamentalsApiGetCashFlowConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getCashFlowConsolidated(
    requestParameters?: FundamentalsApiGetCashFlowConsolidatedRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetCashFlowConsolidated200Response>;

  /**
   * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
   * @summary Dividends
   * @param {FundamentalsApiGetDividendsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDividends(
    requestParameters?: FundamentalsApiGetDividendsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetDividends200Response>;

  /**
   * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
   * @summary Dividends calendar
   * @param {FundamentalsApiGetDividendsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getDividendsCalendar(
    requestParameters?: FundamentalsApiGetDividendsCalendarRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<Array<DividendsCalendarItem>>;

  /**
   * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
   * @summary Earnings
   * @param {FundamentalsApiGetEarningsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEarnings(
    requestParameters?: FundamentalsApiGetEarningsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEarnings200Response>;

  /**
   * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
   * @summary Earnings calendar
   * @param {FundamentalsApiGetEarningsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getEarningsCalendar(
    requestParameters?: FundamentalsApiGetEarningsCalendarRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetEarningsCalendar200Response>;

  /**
   * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
   * @summary Income statement
   * @param {FundamentalsApiGetIncomeStatementRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getIncomeStatement(
    requestParameters?: FundamentalsApiGetIncomeStatementRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetIncomeStatement200Response>;

  /**
   * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
   * @summary Income statement consolidated
   * @param {FundamentalsApiGetIncomeStatementConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getIncomeStatementConsolidated(
    requestParameters?: FundamentalsApiGetIncomeStatementConsolidatedRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetIncomeStatementConsolidated200Response>;

  /**
   * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
   * @summary IPO calendar
   * @param {FundamentalsApiGetIpoCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getIpoCalendar(
    requestParameters?: FundamentalsApiGetIpoCalendarRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<{
    [key: string]: Array<GetIpoCalendar200ResponseValueInner>;
  }>;

  /**
   * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
   * @summary Key executives
   * @param {FundamentalsApiGetKeyExecutivesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getKeyExecutives(
    requestParameters?: FundamentalsApiGetKeyExecutivesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetKeyExecutives200Response>;

  /**
   * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
   * @summary Last changes
   * @param {FundamentalsApiGetLastChangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getLastChanges(
    requestParameters: FundamentalsApiGetLastChangesRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetLastChanges200Response>;

  /**
   * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
   * @summary Logo
   * @param {FundamentalsApiGetLogoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getLogo(
    requestParameters: FundamentalsApiGetLogoRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetLogo200Response>;

  /**
   * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
   * @summary Market capitalization
   * @param {FundamentalsApiGetMarketCapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getMarketCap(
    requestParameters?: FundamentalsApiGetMarketCapRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetMarketCap200Response>;

  /**
   * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
   * @summary Profile
   * @param {FundamentalsApiGetProfileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getProfile(
    requestParameters?: FundamentalsApiGetProfileRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetProfile200Response>;

  /**
   * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
   * @summary Splits
   * @param {FundamentalsApiGetSplitsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getSplits(
    requestParameters?: FundamentalsApiGetSplitsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetSplits200Response>;

  /**
   * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
   * @summary Splits calendar
   * @param {FundamentalsApiGetSplitsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getSplitsCalendar(
    requestParameters?: FundamentalsApiGetSplitsCalendarRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<Array<SplitsCalendarResponseItem>>;

  /**
   * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
   * @summary Statistics
   * @param {FundamentalsApiGetStatisticsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  getStatistics(
    requestParameters?: FundamentalsApiGetStatisticsRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<GetStatistics200Response>;

  /**
   * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
   * @summary Press releases
   * @param {FundamentalsApiPressReleasesListParametersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  pressReleasesListParameters(
    requestParameters?: FundamentalsApiPressReleasesListParametersRequest,
    options?: RawAxiosRequestConfig,
  ): AxiosPromise<PressReleasesListParameters200Response>;
}

/**
 * Request parameters for getBalanceSheet operation in FundamentalsApi.
 */
export interface FundamentalsApiGetBalanceSheetRequest {
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

  /**
   * The reporting period for the balane sheet data
   */
  readonly period?: PeriodEnum;

  /**
   * Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getBalanceSheetConsolidated operation in FundamentalsApi.
 */
export interface FundamentalsApiGetBalanceSheetConsolidatedRequest {
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

  /**
   * The reporting period for the balance sheet data.
   */
  readonly period?: PeriodEnum;

  /**
   * Begin date for filtering items by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering items by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getCashFlow operation in FundamentalsApi.
 */
export interface FundamentalsApiGetCashFlowRequest {
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

  /**
   * The reporting period for the cash flow statements
   */
  readonly period?: PeriodEnum;

  /**
   * Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getCashFlowConsolidated operation in FundamentalsApi.
 */
export interface FundamentalsApiGetCashFlowConsolidatedRequest {
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

  /**
   * The reporting period for the cash flow statements
   */
  readonly period?: PeriodEnum;

  /**
   * Start date for filtering cash flow statements. Only cash flow statements with fiscal dates on or after this date will be included. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering cash flow statements. Only cash flow statements with fiscal dates on or before this date will be included. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getDividends operation in FundamentalsApi.
 */
export interface FundamentalsApiGetDividendsRequest {
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

  /**
   * Specifies the time range for which to retrieve dividend data. Accepts values such as &#x60;last&#x60; (most recent dividend), &#x60;next&#x60; (upcoming dividend), &#x60;1m&#x60; - &#x60;5y&#x60; for respective periods, or &#x60;full&#x60; for all available data. If provided together with &#x60;start_date&#x60; and/or &#x60;end_date&#x60;, this parameter takes precedence.
   */
  readonly range?: RangeEnum;

  /**
   * Start date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
   */
  readonly startDate?: string;

  /**
   * End date for the dividend data query. Only dividends with dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;. If provided together with &#x60;range&#x60; parameter, &#x60;range&#x60; will take precedence.
   */
  readonly endDate?: string;

  /**
   * Specifies if there should be an adjustment
   */
  readonly adjust?: boolean;
}

/**
 * Request parameters for getDividendsCalendar operation in FundamentalsApi.
 */
export interface FundamentalsApiGetDividendsCalendarRequest {
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

  /**
   * Start date for the dividends calendar query. Only dividends with ex-dates on or after this date will be returned. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for the dividends calendar query. Only dividends with ex-dates on or before this date will be returned. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
   */
  readonly outputsize?: number;

  /**
   * Page number
   */
  readonly page?: number;
}

/**
 * Request parameters for getEarnings operation in FundamentalsApi.
 */
export interface FundamentalsApiGetEarningsRequest {
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

  /**
   * The asset class to which the instrument belongs
   */
  readonly type?: TypeEnum;

  /**
   * Type of earning, returns only 1 record. When is not empty, dates and outputsize parameters are ignored
   */
  readonly period?: PeriodEarningsEnum;

  /**
   * Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;1000&#x60;. Default &#x60;10&#x60; when no date parameters are set, otherwise set to maximum
   */
  readonly outputsize?: number;

  /**
   * The format of the response data
   */
  readonly format?: FormatEnum;

  /**
   * The separator used in the CSV response data
   */
  readonly delimiter?: string;

  /**
   * The date from which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
   */
  readonly startDate?: string;

  /**
   * The date to which the data is requested. The date format is &#x60;YYYY-MM-DD&#x60;.
   */
  readonly endDate?: string;

  /**
   * The number of decimal places in the response data. Should be in range [0,11] inclusive
   */
  readonly dp?: number;
}

/**
 * Request parameters for getEarningsCalendar operation in FundamentalsApi.
 */
export interface FundamentalsApiGetEarningsCalendarRequest {
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
   * Value can be JSON or CSV
   */
  readonly format?: FormatEnum;

  /**
   * Specify the delimiter used when downloading the CSV file
   */
  readonly delimiter?: string;

  /**
   * Can be used separately and together with end_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
   */
  readonly startDate?: string;

  /**
   * Can be used separately and together with start_date. Format &#x60;2006-01-02&#x60; or &#x60;2006-01-02T15:04:05&#x60;
   */
  readonly endDate?: string;

  /**
   * Specifies the number of decimal places for floating values. Should be in range [0,11] inclusive
   */
  readonly dp?: number;
}

/**
 * Request parameters for getIncomeStatement operation in FundamentalsApi.
 */
export interface FundamentalsApiGetIncomeStatementRequest {
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

  /**
   * The reporting period for the income statement data
   */
  readonly period?: PeriodEnum;

  /**
   * Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getIncomeStatementConsolidated operation in FundamentalsApi.
 */
export interface FundamentalsApiGetIncomeStatementConsolidatedRequest {
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

  /**
   * The reporting period for the income statement data
   */
  readonly period?: PeriodEnum;

  /**
   * Begin date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or after this date. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering income statements by fiscal date. Returns income statements with fiscal dates on or before this date. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getIpoCalendar operation in FundamentalsApi.
 */
export interface FundamentalsApiGetIpoCalendarRequest {
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
   * The earliest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * The latest IPO date to include in the results. Format: &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;
}

/**
 * Request parameters for getKeyExecutives operation in FundamentalsApi.
 */
export interface FundamentalsApiGetKeyExecutivesRequest {
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
 * Request parameters for getLastChanges operation in FundamentalsApi.
 */
export interface FundamentalsApiGetLastChangesRequest {
  /**
   * Endpoint name
   */
  readonly endpoint: EndpointEnum;

  /**
   * The starting date and time for data selection, in &#x60;2006-01-02T15:04:05&#x60; format
   */
  readonly startDate?: string;

  /**
   * Filter by symbol
   */
  readonly symbol?: string;

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
   * Page number
   */
  readonly page?: number;

  /**
   * Number of records in response
   */
  readonly outputsize?: number;
}

/**
 * Request parameters for getLogo operation in FundamentalsApi.
 */
export interface FundamentalsApiGetLogoRequest {
  /**
   * The ticker symbol of an instrument for which data is requested, e.g., &#x60;AAPL&#x60;, &#x60;BTC/USD&#x60;, &#x60;EUR/USD&#x60;.
   */
  readonly symbol: string;

  /**
   * The exchange name where the instrument is traded, e.g., &#x60;NASDAQ&#x60;, &#x60;NSE&#x60;
   */
  readonly exchange?: string;

  /**
   * The Market Identifier Code (MIC) of the exchange where the instrument is traded, e.g., &#x60;XNAS&#x60;, &#x60;XLON&#x60;
   */
  readonly micCode?: string;

  /**
   * The country where the instrument is traded, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;
}

/**
 * Request parameters for getMarketCap operation in FundamentalsApi.
 */
export interface FundamentalsApiGetMarketCapRequest {
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
   * Filter by market identifier code (MIC) under ISO 10383 standard
   */
  readonly micCode?: string;

  /**
   * Filter by country name or alpha code, e.g., &#x60;United States&#x60; or &#x60;US&#x60;
   */
  readonly country?: string;

  /**
   * Start date for market capitalization data retrieval. Data will be returned from this date onwards. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for market capitalization data retrieval. Data will be returned up to and including this date. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

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
 * Request parameters for getProfile operation in FundamentalsApi.
 */
export interface FundamentalsApiGetProfileRequest {
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
 * Request parameters for getSplits operation in FundamentalsApi.
 */
export interface FundamentalsApiGetSplitsRequest {
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

  /**
   * Range of data to be returned
   */
  readonly range?: RangeSplitsEnum;

  /**
   * The starting date for data selection. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * The ending date for data selection. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;
}

/**
 * Request parameters for getSplitsCalendar operation in FundamentalsApi.
 */
export interface FundamentalsApiGetSplitsCalendarRequest {
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

  /**
   * The starting date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
   */
  readonly startDate?: string;

  /**
   * The ending date (inclusive) for filtering split events in the calendar. Format &#x60;2006-01-02&#x60;
   */
  readonly endDate?: string;

  /**
   * Number of data points to retrieve. Supports values in the range from &#x60;1&#x60; to &#x60;500&#x60;. Default &#x60;100&#x60; when no date parameters are set, otherwise set to maximum
   */
  readonly outputsize?: number;

  /**
   * Page number
   */
  readonly page?: string;
}

/**
 * Request parameters for getStatistics operation in FundamentalsApi.
 */
export interface FundamentalsApiGetStatisticsRequest {
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
 * Request parameters for pressReleasesListParameters operation in FundamentalsApi.
 */
export interface FundamentalsApiPressReleasesListParametersRequest {
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
   * Begin date for filtering items. Returns press releases with release date on or after this date. Format &#x60;2025-12-24T02:07:00&#x60;
   */
  readonly startDate?: string;

  /**
   * End date for filtering items. Returns press releases with release date on or before this date. Format &#x60;2025-12-24T02:07:00&#x60;
   */
  readonly endDate?: string;

  /**
   * Time zone for date filtering. Default is the identifier time zone.
   */
  readonly timezone?: string;

  /**
   * Comma-separated list of languages to filter press releases by language.
   */
  readonly language?: string;

  /**
   * Number of latest press releases returned. Only used if no data range is specified. Maximum value is &#x60;10&#x60;.  type: number
   */
  readonly outputsize?: number;
}

/**
 * FundamentalsApi - object-oriented interface
 */
export class FundamentalsApi
  extends BaseAPI
  implements FundamentalsApiInterface
{
  /**
   * The balance sheet endpoint provides a detailed financial statement for a company, outlining its assets, liabilities, and shareholders\' equity. This endpoint returns structured data that includes current and non-current assets, total liabilities, and equity figures, enabling users to assess a company\'s financial health and stability.
   * @summary Balance sheet
   * @param {FundamentalsApiGetBalanceSheetRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getBalanceSheet(
    requestParameters: FundamentalsApiGetBalanceSheetRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getBalanceSheet(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The balance sheet consolidated endpoint provides a detailed overview of a company\'s raw balance sheet, including a comprehensive summary of its assets, liabilities, and shareholders\' equity. This endpoint is useful for retrieving financial data that reflects the overall financial position of a company, allowing users to access critical information about its financial health and structure.
   * @summary Balance sheet consolidated
   * @param {FundamentalsApiGetBalanceSheetConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getBalanceSheetConsolidated(
    requestParameters: FundamentalsApiGetBalanceSheetConsolidatedRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getBalanceSheetConsolidated(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The cash flow endpoint provides detailed information on a company\'s cash flow activities, including the net cash and cash equivalents moving in and out of the business. This data includes operating, investing, and financing cash flows, offering a comprehensive view of the company\'s liquidity and financial health.
   * @summary Cash flow
   * @param {FundamentalsApiGetCashFlowRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCashFlow(
    requestParameters: FundamentalsApiGetCashFlowRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getCashFlow(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The cash flow consolidated endpoint provides raw data on a company\'s consolidated cash flow, including the net cash and cash equivalents moving in and out of the business. It returns information on operating, investing, and financing activities, helping users track liquidity and financial health over a specified period.
   * @summary Cash flow consolidated
   * @param {FundamentalsApiGetCashFlowConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getCashFlowConsolidated(
    requestParameters: FundamentalsApiGetCashFlowConsolidatedRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getCashFlowConsolidated(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The dividends endpoint provides historical dividend data for a specified stock, in many cases covering over a decade. It returns information on dividend payouts, including the amount, payment date, and frequency. This endpoint is ideal for users tracking dividend histories or evaluating the income potential of stocks.
   * @summary Dividends
   * @param {FundamentalsApiGetDividendsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getDividends(
    requestParameters: FundamentalsApiGetDividendsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getDividends(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.range,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.adjust,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The dividends calendar endpoint provides a detailed schedule of upcoming and past dividend events for specified date ranges. By using the `start_date` and `end_date` parameters, users can retrieve a list of companies issuing dividends, including the ex-dividend date, payment date, and dividend amount. This endpoint is ideal for tracking dividend payouts and planning investment strategies based on dividend schedules.
   * @summary Dividends calendar
   * @param {FundamentalsApiGetDividendsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getDividendsCalendar(
    requestParameters: FundamentalsApiGetDividendsCalendarRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getDividendsCalendar(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The earnings endpoint provides comprehensive earnings data for a specified company, including both the estimated and actual Earnings Per Share (EPS) figures. This endpoint delivers historical earnings information, allowing users to track a company\'s financial performance over time.
   * @summary Earnings
   * @param {FundamentalsApiGetEarningsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEarnings(
    requestParameters: FundamentalsApiGetEarningsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getEarnings(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.type,
        requestParameters.period,
        requestParameters.outputsize,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The earnings calendar endpoint provides a schedule of company earnings announcements for a specified date range. By default, it returns earnings data for the current day. Users can customize the date range using the `start_date` and `end_date` parameters to retrieve earnings information for specific periods. This endpoint is useful for tracking upcoming earnings reports and planning around key financial announcements.
   * @summary Earnings calendar
   * @param {FundamentalsApiGetEarningsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getEarningsCalendar(
    requestParameters: FundamentalsApiGetEarningsCalendarRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getEarningsCalendar(
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.format,
        requestParameters.delimiter,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.dp,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The income statement endpoint provides detailed financial data on a company\'s income statement, including revenues, expenses, and net income for specified periods, either annually or quarterly. This endpoint is essential for retrieving comprehensive financial performance metrics of a company, allowing users to access historical and current financial results.
   * @summary Income statement
   * @param {FundamentalsApiGetIncomeStatementRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getIncomeStatement(
    requestParameters: FundamentalsApiGetIncomeStatementRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getIncomeStatement(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The income statement consolidated endpoint provides a company\'s raw income statement, detailing revenue, expenses, and net income for specified periods, either annually or quarterly. This data is essential for evaluating a company\'s financial performance over time, allowing users to access comprehensive financial results in a structured format.
   * @summary Income statement consolidated
   * @param {FundamentalsApiGetIncomeStatementConsolidatedRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getIncomeStatementConsolidated(
    requestParameters: FundamentalsApiGetIncomeStatementConsolidatedRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getIncomeStatementConsolidated(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.period,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The IPO Calendar endpoint provides detailed information on initial public offerings (IPOs), including those that have occurred in the past, are happening today, or are scheduled for the future. Users can access data such as company names, IPO dates, and offering details, allowing them to track and monitor IPO activity efficiently.
   * @summary IPO calendar
   * @param {FundamentalsApiGetIpoCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getIpoCalendar(
    requestParameters: FundamentalsApiGetIpoCalendarRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getIpoCalendar(
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.startDate,
        requestParameters.endDate,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The key executives endpoint provides detailed information about a company\'s key executives identified by a specific stock symbol. It returns data such as names, titles, and roles of the executives, which can be useful for understanding the leadership structure of the company.
   * @summary Key executives
   * @param {FundamentalsApiGetKeyExecutivesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getKeyExecutives(
    requestParameters: FundamentalsApiGetKeyExecutivesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getKeyExecutives(
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
   * The last change endpoint provides the most recent updates to fundamental data for a specified dataset. It returns a timestamp indicating when the data was last modified, allowing users to efficiently manage API requests by only fetching new data when changes occur. This helps optimize data retrieval and reduce unnecessary API credit usage.
   * @summary Last changes
   * @param {FundamentalsApiGetLastChangesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getLastChanges(
    requestParameters: FundamentalsApiGetLastChangesRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getLastChanges(
        requestParameters.endpoint,
        requestParameters.startDate,
        requestParameters.symbol,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The logo endpoint provides the official logo image for a specified company, cryptocurrency, or forex pair. This endpoint is useful for integrating visual branding elements into financial applications, websites, or reports, ensuring that users can easily identify and associate the correct logo with the respective financial asset.
   * @summary Logo
   * @param {FundamentalsApiGetLogoRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getLogo(
    requestParameters: FundamentalsApiGetLogoRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getLogo(
        requestParameters.symbol,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The Market Capitalization History endpoint provides historical data on a company\'s market capitalization over a specified time period. It returns a time series of market cap values, allowing users to track changes in a company\'s market value.
   * @summary Market capitalization
   * @param {FundamentalsApiGetMarketCapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getMarketCap(
    requestParameters: FundamentalsApiGetMarketCapRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getMarketCap(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.page,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The profile endpoint provides detailed company information, including the company\'s name, industry, sector, CEO, headquarters location, and market capitalization. This data is useful for obtaining a comprehensive overview of a company\'s business and financial standing.
   * @summary Profile
   * @param {FundamentalsApiGetProfileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getProfile(
    requestParameters: FundamentalsApiGetProfileRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getProfile(
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
   * The splits endpoint provides historical data on stock split events for a specified company. It returns details including the date of each split and the corresponding split factor.
   * @summary Splits
   * @param {FundamentalsApiGetSplitsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getSplits(
    requestParameters: FundamentalsApiGetSplitsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getSplits(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.range,
        requestParameters.startDate,
        requestParameters.endDate,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The splits calendar endpoint provides a detailed calendar of stock split events within a specified date range. By setting the `start_date` and `end_date` parameters, users can retrieve a list of upcoming or past stock splits, including the company name, split ratio, and effective date. This endpoint is useful for tracking changes in stock structure and planning investment strategies around these events.
   * @summary Splits calendar
   * @param {FundamentalsApiGetSplitsCalendarRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getSplitsCalendar(
    requestParameters: FundamentalsApiGetSplitsCalendarRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getSplitsCalendar(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.country,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.outputsize,
        requestParameters.page,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * The statistics endpoint provides a comprehensive snapshot of a company\'s key financial statistics, including valuation metrics, revenue figures, profit margins, and other essential financial data. This endpoint is ideal for users seeking detailed insights into a company\'s financial health and performance metrics.
   * @summary Statistics
   * @param {FundamentalsApiGetStatisticsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public getStatistics(
    requestParameters: FundamentalsApiGetStatisticsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .getStatistics(
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
   * The press releases endpoint offers structured, real-time access to official company press releases and corporate announcements from public entities across global markets.
   * @summary Press releases
   * @param {FundamentalsApiPressReleasesListParametersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   */
  public pressReleasesListParameters(
    requestParameters: FundamentalsApiPressReleasesListParametersRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return FundamentalsApiFp(this.configuration)
      .pressReleasesListParameters(
        requestParameters.symbol,
        requestParameters.figi,
        requestParameters.isin,
        requestParameters.cusip,
        requestParameters.exchange,
        requestParameters.micCode,
        requestParameters.startDate,
        requestParameters.endDate,
        requestParameters.timezone,
        requestParameters.language,
        requestParameters.outputsize,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
