import { injectable } from "inversify";
import { Booking } from "../models/Booking";
import { Person } from "../../../business/person/models/Person";
import { PaymentMethod } from "../../../business/payment/models/PaymentMethod";
import { Bedroom } from "../../../business/bedroom/models/Bedroom";
import { BedroomType } from "../../../business/bedroom/models/BedroomType";

@injectable()
export class BookingRepository {

    public async save(booking: Booking): Promise<Booking> {
        return await Booking.create(booking);
    }

    public async checkIn(id: number, checkIn: boolean, checkInDate: Date): Promise<any> {
        return await Booking.update({ checkIn: checkIn, checkInDate: checkInDate }, { where: { id: id } });
    }

    public async checkOut(id: number, checkOut: boolean, checkOutDate: Date): Promise<any> {
        return await Booking.update({ checkOut: checkOut, checkOutDate: checkOutDate }, { where: { id: id } });
    }

    public async findById(id: number): Promise<any> {
        return await Booking.findOne({ include: [{ model: Person }, { model: PaymentMethod }, { model: Bedroom, include: [BedroomType] }], where: { id: id } });
    }

    public async findPaymentMethods(): Promise<PaymentMethod[]> {
        return await PaymentMethod.findAll();
    }
}