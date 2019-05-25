import { injectable } from "inversify";
import { Employee } from "../models/Employee";

@injectable()
export class EmployeeRepository {
    public async findAll(): Promise<Employee[]> {
        return await Employee.findAll();
    }
}