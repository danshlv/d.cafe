import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppStateService } from './services/app-state.service';
import { LANG } from './types/languages';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'd.cafe';

  get selectedSection(): number {
    return this.menuService.selectedSectionMenuId;
  }

  constructor(
    private appState: AppStateService,
    private translate: TranslateService,
    private menuService: MenuService
  ) {
    this.appState.initLang();
    this.translate.setDefaultLang(LANG.UK);
    this.translate.use(LANG.UK)
  }
}
