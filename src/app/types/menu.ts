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
  image: string;
  price: number | number[];

  constructor({
    name = '',
    description = '',
    price = 0,
    image = ''
  }: {
    name: string;
    description?: string;
    price: number | number[];
    image?: string;
  }) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
}
