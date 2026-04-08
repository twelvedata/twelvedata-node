/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */

export const EndpointEnum = {
  PRICE_TARGET: "price_target",
  RECOMMENDATIONS: "recommendations",
  STATISTICS: "statistics",
  INSIDER_TRANSACTIONS: "insider_transactions",
  PROFILE: "profile",
  MUTUAL_FUNDS_WORLD_SUMMARY: "mutual_funds_world_summary",
  MUTUAL_FUNDS_WORLD: "mutual_funds_world",
  INSTITUTIONAL_HOLDERS: "institutional_holders",
  ANALYST_RATING: "analyst_rating",
  INCOME_STATEMENT: "income_statement",
  INCOME_STATEMENT_QUARTERLY: "income_statement_quarterly",
  CASH_FLOW: "cash_flow",
  CASH_FLOW_QUARTERLY: "cash_flow_quarterly",
  BALANCE_SHEET: "balance_sheet",
  BALANCE_SHEET_QUARTERLY: "balance_sheet_quarterly",
  MUTUAL_FUNDS_LIST: "mutual_funds_list",
  MUTUAL_FUNDS_WORLD_SUSTAINABILITY: "mutual_funds_world_sustainability",
  MUTUAL_FUNDS_WORLD_SUMMARY2: "mutual_funds_world_summary",
  MUTUAL_FUNDS_WORLD_RISK: "mutual_funds_world_risk",
  MUTUAL_FUNDS_WORLD_PURCHASE_INFO: "mutual_funds_world_purchase_info",
  MUTUAL_FUNDS_WORLD_COMPOSITION: "mutual_funds_world_composition",
  MUTUAL_FUNDS_WORLD_PERFORMANCE: "mutual_funds_world_performance",
  MUTUAL_FUNDS_WORLD2: "mutual_funds_world",
  ETFS_LIST: "etfs_list",
  ETFS_WORLD: "etfs_world",
  ETFS_WORLD_SUMMARY: "etfs_world_summary",
  ETFS_WORLD_PERFORMANCE: "etfs_world_performance",
  ETFS_WORLD_RISK: "etfs_world_risk",
  ETFS_WORLD_COMPOSITION: "etfs_world_composition",
  DIVIDENDS: "dividends",
  SPLITS: "splits",
} as const;

export type EndpointEnum = (typeof EndpointEnum)[keyof typeof EndpointEnum];
