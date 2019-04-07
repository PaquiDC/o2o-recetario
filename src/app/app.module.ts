import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearcherComponent } from './shared/components/searcher/searcher.component';
import { RecipePanelComponent } from './shared/components/recipe-panel/recipe-panel.component';
import { RecipeCardComponent } from './shared/components/recipe-card/recipe-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearcherComponent,
    RecipePanelComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
