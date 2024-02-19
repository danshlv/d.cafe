import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html'
})
export class MenuCardComponent {
  @Input() card: { title: string, id: number; }

  constructor(private router: Router, private menuService: MenuService) {}

  openSection(): void {
    // this.router.navigate([`/section/${this.card.id}`]);
    this.menuService.setSelectedSectionMenuId(this.card.id);
  }
}
