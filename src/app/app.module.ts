import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule, MdIconRegistry} from "@angular/material";
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { EquipmentDetailComponent } from './equipment-detail/equipment-detail.component';
import {EquipmentService} from "./equipment.service";

@NgModule({
    declarations: [
        AppComponent,
        EquipmentListComponent,
        EquipmentDetailComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
    ],
    providers: [
        EquipmentService,
        MdIconRegistry,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
