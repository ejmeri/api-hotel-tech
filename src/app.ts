// lib/app.ts
import * as express from "express";
import container from "./config/ioc";
import { TYPES } from "./config/types";

import { StatusController } from "./controllers/StatusController";
import { ControllerTeste } from "./controllers/ControllerTeste";
import { PersonController } from "./controllers/PersonController";
import { EmployeeController } from './controllers/EmployeeController';
import { BedroomController } from './controllers/BedroomController';
import { BookingController } from "./controllers/BookingController";

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
        container.get<PersonController>(TYPES.PersonController).register(this.app);
        container.get<EmployeeController>(TYPES.EmployeeController).register(this.app);
        container.get<BedroomController>(TYPES.BedroomController).register(this.app);
        container.get<BookingController>(TYPES.BookingController).register(this.app);
    }

}

export default new App().app;