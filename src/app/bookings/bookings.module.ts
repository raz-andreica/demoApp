import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BookingsRoutingModule } from './bookings-routing.module'
import { BookingsComponent } from './bookings.component'
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";

@NgModule({
    imports: [NativeScriptCommonModule, BookingsRoutingModule, NativeScriptUIListViewModule],
  declarations: [BookingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BookingsModule {}
