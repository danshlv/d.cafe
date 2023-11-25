import { Injectable } from '@angular/core';
import { LANG } from '../types/languages';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AppStateService {
  private _selectedLang: string = LANG.UK;

  get selectedLang(): string {
    return this._selectedLang;
  }

  constructor(private translate: TranslateService) {}

  selectLang(lang: string): void {
    this._selectedLang = lang;
    localStorage.setItem('LANG', lang);
    this.translate.use(lang);
  }

  initLang(): void {
    // TODO: create localStorage service
    const storedLang = localStorage.getItem('LANG');
    this.selectLang(storedLang || LANG.UK);
  }
}
