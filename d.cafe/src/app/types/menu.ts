export enum MENU_SECTION_TYPE {
  ITEM = 'item',
  TITLE = 'title'
}

export type MenuSection = {
  title: string;
  items: MenuItem[];
};


export class MenuItem {
  type = MENU_SECTION_TYPE.ITEM;
  name: string;
  description: string;
  price: number | number[];

  constructor({
    name = '',
    description = '',
    price = 0
  }: {
    name: string;
    description?: string;
    price: number | number[]
  }) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
