/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

import * as runtime from "../runtime";
import type {
  AdjustEnum,
  ApiBadRequestErrorResponseBody,
  ApiForbiddenErrorResponseBody,
  ApiInternalServerErrorResponseBody,
  ApiNotFoundErrorResponseBody,
  ApiParameterTooLongErrorResponseBody,
  ApiTooManyRequestsErrorResponseBody,
  ApiUnauthorizedErrorResponseBody,
  FormatEnum,
  GetTimeSeriesAd200Response,
  GetTimeSeriesAdOsc200Response,
  GetTimeSeriesAdd200Response,
  GetTimeSeriesAdx200Response,
  GetTimeSeriesAdxr200Response,
  GetTimeSeriesApo200Response,
  GetTimeSeriesAroon200Response,
  GetTimeSeriesAroonOsc200Response,
  GetTimeSeriesAtr200Response,
  GetTimeSeriesAvg200Response,
  GetTimeSeriesAvgPrice200Response,
  GetTimeSeriesBBands200Response,
  GetTimeSeriesBeta200Response,
  GetTimeSeriesBop200Response,
  GetTimeSeriesCci200Response,
  GetTimeSeriesCeil200Response,
  GetTimeSeriesCmo200Response,
  GetTimeSeriesCoppock200Response,
  GetTimeSeriesCorrel200Response,
  GetTimeSeriesCrsi200Response,
  GetTimeSeriesDema200Response,
  GetTimeSeriesDiv200Response,
  GetTimeSeriesDpo200Response,
  GetTimeSeriesDx200Response,
  GetTimeSeriesEma200Response,
  GetTimeSeriesExp200Response,
  GetTimeSeriesFloor200Response,
  GetTimeSeriesHeikinashiCandles200Response,
  GetTimeSeriesHlc3200Response,
  GetTimeSeriesHtDcPeriod200Response,
  GetTimeSeriesHtDcPhase200Response,
  GetTimeSeriesHtPhasor200Response,
  GetTimeSeriesHtSine200Response,
  GetTimeSeriesHtTrendMode200Response,
  GetTimeSeriesHtTrendline200Response,
  GetTimeSeriesIchimoku200Response,
  GetTimeSeriesKama200Response,
  GetTimeSeriesKeltner200Response,
  GetTimeSeriesKst200Response,
  GetTimeSeriesLinearReg200Response,
  GetTimeSeriesLinearRegAngle200Response,
  GetTimeSeriesLinearRegIntercept200Response,
  GetTimeSeriesLinearRegSlope200Response,
  GetTimeSeriesLn200Response,
  GetTimeSeriesLog10200Response,
  GetTimeSeriesMa200Response,
  GetTimeSeriesMacd200Response,
  GetTimeSeriesMacdExt200Response,
  GetTimeSeriesMacdSlope200Response,
  GetTimeSeriesMama200Response,
  GetTimeSeriesMax200Response,
  GetTimeSeriesMaxIndex200Response,
  GetTimeSeriesMcGinleyDynamic200Response,
  GetTimeSeriesMedPrice200Response,
  GetTimeSeriesMfi200Response,
  GetTimeSeriesMidPoint200Response,
  GetTimeSeriesMidPrice200Response,
  GetTimeSeriesMin200Response,
  GetTimeSeriesMinIndex200Response,
  GetTimeSeriesMinMax200Response,
  GetTimeSeriesMinMaxIndex200Response,
  GetTimeSeriesMinusDI200Response,
  GetTimeSeriesMinusDM200Response,
  GetTimeSeriesMom200Response,
  GetTimeSeriesMult200Response,
  GetTimeSeriesNatr200Response,
  GetTimeSeriesObv200Response,
  GetTimeSeriesPercentB200Response,
  GetTimeSeriesPivotPointsHL200Response,
  GetTimeSeriesPlusDI200Response,
  GetTimeSeriesPlusDM200Response,
  GetTimeSeriesPpo200Response,
  GetTimeSeriesRoc200Response,
  GetTimeSeriesRocp200Response,
  GetTimeSeriesRocr100200Response,
  GetTimeSeriesRocr200Response,
  GetTimeSeriesRsi200Response,
  GetTimeSeriesRvol200Response,
  GetTimeSeriesSar200Response,
  GetTimeSeriesSarExt200Response,
  GetTimeSeriesSma200Response,
  GetTimeSeriesSqrt200Response,
  GetTimeSeriesStdDev200Response,
  GetTimeSeriesStoch200Response,
  GetTimeSeriesStochF200Response,
  GetTimeSeriesStochRsi200Response,
  GetTimeSeriesSub200Response,
  GetTimeSeriesSum200Response,
  GetTimeSeriesSuperTrend200Response,
  GetTimeSeriesSuperTrendHeikinAshiCandles200Response,
  GetTimeSeriesT3ma200Response,
  GetTimeSeriesTRange200Response,
  GetTimeSeriesTema200Response,
  GetTimeSeriesTrima200Response,
  GetTimeSeriesTsf200Response,
  GetTimeSeriesTypPrice200Response,
  GetTimeSeriesUltOsc200Response,
  GetTimeSeriesVar200Response,
  GetTimeSeriesVwap200Response,
  GetTimeSeriesWclPrice200Response,
  GetTimeSeriesWillR200Response,
  GetTimeSeriesWma200Response,
  IntervalEnum,
  MaTypeEnum,
  OrderEnum,
  SeriesTypeEnum,
  SeriesTypeStochrsiEnum,
  TypeEnum,
} from "../models/index";
import {
  AdjustEnumFromJSON,
  AdjustEnumToJSON,
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
  FormatEnumFromJSON,
  FormatEnumToJSON,
  GetTimeSeriesAd200ResponseFromJSON,
  GetTimeSeriesAd200ResponseToJSON,
  GetTimeSeriesAdOsc200ResponseFromJSON,
  GetTimeSeriesAdOsc200ResponseToJSON,
  GetTimeSeriesAdd200ResponseFromJSON,
  GetTimeSeriesAdd200ResponseToJSON,
  GetTimeSeriesAdx200ResponseFromJSON,
  GetTimeSeriesAdx200ResponseToJSON,
  GetTimeSeriesAdxr200ResponseFromJSON,
  GetTimeSeriesAdxr200ResponseToJSON,
  GetTimeSeriesApo200ResponseFromJSON,
  GetTimeSeriesApo200ResponseToJSON,
  GetTimeSeriesAroon200ResponseFromJSON,
  GetTimeSeriesAroon200ResponseToJSON,
  GetTimeSeriesAroonOsc200ResponseFromJSON,
  GetTimeSeriesAroonOsc200ResponseToJSON,
  GetTimeSeriesAtr200ResponseFromJSON,
  GetTimeSeriesAtr200ResponseToJSON,
  GetTimeSeriesAvg200ResponseFromJSON,
  GetTimeSeriesAvg200ResponseToJSON,
  GetTimeSeriesAvgPrice200ResponseFromJSON,
  GetTimeSeriesAvgPrice200ResponseToJSON,
  GetTimeSeriesBBands200ResponseFromJSON,
  GetTimeSeriesBBands200ResponseToJSON,
  GetTimeSeriesBeta200ResponseFromJSON,
  GetTimeSeriesBeta200ResponseToJSON,
  GetTimeSeriesBop200ResponseFromJSON,
  GetTimeSeriesBop200ResponseToJSON,
  GetTimeSeriesCci200ResponseFromJSON,
  GetTimeSeriesCci200ResponseToJSON,
  GetTimeSeriesCeil200ResponseFromJSON,
  GetTimeSeriesCeil200ResponseToJSON,
  GetTimeSeriesCmo200ResponseFromJSON,
  GetTimeSeriesCmo200ResponseToJSON,
  GetTimeSeriesCoppock200ResponseFromJSON,
  GetTimeSeriesCoppock200ResponseToJSON,
  GetTimeSeriesCorrel200ResponseFromJSON,
  GetTimeSeriesCorrel200ResponseToJSON,
  GetTimeSeriesCrsi200ResponseFromJSON,
  GetTimeSeriesCrsi200ResponseToJSON,
  GetTimeSeriesDema200ResponseFromJSON,
  GetTimeSeriesDema200ResponseToJSON,
  GetTimeSeriesDiv200ResponseFromJSON,
  GetTimeSeriesDiv200ResponseToJSON,
  GetTimeSeriesDpo200ResponseFromJSON,
  GetTimeSeriesDpo200ResponseToJSON,
  GetTimeSeriesDx200ResponseFromJSON,
  GetTimeSeriesDx200ResponseToJSON,
  GetTimeSeriesEma200ResponseFromJSON,
  GetTimeSeriesEma200ResponseToJSON,
  GetTimeSeriesExp200ResponseFromJSON,
  GetTimeSeriesExp200ResponseToJSON,
  GetTimeSeriesFloor200ResponseFromJSON,
  GetTimeSeriesFloor200ResponseToJSON,
  GetTimeSeriesHeikinashiCandles200ResponseFromJSON,
  GetTimeSeriesHeikinashiCandles200ResponseToJSON,
  GetTimeSeriesHlc3200ResponseFromJSON,
  GetTimeSeriesHlc3200ResponseToJSON,
  GetTimeSeriesHtDcPeriod200ResponseFromJSON,
  GetTimeSeriesHtDcPeriod200ResponseToJSON,
  GetTimeSeriesHtDcPhase200ResponseFromJSON,
  GetTimeSeriesHtDcPhase200ResponseToJSON,
  GetTimeSeriesHtPhasor200ResponseFromJSON,
  GetTimeSeriesHtPhasor200ResponseToJSON,
  GetTimeSeriesHtSine200ResponseFromJSON,
  GetTimeSeriesHtSine200ResponseToJSON,
  GetTimeSeriesHtTrendMode200ResponseFromJSON,
  GetTimeSeriesHtTrendMode200ResponseToJSON,
  GetTimeSeriesHtTrendline200ResponseFromJSON,
  GetTimeSeriesHtTrendline200ResponseToJSON,
  GetTimeSeriesIchimoku200ResponseFromJSON,
  GetTimeSeriesIchimoku200ResponseToJSON,
  GetTimeSeriesKama200ResponseFromJSON,
  GetTimeSeriesKama200ResponseToJSON,
  GetTimeSeriesKeltner200ResponseFromJSON,
  GetTimeSeriesKeltner200ResponseToJSON,
  GetTimeSeriesKst200ResponseFromJSON,
  GetTimeSeriesKst200ResponseToJSON,
  GetTimeSeriesLinearReg200ResponseFromJSON,
  GetTimeSeriesLinearReg200ResponseToJSON,
  GetTimeSeriesLinearRegAngle200ResponseFromJSON,
  GetTimeSeriesLinearRegAngle200ResponseToJSON,
  GetTimeSeriesLinearRegIntercept200ResponseFromJSON,
  GetTimeSeriesLinearRegIntercept200ResponseToJSON,
  GetTimeSeriesLinearRegSlope200ResponseFromJSON,
  GetTimeSeriesLinearRegSlope200ResponseToJSON,
  GetTimeSeriesLn200ResponseFromJSON,
  GetTimeSeriesLn200ResponseToJSON,
  GetTimeSeriesLog10200ResponseFromJSON,
  GetTimeSeriesLog10200ResponseToJSON,
  GetTimeSeriesMa200ResponseFromJSON,
  GetTimeSeriesMa200ResponseToJSON,
  GetTimeSeriesMacd200ResponseFromJSON,
  GetTimeSeriesMacd200ResponseToJSON,
  GetTimeSeriesMacdExt200ResponseFromJSON,
  GetTimeSeriesMacdExt200ResponseToJSON,
  GetTimeSeriesMacdSlope200ResponseFromJSON,
  GetTimeSeriesMacdSlope200ResponseToJSON,
  GetTimeSeriesMama200ResponseFromJSON,
  GetTimeSeriesMama200ResponseToJSON,
  GetTimeSeriesMax200ResponseFromJSON,
  GetTimeSeriesMax200ResponseToJSON,
  GetTimeSeriesMaxIndex200ResponseFromJSON,
  GetTimeSeriesMaxIndex200ResponseToJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseFromJSON,
  GetTimeSeriesMcGinleyDynamic200ResponseToJSON,
  GetTimeSeriesMedPrice200ResponseFromJSON,
  GetTimeSeriesMedPrice200ResponseToJSON,
  GetTimeSeriesMfi200ResponseFromJSON,
  GetTimeSeriesMfi200ResponseToJSON,
  GetTimeSeriesMidPoint200ResponseFromJSON,
  GetTimeSeriesMidPoint200ResponseToJSON,
  GetTimeSeriesMidPrice200ResponseFromJSON,
  GetTimeSeriesMidPrice200ResponseToJSON,
  GetTimeSeriesMin200ResponseFromJSON,
  GetTimeSeriesMin200ResponseToJSON,
  GetTimeSeriesMinIndex200ResponseFromJSON,
  GetTimeSeriesMinIndex200ResponseToJSON,
  GetTimeSeriesMinMax200ResponseFromJSON,
  GetTimeSeriesMinMax200ResponseToJSON,
  GetTimeSeriesMinMaxIndex200ResponseFromJSON,
  GetTimeSeriesMinMaxIndex200ResponseToJSON,
  GetTimeSeriesMinusDI200ResponseFromJSON,
  GetTimeSeriesMinusDI200ResponseToJSON,
  GetTimeSeriesMinusDM200ResponseFromJSON,
  GetTimeSeriesMinusDM200ResponseToJSON,
  GetTimeSeriesMom200ResponseFromJSON,
  GetTimeSeriesMom200ResponseToJSON,
  GetTimeSeriesMult200ResponseFromJSON,
  GetTimeSeriesMult200ResponseToJSON,
  GetTimeSeriesNatr200ResponseFromJSON,
  GetTimeSeriesNatr200ResponseToJSON,
  GetTimeSeriesObv200ResponseFromJSON,
  GetTimeSeriesObv200ResponseToJSON,
  GetTimeSeriesPercentB200ResponseFromJSON,
  GetTimeSeriesPercentB200ResponseToJSON,
  GetTimeSeriesPivotPointsHL200ResponseFromJSON,
  GetTimeSeriesPivotPointsHL200ResponseToJSON,
  GetTimeSeriesPlusDI200ResponseFromJSON,
  GetTimeSeriesPlusDI200ResponseToJSON,
  GetTimeSeriesPlusDM200ResponseFromJSON,
  GetTimeSeriesPlusDM200ResponseToJSON,
  GetTimeSeriesPpo200ResponseFromJSON,
  GetTimeSeriesPpo200ResponseToJSON,
  GetTimeSeriesRoc200ResponseFromJSON,
  GetTimeSeriesRoc200ResponseToJSON,
  GetTimeSeriesRocp200ResponseFromJSON,
  GetTimeSeriesRocp200ResponseToJSON,
  GetTimeSeriesRocr100200ResponseFromJSON,
  GetTimeSeriesRocr100200ResponseToJSON,
  GetTimeSeriesRocr200ResponseFromJSON,
  GetTimeSeriesRocr200ResponseToJSON,
  GetTimeSeriesRsi200ResponseFromJSON,
  GetTimeSeriesRsi200ResponseToJSON,
  GetTimeSeriesRvol200ResponseFromJSON,
  GetTimeSeriesRvol200ResponseToJSON,
  GetTimeSeriesSar200ResponseFromJSON,
  GetTimeSeriesSar200ResponseToJSON,
  GetTimeSeriesSarExt200ResponseFromJSON,
  GetTimeSeriesSarExt200ResponseToJSON,
  GetTimeSeriesSma200ResponseFromJSON,
  GetTimeSeriesSma200ResponseToJSON,
  GetTimeSeriesSqrt200ResponseFromJSON,
  GetTimeSeriesSqrt200ResponseToJSON,
  GetTimeSeriesStdDev200ResponseFromJSON,
  GetTimeSeriesStdDev200ResponseToJSON,
  GetTimeSeriesStoch200ResponseFromJSON,
  GetTimeSeriesStoch200ResponseToJSON,
  GetTimeSeriesStochF200ResponseFromJSON,
  GetTimeSeriesStochF200ResponseToJSON,
  GetTimeSeriesStochRsi200ResponseFromJSON,
  GetTimeSeriesStochRsi200ResponseToJSON,
  GetTimeSeriesSub200ResponseFromJSON,
  GetTimeSeriesSub200ResponseToJSON,
  GetTimeSeriesSum200ResponseFromJSON,
  GetTimeSeriesSum200ResponseToJSON,
  GetTimeSeriesSuperTrend200ResponseFromJSON,
  GetTimeSeriesSuperTrend200ResponseToJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseFromJSON,
  GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseToJSON,
  GetTimeSeriesT3ma200ResponseFromJSON,
  GetTimeSeriesT3ma200ResponseToJSON,
  GetTimeSeriesTRange200ResponseFromJSON,
  GetTimeSeriesTRange200ResponseToJSON,
  GetTimeSeriesTema200ResponseFromJSON,
  GetTimeSeriesTema200ResponseToJSON,
  GetTimeSeriesTrima200ResponseFromJSON,
  GetTimeSeriesTrima200ResponseToJSON,
  GetTimeSeriesTsf200ResponseFromJSON,
  GetTimeSeriesTsf200ResponseToJSON,
  GetTimeSeriesTypPrice200ResponseFromJSON,
  GetTimeSeriesTypPrice200ResponseToJSON,
  GetTimeSeriesUltOsc200ResponseFromJSON,
  GetTimeSeriesUltOsc200ResponseToJSON,
  GetTimeSeriesVar200ResponseFromJSON,
  GetTimeSeriesVar200ResponseToJSON,
  GetTimeSeriesVwap200ResponseFromJSON,
  GetTimeSeriesVwap200ResponseToJSON,
  GetTimeSeriesWclPrice200ResponseFromJSON,
  GetTimeSeriesWclPrice200ResponseToJSON,
  GetTimeSeriesWillR200ResponseFromJSON,
  GetTimeSeriesWillR200ResponseToJSON,
  GetTimeSeriesWma200ResponseFromJSON,
  GetTimeSeriesWma200ResponseToJSON,
  IntervalEnumFromJSON,
  IntervalEnumToJSON,
  MaTypeEnumFromJSON,
  MaTypeEnumToJSON,
  OrderEnumFromJSON,
  OrderEnumToJSON,
  SeriesTypeEnumFromJSON,
  SeriesTypeEnumToJSON,
  SeriesTypeStochrsiEnumFromJSON,
  SeriesTypeStochrsiEnumToJSON,
  TypeEnumFromJSON,
  TypeEnumToJSON,
} from "../models/index";

