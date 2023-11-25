import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { MENU_SECTION_TYPE, MenuSection } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html'
})
export class MenuSectionComponent {
  readonly MENU_SECTION_TYPE = MENU_SECTION_TYPE;
  readonly Array = Array;

  sections: MenuSection[] = [];
  sectionTitle: string;

  constructor(
		private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) {
    const sectionId = +this.route.snapshot.paramMap.get('id');
    this.getMenu(sectionId);
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  private getMenu(id: number): void {
    const sectionInfo = this.menuService.getSectionMenu(id);
    this.sections = sectionInfo.sections;
    this.sectionTitle = sectionInfo.title;
  }
}
