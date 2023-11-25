import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  menuCards: {title: string; subtitle: string; id: number; }[] = [
    {
      title: 'TITLE.SMTH_TO_EAT',
      subtitle: 'HINT.SMTH_TO_EAT',
      id: 1
    },
    {
      title: 'TITLE.SMTH_TO_DRINK',
      subtitle: 'HINT.SMTH_TO_DRINK',
      id: 2
    }
  ]
}
