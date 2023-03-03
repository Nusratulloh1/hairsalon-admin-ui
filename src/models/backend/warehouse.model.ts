export interface IWarehouse {
  id: string;
  product_name: string;
  category: string;
  subcategory: string;
  product_count: number;
  product_price: number;
  unit: string;
  status: number;
  min_recommended: number;
  comments: string;
}

export interface IWarehouseList extends IWarehouse {}
