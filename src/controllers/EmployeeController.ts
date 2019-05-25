import { Application, Router, Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../config/types";
import { EmployeeService } from "../business/employee/services/EmployeeService";


@injectable()
export class EmployeeController {

    @inject(TYPES.EmployeeService)
    private readonly employeeService: EmployeeService;

    public register(app: Application): void {
        app.route('/employee')
            .get((req: Request, res: Response) => {
                this.employeeService.findAll()
                    .then(ret => res.send(ret))
                    .catch(err => res.send(err).status(401));
            });
    }
}