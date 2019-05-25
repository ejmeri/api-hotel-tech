import { injectable, inject } from "inversify";
import { BookingRepository } from "../repositories/BookingRepository";
import { TYPES } from "../../../config/types";
import { Booking } from "../models/Booking";
import { getResultOrError } from "../../../utils/ApiReturn";

@injectable()
export class BookingService {
    @inject(TYPES.BookingRepository)
    private readonly bookingRepository: BookingRepository;

    public async save(booking: Booking): Promise<any> {
        var error = Booking.validate(booking);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.bookingRepository.save(booking);

        return getResultOrError(response);
    }


    public async checkIn(id: number): Promise<any> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.checkIn(id, true, new Date());

        return getResultOrError(response);
    }

    public async checkOut(id: number): Promise<any> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.checkOut(id, true, new Date());

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<any> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.findById(id);

        return getResultOrError(response);
    }
}