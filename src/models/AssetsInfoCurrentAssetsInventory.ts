/* tslint:disable */
/* eslint-disable */
/**
 * Twelve Data API client for Node.js
 *
 * NOTE: This code is auto generated, please do not edit it manually.
 */
import { mapValues } from "../runtime";
/**
 * Inventory information
 * @export
 * @interface AssetsInfoCurrentAssetsInventory
 */
export interface AssetsInfoCurrentAssetsInventory {
  /**
   * Total inventory
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  totalInventory?: number;
  /**
   * Inventories adjustments allowances
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  inventoriesAdjustmentsAllowances?: number;
  /**
   * Other inventories
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  otherInventories?: number;
  /**
   * Finished goods
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  finishedGoods?: number;
  /**
   * Work in process
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  workInProcess?: number;
  /**
   * Raw materials
   * @type {number}
   * @memberof AssetsInfoCurrentAssetsInventory
   */
  rawMaterials?: number;
}

/**
 * Check if a given object implements the AssetsInfoCurrentAssetsInventory interface.
 */
export function instanceOfAssetsInfoCurrentAssetsInventory(
  value: object,
): value is AssetsInfoCurrentAssetsInventory {
  return true;
}

export function AssetsInfoCurrentAssetsInventoryFromJSON(
  json: any,
): AssetsInfoCurrentAssetsInventory {
  return AssetsInfoCurrentAssetsInventoryFromJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsInventoryFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): AssetsInfoCurrentAssetsInventory {
  if (json == null) {
    return json;
  }
  return {
    totalInventory:
      json["total_inventory"] == null ? undefined : json["total_inventory"],
    inventoriesAdjustmentsAllowances:
      json["inventories_adjustments_allowances"] == null
        ? undefined
        : json["inventories_adjustments_allowances"],
    otherInventories:
      json["other_inventories"] == null ? undefined : json["other_inventories"],
    finishedGoods:
      json["finished_goods"] == null ? undefined : json["finished_goods"],
    workInProcess:
      json["work_in_process"] == null ? undefined : json["work_in_process"],
    rawMaterials:
      json["raw_materials"] == null ? undefined : json["raw_materials"],
  };
}

export function AssetsInfoCurrentAssetsInventoryToJSON(
  json: any,
): AssetsInfoCurrentAssetsInventory {
  return AssetsInfoCurrentAssetsInventoryToJSONTyped(json, false);
}

export function AssetsInfoCurrentAssetsInventoryToJSONTyped(
  value?: AssetsInfoCurrentAssetsInventory | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    total_inventory: value["totalInventory"],
    inventories_adjustments_allowances:
      value["inventoriesAdjustmentsAllowances"],
    other_inventories: value["otherInventories"],
    finished_goods: value["finishedGoods"],
    work_in_process: value["workInProcess"],
    raw_materials: value["rawMaterials"],
  };
}
