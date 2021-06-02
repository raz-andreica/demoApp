import {Component, OnInit} from '@angular/core'
import {RouterExtensions} from '@nativescript/angular'
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {Subscription} from 'rxjs'
import {finalize} from 'rxjs/operators'
import {Application, ObservableArray} from '@nativescript/core'

import {Booking} from "../shared/booking.model";
import {BookingService} from "../shared/booking.service";

@Component({
  selector: 'Home',
  templateUrl: './bookings.component.html',
})
export class BookingsComponent implements OnInit {
  private _isLoading: boolean = false
  private _bookings: ObservableArray<Booking> = new ObservableArray<Booking>([])
  private _dataSubscription: Subscription

  constructor(private _bookingService: BookingService, private _routerExtensions: RouterExtensions) {
  }

  ngOnInit(): void {
    if (!this._dataSubscription) {
      this._isLoading = true

      this._dataSubscription = this._bookingService
        .load()
        .pipe(finalize(() => (this._isLoading = false)))
        .subscribe((bookings: Array<Booking>) => {
          this._bookings = new ObservableArray(bookings)
          this._isLoading = false
        })
    }
  }

  ngOnDestroy(): void {
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe()
      this._dataSubscription = null
    }
  }

  get bookings(): ObservableArray<Booking> {
    return this._bookings
  }

  get isLoading(): boolean {
    return this._isLoading
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
