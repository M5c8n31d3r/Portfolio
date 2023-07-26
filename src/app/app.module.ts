
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// /// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: HttpClient) {
// // return new TranslateHttpLoader(http);
// }

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    AboveTheFoldComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ImprintComponent,
    MySkillsComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  //   TranslateModule.forRoot({
  //     defaultLanguage: 'en',
  //     loader: {
  //         provide: TranslateLoader,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //     }
  // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }