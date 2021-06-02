export class Booking {
  id: string
  userId: string
  carName: string
  carImage: string
  startDate: string
  endDate: string

  constructor(options: any) {
    this.id = options.id
    this.userId = options.userId
    this.carName = options.carName
    this.carImage = options.carImage
    this.startDate = options.startDate
    this.endDate = options.endDate
  }
}
