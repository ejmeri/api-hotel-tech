import { injectable, inject } from "inversify";
import { BookingRepository } from "../repositories/BookingRepository";
import { TYPES } from "../../../config/types";
import { Booking } from "../models/Booking";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";

@injectable()
export class BookingService {
    @inject(TYPES.BookingRepository)
    private readonly bookingRepository: BookingRepository;

    public async save(booking: Booking): Promise<ApiReturn> {
        var error = Booking.validate(booking);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.bookingRepository.save(booking);

        return getResultOrError(response);
    }


    public async checkIn(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.checkIn(id, true, new Date());

        return getResultOrError(response);
    }

    public async checkOut(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.checkOut(id, true, new Date());

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bookingRepository.findById(id);

        return getResultOrError(response);
    }

    public async findPaymentMethods(): Promise<ApiReturn> {
        var response = await this.bookingRepository.findPaymentMethods();

        return getResultOrError(response);
    }
}