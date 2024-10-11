import { Injectable } from '@angular/core';
import { MenuItem, MenuSection } from '../types/menu';

@Injectable()
export class MenuService {
  get selectedSectionMenuId(): number {
    return this._selectedSectionMenuId;
  }

  private readonly allSections: { [key: number]: { title: string; sections: MenuSection[] } } = {
    1: {
      title: 'ITEM.TITLE.MEALS',
      sections: [
        {
          title: 'ITEM.TITLE.MAIN_MEALS',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.ENGLISH_BREAKFAST',
              description: 'ITEM.DESCRIPTION.ENGLISH_BREAKFAST',
              price: 145,
              image: 'breakfast'
            }),
            new MenuItem({
              name: 'ITEM.NAME.ROLL',
              price: 130,
              image: 'roll'
            }),
            new MenuItem({
              name: 'ITEM.NAME.QUESADILLA',
              description: 'ITEM.DESCRIPTION.QUESADILLA',
              price: 130,
              image: 'quesadilla'
            }),
            new MenuItem({
              name: 'ITEM.NAME.HAM_CROISSANT',
              price: 125,
            }),
            new MenuItem({
              name: 'ITEM.NAME.QUISHE_SULUGUNI',
              price: 70,
            }),
            new MenuItem({
              name: 'ITEM.NAME.QUISHE_CHIKCEN_N_MASHROOMS',
              price: 70,
            }),
          ]
        },
        {
          title: 'ITEM.TITLE.FRYING',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.FRENCHED_FRIES',
              price: [40, 70],
              image: 'frenched_fries'
            }),
            new MenuItem({
              name: 'ITEM.NAME.NUGGETS',
              price: [50, 70],
              image: 'nuggets'
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
              price: 25
            }),
            new MenuItem({
              name: 'ITEM.NAME.DOPIO',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.AMERICANO',
              price: 25
            }),
            new MenuItem({
              name: 'ITEM.NAME.AMERICANO_MILK',
              price: 35
            }),
            new MenuItem({
              name: 'ITEM.NAME.FILTER_COFFEE',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.CAPPUCCINO',
              price: 40
            }),
            new MenuItem({
              name: 'ITEM.NAME.LATTE',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.FLAT_WHITE',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.RAF',
              price: 70
            }),
            new MenuItem({
              name: 'ITEM.NAME.CAPPUORANGE',
              price: 70
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
              name: 'ITEM.NAME.PLANT_MILK',
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
            new MenuItem({
              name: 'ITEM.NAME.KOMBUCHA',
              price: 60
            }),
          ]
        }
      ]
    },
    // 5: {
    //   title: 'ITEM.TITLE.COLD_DRINK',
    //   sections: [
    //     {
    //       title: 'ITEM.TITLE.COLD_DRINK',
    //       items: [
    //         new MenuItem({
    //           name: 'ITEM.NAME.ICE_LATTE',
    //           price: 50
    //         }),
    //         new MenuItem({
    //           name: 'ITEM.NAME.ICE_CAPPUORANGE',
    //           price: 65
    //         }),
    //         new MenuItem({
    //           name: 'ITEM.NAME.ESPRESSO_TONIC',
    //           price: 50
    //         }),
    //         new MenuItem({
    //           name: 'ITEM.NAME.LEMONADE',
    //           price: 40
    //         }),
    //         new MenuItem({
    //           name: 'ITEM.NAME.MILKSHAKE',
    //           price: 40
    //         }),
    //       ]
    //     }
    //   ]
    // },
    6: {
      title: 'ITEM.TITLE.SWEETS',
      sections: [
        {
          title: 'ITEM.TITLE.SWEETS',
          items: [
            new MenuItem({
              name: 'ITEM.NAME.SMALL_TART',
              price: 55
            }),
            new MenuItem({
              name: 'ITEM.NAME.NUT_TART',
              price: 80
            }),
            new MenuItem({
              name: 'ITEM.NAME.CHERRY_TART',
              price: 75
            }),
            new MenuItem({
              name: 'ITEM.NAME.VANNILA_ECLAIR',
              price: 50
            }),
            new MenuItem({
              name: 'ITEM.NAME.MACAROON',
              price: 70
            }),
            new MenuItem({
              name: 'ITEM.NAME.LOLI_POP',
              price: 35
            }),

          ]
        }
      ]
    }
  };

  private _selectedSectionMenuId: number;

  getSectionMenu(id: number): { title: string, sections: MenuSection[] } {
    return this.allSections[id];
  }

  setSelectedSectionMenuId(id: number): void {
    this._selectedSectionMenuId = id;
    localStorage.setItem('section', `${id}`);
  }
}
