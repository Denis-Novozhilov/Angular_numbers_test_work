import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ElementsGroupComponent } from './components/elements-group/elements-group.component';

import {MatButtonModule} from '@angular/material/button';
import {MatDialogActions, MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
// import { MatCardModule, MatButtonModule, MatDialogModule } from '@angular/material';

import { ContentPipePipe } from './pipes/content-pipe.pipe';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ElementsGroupComponent,
    ContentPipePipe,
    MyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
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
