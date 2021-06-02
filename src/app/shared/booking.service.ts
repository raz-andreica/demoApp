import {Injectable, NgZone} from '@angular/core'
import {Observable, throwError} from 'rxjs'
import {catchError} from 'rxjs/operators'
import ApiService from "../services/bookings-api.service";

import {Booking} from "./booking.model";

const editableProperties = [
  'carName',
  'startDate',
  'endDate'
]

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private static cloneUpdateModel(booking: Booking): object {
    return editableProperties.reduce((a, e) => ((a[e] = booking[e]), a), {})
  }

  private _bookings: Array<Booking> = []

  constructor(private _ngZone: NgZone) {
  }

  load(): Observable<any> {
    return new Observable((observer: any) => {
      const path = 'bookings'

      const onValueEvent = (snapshot: any) => {
        this._ngZone.run(() => {
          const results = this.handleSnapshot(snapshot)
          observer.next(results)
        })
      }
      ApiService.addValueEventListener(onValueEvent, `/${path}`)
    }).pipe(catchError(this.handleErrors))
  }

  update(bookingModel: Booking): Promise<any> {
    const updateModel = BookingService.cloneUpdateModel(bookingModel)

    ApiService.update('/bookings/' + bookingModel.id, updateModel)
    return Promise.resolve();
  }

  private handleSnapshot(data: any): Array<Booking> {
    this._bookings = []

    if (data) {
      for (const id in data) {
        if (data.hasOwnProperty(id)) {
          this._bookings.push(new Booking(data[id]))
        }
      }
    }

    return this._bookings
  }

  private handleErrors(error: Response): Observable<never> {
    return throwError(error)
  }
}
