import { ItemList, ItemDetail } from './item';

interface Author {
  author: {
    name: string;
    lastname: string;
  };
}

export interface Search extends Author {
  categories: string[];
  items: ItemList[];
}

export interface Detail extends Author {
  categories: string[];
  item: ItemDetail;
}
