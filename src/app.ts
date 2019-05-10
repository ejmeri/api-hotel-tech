// lib/app.ts
import * as express from "express";
import container from "./config/ioc";
import { TYPES } from "./config/types";

import { StatusController } from "./controllers/StatusController";
import { ControllerTeste } from "./controllers/ControllerTeste";
import { PeopleController } from "./controllers/PeopleController";
import { EmployeeController } from './controllers/EmployeeController';

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
        container.get<PeopleController>(TYPES.PeopleController).register(this.app);
        container.get<EmployeeController>(TYPES.EmployeeController).register(this.app);
    }

}

export default new App().app;