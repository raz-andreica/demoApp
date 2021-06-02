import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { BookingsRoutingModule } from './bookings-routing.module'
import { BookingsComponent } from './bookings.component'

@NgModule({
  imports: [NativeScriptCommonModule, BookingsRoutingModule],
  declarations: [BookingsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BookingsModule {}
