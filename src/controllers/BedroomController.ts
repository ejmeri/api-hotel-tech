import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { BedroomService } from '../business/bedroom/services/BedroomService';
import { Bedroom } from "business/bedroom/models/Bedroom";


@injectable()
export class BedroomController {

    @inject(TYPES.BedroomService)
    private readonly bedroomService: BedroomService;

    public register(app: Application): void {
        app.route('/bedrooms')
            .get((req: Request, res: Response) => {
                this.bedroomService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms/types/:typeId')
            .get((req: Request, res: Response) => {
                this.bedroomService.findByTypeId(req.params.typeId)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms/number/:number')
            .get((req: Request, res: Response) => {
                this.bedroomService.findByNumber(req.params.number)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms/statuses/:status')
            .get((req: Request, res: Response) => {
                this.bedroomService.findByStatus(req.params.status)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms/types')
            .get((req: Request, res: Response) => {
                this.bedroomService.findBedroomTypes()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms')
            .post((req: Request, res: Response) => {
                this.bedroomService.save(req.body as Bedroom)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/bedrooms/:id')
            .put((req: Request, res: Response) => {
                this.bedroomService.update(req.params.id, req.body as Bedroom)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}