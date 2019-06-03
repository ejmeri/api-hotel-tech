import { injectable, inject } from "inversify";
import { TYPES } from "../config/types";
import { PersonService } from "../business/person/services/PersonService";
import { Application, Request, Response } from "express";
import { Person } from "../business/person/models/Person";
import { TelephoneService } from "../business/telephone/services/TelephoneService";
import { TelephoneType } from "../business/telephone/models/TelephoneType";
import { TelephonePerson } from '../business/telephone/models/TelephonePerson';
import { User } from '../business/person/models/User';


@injectable()
export class PersonController {

    @inject(TYPES.PersonService)
    private readonly personService: PersonService;

    @inject(TYPES.TelephoneService)
    private readonly telephoneService: TelephoneService;


    public register(app: Application): void {
        app.route('/person')
            .get((req: Request, res: Response) => {
                res.send('Olá pessoa, tudo bem?');
            })
            .post((req: Request, res: Response) => {
                this.personService.save(req.body as Person)
                    .then(ret => (res.send(ret)))
                    .catch(err => (res.send(err).status(401)));
            });

        app.route('/person/:id')
            .get((req: Request, res: Response) => {
                this.personService.findById(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/person/document/:document')
            .get((req: Request, res: Response) => {
                this.personService.findByDocument(req.params.document)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/person/:id')
            .put((req: Request, res: Response) => {
                this.personService.update(req.params.id, req.body as Person)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/telephone')
            .post((req: Request, res: Response) => {
                this.telephoneService.saveTelephonePerson(req.body as TelephonePerson)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/user')
            .post((req: Request, res: Response) => {
                this.personService.saveUser(req.body as User)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/user')
            .get((req: Request, res: Response) => {
                this.personService.findUserByEmail(req.query.email)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/persons/occupations')
            .get((req: Request, res: Response) => {
                this.personService.findAllOccupations()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

    }
}
