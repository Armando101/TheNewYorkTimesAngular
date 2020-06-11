import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { ArticleHeroComponent } from './components/home/article-hero/article-hero.component';
import { ArticleMiddleComponent } from './components/home/article-middle/article-middle.component';
import { ArticleBottomComponent } from './components/home/article-bottom/article-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ArticleHeroComponent,
    ArticleMiddleComponent,
    ArticleBottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
