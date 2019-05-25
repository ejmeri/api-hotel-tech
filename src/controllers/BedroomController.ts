import { Application, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { BedroomService } from '../business/bedroom/services/BedroomService';


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

        app.route('/bedrooms/type/:typeId')
            .get((req: Request, res: Response) => {
                this.bedroomService.findByTypeId(req.params.typeId  )
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}