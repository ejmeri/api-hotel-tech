// lib/app.ts
import * as express from "express";
import container from "./config/ioc";
import { TYPES } from "./config/types";

import { StatusController } from "./controllers/StatusController";
import { ControllerTeste } from "./controllers/ControllerTeste";

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(express.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }));

        container.get<StatusController>(TYPES.StatusController).register(this.app);
        container.get<ControllerTeste>(TYPES.ControllerTeste).register(this.app);

        console.log('aquio estou')
    }

}

export default new App().app;