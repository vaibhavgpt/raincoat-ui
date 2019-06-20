import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchTagsComponent } from './search-tags/search-tags.component';
import { AddTagsComponent } from './add-tags/add-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchTagsComponent,
    AddTagsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
