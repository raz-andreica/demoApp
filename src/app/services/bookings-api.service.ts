import db from "./bookings-db.json"

class BookingsApiService {

  private db: any;

  constructor() {
    this.db = db;
  }

  update(path, updateBooking) {
    const bookingId = path.split("/").slice(-1)[0];
    this.db.bookings[bookingId] = {...this.db.bookings[bookingId], ...updateBooking }
  }

  addValueEventListener(onValueEvent, path) {
    onValueEvent(this.db.bookings)
    return {
      path: path,
      listeners: this.db.bookings
    }
  }
}

export default new BookingsApiService;
