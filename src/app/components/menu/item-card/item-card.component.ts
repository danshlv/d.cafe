import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/types/menu';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html'
})
export class ItemCardComponent {
  @Input() item: MenuItem;

  readonly Array = Array;
}
