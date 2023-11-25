import { Injectable } from '@angular/core';
import { MenuItem, MenuSection } from '../types/menu';

@Injectable()
export class MenuService {
  private readonly allSections: { [key: number]: { title: string; sections: MenuSection[] } } = {
    1: {
      title: 'TITLE.SMTH_TO_EAT',
      sections: [
        {
          title: 'ITEM.TITLE.BREAKFASTS_TOASTS',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.ENGLISH_BREAKFAST',
              description: 'ITEM.DESCRIPTION.ENGLISH_BREAKFAST',
              price: 110
            }),
            new MenuItem({
              name: 'ITEM.NAME.QUESADILLA',
              description: 'ITEM.DESCRIPTION.QUESADILLA',
              price: 90
            }),
            new MenuItem({
              name: 'ITEM.NAME.CURD_FRITTERS',
              price: 90
            }),
            new MenuItem({
              name: 'ITEM.NAME.PANCAKES',
              price: 65
            }),
            new MenuItem({
              name: 'ITEM.NAME.TOASTS',
              price: 55
            }),
            new MenuItem({
              name: 'ITEM.NAME.PANINI',
              price: 65
            }),
            new MenuItem({
              name: 'ITEM.NAME.CREAM_SOUP',
              price: 70
            })
          ]
        },
        {
          title: 'ITEM.TITLE.FRYING',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.FRENCHED_FRIES',
              price: [40, 70]
            }),
            new MenuItem({
              name: 'ITEM.NAME.NUGGETS',
              price: [50, 70]
            }),
            new MenuItem({
              name: 'ITEM.NAME.SAUCE',
              price: 10
            }),
          ]
        },
        {
          title: 'ITEM.TITLE.SWEETS',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.NUT',
              price: [15, 25]
            }),
            new MenuItem({
              name: 'ITEM.NAME.CROISSANT',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.MUFFIN',
              price: 30
            }),
            new MenuItem({
              name: 'ITEM.NAME.PIPE',
              price: 30
            }),
            new MenuItem({
              name: 'ITEM.NAME.DONUT',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.WAFFLE_CAKE',
              price: 25
            }),
            new MenuItem({
              name: 'ITEM.NAME.CAKE',
              price: 55
            }),
          ]
        }
      ]
    },
    2: {
      title: 'TITLE.SMTH_TO_DRINK',
      sections: [
        {
          title: 'ITEM.TITLE.COFFEE_TEA',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.ESPRESSO',
              price: 20
            }),
            new MenuItem({
              name: 'ITEM.NAME.DOPIO',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.AMERICANO',
              price: 20
            }),
            new MenuItem({
              name: 'ITEM.NAME.AMERICANO_MILK',
              price: 30
            }),
            new MenuItem({
              name: 'ITEM.NAME.FILTER_COFFEE',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.CAPPUCCINO',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.LATTE',
              price: 45
            }),
            new MenuItem({
              name: 'ITEM.NAME.FLAT_WHITE',
              price: 45
            }),
            new MenuItem({
              name: 'ITEM.NAME.RAF',
              price: 65
            }),
            new MenuItem({
              name: 'ITEM.NAME.CAPPUORANGE',
              price: 65
            }),
            new MenuItem({
              name: 'ITEM.NAME.CACAO',
              price: 45
            }),
            new MenuItem({
              name: 'ITEM.NAME.TEA',
              price: 20
            }),
            new MenuItem({
              name: 'ITEM.NAME.NATURAL_TEA',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.PREMIUM_TEA',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.MILK',
              price: 15
            }),
            new MenuItem({
              name: 'ITEM.NAME.MASALA',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.LACTOSE_FREE_MILK',
              price: 15
            }),
            new MenuItem({
              name: 'ITEM.NAME.PANT_MILK',
              price: [15, 20]
            }),
          ]
        },
        {
          title: 'ITEM.TITLE.COLD_DRINK',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.ICE_LATTE',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.ICE_CAPPUORANGE',
              price: 65
            }),
            new MenuItem({
              name: 'ITEM.NAME.ESPRESSO_TONIC',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.LEMONADE',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.MILKSHAKE',
              price: 40
            }),
          ]
        },
        {
          title: 'ITEM.TITLE.WATER_JUICE',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.WATER',
              price: 20
            }),
            new MenuItem({
              name: 'ITEM.NAME.COLA',
              price: [25, 30]
            }),
            new MenuItem({
              name: 'ITEM.NAME.JUICE',
              price: [25, 35]
            }),
            new MenuItem({
              name: 'ITEM.NAME.SCHWEPPES',
              price: 30
            }),
          ]
        }
      ]
    }
  };

  getSectionMenu(id: number): { title: string, sections: MenuSection[] } {
    return this.allSections[id];
  }
}
