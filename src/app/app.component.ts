import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AppStateService } from './services/app-state.service';
import { LANG } from './types/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'd.cafe';

  constructor(
    private appState: AppStateService,
    private translate: TranslateService
  ) {
    this.appState.initLang();
    this.translate.setDefaultLang(LANG.UK);
    this.translate.use(LANG.UK)
  }
}
