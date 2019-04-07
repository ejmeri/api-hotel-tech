import { injectable, inject } from "inversify";
import { Application, Router, Request, Response } from "express";
import { StatusService } from "../business/status/services/StatusService";
import { TYPES } from "../config/types";
import { Status } from "../business/status/models/Status";

@injectable()
export class StatusController {

    @inject(TYPES.StatusService)
    private statusService: StatusService;

    public register(app: Application): void {
        app.route('/status')
            .post((req: Request, res: Response) => {
                this.statusService.save(req.body as Status)
                    .then(ret => (res.send(ret)))
                    .catch(err => (res.send(err)));
            });
    }
}