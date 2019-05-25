import { Application, Router, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../config/types";
import { BookingService } from "../business/booking/services/BookingService";
import { Booking } from "business/booking/models/Booking";


@injectable()
export class BookingController {

    @inject(TYPES.BookingService)
    private readonly bookingService: BookingService;

    public register(app: Application): void {
        app.route('/bookings')
            .get((req: Request, res: Response) => {
                res.send('Olá Mundo');
            })

            .post((req: Request, res: Response) => {
                this.bookingService.save(req.body as Booking)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bookings/:id/checkin')
            .put((req: Request, res: Response) => {
                this.bookingService.checkIn(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bookings/:id/checkout')
            .put((req: Request, res: Response) => {
                this.bookingService.checkOut(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bookings/:id')
            .get((req: Request, res: Response) => {
                this.bookingService.findById(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });



    }
}