import { Component, Input, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';
import { MENU_SECTION_TYPE, MenuSection } from 'src/app/types/menu';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html'
})
export class MenuSectionComponent implements OnInit {
  @Input() sectionId: number;

  readonly MENU_SECTION_TYPE = MENU_SECTION_TYPE;
  readonly Array = Array;

  sections: MenuSection[] = [];
  sectionTitle: string;

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.getMenu();
  }

  goHome(): void {
    this.menuService.setSelectedSectionMenuId(null);
  }

  private getMenu(): void {
    const sectionInfo = this.menuService.getSectionMenu(this.sectionId);
    this.sections = sectionInfo.sections;
    this.sectionTitle = sectionInfo.title;
  }
}
