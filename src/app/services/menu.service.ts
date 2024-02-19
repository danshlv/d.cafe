import { Injectable } from '@angular/core';
import { MenuItem, MenuSection } from '../types/menu';

@Injectable()
export class MenuService {
  private readonly allSections: { [key: number]: { title: string; sections: MenuSection[] } } = {
    1: {
      title: 'ITEM.TITLE.MEALS',
      sections: [
        {
          title: 'ITEM.TITLE.BREAKFASTS_TOASTS',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.ENGLISH_BREAKFAST',
              description: 'ITEM.DESCRIPTION.ENGLISH_BREAKFAST',
              price: 110,
              image: 'breakfast'
            }),
            new MenuItem({
              name: 'ITEM.NAME.QUESADILLA',
              description: 'ITEM.DESCRIPTION.QUESADILLA',
              price: 90,
              image: 'quesadilla'
            }),
            new MenuItem({
              name: 'ITEM.NAME.CURD_FRITTERS',
              price: 90,
              image: 'curd_fritters'
            }),
            new MenuItem({
              name: 'ITEM.NAME.PANCAKES',
              price: 65,
              image: 'pancakes'
            }),
            new MenuItem({
              name: 'ITEM.NAME.TOASTS',
              description: 'ITEM.DESCRIPTION.TOASTS',
              price: 55,
              image: 'toast'
            }),
            new MenuItem({
              name: 'ITEM.NAME.PANINI',
              description: 'ITEM.DESCRIPTION.PANINI',
              price: 65,
              image: 'panini'
            }),
            new MenuItem({
              name: 'ITEM.NAME.CREAM_SOUP',
              price: 70,
              image: 'cream_soup'
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
        }
      ]
    },
    2: {
      title: 'ITEM.TITLE.COFFEE_TEA',
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
      ]
    },
    3: {
      title: 'ITEM.NAME.PREMIUM_TEA',
      sections: [
        {
          title: 'ITEM.NAME.PREMIUM_TEA',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.JASMINE_PEARL',
              description: 'ITEM.DESCRIPTION.JASMINE_PEARL',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.SENCHA_ASAMUSHI',
              description: 'ITEM.DESCRIPTION.SENCHA_ASAMUSHI',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.JIN_JUN_MEI',
              description: 'ITEM.DESCRIPTION.JIN_JUN_MEI',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.SHU_PUER',
              description: 'ITEM.DESCRIPTION.SHU_PUER',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.DA_HUNG_PAO',
              description: 'ITEM.DESCRIPTION.DA_HUNG_PAO',
              price: 50
            }),
          ]
        }
      ]
    },
    4: {
      title: 'ITEM.TITLE.WATER_JUICE',
      sections: [
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
    },
    5: {
      title: 'ITEM.TITLE.COLD_DRINK',
      sections: [
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
        }
      ]
    },
    6: {
      title: 'ITEM.TITLE.SWEETS',
      sections: [
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
    }
  };

  getSectionMenu(id: number): { title: string, sections: MenuSection[] } {
    return this.allSections[id];
  }
}
