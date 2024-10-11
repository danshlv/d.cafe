import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  menuCards: {title: string; id: number; }[] = [
    {
      title: 'ITEM.TITLE.MEALS',
      id: 1
    },
    {
      title: 'ITEM.TITLE.COFFEE_TEA',
      id: 2
    },
    {
      title: 'ITEM.NAME.PREMIUM_TEA',
      id: 3
    },
    {
      title: 'ITEM.TITLE.WATER_JUICE',
      id: 4
    },
    // {
    //   title: 'ITEM.TITLE.COLD_DRINK',
    //   id: 5
    // },
    {
      title: 'ITEM.TITLE.SWEETS',
      id: 6
    }
  ]
}
