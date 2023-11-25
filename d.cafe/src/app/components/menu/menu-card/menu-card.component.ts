import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html'
})
export class MenuCardComponent {
  @Input() card: { title: string, subtitle: string; id: number; }

  constructor(private router: Router) {}

  openSection(): void {
    this.router.navigate([`/section/${this.card.id}`]);
  }
}
