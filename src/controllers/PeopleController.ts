import { injectable, inject } from "inversify";
import { TYPES } from "../config/types";
import { PeopleService } from "../business/people/services/PeopleService";
import { Application, Request, Response } from "express";
import { People } from "../business/people/models/People";
import { TelephoneService } from "../business/telephone/services/TelephoneService";
import { TelephoneType } from "../business/telephone/models/TelephoneType";
import { TelephonePeople } from '../business/telephone/models/TelephonePeople';


@injectable()
export class PeopleController {

    @inject(TYPES.PeopleService)
    private readonly peopleService: PeopleService;

    @inject(TYPES.TelephoneService)
    private readonly telephoneService: TelephoneService;

    public register(app: Application): void {
        app.route('/people')
            .get((req: Request, res: Response) => {
                res.send('Olá pessoa, tudo bem?');
            })
            .post((req: Request, res: Response) => {
                this.peopleService.save(req.body as People)
                    .then(ret => (res.send(ret)))
                    .catch(err => (res.send(err).status(401)));
            });
        app.route('/people/:id')
            .get((req: Request, res: Response) => {
                this.peopleService.findById(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
        app.route('/telephonetype')
            .post((req: Request, res: Response) => {
                this.telephoneService.saveTelephoneType(req.body as TelephoneType)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
        app.route('/telephone')
            .post((req: Request, res: Response) => {
                this.telephoneService.saveTelephonePeople(req.body as TelephonePeople)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

    }
}
