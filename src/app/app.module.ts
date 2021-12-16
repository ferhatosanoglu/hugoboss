import { NgModule } from '@angular/core';
import { MatModule } from './utils';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxTimeSchedulerModule } from 'ngx-time-scheduler';
import {
  HomepageComponent
} from './pages';
import { SidebarComponent } from './components/layouts/client/sidebar/sidebar.component';
import { P1Component } from './pages/client/p1/p1.component';
import { P2Component } from './pages/client/p2/p2.component';
import { P3Component } from './pages/client/p3/p3.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidebarComponent,
    HomepageComponent,
    SidebarComponent,
    P1Component,
    P2Component,
    P3Component
  ],
  imports: [
    BrowserModule,
    NgxTimeSchedulerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    MatModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
