import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ElementsGroupComponent } from './components/elements-group/elements-group.component';

import {MatCardModule} from '@angular/material/card';
import { ContentPipePipe } from './pipes/content-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ElementsGroupComponent,
    ContentPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MainContentComponent,
    ElementsGroupComponent,
    ContentPipePipe
  ]
})
export class AppModule { }
