import { injectable, inject } from "inversify";
import { StatusRepository } from "../repositories/StatusRepository";
import { Status } from "../models/Status";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";


@injectable()
export class StatusService {

    @inject(TYPES.StatusRepository)
    private readonly statusRepository: StatusRepository;

    public async save(status: Status): Promise<ApiReturn> {
        var error = Status.validate(status);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.statusRepository.save(status);

        return getResultOrError(response);
    }

    public async findAll(): Promise<ApiReturn> {
        var response = await this.statusRepository.findAll();

        return getResultOrError(response);
    }
}