export interface GetTimeSeriesAdRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAdOscRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  fastPeriod?: number;
  slowPeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAddRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAdxRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAdxrRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesApoRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastPeriod?: number;
  slowPeriod?: number;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAroonRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAroonOscRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAtrRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAvgRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesAvgPriceRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesBBandsRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  sd?: number;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesBetaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesBopRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCciRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCeilRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCmoRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCoppockRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  wmaPeriod?: number;
  longRocPeriod?: number;
  shortRocPeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCorrelRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesCrsiRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  rsiPeriod?: number;
  upDownLength?: number;
  percentRankPeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesDemaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesDivRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesDpoRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  centered?: boolean;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesDxRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesEmaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesExpRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesFloorRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHeikinashiCandlesRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHlc3Request {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtDcPeriodRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtDcPhaseRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtPhasorRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtSineRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtTrendModeRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesHtTrendlineRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesIchimokuRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  conversionLinePeriod?: number;
  baseLinePeriod?: number;
  leadingSpanBPeriod?: number;
  laggingSpanPeriod?: number;
  includeAheadSpanPeriod?: boolean;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesKamaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesKeltnerRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  atrTimePeriod?: number;
  multiplier?: number;
  seriesType?: SeriesTypeEnum;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesKstRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  rocPeriod1?: number;
  rocPeriod2?: number;
  rocPeriod3?: number;
  rocPeriod4?: number;
  smaPeriod1?: number;
  smaPeriod2?: number;
  smaPeriod3?: number;
  smaPeriod4?: number;
  signalPeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLinearRegRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLinearRegAngleRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLinearRegInterceptRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLinearRegSlopeRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLnRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesLog10Request {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMacdRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastPeriod?: number;
  slowPeriod?: number;
  signalPeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMacdExtRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastPeriod?: number;
  fastMaType?: MaTypeEnum;
  slowPeriod?: number;
  slowMaType?: MaTypeEnum;
  signalPeriod?: number;
  signalMaType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMacdSlopeRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastPeriod?: number;
  slowPeriod?: number;
  signalPeriod?: number;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMamaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastLimit?: number;
  slowLimit?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMaxRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMaxIndexRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMcGinleyDynamicRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMedPriceRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMfiRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMidPointRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMidPriceRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinIndexRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinMaxRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinMaxIndexRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinusDIRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMinusDMRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMomRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesMultRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesNatrRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesObvRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesPercentBRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  sd?: number;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesPivotPointsHLRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesPlusDIRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesPlusDMRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesPpoRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  fastPeriod?: number;
  slowPeriod?: number;
  maType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRocRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRocpRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRocrRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRocr100Request {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRsiRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesRvolRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSarRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  acceleration?: number;
  maximum?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSarExtRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  startValue?: number;
  offsetOnReverse?: number;
  accelerationLimitLong?: number;
  accelerationLong?: number;
  accelerationMaxLong?: number;
  accelerationLimitShort?: number;
  accelerationShort?: number;
  accelerationMaxShort?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSmaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSqrtRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesStdDevRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  sd?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesStochRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  fastKPeriod?: number;
  slowKPeriod?: number;
  slowDPeriod?: number;
  slowKmaType?: MaTypeEnum;
  slowDmaType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesStochFRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  fastKPeriod?: number;
  fastDPeriod?: number;
  fastDmaType?: MaTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesStochRsiRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeStochrsiEnum;
  rsiLength?: number;
  stochLength?: number;
  kPeriod?: number;
  slowKmaType?: string;
  dPeriod?: number;
  slowDmaType?: string;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSubRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType1?: SeriesTypeEnum;
  seriesType2?: SeriesTypeEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSumRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSuperTrendRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  period?: number;
  multiplier?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesSuperTrendHeikinAshiCandlesRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  period?: number;
  multiplier?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesT3maRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  vFactor?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesTRangeRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesTemaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesTrimaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesTsfRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesTypPriceRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesUltOscRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod1?: number;
  timePeriod2?: number;
  timePeriod3?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesVarRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesVwapRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  sdTimePeriod?: number;
  sd?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesWclPriceRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesWillRRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

export interface GetTimeSeriesWmaRequest {
  interval: IntervalEnum;
  symbol?: string;
  isin?: string;
  figi?: string;
  cusip?: string;
  outputsize?: number;
  exchange?: string;
  micCode?: string;
  country?: string;
  type?: TypeEnum;
  timezone?: string;
  startDate?: string;
  endDate?: string;
  date?: string;
  order?: OrderEnum;
  prepost?: boolean;
  format?: FormatEnum;
  delimiter?: string;
  dp?: number;
  previousClose?: boolean;
  adjust?: AdjustEnum;
  seriesType?: SeriesTypeEnum;
  timePeriod?: number;
  includeOhlc?: boolean;
}

/**
 *
 */
export class TechnicalIndicatorApi extends runtime.BaseAPI {
  /**
   * The Accumulation/Distribution (AD) endpoint provides data on the cumulative money flow into and out of a financial instrument, using its closing price, price range, and trading volume. This endpoint returns the AD line, which helps users identify potential buying or selling pressure and assess the strength of price movements.
   * Accumulation/distribution
   */
  async getTimeSeriesAdRaw(
    requestParameters: GetTimeSeriesAdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAd200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAd().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ad`;

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
      GetTimeSeriesAd200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Accumulation/Distribution (AD) endpoint provides data on the cumulative money flow into and out of a financial instrument, using its closing price, price range, and trading volume. This endpoint returns the AD line, which helps users identify potential buying or selling pressure and assess the strength of price movements.
   * Accumulation/distribution
   */
  async getTimeSeriesAd(
    requestParameters: GetTimeSeriesAdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAd200Response> {
    const response = await this.getTimeSeriesAdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Accumulation/Distribution Oscillator endpoint (ADOSC) calculates a momentum indicator that highlights shifts in buying or selling pressure by analyzing price and volume data over different time frames. It returns numerical values that help users identify potential trend reversals in financial markets.
   * Accumulation/distribution oscillator
   */
  async getTimeSeriesAdOscRaw(
    requestParameters: GetTimeSeriesAdOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAdOsc200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAdOsc().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/adosc`;

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
      GetTimeSeriesAdOsc200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Accumulation/Distribution Oscillator endpoint (ADOSC) calculates a momentum indicator that highlights shifts in buying or selling pressure by analyzing price and volume data over different time frames. It returns numerical values that help users identify potential trend reversals in financial markets.
   * Accumulation/distribution oscillator
   */
  async getTimeSeriesAdOsc(
    requestParameters: GetTimeSeriesAdOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAdOsc200Response> {
    const response = await this.getTimeSeriesAdOscRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Addition (ADD) endpoint calculates the sum of two input data series, such as technical indicators or price data, and returns the combined result. This endpoint is useful for users who need to aggregate data points to create custom indicators or analyze the combined effect of multiple data series in financial analysis.
   * Addition
   */
  async getTimeSeriesAddRaw(
    requestParameters: GetTimeSeriesAddRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAdd200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAdd().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/add`;

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
      GetTimeSeriesAdd200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Addition (ADD) endpoint calculates the sum of two input data series, such as technical indicators or price data, and returns the combined result. This endpoint is useful for users who need to aggregate data points to create custom indicators or analyze the combined effect of multiple data series in financial analysis.
   * Addition
   */
  async getTimeSeriesAdd(
    requestParameters: GetTimeSeriesAddRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAdd200Response> {
    const response = await this.getTimeSeriesAddRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Average Directional Index (ADX) endpoint provides data on the strength of a market trend, regardless of its direction. It returns a numerical value that helps users identify whether a market is trending or moving sideways.
   * Average directional index
   */
  async getTimeSeriesAdxRaw(
    requestParameters: GetTimeSeriesAdxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAdx200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAdx().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/adx`;

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
      GetTimeSeriesAdx200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Average Directional Index (ADX) endpoint provides data on the strength of a market trend, regardless of its direction. It returns a numerical value that helps users identify whether a market is trending or moving sideways.
   * Average directional index
   */
  async getTimeSeriesAdx(
    requestParameters: GetTimeSeriesAdxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAdx200Response> {
    const response = await this.getTimeSeriesAdxRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Average Directional Movement Index Rating (ADXR) endpoint provides a smoothed measure of trend strength for a specified financial instrument. It returns the ADXR values, which help users assess the consistency of a trend over a given period by reducing short-term fluctuations. This endpoint is useful for traders and analysts who need to evaluate the stability of market trends for better timing of entry and exit points in their trading strategies.
   * Average directional movement index rating
   */
  async getTimeSeriesAdxrRaw(
    requestParameters: GetTimeSeriesAdxrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAdxr200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAdxr().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/adxr`;

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
      GetTimeSeriesAdxr200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Average Directional Movement Index Rating (ADXR) endpoint provides a smoothed measure of trend strength for a specified financial instrument. It returns the ADXR values, which help users assess the consistency of a trend over a given period by reducing short-term fluctuations. This endpoint is useful for traders and analysts who need to evaluate the stability of market trends for better timing of entry and exit points in their trading strategies.
   * Average directional movement index rating
   */
  async getTimeSeriesAdxr(
    requestParameters: GetTimeSeriesAdxrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAdxr200Response> {
    const response = await this.getTimeSeriesAdxrRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Absolute Price Oscillator (APO) endpoint calculates the difference between two specified moving averages of a financial instrument\'s price, providing data that helps users identify potential price trends and reversals. The response includes the calculated APO values over a specified time period, which can be used to track momentum changes and assess the strength of price movements.
   * Absolute price oscillator
   */
  async getTimeSeriesApoRaw(
    requestParameters: GetTimeSeriesApoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesApo200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesApo().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/apo`;

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
      GetTimeSeriesApo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Absolute Price Oscillator (APO) endpoint calculates the difference between two specified moving averages of a financial instrument\'s price, providing data that helps users identify potential price trends and reversals. The response includes the calculated APO values over a specified time period, which can be used to track momentum changes and assess the strength of price movements.
   * Absolute price oscillator
   */
  async getTimeSeriesApo(
    requestParameters: GetTimeSeriesApoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesApo200Response> {
    const response = await this.getTimeSeriesApoRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Aroon Indicator endpoint provides data on the time elapsed since the highest high and lowest low within a specified period, helping users identify the presence and strength of market trends. It returns two values: Aroon Up and Aroon Down, which indicate the trend direction and momentum. This endpoint is useful for traders and analysts looking to assess trend patterns and potential reversals in financial markets.
   * Aroon indicator
   */
  async getTimeSeriesAroonRaw(
    requestParameters: GetTimeSeriesAroonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAroon200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAroon().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/aroon`;

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
      GetTimeSeriesAroon200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Aroon Indicator endpoint provides data on the time elapsed since the highest high and lowest low within a specified period, helping users identify the presence and strength of market trends. It returns two values: Aroon Up and Aroon Down, which indicate the trend direction and momentum. This endpoint is useful for traders and analysts looking to assess trend patterns and potential reversals in financial markets.
   * Aroon indicator
   */
  async getTimeSeriesAroon(
    requestParameters: GetTimeSeriesAroonRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAroon200Response> {
    const response = await this.getTimeSeriesAroonRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Aroon Oscillator endpoint provides the calculated difference between the Aroon Up and Aroon Down indicators for a given financial instrument. It returns a time series of values that help users identify the strength and direction of a trend, as well as potential trend reversals. This data is useful for traders and analysts seeking to evaluate market trends over a specified period.
   * Aroon oscillator
   */
  async getTimeSeriesAroonOscRaw(
    requestParameters: GetTimeSeriesAroonOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAroonOsc200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAroonOsc().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/aroonosc`;

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
      GetTimeSeriesAroonOsc200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Aroon Oscillator endpoint provides the calculated difference between the Aroon Up and Aroon Down indicators for a given financial instrument. It returns a time series of values that help users identify the strength and direction of a trend, as well as potential trend reversals. This data is useful for traders and analysts seeking to evaluate market trends over a specified period.
   * Aroon oscillator
   */
  async getTimeSeriesAroonOsc(
    requestParameters: GetTimeSeriesAroonOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAroonOsc200Response> {
    const response = await this.getTimeSeriesAroonOscRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Average True Range (ATR) endpoint provides data on market volatility by calculating the average range of price movement over a user-defined period. It returns numerical values representing the ATR for each time interval, allowing users to gauge the degree of price fluctuation in a financial instrument. This data is useful for setting stop-loss levels and determining optimal entry and exit points in trading strategies.
   * Average true range
   */
  async getTimeSeriesAtrRaw(
    requestParameters: GetTimeSeriesAtrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAtr200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAtr().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/atr`;

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
      GetTimeSeriesAtr200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Average True Range (ATR) endpoint provides data on market volatility by calculating the average range of price movement over a user-defined period. It returns numerical values representing the ATR for each time interval, allowing users to gauge the degree of price fluctuation in a financial instrument. This data is useful for setting stop-loss levels and determining optimal entry and exit points in trading strategies.
   * Average true range
   */
  async getTimeSeriesAtr(
    requestParameters: GetTimeSeriesAtrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAtr200Response> {
    const response = await this.getTimeSeriesAtrRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Average (AVG) endpoint calculates the arithmetic mean of a specified data series over a chosen time period. It returns a smoothed dataset that helps users identify trends by reducing short-term fluctuations. This endpoint is useful for obtaining a clearer view of data trends, particularly in time series analysis.
   * Average
   */
  async getTimeSeriesAvgRaw(
    requestParameters: GetTimeSeriesAvgRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAvg200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAvg().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/avg`;

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
      GetTimeSeriesAvg200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Average (AVG) endpoint calculates the arithmetic mean of a specified data series over a chosen time period. It returns a smoothed dataset that helps users identify trends by reducing short-term fluctuations. This endpoint is useful for obtaining a clearer view of data trends, particularly in time series analysis.
   * Average
   */
  async getTimeSeriesAvg(
    requestParameters: GetTimeSeriesAvgRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAvg200Response> {
    const response = await this.getTimeSeriesAvgRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Average Price (AVGPRICE) endpoint calculates and returns the mean value of a security\'s open, high, low, and close prices. This endpoint provides a straightforward metric to assess the overall price level of a security over a specified period.
   * Average price
   */
  async getTimeSeriesAvgPriceRaw(
    requestParameters: GetTimeSeriesAvgPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesAvgPrice200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesAvgPrice().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/avgprice`;

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
      GetTimeSeriesAvgPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Average Price (AVGPRICE) endpoint calculates and returns the mean value of a security\'s open, high, low, and close prices. This endpoint provides a straightforward metric to assess the overall price level of a security over a specified period.
   * Average price
   */
  async getTimeSeriesAvgPrice(
    requestParameters: GetTimeSeriesAvgPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesAvgPrice200Response> {
    const response = await this.getTimeSeriesAvgPriceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Bollinger Bands (BBANDS) endpoint calculates and returns three key data points: an upper band, a lower band, and a simple moving average (SMA) for a specified financial instrument. These bands are used to assess market volatility by showing how far prices deviate from the SMA. This information helps users identify potential price reversals and determine whether an asset is overbought or oversold.
   * Bollinger bands
   */
  async getTimeSeriesBBandsRaw(
    requestParameters: GetTimeSeriesBBandsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesBBands200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesBBands().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["sd"] != null) {
      queryParameters["sd"] = requestParameters["sd"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/bbands`;

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
      GetTimeSeriesBBands200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Bollinger Bands (BBANDS) endpoint calculates and returns three key data points: an upper band, a lower band, and a simple moving average (SMA) for a specified financial instrument. These bands are used to assess market volatility by showing how far prices deviate from the SMA. This information helps users identify potential price reversals and determine whether an asset is overbought or oversold.
   * Bollinger bands
   */
  async getTimeSeriesBBands(
    requestParameters: GetTimeSeriesBBandsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesBBands200Response> {
    const response = await this.getTimeSeriesBBandsRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Beta Indicator endpoint provides data on a security\'s sensitivity to market movements by comparing its price changes to a benchmark index. It returns the beta value, which quantifies the systematic risk of the security relative to the market. This information is useful for evaluating how much a security\'s price is expected to move in relation to market changes.
   * Beta indicator
   */
  async getTimeSeriesBetaRaw(
    requestParameters: GetTimeSeriesBetaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesBeta200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesBeta().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/beta`;

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
      GetTimeSeriesBeta200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Beta Indicator endpoint provides data on a security\'s sensitivity to market movements by comparing its price changes to a benchmark index. It returns the beta value, which quantifies the systematic risk of the security relative to the market. This information is useful for evaluating how much a security\'s price is expected to move in relation to market changes.
   * Beta indicator
   */
  async getTimeSeriesBeta(
    requestParameters: GetTimeSeriesBetaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesBeta200Response> {
    const response = await this.getTimeSeriesBetaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Balance of Power (BOP) endpoint provides data on the buying and selling pressure of a security by analyzing its open, high, low, and close prices. It returns numerical values that help users detect shifts in market sentiment and potential price movements.
   * Balance of power
   */
  async getTimeSeriesBopRaw(
    requestParameters: GetTimeSeriesBopRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesBop200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesBop().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/bop`;

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
      GetTimeSeriesBop200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Balance of Power (BOP) endpoint provides data on the buying and selling pressure of a security by analyzing its open, high, low, and close prices. It returns numerical values that help users detect shifts in market sentiment and potential price movements.
   * Balance of power
   */
  async getTimeSeriesBop(
    requestParameters: GetTimeSeriesBopRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesBop200Response> {
    const response = await this.getTimeSeriesBopRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Commodity Channel Index (CCI) endpoint provides data on the CCI values for a specified security, helping users detect potential price reversals by identifying overbought or oversold conditions. It returns a series of CCI values calculated over a specified time period, allowing users to assess the momentum of a security relative to its average price range.
   * Commodity channel index
   */
  async getTimeSeriesCciRaw(
    requestParameters: GetTimeSeriesCciRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCci200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCci().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cci`;

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
      GetTimeSeriesCci200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Commodity Channel Index (CCI) endpoint provides data on the CCI values for a specified security, helping users detect potential price reversals by identifying overbought or oversold conditions. It returns a series of CCI values calculated over a specified time period, allowing users to assess the momentum of a security relative to its average price range.
   * Commodity channel index
   */
  async getTimeSeriesCci(
    requestParameters: GetTimeSeriesCciRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCci200Response> {
    const response = await this.getTimeSeriesCciRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Ceiling (CEIL) endpoint rounds each value in the input data series up to the nearest whole number. It returns a series where each original data point is adjusted to its ceiling value, which can be useful for precise calculations or when integrating with other technical indicators that require integer inputs.
   * Ceiling
   */
  async getTimeSeriesCeilRaw(
    requestParameters: GetTimeSeriesCeilRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCeil200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCeil().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ceil`;

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
      GetTimeSeriesCeil200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Ceiling (CEIL) endpoint rounds each value in the input data series up to the nearest whole number. It returns a series where each original data point is adjusted to its ceiling value, which can be useful for precise calculations or when integrating with other technical indicators that require integer inputs.
   * Ceiling
   */
  async getTimeSeriesCeil(
    requestParameters: GetTimeSeriesCeilRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCeil200Response> {
    const response = await this.getTimeSeriesCeilRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Chande Momentum Oscillator (CMO) endpoint provides data on the momentum of a security by calculating the relative strength of recent price movements. It returns a numerical value indicating whether a security is potentially overbought or oversold, assisting users in identifying possible trend reversals.
   * Chande momentum oscillator
   */
  async getTimeSeriesCmoRaw(
    requestParameters: GetTimeSeriesCmoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCmo200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCmo().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/cmo`;

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
      GetTimeSeriesCmo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Chande Momentum Oscillator (CMO) endpoint provides data on the momentum of a security by calculating the relative strength of recent price movements. It returns a numerical value indicating whether a security is potentially overbought or oversold, assisting users in identifying possible trend reversals.
   * Chande momentum oscillator
   */
  async getTimeSeriesCmo(
    requestParameters: GetTimeSeriesCmoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCmo200Response> {
    const response = await this.getTimeSeriesCmoRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Coppock Curve is a momentum oscillator used to detect potential long-term trend reversals in financial markets. It returns the calculated values of this indicator over a specified period, allowing users to identify when a security\'s price may be shifting from a downtrend to an uptrend. This endpoint is particularly useful for analyzing securities in bottoming markets.
   * Coppock curve
   */
  async getTimeSeriesCoppockRaw(
    requestParameters: GetTimeSeriesCoppockRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCoppock200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCoppock().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["wmaPeriod"] != null) {
      queryParameters["wma_period"] = requestParameters["wmaPeriod"];
    }

    if (requestParameters["longRocPeriod"] != null) {
      queryParameters["long_roc_period"] = requestParameters["longRocPeriod"];
    }

    if (requestParameters["shortRocPeriod"] != null) {
      queryParameters["short_roc_period"] = requestParameters["shortRocPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/coppock`;

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
      GetTimeSeriesCoppock200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Coppock Curve is a momentum oscillator used to detect potential long-term trend reversals in financial markets. It returns the calculated values of this indicator over a specified period, allowing users to identify when a security\'s price may be shifting from a downtrend to an uptrend. This endpoint is particularly useful for analyzing securities in bottoming markets.
   * Coppock curve
   */
  async getTimeSeriesCoppock(
    requestParameters: GetTimeSeriesCoppockRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCoppock200Response> {
    const response = await this.getTimeSeriesCoppockRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Correlation (CORREL) endpoint calculates the statistical relationship between two securities over a specified time period, returning a correlation coefficient. This coefficient ranges from -1 to 1, indicating the strength and direction of their linear relationship. A value close to 1 suggests a strong positive correlation, while a value near -1 indicates a strong negative correlation. This data is useful for identifying securities that move together or in opposite directions, aiding in strategies like diversification or pairs trading.
   * Correlation
   */
  async getTimeSeriesCorrelRaw(
    requestParameters: GetTimeSeriesCorrelRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCorrel200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCorrel().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/correl`;

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
      GetTimeSeriesCorrel200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Correlation (CORREL) endpoint calculates the statistical relationship between two securities over a specified time period, returning a correlation coefficient. This coefficient ranges from -1 to 1, indicating the strength and direction of their linear relationship. A value close to 1 suggests a strong positive correlation, while a value near -1 indicates a strong negative correlation. This data is useful for identifying securities that move together or in opposite directions, aiding in strategies like diversification or pairs trading.
   * Correlation
   */
  async getTimeSeriesCorrel(
    requestParameters: GetTimeSeriesCorrelRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCorrel200Response> {
    const response = await this.getTimeSeriesCorrelRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Connors Relative Strength Index (CRSI) endpoint provides a detailed analysis of stock momentum by combining three components: the Relative Strength Index, the Rate of Change, and the Up/Down Length. This endpoint returns a numerical value that helps identify potential trend reversals and momentum shifts in a security\'s price. Ideal for traders seeking to refine entry and exit points, the CRSI offers a nuanced view of market conditions beyond traditional RSI indicators.
   * Connors relative strength index
   */
  async getTimeSeriesCrsiRaw(
    requestParameters: GetTimeSeriesCrsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesCrsi200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesCrsi().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["rsiPeriod"] != null) {
      queryParameters["rsi_period"] = requestParameters["rsiPeriod"];
    }

    if (requestParameters["upDownLength"] != null) {
      queryParameters["up_down_length"] = requestParameters["upDownLength"];
    }

    if (requestParameters["percentRankPeriod"] != null) {
      queryParameters["percent_rank_period"] =
        requestParameters["percentRankPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/crsi`;

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
      GetTimeSeriesCrsi200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Connors Relative Strength Index (CRSI) endpoint provides a detailed analysis of stock momentum by combining three components: the Relative Strength Index, the Rate of Change, and the Up/Down Length. This endpoint returns a numerical value that helps identify potential trend reversals and momentum shifts in a security\'s price. Ideal for traders seeking to refine entry and exit points, the CRSI offers a nuanced view of market conditions beyond traditional RSI indicators.
   * Connors relative strength index
   */
  async getTimeSeriesCrsi(
    requestParameters: GetTimeSeriesCrsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesCrsi200Response> {
    const response = await this.getTimeSeriesCrsiRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Double Exponential Moving Average (DEMA) endpoint provides a data series that calculates a moving average with reduced lag by emphasizing recent price data. This endpoint returns time-series data that includes the DEMA values for a specified financial instrument, allowing users to track price trends and identify potential trading opportunities.
   * Double exponential moving average
   */
  async getTimeSeriesDemaRaw(
    requestParameters: GetTimeSeriesDemaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesDema200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesDema().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/dema`;

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
      GetTimeSeriesDema200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Double Exponential Moving Average (DEMA) endpoint provides a data series that calculates a moving average with reduced lag by emphasizing recent price data. This endpoint returns time-series data that includes the DEMA values for a specified financial instrument, allowing users to track price trends and identify potential trading opportunities.
   * Double exponential moving average
   */
  async getTimeSeriesDema(
    requestParameters: GetTimeSeriesDemaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesDema200Response> {
    const response = await this.getTimeSeriesDemaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Division (DIV) endpoint calculates the result of dividing one data series by another, providing a normalized output. It is commonly used to combine or adjust multiple technical indicators or price data for comparative analysis. This endpoint returns the division results as a time series, allowing users to easily interpret and utilize the normalized data in their financial models or charts.
   * Division
   */
  async getTimeSeriesDivRaw(
    requestParameters: GetTimeSeriesDivRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesDiv200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesDiv().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/div`;

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
      GetTimeSeriesDiv200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Division (DIV) endpoint calculates the result of dividing one data series by another, providing a normalized output. It is commonly used to combine or adjust multiple technical indicators or price data for comparative analysis. This endpoint returns the division results as a time series, allowing users to easily interpret and utilize the normalized data in their financial models or charts.
   * Division
   */
  async getTimeSeriesDiv(
    requestParameters: GetTimeSeriesDivRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesDiv200Response> {
    const response = await this.getTimeSeriesDivRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Detrended Price Oscillator (DPO) endpoint calculates and returns the DPO values for a specified financial instrument over a given time period. This endpoint helps traders by highlighting short-term price cycles and identifying potential overbought or oversold conditions without the influence of long-term trends. The response includes a series of DPO values, which can be used to assess price momentum and cyclical patterns in the market.
   * Detrended price oscillator
   */
  async getTimeSeriesDpoRaw(
    requestParameters: GetTimeSeriesDpoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesDpo200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesDpo().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["centered"] != null) {
      queryParameters["centered"] = requestParameters["centered"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/dpo`;

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
      GetTimeSeriesDpo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Detrended Price Oscillator (DPO) endpoint calculates and returns the DPO values for a specified financial instrument over a given time period. This endpoint helps traders by highlighting short-term price cycles and identifying potential overbought or oversold conditions without the influence of long-term trends. The response includes a series of DPO values, which can be used to assess price momentum and cyclical patterns in the market.
   * Detrended price oscillator
   */
  async getTimeSeriesDpo(
    requestParameters: GetTimeSeriesDpoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesDpo200Response> {
    const response = await this.getTimeSeriesDpoRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Retrieve the Directional Movement Index (DX) values for a given security to assess the strength of its positive and negative price movements. This endpoint provides a time series of DX values, which are useful for evaluating the momentum and trend direction of the security over a specified period.
   * Directional movement index
   */
  async getTimeSeriesDxRaw(
    requestParameters: GetTimeSeriesDxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesDx200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesDx().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/dx`;

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
      GetTimeSeriesDx200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * Retrieve the Directional Movement Index (DX) values for a given security to assess the strength of its positive and negative price movements. This endpoint provides a time series of DX values, which are useful for evaluating the momentum and trend direction of the security over a specified period.
   * Directional movement index
   */
  async getTimeSeriesDx(
    requestParameters: GetTimeSeriesDxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesDx200Response> {
    const response = await this.getTimeSeriesDxRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Exponential Moving Average (EMA) endpoint calculates the EMA for a specified financial instrument over a given time period. It returns a time series of EMA values, which highlight recent price trends by weighting recent data more heavily. This is useful for traders seeking to identify trend directions and potential trade opportunities based on recent price movements.
   * Exponential moving average
   */
  async getTimeSeriesEmaRaw(
    requestParameters: GetTimeSeriesEmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesEma200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesEma().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ema`;

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
      GetTimeSeriesEma200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Exponential Moving Average (EMA) endpoint calculates the EMA for a specified financial instrument over a given time period. It returns a time series of EMA values, which highlight recent price trends by weighting recent data more heavily. This is useful for traders seeking to identify trend directions and potential trade opportunities based on recent price movements.
   * Exponential moving average
   */
  async getTimeSeriesEma(
    requestParameters: GetTimeSeriesEmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesEma200Response> {
    const response = await this.getTimeSeriesEmaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Exponential (EXP) Indicator endpoint computes the exponential value of a specified input, providing a numerical result that is commonly applied in complex mathematical and financial computations.
   * Exponential
   */
  async getTimeSeriesExpRaw(
    requestParameters: GetTimeSeriesExpRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesExp200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesExp().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/exp`;

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
      GetTimeSeriesExp200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Exponential (EXP) Indicator endpoint computes the exponential value of a specified input, providing a numerical result that is commonly applied in complex mathematical and financial computations.
   * Exponential
   */
  async getTimeSeriesExp(
    requestParameters: GetTimeSeriesExpRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesExp200Response> {
    const response = await this.getTimeSeriesExpRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Floor (FLOOR) endpoint processes numerical input data by rounding each value down to the nearest integer. It returns a series of adjusted data points that can be used for further calculations or combined with other datasets. This endpoint is useful for users needing to simplify data by removing decimal precision, aiding in scenarios where integer values are required.
   * Floor
   */
  async getTimeSeriesFloorRaw(
    requestParameters: GetTimeSeriesFloorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesFloor200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesFloor().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/floor`;

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
      GetTimeSeriesFloor200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Floor (FLOOR) endpoint processes numerical input data by rounding each value down to the nearest integer. It returns a series of adjusted data points that can be used for further calculations or combined with other datasets. This endpoint is useful for users needing to simplify data by removing decimal precision, aiding in scenarios where integer values are required.
   * Floor
   */
  async getTimeSeriesFloor(
    requestParameters: GetTimeSeriesFloorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesFloor200Response> {
    const response = await this.getTimeSeriesFloorRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The heikinashi candles endpoint provides smoothed candlestick data by averaging price information to reduce market noise. It returns a series of Heikin Ashi candles, which include open, high, low, and close values, making it easier to identify trends and potential reversals in asset prices. This endpoint is useful for traders and analysts seeking a clearer view of market trends without the volatility present in traditional candlestick charts.
   * Heikinashi candles
   */
  async getTimeSeriesHeikinashiCandlesRaw(
    requestParameters: GetTimeSeriesHeikinashiCandlesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHeikinashiCandles200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHeikinashiCandles().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/heikinashicandles`;

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
      GetTimeSeriesHeikinashiCandles200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The heikinashi candles endpoint provides smoothed candlestick data by averaging price information to reduce market noise. It returns a series of Heikin Ashi candles, which include open, high, low, and close values, making it easier to identify trends and potential reversals in asset prices. This endpoint is useful for traders and analysts seeking a clearer view of market trends without the volatility present in traditional candlestick charts.
   * Heikinashi candles
   */
  async getTimeSeriesHeikinashiCandles(
    requestParameters: GetTimeSeriesHeikinashiCandlesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHeikinashiCandles200Response> {
    const response = await this.getTimeSeriesHeikinashiCandlesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The High, Low, Close Average (HLC3) endpoint calculates and returns the average of a security\'s high, low, and close prices for a specified period. This endpoint provides a straightforward metric to assess price trends, helping users quickly identify the average price level of a security over time.
   * High, low, close average
   */
  async getTimeSeriesHlc3Raw(
    requestParameters: GetTimeSeriesHlc3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHlc3200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHlc3().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/hlc3`;

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
      GetTimeSeriesHlc3200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The High, Low, Close Average (HLC3) endpoint calculates and returns the average of a security\'s high, low, and close prices for a specified period. This endpoint provides a straightforward metric to assess price trends, helping users quickly identify the average price level of a security over time.
   * High, low, close average
   */
  async getTimeSeriesHlc3(
    requestParameters: GetTimeSeriesHlc3Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHlc3200Response> {
    const response = await this.getTimeSeriesHlc3Raw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Dominant Cycle Period (HT_DCPERIOD) endpoint calculates the dominant cycle length of a financial instrument\'s price data. It returns a numerical value representing the cycle period, which traders can use to identify prevailing market cycles and adjust their trading strategies accordingly.
   * Hilbert transform dominant cycle period
   */
  async getTimeSeriesHtDcPeriodRaw(
    requestParameters: GetTimeSeriesHtDcPeriodRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtDcPeriod200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtDcPeriod().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_dcperiod`;

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
      GetTimeSeriesHtDcPeriod200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Dominant Cycle Period (HT_DCPERIOD) endpoint calculates the dominant cycle length of a financial instrument\'s price data. It returns a numerical value representing the cycle period, which traders can use to identify prevailing market cycles and adjust their trading strategies accordingly.
   * Hilbert transform dominant cycle period
   */
  async getTimeSeriesHtDcPeriod(
    requestParameters: GetTimeSeriesHtDcPeriodRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtDcPeriod200Response> {
    const response = await this.getTimeSeriesHtDcPeriodRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Dominant Cycle Phase (HT_DCPHASE) endpoint provides the current phase of the dominant market cycle for a given financial instrument. It returns numerical data indicating the phase angle, which can be used by traders to identify potential market entry and exit points based on cyclical patterns.
   * Hilbert transform dominant cycle phase
   */
  async getTimeSeriesHtDcPhaseRaw(
    requestParameters: GetTimeSeriesHtDcPhaseRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtDcPhase200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtDcPhase().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_dcphase`;

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
      GetTimeSeriesHtDcPhase200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Dominant Cycle Phase (HT_DCPHASE) endpoint provides the current phase of the dominant market cycle for a given financial instrument. It returns numerical data indicating the phase angle, which can be used by traders to identify potential market entry and exit points based on cyclical patterns.
   * Hilbert transform dominant cycle phase
   */
  async getTimeSeriesHtDcPhase(
    requestParameters: GetTimeSeriesHtDcPhaseRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtDcPhase200Response> {
    const response = await this.getTimeSeriesHtDcPhaseRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Phasor Components (HT_PHASOR) endpoint analyzes a price series to return two key components: in-phase and quadrature. These components help identify cyclical patterns and the direction of trends in the data. Use this endpoint to gain precise insights into the timing and strength of market cycles, enhancing your ability to track and predict price movements.
   * Hilbert transform phasor components
   */
  async getTimeSeriesHtPhasorRaw(
    requestParameters: GetTimeSeriesHtPhasorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtPhasor200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtPhasor().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_phasor`;

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
      GetTimeSeriesHtPhasor200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Phasor Components (HT_PHASOR) endpoint analyzes a price series to return two key components: in-phase and quadrature. These components help identify cyclical patterns and the direction of trends in the data. Use this endpoint to gain precise insights into the timing and strength of market cycles, enhancing your ability to track and predict price movements.
   * Hilbert transform phasor components
   */
  async getTimeSeriesHtPhasor(
    requestParameters: GetTimeSeriesHtPhasorRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtPhasor200Response> {
    const response = await this.getTimeSeriesHtPhasorRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Sine Wave (HT_SINE) endpoint provides sine and cosine wave components derived from the dominant market cycle. This data helps traders pinpoint potential market turning points and assess trend directions by analyzing cyclical patterns.
   * Hilbert transform sine wave
   */
  async getTimeSeriesHtSineRaw(
    requestParameters: GetTimeSeriesHtSineRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtSine200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtSine().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_sine`;

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
      GetTimeSeriesHtSine200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Sine Wave (HT_SINE) endpoint provides sine and cosine wave components derived from the dominant market cycle. This data helps traders pinpoint potential market turning points and assess trend directions by analyzing cyclical patterns.
   * Hilbert transform sine wave
   */
  async getTimeSeriesHtSine(
    requestParameters: GetTimeSeriesHtSineRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtSine200Response> {
    const response = await this.getTimeSeriesHtSineRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Trend vs Cycle Mode (HT_TRENDMODE) endpoint identifies whether a market is in a trending or cyclical phase. It returns data indicating the current market phase, allowing users to adjust their trading strategies based on the prevailing conditions.
   * Hilbert transform trend vs cycle mode
   */
  async getTimeSeriesHtTrendModeRaw(
    requestParameters: GetTimeSeriesHtTrendModeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtTrendMode200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtTrendMode().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_trendmode`;

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
      GetTimeSeriesHtTrendMode200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Trend vs Cycle Mode (HT_TRENDMODE) endpoint identifies whether a market is in a trending or cyclical phase. It returns data indicating the current market phase, allowing users to adjust their trading strategies based on the prevailing conditions.
   * Hilbert transform trend vs cycle mode
   */
  async getTimeSeriesHtTrendMode(
    requestParameters: GetTimeSeriesHtTrendModeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtTrendMode200Response> {
    const response = await this.getTimeSeriesHtTrendModeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Hilbert Transform Instantaneous Trendline (HT_TRENDLINE) endpoint provides a smoothed moving average that aligns with the dominant market cycle. It returns data points that help traders identify current market trends and determine potential entry or exit points in trading.
   * Hilbert transform instantaneous trendline
   */
  async getTimeSeriesHtTrendlineRaw(
    requestParameters: GetTimeSeriesHtTrendlineRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesHtTrendline200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesHtTrendline().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ht_trendline`;

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
      GetTimeSeriesHtTrendline200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Hilbert Transform Instantaneous Trendline (HT_TRENDLINE) endpoint provides a smoothed moving average that aligns with the dominant market cycle. It returns data points that help traders identify current market trends and determine potential entry or exit points in trading.
   * Hilbert transform instantaneous trendline
   */
  async getTimeSeriesHtTrendline(
    requestParameters: GetTimeSeriesHtTrendlineRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesHtTrendline200Response> {
    const response = await this.getTimeSeriesHtTrendlineRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Ichimoku Cloud endpoint provides data on the Ichimoku Kinko Hyo indicator, offering insights into trend direction, support and resistance levels, and potential entry and exit points. It returns key components such as the Tenkan-sen, Kijun-sen, Senkou Span A, Senkou Span B, and Chikou Span. This data helps users evaluate market trends and identify strategic trading opportunities.
   * Ichimoku cloud
   */
  async getTimeSeriesIchimokuRaw(
    requestParameters: GetTimeSeriesIchimokuRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesIchimoku200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesIchimoku().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["conversionLinePeriod"] != null) {
      queryParameters["conversion_line_period"] =
        requestParameters["conversionLinePeriod"];
    }

    if (requestParameters["baseLinePeriod"] != null) {
      queryParameters["base_line_period"] = requestParameters["baseLinePeriod"];
    }

    if (requestParameters["leadingSpanBPeriod"] != null) {
      queryParameters["leading_span_b_period"] =
        requestParameters["leadingSpanBPeriod"];
    }

    if (requestParameters["laggingSpanPeriod"] != null) {
      queryParameters["lagging_span_period"] =
        requestParameters["laggingSpanPeriod"];
    }

    if (requestParameters["includeAheadSpanPeriod"] != null) {
      queryParameters["include_ahead_span_period"] =
        requestParameters["includeAheadSpanPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ichimoku`;

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
      GetTimeSeriesIchimoku200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Ichimoku Cloud endpoint provides data on the Ichimoku Kinko Hyo indicator, offering insights into trend direction, support and resistance levels, and potential entry and exit points. It returns key components such as the Tenkan-sen, Kijun-sen, Senkou Span A, Senkou Span B, and Chikou Span. This data helps users evaluate market trends and identify strategic trading opportunities.
   * Ichimoku cloud
   */
  async getTimeSeriesIchimoku(
    requestParameters: GetTimeSeriesIchimokuRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesIchimoku200Response> {
    const response = await this.getTimeSeriesIchimokuRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Kaufman Adaptive Moving Average (KAMA) endpoint calculates the KAMA for a specified financial instrument, returning a time series of values that reflect the average price adjusted for market volatility. This endpoint helps users identify trends by smoothing out price fluctuations while remaining sensitive to significant price movements.
   * Kaufman adaptive moving average
   */
  async getTimeSeriesKamaRaw(
    requestParameters: GetTimeSeriesKamaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesKama200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesKama().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/kama`;

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
      GetTimeSeriesKama200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Kaufman Adaptive Moving Average (KAMA) endpoint calculates the KAMA for a specified financial instrument, returning a time series of values that reflect the average price adjusted for market volatility. This endpoint helps users identify trends by smoothing out price fluctuations while remaining sensitive to significant price movements.
   * Kaufman adaptive moving average
   */
  async getTimeSeriesKama(
    requestParameters: GetTimeSeriesKamaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesKama200Response> {
    const response = await this.getTimeSeriesKamaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Keltner Channel endpoint provides data for a volatility-based technical indicator that combines the Exponential Moving Average (EMA) and the Average True Range (ATR) to form a channel around a security\'s price. This endpoint returns the upper, middle, and lower bands of the channel, which can be used to identify potential overbought or oversold conditions, assess trend direction, and detect possible price breakouts.
   * Keltner channel
   */
  async getTimeSeriesKeltnerRaw(
    requestParameters: GetTimeSeriesKeltnerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesKeltner200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesKeltner().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["atrTimePeriod"] != null) {
      queryParameters["atr_time_period"] = requestParameters["atrTimePeriod"];
    }

    if (requestParameters["multiplier"] != null) {
      queryParameters["multiplier"] = requestParameters["multiplier"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/keltner`;

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
      GetTimeSeriesKeltner200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Keltner Channel endpoint provides data for a volatility-based technical indicator that combines the Exponential Moving Average (EMA) and the Average True Range (ATR) to form a channel around a security\'s price. This endpoint returns the upper, middle, and lower bands of the channel, which can be used to identify potential overbought or oversold conditions, assess trend direction, and detect possible price breakouts.
   * Keltner channel
   */
  async getTimeSeriesKeltner(
    requestParameters: GetTimeSeriesKeltnerRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesKeltner200Response> {
    const response = await this.getTimeSeriesKeltnerRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Know Sure Thing (KST) endpoint provides a momentum oscillator that combines four smoothed rates of change into a single trend-following indicator. This endpoint returns data that helps users identify potential trend reversals, as well as overbought or oversold conditions in the market.
   * Know sure thing
   */
  async getTimeSeriesKstRaw(
    requestParameters: GetTimeSeriesKstRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesKst200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesKst().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["rocPeriod1"] != null) {
      queryParameters["roc_period_1"] = requestParameters["rocPeriod1"];
    }

    if (requestParameters["rocPeriod2"] != null) {
      queryParameters["roc_period_2"] = requestParameters["rocPeriod2"];
    }

    if (requestParameters["rocPeriod3"] != null) {
      queryParameters["roc_period_3"] = requestParameters["rocPeriod3"];
    }

    if (requestParameters["rocPeriod4"] != null) {
      queryParameters["roc_period_4"] = requestParameters["rocPeriod4"];
    }

    if (requestParameters["smaPeriod1"] != null) {
      queryParameters["sma_period_1"] = requestParameters["smaPeriod1"];
    }

    if (requestParameters["smaPeriod2"] != null) {
      queryParameters["sma_period_2"] = requestParameters["smaPeriod2"];
    }

    if (requestParameters["smaPeriod3"] != null) {
      queryParameters["sma_period_3"] = requestParameters["smaPeriod3"];
    }

    if (requestParameters["smaPeriod4"] != null) {
      queryParameters["sma_period_4"] = requestParameters["smaPeriod4"];
    }

    if (requestParameters["signalPeriod"] != null) {
      queryParameters["signal_period"] = requestParameters["signalPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/kst`;

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
      GetTimeSeriesKst200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Know Sure Thing (KST) endpoint provides a momentum oscillator that combines four smoothed rates of change into a single trend-following indicator. This endpoint returns data that helps users identify potential trend reversals, as well as overbought or oversold conditions in the market.
   * Know sure thing
   */
  async getTimeSeriesKst(
    requestParameters: GetTimeSeriesKstRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesKst200Response> {
    const response = await this.getTimeSeriesKstRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Linear Regression endpoint (LINEARREG) calculates the best-fit straight line through a series of financial data points. It returns the slope and intercept values of this line, allowing users to determine the overall direction of a market trend and identify potential support or resistance levels.
   * Linear regression
   */
  async getTimeSeriesLinearRegRaw(
    requestParameters: GetTimeSeriesLinearRegRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLinearReg200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLinearReg().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/linearreg`;

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
      GetTimeSeriesLinearReg200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Linear Regression endpoint (LINEARREG) calculates the best-fit straight line through a series of financial data points. It returns the slope and intercept values of this line, allowing users to determine the overall direction of a market trend and identify potential support or resistance levels.
   * Linear regression
   */
  async getTimeSeriesLinearReg(
    requestParameters: GetTimeSeriesLinearRegRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLinearReg200Response> {
    const response = await this.getTimeSeriesLinearRegRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Linear Regression Angle endpoint (LINEARREGANGLE) calculates the angle of the linear regression line for a given time series of stock prices. It returns the slope of the trend line, expressed in degrees, which helps users identify the direction and steepness of a trend over a specified period. This data is useful for detecting upward or downward trends in asset prices.
   * Linear regression angle
   */
  async getTimeSeriesLinearRegAngleRaw(
    requestParameters: GetTimeSeriesLinearRegAngleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLinearRegAngle200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLinearRegAngle().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/linearregangle`;

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
      GetTimeSeriesLinearRegAngle200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Linear Regression Angle endpoint (LINEARREGANGLE) calculates the angle of the linear regression line for a given time series of stock prices. It returns the slope of the trend line, expressed in degrees, which helps users identify the direction and steepness of a trend over a specified period. This data is useful for detecting upward or downward trends in asset prices.
   * Linear regression angle
   */
  async getTimeSeriesLinearRegAngle(
    requestParameters: GetTimeSeriesLinearRegAngleRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLinearRegAngle200Response> {
    const response = await this.getTimeSeriesLinearRegAngleRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Linear Regression Intercept endpoint (LINEARREGINTERCEPT) calculates the y-intercept of a linear regression line for a given dataset. It returns the value where the regression line crosses the y-axis, providing a numerical reference point for understanding the starting position of a trend over a specified period. This can be useful for users needing to establish baseline values in their data analysis.
   * Linear regression intercept
   */
  async getTimeSeriesLinearRegInterceptRaw(
    requestParameters: GetTimeSeriesLinearRegInterceptRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLinearRegIntercept200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLinearRegIntercept().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/linearregintercept`;

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
      GetTimeSeriesLinearRegIntercept200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Linear Regression Intercept endpoint (LINEARREGINTERCEPT) calculates the y-intercept of a linear regression line for a given dataset. It returns the value where the regression line crosses the y-axis, providing a numerical reference point for understanding the starting position of a trend over a specified period. This can be useful for users needing to establish baseline values in their data analysis.
   * Linear regression intercept
   */
  async getTimeSeriesLinearRegIntercept(
    requestParameters: GetTimeSeriesLinearRegInterceptRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLinearRegIntercept200Response> {
    const response = await this.getTimeSeriesLinearRegInterceptRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Linear Regression Slope endpoint (LINEARREGSLOPE) calculates the slope of a linear regression line for a given dataset, reflecting the rate of change in the data trend over a specified period. It returns a numerical value representing this slope, which can be used to assess the direction and strength of the trend in the dataset.
   * Linear regression slope
   */
  async getTimeSeriesLinearRegSlopeRaw(
    requestParameters: GetTimeSeriesLinearRegSlopeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLinearRegSlope200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLinearRegSlope().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/linearregslope`;

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
      GetTimeSeriesLinearRegSlope200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Linear Regression Slope endpoint (LINEARREGSLOPE) calculates the slope of a linear regression line for a given dataset, reflecting the rate of change in the data trend over a specified period. It returns a numerical value representing this slope, which can be used to assess the direction and strength of the trend in the dataset.
   * Linear regression slope
   */
  async getTimeSeriesLinearRegSlope(
    requestParameters: GetTimeSeriesLinearRegSlopeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLinearRegSlope200Response> {
    const response = await this.getTimeSeriesLinearRegSlopeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Natural Logarithm (LN) endpoint computes the natural logarithm of a specified input value, returning a numerical result. This endpoint is useful for users needing to perform logarithmic transformations on data, which can be applied in various financial calculations and advanced mathematical analyses.
   * Natural logarithm
   */
  async getTimeSeriesLnRaw(
    requestParameters: GetTimeSeriesLnRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLn200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLn().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ln`;

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
      GetTimeSeriesLn200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Natural Logarithm (LN) endpoint computes the natural logarithm of a specified input value, returning a numerical result. This endpoint is useful for users needing to perform logarithmic transformations on data, which can be applied in various financial calculations and advanced mathematical analyses.
   * Natural logarithm
   */
  async getTimeSeriesLn(
    requestParameters: GetTimeSeriesLnRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLn200Response> {
    const response = await this.getTimeSeriesLnRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Base-10 Logarithm (LOG10) endpoint computes the base-10 logarithm of a specified input value. It returns a numerical result that represents the power to which the number 10 must be raised to obtain the input value. This endpoint is useful for transforming data into a logarithmic scale, which can simplify the analysis of exponential growth patterns or compress large ranges of data in financial calculations.
   * Base-10 logarithm
   */
  async getTimeSeriesLog10Raw(
    requestParameters: GetTimeSeriesLog10Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesLog10200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesLog10().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/log10`;

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
      GetTimeSeriesLog10200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Base-10 Logarithm (LOG10) endpoint computes the base-10 logarithm of a specified input value. It returns a numerical result that represents the power to which the number 10 must be raised to obtain the input value. This endpoint is useful for transforming data into a logarithmic scale, which can simplify the analysis of exponential growth patterns or compress large ranges of data in financial calculations.
   * Base-10 logarithm
   */
  async getTimeSeriesLog10(
    requestParameters: GetTimeSeriesLog10Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesLog10200Response> {
    const response = await this.getTimeSeriesLog10Raw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Moving Average (MA) endpoint provides the average price of a security over a specified time frame, offering a smoothed representation of price data. This endpoint returns the calculated moving average values, which can assist users in identifying price trends and potential support or resistance levels in the market.
   * Moving average
   */
  async getTimeSeriesMaRaw(
    requestParameters: GetTimeSeriesMaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMa200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMa().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ma`;

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
      GetTimeSeriesMa200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Moving Average (MA) endpoint provides the average price of a security over a specified time frame, offering a smoothed representation of price data. This endpoint returns the calculated moving average values, which can assist users in identifying price trends and potential support or resistance levels in the market.
   * Moving average
   */
  async getTimeSeriesMa(
    requestParameters: GetTimeSeriesMaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMa200Response> {
    const response = await this.getTimeSeriesMaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This endpoint calculates the Moving Average Convergence Divergence (MACD) for a specified financial instrument. It returns the MACD line, signal line, and histogram values, which help users identify potential trend reversals and trading opportunities by analyzing the relationship between two moving averages.
   * Moving average convergence divergence
   */
  async getTimeSeriesMacdRaw(
    requestParameters: GetTimeSeriesMacdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMacd200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMacd().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["signalPeriod"] != null) {
      queryParameters["signal_period"] = requestParameters["signalPeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/macd`;

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
      GetTimeSeriesMacd200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * This endpoint calculates the Moving Average Convergence Divergence (MACD) for a specified financial instrument. It returns the MACD line, signal line, and histogram values, which help users identify potential trend reversals and trading opportunities by analyzing the relationship between two moving averages.
   * Moving average convergence divergence
   */
  async getTimeSeriesMacd(
    requestParameters: GetTimeSeriesMacdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMacd200Response> {
    const response = await this.getTimeSeriesMacdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Moving Average Convergence Divergence Extension (MACDEXT) endpoint provides a customizable version of the MACD indicator, allowing users to specify different moving average types and parameters. It returns data that includes the MACD line, signal line, and histogram values, tailored to the user\'s chosen settings. This endpoint is useful for traders who require flexibility in analyzing price trends and momentum by adjusting the calculation methods to fit their specific trading strategies.
   * Moving average convergence divergence extension
   */
  async getTimeSeriesMacdExtRaw(
    requestParameters: GetTimeSeriesMacdExtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMacdExt200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMacdExt().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["fastMaType"] != null) {
      queryParameters["fast_ma_type"] = requestParameters["fastMaType"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["slowMaType"] != null) {
      queryParameters["slow_ma_type"] = requestParameters["slowMaType"];
    }

    if (requestParameters["signalPeriod"] != null) {
      queryParameters["signal_period"] = requestParameters["signalPeriod"];
    }

    if (requestParameters["signalMaType"] != null) {
      queryParameters["signal_ma_type"] = requestParameters["signalMaType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/macdext`;

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
      GetTimeSeriesMacdExt200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Moving Average Convergence Divergence Extension (MACDEXT) endpoint provides a customizable version of the MACD indicator, allowing users to specify different moving average types and parameters. It returns data that includes the MACD line, signal line, and histogram values, tailored to the user\'s chosen settings. This endpoint is useful for traders who require flexibility in analyzing price trends and momentum by adjusting the calculation methods to fit their specific trading strategies.
   * Moving average convergence divergence extension
   */
  async getTimeSeriesMacdExt(
    requestParameters: GetTimeSeriesMacdExtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMacdExt200Response> {
    const response = await this.getTimeSeriesMacdExtRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Moving Average Convergence Divergence (MACD) Slope endpoint provides the rate of change of the MACD line for a given security. It returns data on how quickly the MACD line is rising or falling, offering insights into the momentum shifts in the security\'s price. This information is useful for traders looking to gauge the speed of price movements and potential trend reversals.
   * Moving average convergence divergence slope
   */
  async getTimeSeriesMacdSlopeRaw(
    requestParameters: GetTimeSeriesMacdSlopeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMacdSlope200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMacdSlope().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["signalPeriod"] != null) {
      queryParameters["signal_period"] = requestParameters["signalPeriod"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/macd_slope`;

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
      GetTimeSeriesMacdSlope200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Moving Average Convergence Divergence (MACD) Slope endpoint provides the rate of change of the MACD line for a given security. It returns data on how quickly the MACD line is rising or falling, offering insights into the momentum shifts in the security\'s price. This information is useful for traders looking to gauge the speed of price movements and potential trend reversals.
   * Moving average convergence divergence slope
   */
  async getTimeSeriesMacdSlope(
    requestParameters: GetTimeSeriesMacdSlopeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMacdSlope200Response> {
    const response = await this.getTimeSeriesMacdSlopeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The MESA Adaptive Moving Average (MAMA) endpoint calculates a moving average that adjusts to the dominant market cycle, offering a balance between quick response to price changes and noise reduction. It returns data that includes the adaptive moving average values, which can be used to identify trends and potential reversal points.
   * MESA adaptive moving average
   */
  async getTimeSeriesMamaRaw(
    requestParameters: GetTimeSeriesMamaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMama200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMama().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastLimit"] != null) {
      queryParameters["fast_limit"] = requestParameters["fastLimit"];
    }

    if (requestParameters["slowLimit"] != null) {
      queryParameters["slow_limit"] = requestParameters["slowLimit"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mama`;

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
      GetTimeSeriesMama200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The MESA Adaptive Moving Average (MAMA) endpoint calculates a moving average that adjusts to the dominant market cycle, offering a balance between quick response to price changes and noise reduction. It returns data that includes the adaptive moving average values, which can be used to identify trends and potential reversal points.
   * MESA adaptive moving average
   */
  async getTimeSeriesMama(
    requestParameters: GetTimeSeriesMamaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMama200Response> {
    const response = await this.getTimeSeriesMamaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Maximum (MAX) endpoint calculates and returns the highest value within a specified data series over a given period. This endpoint is useful for identifying potential resistance levels or detecting extreme price movements in financial data.
   * Maximum
   */
  async getTimeSeriesMaxRaw(
    requestParameters: GetTimeSeriesMaxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMax200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMax().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/max`;

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
      GetTimeSeriesMax200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Maximum (MAX) endpoint calculates and returns the highest value within a specified data series over a given period. This endpoint is useful for identifying potential resistance levels or detecting extreme price movements in financial data.
   * Maximum
   */
  async getTimeSeriesMax(
    requestParameters: GetTimeSeriesMaxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMax200Response> {
    const response = await this.getTimeSeriesMaxRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Maximum Index (MAXINDEX) endpoint identifies the position of the highest value within a specified data series over a given time frame. It returns the index where the peak value occurs, allowing users to pinpoint when the maximum price or value was reached in the series. This is useful for tracking the timing of significant peaks in financial data.
   * Maximum Index
   */
  async getTimeSeriesMaxIndexRaw(
    requestParameters: GetTimeSeriesMaxIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMaxIndex200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMaxIndex().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/maxindex`;

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
      GetTimeSeriesMaxIndex200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Maximum Index (MAXINDEX) endpoint identifies the position of the highest value within a specified data series over a given time frame. It returns the index where the peak value occurs, allowing users to pinpoint when the maximum price or value was reached in the series. This is useful for tracking the timing of significant peaks in financial data.
   * Maximum Index
   */
  async getTimeSeriesMaxIndex(
    requestParameters: GetTimeSeriesMaxIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMaxIndex200Response> {
    const response = await this.getTimeSeriesMaxIndexRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * This endpoint calculates the McGinley Dynamic (MCGINLEY_DYNAMIC) indicator, which provides a refined moving average that adapts to market volatility. This endpoint returns data that reflects smoother price trends and identifies potential support or resistance levels more accurately than traditional moving averages. It is useful for users seeking to track price movements with reduced lag and enhanced responsiveness to market changes.
   * McGinley dynamic indicator
   */
  async getTimeSeriesMcGinleyDynamicRaw(
    requestParameters: GetTimeSeriesMcGinleyDynamicRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMcGinleyDynamic200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMcGinleyDynamic().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mcginley_dynamic`;

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
      GetTimeSeriesMcGinleyDynamic200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * This endpoint calculates the McGinley Dynamic (MCGINLEY_DYNAMIC) indicator, which provides a refined moving average that adapts to market volatility. This endpoint returns data that reflects smoother price trends and identifies potential support or resistance levels more accurately than traditional moving averages. It is useful for users seeking to track price movements with reduced lag and enhanced responsiveness to market changes.
   * McGinley dynamic indicator
   */
  async getTimeSeriesMcGinleyDynamic(
    requestParameters: GetTimeSeriesMcGinleyDynamicRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMcGinleyDynamic200Response> {
    const response = await this.getTimeSeriesMcGinleyDynamicRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Median Price (MEDPRICE) endpoint calculates and returns the average of the high and low prices of a security for a specified period. This endpoint provides a simplified view of price movements, helping users quickly assess price trends by focusing on the midpoint of price action.
   * Median price
   */
  async getTimeSeriesMedPriceRaw(
    requestParameters: GetTimeSeriesMedPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMedPrice200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMedPrice().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/medprice`;

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
      GetTimeSeriesMedPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Median Price (MEDPRICE) endpoint calculates and returns the average of the high and low prices of a security for a specified period. This endpoint provides a simplified view of price movements, helping users quickly assess price trends by focusing on the midpoint of price action.
   * Median price
   */
  async getTimeSeriesMedPrice(
    requestParameters: GetTimeSeriesMedPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMedPrice200Response> {
    const response = await this.getTimeSeriesMedPriceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Money Flow Index (MFI) endpoint provides a volume-weighted momentum oscillator that quantifies buying and selling pressure by analyzing positive and negative money flow. It returns data indicating potential overbought or oversold conditions in a financial asset, aiding users in understanding market trends and price movements.
   * Money flow index
   */
  async getTimeSeriesMfiRaw(
    requestParameters: GetTimeSeriesMfiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMfi200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMfi().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mfi`;

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
      GetTimeSeriesMfi200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Money Flow Index (MFI) endpoint provides a volume-weighted momentum oscillator that quantifies buying and selling pressure by analyzing positive and negative money flow. It returns data indicating potential overbought or oversold conditions in a financial asset, aiding users in understanding market trends and price movements.
   * Money flow index
   */
  async getTimeSeriesMfi(
    requestParameters: GetTimeSeriesMfiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMfi200Response> {
    const response = await this.getTimeSeriesMfiRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Midpoint (MIDPOINT) endpoint calculates the average value between the highest and lowest prices of a financial instrument over a specified period. It returns a time series of midpoint values, which can help users identify price trends and smooth out short-term fluctuations in the data.
   * Midpoint
   */
  async getTimeSeriesMidPointRaw(
    requestParameters: GetTimeSeriesMidPointRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMidPoint200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMidPoint().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/midpoint`;

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
      GetTimeSeriesMidPoint200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Midpoint (MIDPOINT) endpoint calculates the average value between the highest and lowest prices of a financial instrument over a specified period. It returns a time series of midpoint values, which can help users identify price trends and smooth out short-term fluctuations in the data.
   * Midpoint
   */
  async getTimeSeriesMidPoint(
    requestParameters: GetTimeSeriesMidPointRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMidPoint200Response> {
    const response = await this.getTimeSeriesMidPointRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Midprice (MIDPRICE) endpoint calculates and returns the average of a financial instrument\'s highest and lowest prices over a specified time period. This data provides a smoothed representation of price movements, helping users identify potential support or resistance levels in the market.
   * Midprice
   */
  async getTimeSeriesMidPriceRaw(
    requestParameters: GetTimeSeriesMidPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMidPrice200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMidPrice().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/midprice`;

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
      GetTimeSeriesMidPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Midprice (MIDPRICE) endpoint calculates and returns the average of a financial instrument\'s highest and lowest prices over a specified time period. This data provides a smoothed representation of price movements, helping users identify potential support or resistance levels in the market.
   * Midprice
   */
  async getTimeSeriesMidPrice(
    requestParameters: GetTimeSeriesMidPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMidPrice200Response> {
    const response = await this.getTimeSeriesMidPriceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minimum (MIN) Indicator endpoint provides the lowest value of a specified data series over a chosen time period. This endpoint is useful for identifying potential support levels or detecting extreme price movements in financial data.
   * Minimum
   */
  async getTimeSeriesMinRaw(
    requestParameters: GetTimeSeriesMinRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMin200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMin().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/min`;

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
      GetTimeSeriesMin200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minimum (MIN) Indicator endpoint provides the lowest value of a specified data series over a chosen time period. This endpoint is useful for identifying potential support levels or detecting extreme price movements in financial data.
   * Minimum
   */
  async getTimeSeriesMin(
    requestParameters: GetTimeSeriesMinRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMin200Response> {
    const response = await this.getTimeSeriesMinRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minimum Index (MININDEX) endpoint identifies the position of the lowest value within a specified data series over a given time frame. It returns the index number corresponding to the earliest occurrence of this minimum value. This is useful for pinpointing when the lowest price or value occurred in a dataset, aiding in time-based analysis of data trends.
   * Minimum index
   */
  async getTimeSeriesMinIndexRaw(
    requestParameters: GetTimeSeriesMinIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMinIndex200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMinIndex().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/minindex`;

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
      GetTimeSeriesMinIndex200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minimum Index (MININDEX) endpoint identifies the position of the lowest value within a specified data series over a given time frame. It returns the index number corresponding to the earliest occurrence of this minimum value. This is useful for pinpointing when the lowest price or value occurred in a dataset, aiding in time-based analysis of data trends.
   * Minimum index
   */
  async getTimeSeriesMinIndex(
    requestParameters: GetTimeSeriesMinIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMinIndex200Response> {
    const response = await this.getTimeSeriesMinIndexRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minimum and Maximum (MINMAX) endpoint identifies the lowest and highest values within a specified time frame for a given data series. It returns these extreme values, which can be used to detect potential support and resistance levels or significant price fluctuations in the data.
   * Minimum and maximum
   */
  async getTimeSeriesMinMaxRaw(
    requestParameters: GetTimeSeriesMinMaxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMinMax200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMinMax().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/minmax`;

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
      GetTimeSeriesMinMax200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minimum and Maximum (MINMAX) endpoint identifies the lowest and highest values within a specified time frame for a given data series. It returns these extreme values, which can be used to detect potential support and resistance levels or significant price fluctuations in the data.
   * Minimum and maximum
   */
  async getTimeSeriesMinMax(
    requestParameters: GetTimeSeriesMinMaxRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMinMax200Response> {
    const response = await this.getTimeSeriesMinMaxRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minimum and Maximum Index (MINMAXINDEX) endpoint identifies the positions of the lowest and highest values within a specified data series period. It returns indices that indicate when these extreme values occur, allowing users to pinpoint significant price changes over time.
   * Minimum and maximum index
   */
  async getTimeSeriesMinMaxIndexRaw(
    requestParameters: GetTimeSeriesMinMaxIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMinMaxIndex200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMinMaxIndex().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/minmaxindex`;

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
      GetTimeSeriesMinMaxIndex200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minimum and Maximum Index (MINMAXINDEX) endpoint identifies the positions of the lowest and highest values within a specified data series period. It returns indices that indicate when these extreme values occur, allowing users to pinpoint significant price changes over time.
   * Minimum and maximum index
   */
  async getTimeSeriesMinMaxIndex(
    requestParameters: GetTimeSeriesMinMaxIndexRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMinMaxIndex200Response> {
    const response = await this.getTimeSeriesMinMaxIndexRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minus Directional Indicator (MINUS_DI) endpoint calculates and returns the strength of a security\'s downward price movement over a specified period. This data is useful for traders and analysts looking to identify bearish trends and assess the intensity of price declines in financial markets.
   * Minus directional indicator
   */
  async getTimeSeriesMinusDIRaw(
    requestParameters: GetTimeSeriesMinusDIRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMinusDI200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMinusDI().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/minus_di`;

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
      GetTimeSeriesMinusDI200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minus Directional Indicator (MINUS_DI) endpoint calculates and returns the strength of a security\'s downward price movement over a specified period. This data is useful for traders and analysts looking to identify bearish trends and assess the intensity of price declines in financial markets.
   * Minus directional indicator
   */
  async getTimeSeriesMinusDI(
    requestParameters: GetTimeSeriesMinusDIRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMinusDI200Response> {
    const response = await this.getTimeSeriesMinusDIRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Minus Directional Movement endpoint (MINUS_DM) calculates the downward price movement of a security over a specified period. It returns a series of values indicating the strength of downward trends, useful for traders to identify potential selling opportunities or confirm bearish market conditions.
   * Minus directional movement
   */
  async getTimeSeriesMinusDMRaw(
    requestParameters: GetTimeSeriesMinusDMRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMinusDM200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMinusDM().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/minus_dm`;

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
      GetTimeSeriesMinusDM200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Minus Directional Movement endpoint (MINUS_DM) calculates the downward price movement of a security over a specified period. It returns a series of values indicating the strength of downward trends, useful for traders to identify potential selling opportunities or confirm bearish market conditions.
   * Minus directional movement
   */
  async getTimeSeriesMinusDM(
    requestParameters: GetTimeSeriesMinusDMRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMinusDM200Response> {
    const response = await this.getTimeSeriesMinusDMRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Momentum (MOM) endpoint provides data on the rate of change in a security\'s price over a user-defined period. It returns a series of numerical values indicating the speed and direction of the price movement, which can help users detect emerging trends or potential reversals in the market.
   * Momentum
   */
  async getTimeSeriesMomRaw(
    requestParameters: GetTimeSeriesMomRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMom200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMom().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mom`;

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
      GetTimeSeriesMom200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Momentum (MOM) endpoint provides data on the rate of change in a security\'s price over a user-defined period. It returns a series of numerical values indicating the speed and direction of the price movement, which can help users detect emerging trends or potential reversals in the market.
   * Momentum
   */
  async getTimeSeriesMom(
    requestParameters: GetTimeSeriesMomRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMom200Response> {
    const response = await this.getTimeSeriesMomRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Multiplication (MULT) endpoint calculates the product of two input data series, returning a new data series that represents the element-wise multiplication of the inputs. This is useful for combining or adjusting technical indicators or price data to create custom metrics or to normalize values across different scales.
   * Multiplication
   */
  async getTimeSeriesMultRaw(
    requestParameters: GetTimeSeriesMultRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesMult200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesMult().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/mult`;

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
      GetTimeSeriesMult200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Multiplication (MULT) endpoint calculates the product of two input data series, returning a new data series that represents the element-wise multiplication of the inputs. This is useful for combining or adjusting technical indicators or price data to create custom metrics or to normalize values across different scales.
   * Multiplication
   */
  async getTimeSeriesMult(
    requestParameters: GetTimeSeriesMultRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesMult200Response> {
    const response = await this.getTimeSeriesMultRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Normalized Average True Range (NATR) endpoint provides a volatility indicator that calculates the average range of price movement over a specified period, expressed as a percentage of the security\'s price. This data allows users to compare volatility levels across different securities easily. The endpoint returns a time series of NATR values, which can be used to assess and compare the price volatility of various financial instruments.
   * Normalized average true range
   */
  async getTimeSeriesNatrRaw(
    requestParameters: GetTimeSeriesNatrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesNatr200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesNatr().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/natr`;

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
      GetTimeSeriesNatr200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Normalized Average True Range (NATR) endpoint provides a volatility indicator that calculates the average range of price movement over a specified period, expressed as a percentage of the security\'s price. This data allows users to compare volatility levels across different securities easily. The endpoint returns a time series of NATR values, which can be used to assess and compare the price volatility of various financial instruments.
   * Normalized average true range
   */
  async getTimeSeriesNatr(
    requestParameters: GetTimeSeriesNatrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesNatr200Response> {
    const response = await this.getTimeSeriesNatrRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The On Balance Volume (OBV) endpoint provides a time series of the OBV indicator, which calculates cumulative volume to reflect buying and selling pressure over time. This endpoint returns data that helps users track volume trends in relation to price movements, aiding in the identification of potential trend continuations or reversals in a security\'s price.
   * On balance volume
   */
  async getTimeSeriesObvRaw(
    requestParameters: GetTimeSeriesObvRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesObv200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesObv().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/obv`;

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
      GetTimeSeriesObv200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The On Balance Volume (OBV) endpoint provides a time series of the OBV indicator, which calculates cumulative volume to reflect buying and selling pressure over time. This endpoint returns data that helps users track volume trends in relation to price movements, aiding in the identification of potential trend continuations or reversals in a security\'s price.
   * On balance volume
   */
  async getTimeSeriesObv(
    requestParameters: GetTimeSeriesObvRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesObv200Response> {
    const response = await this.getTimeSeriesObvRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Percent B (%B) endpoint calculates and returns the %B value, which indicates the position of a security\'s price relative to its Bollinger Bands. This data helps users determine if a security is near the upper or lower band, potentially signaling overbought or oversold conditions.
   * Percent B
   */
  async getTimeSeriesPercentBRaw(
    requestParameters: GetTimeSeriesPercentBRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesPercentB200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesPercentB().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["sd"] != null) {
      queryParameters["sd"] = requestParameters["sd"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/percent_b`;

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
      GetTimeSeriesPercentB200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Percent B (%B) endpoint calculates and returns the %B value, which indicates the position of a security\'s price relative to its Bollinger Bands. This data helps users determine if a security is near the upper or lower band, potentially signaling overbought or oversold conditions.
   * Percent B
   */
  async getTimeSeriesPercentB(
    requestParameters: GetTimeSeriesPercentBRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesPercentB200Response> {
    const response = await this.getTimeSeriesPercentBRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Pivot Points High Low (PIVOT_POINTS_HL) endpoint calculates key support and resistance levels for a security by analyzing its highest and lowest prices over a specified period. This endpoint returns data that includes pivot points, support levels, and resistance levels, which can be used to identify potential price reversal zones and optimize trade entry and exit strategies.
   * Pivot points high low
   */
  async getTimeSeriesPivotPointsHLRaw(
    requestParameters: GetTimeSeriesPivotPointsHLRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesPivotPointsHL200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesPivotPointsHL().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/pivot_points_hl`;

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
      GetTimeSeriesPivotPointsHL200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Pivot Points High Low (PIVOT_POINTS_HL) endpoint calculates key support and resistance levels for a security by analyzing its highest and lowest prices over a specified period. This endpoint returns data that includes pivot points, support levels, and resistance levels, which can be used to identify potential price reversal zones and optimize trade entry and exit strategies.
   * Pivot points high low
   */
  async getTimeSeriesPivotPointsHL(
    requestParameters: GetTimeSeriesPivotPointsHLRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesPivotPointsHL200Response> {
    const response = await this.getTimeSeriesPivotPointsHLRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Plus Directional Indicator endpoint (/plus_di) provides data on the strength of a security\'s upward price movement by calculating the Plus Directional Indicator (PLUS_DI). It returns a time series of PLUS_DI values, which can be used to assess the intensity of upward trends in a security\'s price over a specified period.
   * Plus directional indicator
   */
  async getTimeSeriesPlusDIRaw(
    requestParameters: GetTimeSeriesPlusDIRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesPlusDI200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesPlusDI().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/plus_di`;

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
      GetTimeSeriesPlusDI200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Plus Directional Indicator endpoint (/plus_di) provides data on the strength of a security\'s upward price movement by calculating the Plus Directional Indicator (PLUS_DI). It returns a time series of PLUS_DI values, which can be used to assess the intensity of upward trends in a security\'s price over a specified period.
   * Plus directional indicator
   */
  async getTimeSeriesPlusDI(
    requestParameters: GetTimeSeriesPlusDIRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesPlusDI200Response> {
    const response = await this.getTimeSeriesPlusDIRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Plus Directional Movement (PLUS_DM) endpoint calculates the upward price movement of a financial security over a specified period. It returns numerical values representing the magnitude of upward price changes, which can be used to assess the strength of an uptrend. This data is essential for traders and analysts who need to evaluate the bullish momentum of a security.
   * Plus directional movement
   */
  async getTimeSeriesPlusDMRaw(
    requestParameters: GetTimeSeriesPlusDMRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesPlusDM200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesPlusDM().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/plus_dm`;

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
      GetTimeSeriesPlusDM200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Plus Directional Movement (PLUS_DM) endpoint calculates the upward price movement of a financial security over a specified period. It returns numerical values representing the magnitude of upward price changes, which can be used to assess the strength of an uptrend. This data is essential for traders and analysts who need to evaluate the bullish momentum of a security.
   * Plus directional movement
   */
  async getTimeSeriesPlusDM(
    requestParameters: GetTimeSeriesPlusDMRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesPlusDM200Response> {
    const response = await this.getTimeSeriesPlusDMRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Percentage Price Oscillator (PPO) endpoint calculates the percentage difference between two specified moving averages of a financial instrument\'s price. It returns data that includes the PPO values, which traders can use to identify potential trend reversals and generate trading signals.
   * Percentage price oscillator
   */
  async getTimeSeriesPpoRaw(
    requestParameters: GetTimeSeriesPpoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesPpo200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesPpo().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["fastPeriod"] != null) {
      queryParameters["fast_period"] = requestParameters["fastPeriod"];
    }

    if (requestParameters["slowPeriod"] != null) {
      queryParameters["slow_period"] = requestParameters["slowPeriod"];
    }

    if (requestParameters["maType"] != null) {
      queryParameters["ma_type"] = requestParameters["maType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ppo`;

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
      GetTimeSeriesPpo200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Percentage Price Oscillator (PPO) endpoint calculates the percentage difference between two specified moving averages of a financial instrument\'s price. It returns data that includes the PPO values, which traders can use to identify potential trend reversals and generate trading signals.
   * Percentage price oscillator
   */
  async getTimeSeriesPpo(
    requestParameters: GetTimeSeriesPpoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesPpo200Response> {
    const response = await this.getTimeSeriesPpoRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Rate of Change (ROC) endpoint calculates the percentage change in a security\'s price over a defined period, returning a time series of ROC values. This data helps users track momentum by showing how quickly prices are changing, which can be useful for identifying potential price movements.
   * Rate of change
   */
  async getTimeSeriesRocRaw(
    requestParameters: GetTimeSeriesRocRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRoc200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRoc().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/roc`;

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
      GetTimeSeriesRoc200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Rate of Change (ROC) endpoint calculates the percentage change in a security\'s price over a defined period, returning a time series of ROC values. This data helps users track momentum by showing how quickly prices are changing, which can be useful for identifying potential price movements.
   * Rate of change
   */
  async getTimeSeriesRoc(
    requestParameters: GetTimeSeriesRocRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRoc200Response> {
    const response = await this.getTimeSeriesRocRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Rate of Change Percentage (ROCP) endpoint calculates and returns the percentage change in the price of a financial security over a user-defined period. This data helps users identify shifts in price momentum and potential trend reversals by providing a clear numerical representation of how much the price has increased or decreased in percentage terms.
   * Rate of change percentage
   */
  async getTimeSeriesRocpRaw(
    requestParameters: GetTimeSeriesRocpRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRocp200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRocp().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/rocp`;

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
      GetTimeSeriesRocp200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Rate of Change Percentage (ROCP) endpoint calculates and returns the percentage change in the price of a financial security over a user-defined period. This data helps users identify shifts in price momentum and potential trend reversals by providing a clear numerical representation of how much the price has increased or decreased in percentage terms.
   * Rate of change percentage
   */
  async getTimeSeriesRocp(
    requestParameters: GetTimeSeriesRocpRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRocp200Response> {
    const response = await this.getTimeSeriesRocpRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Rate of Change Ratio (ROCR) endpoint calculates and returns the ratio of a security\'s current price to its price from a specified number of periods ago. This data helps users track price momentum and identify potential trend reversals by providing a clear numerical value that reflects price changes over time.
   * Rate of change ratio
   */
  async getTimeSeriesRocrRaw(
    requestParameters: GetTimeSeriesRocrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRocr200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRocr().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/rocr`;

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
      GetTimeSeriesRocr200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Rate of Change Ratio (ROCR) endpoint calculates and returns the ratio of a security\'s current price to its price from a specified number of periods ago. This data helps users track price momentum and identify potential trend reversals by providing a clear numerical value that reflects price changes over time.
   * Rate of change ratio
   */
  async getTimeSeriesRocr(
    requestParameters: GetTimeSeriesRocrRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRocr200Response> {
    const response = await this.getTimeSeriesRocrRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Rate of Change Ratio 100 (ROCR100) endpoint calculates the percentage change in a security\'s price over a specified period, expressed as a ratio to 100. It returns data that highlights the momentum of the price movement and identifies potential trend reversals. This endpoint is useful for users looking to assess the strength and direction of a security\'s price trend over time.
   * Rate of change ratio 100
   */
  async getTimeSeriesRocr100Raw(
    requestParameters: GetTimeSeriesRocr100Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRocr100200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRocr100().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/rocr100`;

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
      GetTimeSeriesRocr100200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Rate of Change Ratio 100 (ROCR100) endpoint calculates the percentage change in a security\'s price over a specified period, expressed as a ratio to 100. It returns data that highlights the momentum of the price movement and identifies potential trend reversals. This endpoint is useful for users looking to assess the strength and direction of a security\'s price trend over time.
   * Rate of change ratio 100
   */
  async getTimeSeriesRocr100(
    requestParameters: GetTimeSeriesRocr100Request,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRocr100200Response> {
    const response = await this.getTimeSeriesRocr100Raw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Relative Strength Index (RSI) endpoint provides data on the RSI values for a specified financial instrument over a given period. It returns a series of RSI values, which indicate the momentum of price movements and help identify potential overbought or oversold conditions. This data is useful for traders looking to assess the strength of price trends and anticipate possible trend reversals.
   * Relative strength index
   */
  async getTimeSeriesRsiRaw(
    requestParameters: GetTimeSeriesRsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRsi200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRsi().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/rsi`;

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
      GetTimeSeriesRsi200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Relative Strength Index (RSI) endpoint provides data on the RSI values for a specified financial instrument over a given period. It returns a series of RSI values, which indicate the momentum of price movements and help identify potential overbought or oversold conditions. This data is useful for traders looking to assess the strength of price trends and anticipate possible trend reversals.
   * Relative strength index
   */
  async getTimeSeriesRsi(
    requestParameters: GetTimeSeriesRsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRsi200Response> {
    const response = await this.getTimeSeriesRsiRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Relative Volume endpoint (/rvol) provides a ratio comparing a security\'s current trading volume to its average volume over a specified period. This data helps users detect unusual trading activity and assess the strength of price movements, offering insights into potential market breakouts.
   * Relative volume
   */
  async getTimeSeriesRvolRaw(
    requestParameters: GetTimeSeriesRvolRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesRvol200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesRvol().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/rvol`;

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
      GetTimeSeriesRvol200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Relative Volume endpoint (/rvol) provides a ratio comparing a security\'s current trading volume to its average volume over a specified period. This data helps users detect unusual trading activity and assess the strength of price movements, offering insights into potential market breakouts.
   * Relative volume
   */
  async getTimeSeriesRvol(
    requestParameters: GetTimeSeriesRvolRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesRvol200Response> {
    const response = await this.getTimeSeriesRvolRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Parabolic Stop and Reverse (SAR) endpoint provides data on potential support and resistance levels for a specified security, using its price and time. This endpoint returns numerical values that help traders determine possible entry and exit points in their trading strategies.
   * Parabolic stop and reverse
   */
  async getTimeSeriesSarRaw(
    requestParameters: GetTimeSeriesSarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSar200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSar().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["acceleration"] != null) {
      queryParameters["acceleration"] = requestParameters["acceleration"];
    }

    if (requestParameters["maximum"] != null) {
      queryParameters["maximum"] = requestParameters["maximum"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sar`;

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
      GetTimeSeriesSar200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Parabolic Stop and Reverse (SAR) endpoint provides data on potential support and resistance levels for a specified security, using its price and time. This endpoint returns numerical values that help traders determine possible entry and exit points in their trading strategies.
   * Parabolic stop and reverse
   */
  async getTimeSeriesSar(
    requestParameters: GetTimeSeriesSarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSar200Response> {
    const response = await this.getTimeSeriesSarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Parabolic SAR Extended (SAREXT) endpoint provides a customizable version of the Parabolic SAR indicator, which is used to identify potential entry and exit points in trading. Users can adjust parameters such as acceleration factors to tailor the indicator to specific trading strategies. The endpoint returns data points indicating potential trend reversals.
   * Parabolic stop and reverse extended
   */
  async getTimeSeriesSarExtRaw(
    requestParameters: GetTimeSeriesSarExtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSarExt200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSarExt().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["startValue"] != null) {
      queryParameters["start_value"] = requestParameters["startValue"];
    }

    if (requestParameters["offsetOnReverse"] != null) {
      queryParameters["offset_on_reverse"] =
        requestParameters["offsetOnReverse"];
    }

    if (requestParameters["accelerationLimitLong"] != null) {
      queryParameters["acceleration_limit_long"] =
        requestParameters["accelerationLimitLong"];
    }

    if (requestParameters["accelerationLong"] != null) {
      queryParameters["acceleration_long"] =
        requestParameters["accelerationLong"];
    }

    if (requestParameters["accelerationMaxLong"] != null) {
      queryParameters["acceleration_max_long"] =
        requestParameters["accelerationMaxLong"];
    }

    if (requestParameters["accelerationLimitShort"] != null) {
      queryParameters["acceleration_limit_short"] =
        requestParameters["accelerationLimitShort"];
    }

    if (requestParameters["accelerationShort"] != null) {
      queryParameters["acceleration_short"] =
        requestParameters["accelerationShort"];
    }

    if (requestParameters["accelerationMaxShort"] != null) {
      queryParameters["acceleration_max_short"] =
        requestParameters["accelerationMaxShort"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sarext`;

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
      GetTimeSeriesSarExt200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Parabolic SAR Extended (SAREXT) endpoint provides a customizable version of the Parabolic SAR indicator, which is used to identify potential entry and exit points in trading. Users can adjust parameters such as acceleration factors to tailor the indicator to specific trading strategies. The endpoint returns data points indicating potential trend reversals.
   * Parabolic stop and reverse extended
   */
  async getTimeSeriesSarExt(
    requestParameters: GetTimeSeriesSarExtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSarExt200Response> {
    const response = await this.getTimeSeriesSarExtRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Simple Moving Average (SMA) endpoint calculates and returns the average price of a security over a user-defined time period. This endpoint provides a series of data points that represent the smoothed price trend, which can help users identify potential price movements and evaluate historical price behavior.
   * Simple moving average
   */
  async getTimeSeriesSmaRaw(
    requestParameters: GetTimeSeriesSmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSma200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSma().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sma`;

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
      GetTimeSeriesSma200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Simple Moving Average (SMA) endpoint calculates and returns the average price of a security over a user-defined time period. This endpoint provides a series of data points that represent the smoothed price trend, which can help users identify potential price movements and evaluate historical price behavior.
   * Simple moving average
   */
  async getTimeSeriesSma(
    requestParameters: GetTimeSeriesSmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSma200Response> {
    const response = await this.getTimeSeriesSmaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Square Root (SQRT) endpoint computes the square root of a specified numerical input. It returns a single numerical value representing the square root, which can be used in various mathematical computations or financial models requiring this specific transformation.
   * Square root
   */
  async getTimeSeriesSqrtRaw(
    requestParameters: GetTimeSeriesSqrtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSqrt200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSqrt().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sqrt`;

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
      GetTimeSeriesSqrt200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Square Root (SQRT) endpoint computes the square root of a specified numerical input. It returns a single numerical value representing the square root, which can be used in various mathematical computations or financial models requiring this specific transformation.
   * Square root
   */
  async getTimeSeriesSqrt(
    requestParameters: GetTimeSeriesSqrtRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSqrt200Response> {
    const response = await this.getTimeSeriesSqrtRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Standard Deviation (STDDEV) endpoint calculates the dispersion of a financial instrument\'s price data from its average value. It returns a numerical value representing the volatility of the asset over a specified period. This endpoint is useful for traders and analysts to assess price variability and identify periods of high or low volatility in the market.
   * Standard deviation
   */
  async getTimeSeriesStdDevRaw(
    requestParameters: GetTimeSeriesStdDevRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesStdDev200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesStdDev().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["sd"] != null) {
      queryParameters["sd"] = requestParameters["sd"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/stddev`;

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
      GetTimeSeriesStdDev200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Standard Deviation (STDDEV) endpoint calculates the dispersion of a financial instrument\'s price data from its average value. It returns a numerical value representing the volatility of the asset over a specified period. This endpoint is useful for traders and analysts to assess price variability and identify periods of high or low volatility in the market.
   * Standard deviation
   */
  async getTimeSeriesStdDev(
    requestParameters: GetTimeSeriesStdDevRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesStdDev200Response> {
    const response = await this.getTimeSeriesStdDevRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Stochastic Oscillator endpoint provides data on a momentum indicator that evaluates a security\'s closing price relative to its price range over a specified timeframe. It returns values indicating potential overbought or oversold conditions, aiding in identifying possible trend reversals. Users receive the %K and %D values, which are essential for analyzing the momentum and potential turning points in the market.
   * Stochastic oscillator
   */
  async getTimeSeriesStochRaw(
    requestParameters: GetTimeSeriesStochRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesStoch200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesStoch().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["fastKPeriod"] != null) {
      queryParameters["fast_k_period"] = requestParameters["fastKPeriod"];
    }

    if (requestParameters["slowKPeriod"] != null) {
      queryParameters["slow_k_period"] = requestParameters["slowKPeriod"];
    }

    if (requestParameters["slowDPeriod"] != null) {
      queryParameters["slow_d_period"] = requestParameters["slowDPeriod"];
    }

    if (requestParameters["slowKmaType"] != null) {
      queryParameters["slow_kma_type"] = requestParameters["slowKmaType"];
    }

    if (requestParameters["slowDmaType"] != null) {
      queryParameters["slow_dma_type"] = requestParameters["slowDmaType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/stoch`;

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
      GetTimeSeriesStoch200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Stochastic Oscillator endpoint provides data on a momentum indicator that evaluates a security\'s closing price relative to its price range over a specified timeframe. It returns values indicating potential overbought or oversold conditions, aiding in identifying possible trend reversals. Users receive the %K and %D values, which are essential for analyzing the momentum and potential turning points in the market.
   * Stochastic oscillator
   */
  async getTimeSeriesStoch(
    requestParameters: GetTimeSeriesStochRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesStoch200Response> {
    const response = await this.getTimeSeriesStochRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Stochastic Fast (STOCHF) endpoint calculates the fast version of the Stochastic Oscillator, providing data on the momentum of a financial instrument by comparing a particular closing price to a range of its prices over a specified period. This endpoint returns the %K and %D values, which are used to identify potential overbought or oversold conditions in the market. It is useful for traders who need quick, responsive insights into price movements, although it may generate more false signals due to its sensitivity.
   * Stochastic fast
   */
  async getTimeSeriesStochFRaw(
    requestParameters: GetTimeSeriesStochFRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesStochF200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesStochF().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["fastKPeriod"] != null) {
      queryParameters["fast_k_period"] = requestParameters["fastKPeriod"];
    }

    if (requestParameters["fastDPeriod"] != null) {
      queryParameters["fast_d_period"] = requestParameters["fastDPeriod"];
    }

    if (requestParameters["fastDmaType"] != null) {
      queryParameters["fast_dma_type"] = requestParameters["fastDmaType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/stochf`;

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
      GetTimeSeriesStochF200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Stochastic Fast (STOCHF) endpoint calculates the fast version of the Stochastic Oscillator, providing data on the momentum of a financial instrument by comparing a particular closing price to a range of its prices over a specified period. This endpoint returns the %K and %D values, which are used to identify potential overbought or oversold conditions in the market. It is useful for traders who need quick, responsive insights into price movements, although it may generate more false signals due to its sensitivity.
   * Stochastic fast
   */
  async getTimeSeriesStochF(
    requestParameters: GetTimeSeriesStochFRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesStochF200Response> {
    const response = await this.getTimeSeriesStochFRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Stochastic Relative Strength Index (Stochastic RSI) endpoint calculates the Stochastic RSI values for a given financial instrument, providing data on its momentum and potential price reversals. This endpoint returns time-series data, including the %K and %D lines, which help users identify overbought or oversold conditions. Ideal for traders seeking to refine entry and exit points by analyzing short-term price movements.
   * Stochastic relative strength index
   */
  async getTimeSeriesStochRsiRaw(
    requestParameters: GetTimeSeriesStochRsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesStochRsi200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesStochRsi().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["rsiLength"] != null) {
      queryParameters["rsi_length"] = requestParameters["rsiLength"];
    }

    if (requestParameters["stochLength"] != null) {
      queryParameters["stoch_length"] = requestParameters["stochLength"];
    }

    if (requestParameters["kPeriod"] != null) {
      queryParameters["k_period"] = requestParameters["kPeriod"];
    }

    if (requestParameters["slowKmaType"] != null) {
      queryParameters["slow_kma_type"] = requestParameters["slowKmaType"];
    }

    if (requestParameters["dPeriod"] != null) {
      queryParameters["d_period"] = requestParameters["dPeriod"];
    }

    if (requestParameters["slowDmaType"] != null) {
      queryParameters["slow_dma_type"] = requestParameters["slowDmaType"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/stochrsi`;

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
      GetTimeSeriesStochRsi200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Stochastic Relative Strength Index (Stochastic RSI) endpoint calculates the Stochastic RSI values for a given financial instrument, providing data on its momentum and potential price reversals. This endpoint returns time-series data, including the %K and %D lines, which help users identify overbought or oversold conditions. Ideal for traders seeking to refine entry and exit points by analyzing short-term price movements.
   * Stochastic relative strength index
   */
  async getTimeSeriesStochRsi(
    requestParameters: GetTimeSeriesStochRsiRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesStochRsi200Response> {
    const response = await this.getTimeSeriesStochRsiRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Subtraction (SUB) endpoint calculates the difference between two input data series, such as technical indicators or price data. It returns a time series of the resulting values, allowing users to compare or normalize data by highlighting the variance between the two series.
   * Subtraction
   */
  async getTimeSeriesSubRaw(
    requestParameters: GetTimeSeriesSubRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSub200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSub().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType1"] != null) {
      queryParameters["series_type_1"] = requestParameters["seriesType1"];
    }

    if (requestParameters["seriesType2"] != null) {
      queryParameters["series_type_2"] = requestParameters["seriesType2"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sub`;

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
      GetTimeSeriesSub200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Subtraction (SUB) endpoint calculates the difference between two input data series, such as technical indicators or price data. It returns a time series of the resulting values, allowing users to compare or normalize data by highlighting the variance between the two series.
   * Subtraction
   */
  async getTimeSeriesSub(
    requestParameters: GetTimeSeriesSubRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSub200Response> {
    const response = await this.getTimeSeriesSubRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Summation (SUM) endpoint calculates the cumulative total of a specified data series over a defined time period. It returns a numerical value representing the sum, which can be used to track the aggregate value of financial data, such as stock prices or trading volumes, over time. This endpoint is useful for users needing to compute the total accumulation of a dataset for further analysis or reporting.
   * Summation
   */
  async getTimeSeriesSumRaw(
    requestParameters: GetTimeSeriesSumRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSum200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSum().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/sum`;

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
      GetTimeSeriesSum200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Summation (SUM) endpoint calculates the cumulative total of a specified data series over a defined time period. It returns a numerical value representing the sum, which can be used to track the aggregate value of financial data, such as stock prices or trading volumes, over time. This endpoint is useful for users needing to compute the total accumulation of a dataset for further analysis or reporting.
   * Summation
   */
  async getTimeSeriesSum(
    requestParameters: GetTimeSeriesSumRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSum200Response> {
    const response = await this.getTimeSeriesSumRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Supertrend endpoint provides data on the Supertrend indicator, a tool used to identify potential buy and sell signals in trending markets. It returns values that indicate the current trend direction and potential reversal points based on price, time, and volatility. Users can leverage this data to pinpoint optimal entry and exit points for trades.
   * Supertrend
   */
  async getTimeSeriesSuperTrendRaw(
    requestParameters: GetTimeSeriesSuperTrendRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesSuperTrend200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSuperTrend().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["multiplier"] != null) {
      queryParameters["multiplier"] = requestParameters["multiplier"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/supertrend`;

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
      GetTimeSeriesSuperTrend200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Supertrend endpoint provides data on the Supertrend indicator, a tool used to identify potential buy and sell signals in trending markets. It returns values that indicate the current trend direction and potential reversal points based on price, time, and volatility. Users can leverage this data to pinpoint optimal entry and exit points for trades.
   * Supertrend
   */
  async getTimeSeriesSuperTrend(
    requestParameters: GetTimeSeriesSuperTrendRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSuperTrend200Response> {
    const response = await this.getTimeSeriesSuperTrendRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Supertrend Heikin Ashi candles endpoint provides data combining Supertrend signals with Heikin Ashi candlestick patterns. It returns a series of data points indicating trend direction and smoothed price movements, useful for identifying potential buy or sell opportunities in trading.
   * Supertrend Heikin Ashi candles
   */
  async getTimeSeriesSuperTrendHeikinAshiCandlesRaw(
    requestParameters: GetTimeSeriesSuperTrendHeikinAshiCandlesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<
    runtime.ApiResponse<GetTimeSeriesSuperTrendHeikinAshiCandles200Response>
  > {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesSuperTrendHeikinAshiCandles().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["period"] != null) {
      queryParameters["period"] = requestParameters["period"];
    }

    if (requestParameters["multiplier"] != null) {
      queryParameters["multiplier"] = requestParameters["multiplier"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/supertrend_heikinashicandles`;

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
      GetTimeSeriesSuperTrendHeikinAshiCandles200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Supertrend Heikin Ashi candles endpoint provides data combining Supertrend signals with Heikin Ashi candlestick patterns. It returns a series of data points indicating trend direction and smoothed price movements, useful for identifying potential buy or sell opportunities in trading.
   * Supertrend Heikin Ashi candles
   */
  async getTimeSeriesSuperTrendHeikinAshiCandles(
    requestParameters: GetTimeSeriesSuperTrendHeikinAshiCandlesRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesSuperTrendHeikinAshiCandles200Response> {
    const response = await this.getTimeSeriesSuperTrendHeikinAshiCandlesRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Triple Exponential Moving Average (T3MA) endpoint calculates a smoothed moving average using three exponential moving averages on price data. It returns a dataset that highlights price trends with reduced lag, offering precise trend analysis. This is useful for identifying trend direction and potential reversal points.
   * Triple exponential moving average
   */
  async getTimeSeriesT3maRaw(
    requestParameters: GetTimeSeriesT3maRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesT3ma200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesT3ma().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["vFactor"] != null) {
      queryParameters["v_factor"] = requestParameters["vFactor"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/t3ma`;

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
      GetTimeSeriesT3ma200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Triple Exponential Moving Average (T3MA) endpoint calculates a smoothed moving average using three exponential moving averages on price data. It returns a dataset that highlights price trends with reduced lag, offering precise trend analysis. This is useful for identifying trend direction and potential reversal points.
   * Triple exponential moving average
   */
  async getTimeSeriesT3ma(
    requestParameters: GetTimeSeriesT3maRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesT3ma200Response> {
    const response = await this.getTimeSeriesT3maRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The True Range (TRANGE) endpoint calculates the range of price movement for a specified period, providing a measure of market volatility. It returns data that includes the highest and lowest prices over the period, along with the closing price from the previous period. This information is useful for traders to assess market volatility and adjust their trading strategies accordingly.
   * True range
   */
  async getTimeSeriesTRangeRaw(
    requestParameters: GetTimeSeriesTRangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesTRange200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesTRange().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/trange`;

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
      GetTimeSeriesTRange200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The True Range (TRANGE) endpoint calculates the range of price movement for a specified period, providing a measure of market volatility. It returns data that includes the highest and lowest prices over the period, along with the closing price from the previous period. This information is useful for traders to assess market volatility and adjust their trading strategies accordingly.
   * True range
   */
  async getTimeSeriesTRange(
    requestParameters: GetTimeSeriesTRangeRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesTRange200Response> {
    const response = await this.getTimeSeriesTRangeRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Triple Exponential Moving Average (TEMA) endpoint calculates and returns the TEMA values for a specified financial instrument over a given time period. This endpoint provides a series of data points that smooth out price fluctuations by applying three layers of exponential moving averages, allowing users to identify and track underlying trends in the instrument\'s price movement.
   * Triple exponential moving average
   */
  async getTimeSeriesTemaRaw(
    requestParameters: GetTimeSeriesTemaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesTema200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesTema().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/tema`;

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
      GetTimeSeriesTema200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Triple Exponential Moving Average (TEMA) endpoint calculates and returns the TEMA values for a specified financial instrument over a given time period. This endpoint provides a series of data points that smooth out price fluctuations by applying three layers of exponential moving averages, allowing users to identify and track underlying trends in the instrument\'s price movement.
   * Triple exponential moving average
   */
  async getTimeSeriesTema(
    requestParameters: GetTimeSeriesTemaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesTema200Response> {
    const response = await this.getTimeSeriesTemaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Triangular Moving Average (TRIMA) endpoint calculates and returns the smoothed average price of a financial security over a specified period, with a focus on central data points. This endpoint provides a balanced view of price trends by applying a double smoothing process, making it useful for identifying underlying price patterns and reducing short-term fluctuations.
   * Triangular moving average
   */
  async getTimeSeriesTrimaRaw(
    requestParameters: GetTimeSeriesTrimaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesTrima200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesTrima().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/trima`;

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
      GetTimeSeriesTrima200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Triangular Moving Average (TRIMA) endpoint calculates and returns the smoothed average price of a financial security over a specified period, with a focus on central data points. This endpoint provides a balanced view of price trends by applying a double smoothing process, making it useful for identifying underlying price patterns and reducing short-term fluctuations.
   * Triangular moving average
   */
  async getTimeSeriesTrima(
    requestParameters: GetTimeSeriesTrimaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesTrima200Response> {
    const response = await this.getTimeSeriesTrimaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Time Series Forecast (TSF) endpoint provides projected future price levels using linear regression analysis. It returns data that helps users identify potential support and resistance levels, as well as trend direction in a financial market. This endpoint is useful for traders seeking to anticipate price movements and adjust their strategies accordingly.
   * Time series forecast
   */
  async getTimeSeriesTsfRaw(
    requestParameters: GetTimeSeriesTsfRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesTsf200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesTsf().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/tsf`;

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
      GetTimeSeriesTsf200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Time Series Forecast (TSF) endpoint provides projected future price levels using linear regression analysis. It returns data that helps users identify potential support and resistance levels, as well as trend direction in a financial market. This endpoint is useful for traders seeking to anticipate price movements and adjust their strategies accordingly.
   * Time series forecast
   */
  async getTimeSeriesTsf(
    requestParameters: GetTimeSeriesTsfRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesTsf200Response> {
    const response = await this.getTimeSeriesTsfRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Typical Price (TYPPRICE) endpoint calculates and returns the average of a financial instrument\'s high, low, and close prices for a given period. This endpoint provides a simplified metric that reflects the central tendency of price movements, useful for traders and analysts who need a straightforward view of price trends.
   * Typical price
   */
  async getTimeSeriesTypPriceRaw(
    requestParameters: GetTimeSeriesTypPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesTypPrice200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesTypPrice().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/typprice`;

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
      GetTimeSeriesTypPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Typical Price (TYPPRICE) endpoint calculates and returns the average of a financial instrument\'s high, low, and close prices for a given period. This endpoint provides a simplified metric that reflects the central tendency of price movements, useful for traders and analysts who need a straightforward view of price trends.
   * Typical price
   */
  async getTimeSeriesTypPrice(
    requestParameters: GetTimeSeriesTypPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesTypPrice200Response> {
    const response = await this.getTimeSeriesTypPriceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Ultimate Oscillator endpoint (/ultosc) calculates a momentum oscillator that integrates short, intermediate, and long-term price movements to detect potential overbought or oversold conditions and possible trend reversals. It returns a time series of oscillator values, which can be used to assess market momentum and identify entry or exit points in trading strategies.
   * Ultimate oscillator endpoint
   */
  async getTimeSeriesUltOscRaw(
    requestParameters: GetTimeSeriesUltOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesUltOsc200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesUltOsc().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod1"] != null) {
      queryParameters["time_period_1"] = requestParameters["timePeriod1"];
    }

    if (requestParameters["timePeriod2"] != null) {
      queryParameters["time_period_2"] = requestParameters["timePeriod2"];
    }

    if (requestParameters["timePeriod3"] != null) {
      queryParameters["time_period_3"] = requestParameters["timePeriod3"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/ultosc`;

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
      GetTimeSeriesUltOsc200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Ultimate Oscillator endpoint (/ultosc) calculates a momentum oscillator that integrates short, intermediate, and long-term price movements to detect potential overbought or oversold conditions and possible trend reversals. It returns a time series of oscillator values, which can be used to assess market momentum and identify entry or exit points in trading strategies.
   * Ultimate oscillator endpoint
   */
  async getTimeSeriesUltOsc(
    requestParameters: GetTimeSeriesUltOscRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesUltOsc200Response> {
    const response = await this.getTimeSeriesUltOscRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Variance (VAR) endpoint calculates the statistical variance of a financial data series, providing a measure of how much the data points deviate from the average value. It returns a numerical value representing this dispersion, which can be used to assess the volatility of a security over a specified period. This information is crucial for traders and analysts who need to evaluate the risk associated with price fluctuations in the market.
   * Variance
   */
  async getTimeSeriesVarRaw(
    requestParameters: GetTimeSeriesVarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesVar200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesVar().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/var`;

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
      GetTimeSeriesVar200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Variance (VAR) endpoint calculates the statistical variance of a financial data series, providing a measure of how much the data points deviate from the average value. It returns a numerical value representing this dispersion, which can be used to assess the volatility of a security over a specified period. This information is crucial for traders and analysts who need to evaluate the risk associated with price fluctuations in the market.
   * Variance
   */
  async getTimeSeriesVar(
    requestParameters: GetTimeSeriesVarRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesVar200Response> {
    const response = await this.getTimeSeriesVarRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Volume Weighted Average Price (VWAP) endpoint provides the VWAP value for a specified stock or asset over a given time period. This indicator calculates the average price at which a security has traded throughout the day, based on both volume and price. It is useful for identifying the true average price of an asset, helping traders to assess the current price relative to the day\'s average.
   * Volume weighted average price
   */
  async getTimeSeriesVwapRaw(
    requestParameters: GetTimeSeriesVwapRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesVwap200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesVwap().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["sdTimePeriod"] != null) {
      queryParameters["sd_time_period"] = requestParameters["sdTimePeriod"];
    }

    if (requestParameters["sd"] != null) {
      queryParameters["sd"] = requestParameters["sd"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/vwap`;

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
      GetTimeSeriesVwap200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Volume Weighted Average Price (VWAP) endpoint provides the VWAP value for a specified stock or asset over a given time period. This indicator calculates the average price at which a security has traded throughout the day, based on both volume and price. It is useful for identifying the true average price of an asset, helping traders to assess the current price relative to the day\'s average.
   * Volume weighted average price
   */
  async getTimeSeriesVwap(
    requestParameters: GetTimeSeriesVwapRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesVwap200Response> {
    const response = await this.getTimeSeriesVwapRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Weighted Close Price (WCLPRICE) endpoint calculates a security\'s average price by giving additional weight to the closing price, using the formula: (High + Low + Close * 2) / 4.
   * Weighted close price
   */
  async getTimeSeriesWclPriceRaw(
    requestParameters: GetTimeSeriesWclPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesWclPrice200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesWclPrice().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/wclprice`;

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
      GetTimeSeriesWclPrice200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Weighted Close Price (WCLPRICE) endpoint calculates a security\'s average price by giving additional weight to the closing price, using the formula: (High + Low + Close * 2) / 4.
   * Weighted close price
   */
  async getTimeSeriesWclPrice(
    requestParameters: GetTimeSeriesWclPriceRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesWclPrice200Response> {
    const response = await this.getTimeSeriesWclPriceRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Williams %R (WILLR) endpoint calculates the Williams Percent Range, a momentum indicator that evaluates a security\'s closing price relative to its high-low range over a specified period. This endpoint returns data that helps users identify potential overbought or oversold conditions and possible trend reversals in the market.
   * Williams %R
   */
  async getTimeSeriesWillRRaw(
    requestParameters: GetTimeSeriesWillRRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesWillR200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesWillR().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/willr`;

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
      GetTimeSeriesWillR200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Williams %R (WILLR) endpoint calculates the Williams Percent Range, a momentum indicator that evaluates a security\'s closing price relative to its high-low range over a specified period. This endpoint returns data that helps users identify potential overbought or oversold conditions and possible trend reversals in the market.
   * Williams %R
   */
  async getTimeSeriesWillR(
    requestParameters: GetTimeSeriesWillRRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesWillR200Response> {
    const response = await this.getTimeSeriesWillRRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * The Weighted Moving Average (WMA) endpoint calculates and returns the WMA values for a given security over a specified period. This endpoint provides a time series of weighted averages, where recent prices have a higher influence, allowing users to track and analyze short-term price trends effectively.
   * Weighted moving average
   */
  async getTimeSeriesWmaRaw(
    requestParameters: GetTimeSeriesWmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetTimeSeriesWma200Response>> {
    if (requestParameters["interval"] == null) {
      throw new runtime.RequiredError(
        "interval",
        'Required parameter "interval" was null or undefined when calling getTimeSeriesWma().',
      );
    }

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

    if (requestParameters["interval"] != null) {
      queryParameters["interval"] = requestParameters["interval"];
    }

    if (requestParameters["outputsize"] != null) {
      queryParameters["outputsize"] = requestParameters["outputsize"];
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

    if (requestParameters["timezone"] != null) {
      queryParameters["timezone"] = requestParameters["timezone"];
    }

    if (requestParameters["startDate"] != null) {
      queryParameters["start_date"] = requestParameters["startDate"];
    }

    if (requestParameters["endDate"] != null) {
      queryParameters["end_date"] = requestParameters["endDate"];
    }

    if (requestParameters["date"] != null) {
      queryParameters["date"] = requestParameters["date"];
    }

    if (requestParameters["order"] != null) {
      queryParameters["order"] = requestParameters["order"];
    }

    if (requestParameters["prepost"] != null) {
      queryParameters["prepost"] = requestParameters["prepost"];
    }

    if (requestParameters["format"] != null) {
      queryParameters["format"] = requestParameters["format"];
    }

    if (requestParameters["delimiter"] != null) {
      queryParameters["delimiter"] = requestParameters["delimiter"];
    }

    if (requestParameters["dp"] != null) {
      queryParameters["dp"] = requestParameters["dp"];
    }

    if (requestParameters["previousClose"] != null) {
      queryParameters["previous_close"] = requestParameters["previousClose"];
    }

    if (requestParameters["adjust"] != null) {
      queryParameters["adjust"] = requestParameters["adjust"];
    }

    if (requestParameters["seriesType"] != null) {
      queryParameters["series_type"] = requestParameters["seriesType"];
    }

    if (requestParameters["timePeriod"] != null) {
      queryParameters["time_period"] = requestParameters["timePeriod"];
    }

    if (requestParameters["includeOhlc"] != null) {
      queryParameters["include_ohlc"] = requestParameters["includeOhlc"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] =
        await this.configuration.apiKey("Authorization"); // authorizationHeader authentication
    }

    let urlPath = `/wma`;

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
      GetTimeSeriesWma200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * The Weighted Moving Average (WMA) endpoint calculates and returns the WMA values for a given security over a specified period. This endpoint provides a time series of weighted averages, where recent prices have a higher influence, allowing users to track and analyze short-term price trends effectively.
   * Weighted moving average
   */
  async getTimeSeriesWma(
    requestParameters: GetTimeSeriesWmaRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetTimeSeriesWma200Response> {
    const response = await this.getTimeSeriesWmaRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
