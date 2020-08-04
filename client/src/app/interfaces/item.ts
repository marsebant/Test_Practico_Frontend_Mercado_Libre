interface ItemBase {
  id: string;
  title: string;
  price: {
    currency: string,
    amount: number,
    decimals: number
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemList extends ItemBase {
  state: string;
}

export interface ItemDetail extends ItemBase {
  sold_quantity: number;
  description: string;
  permalink: string;
}
