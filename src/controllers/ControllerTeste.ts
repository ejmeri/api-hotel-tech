import { Application, Router, Request, Response } from "express";
import { injectable, inject } from "inversify";


@injectable()
export class ControllerTeste {

    public register(app: Application): void {
        app.route('/index')
            .get((req: Request, res: Response) => {
                res.send('Olá Mundo');
            });
    }
}