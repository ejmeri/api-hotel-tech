import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { EmployeeRepository } from "../repositories/EmployeeRepository";


@injectable()
export class EmployeeService {

    @inject(TYPES.EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository;

    public async findAll(): Promise<any> {
        var response = await this.employeeRepository.findAll();

        return getResultOrError(response);
    }
}