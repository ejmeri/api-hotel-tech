import { Application, Router, Request, Response } from "express";
import { injectable, inject } from "inversify";


@injectable()
export class ProductController {

    public register(app: Application): void {
        app.route('/product')
            .get((req: Request, res: Response) => {
                res.send('Olá Mundo');
            });
    }
}