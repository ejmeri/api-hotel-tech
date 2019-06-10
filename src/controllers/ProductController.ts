import { Application, Router, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from '../config/types';
import { ProductService } from "../business/products/services/ProductService";
import { Product } from '../business/products/models/Product';
import { ProductBedroom } from '../business/products/models/ProductBedroom';


@injectable()
export class ProductController {

    @inject(TYPES.ProductService)
    private readonly productService: ProductService;

    public register(app: Application): void {
        app.route('/products')
            .get((req: Request, res: Response) => {
                this.productService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            })

            .post((req: Request, res: Response) => {
                this.productService.save(req.body as Product)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            })

        app.route('/products/:id')
            .put((req: Request, res: Response) => {
                this.productService.update(req.params.id, req.body as Product)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });


        app.route('/products/bedrooms/:id')
            .get((req: Request, res: Response) => {
                this.productService.findByBedroom(req.params.id)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });

        app.route('/products/bedrooms')
            .post((req: Request, res: Response) => {
                this.productService.saveProductBedroom(req.body as ProductBedroom)
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}