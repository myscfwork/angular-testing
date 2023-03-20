import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReportBaseComponent} from "./report-base/report-base.component";

@NgModule({
  declarations: [AppComponent, ReportBaseComponent],
  imports: [BrowserAnimationsModule, BrowserModule, MatTabsModule, FormsModule,
    MatButtonModule, MatIconModule, MatListModule, MatSelectModule, MatTableModule, MatTooltipModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
