import { Component } from '@angular/core';

import { AppStateService } from 'src/app/services/app-state.service';
import { LANG } from 'src/app/types/languages';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html'
})
export class LanguageSwitcherComponent {

  readonly LANG = LANG;

  get currentLang(): string {
    return this.appState.selectedLang;
  }

  constructor(private appState: AppStateService) {}

  selectLang(lang: string): void {
    this.appState.selectLang(lang);
  }
}
