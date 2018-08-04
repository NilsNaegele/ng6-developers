import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersSearchService } from './services/users-search.service';

import { AppComponent } from './app.component';
import { UsersSearchComponent } from './components/users-search/users-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
