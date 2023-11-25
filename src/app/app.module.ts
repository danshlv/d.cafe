import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { AppStateService } from './services/app-state.service';
import { LANG } from './types/languages';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuCardComponent } from './components/menu/menu-card/menu-card.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuService } from './services/menu.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitcherComponent,
    HomePageComponent,
    MenuCardComponent,
    MenuSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: LANG.UK,
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [AppStateService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
