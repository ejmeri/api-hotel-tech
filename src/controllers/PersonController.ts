import { injectable, inject } from "inversify";
import { TYPES } from "../config/types";
import { PersonService } from "../business/person/services/PersonService";
import { Application, Request, Response } from "express";
import { Person } from "../business/person/models/Person";
import { TelephoneService } from "../business/telephone/services/TelephoneService";
import { TelephoneType } from "../business/telephone/models/TelephoneType";
import { TelephonePerson } from '../business/telephone/models/TelephonePerson';


@injectable()
export class PersonController {

    @inject(TYPES.PersonService)
    private readonly peopleService: PersonService;

    @inject(TYPES.TelephoneService)
    private readonly telephoneService: TelephoneService;

    public register(app: Application): void {
        app.route('/people')
            .get((req: Request, res: Response) => {
                res.send('Olá pessoa, tudo bem?');
            })
            .post((req: Request, res: Response) => {
                this.peopleService.save(req.body as Person)
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
                this.telephoneService.saveTelephonePerson(req.body as TelephonePerson)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

    }
}
