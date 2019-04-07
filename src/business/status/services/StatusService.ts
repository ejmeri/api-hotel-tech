import { injectable, inject } from "inversify";
import { StatusRepository } from "../repositories/StatusRepository";
import { Status } from "../models/Status";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../util/ApiReturn";


@injectable()
export class StatusService {

    @inject(TYPES.StatusRepository)
    private readonly statusRepository: StatusRepository;

    public async save(status: Status): Promise<any> {
        Status.validate(status);
        return await this.statusRepository.save(status);
    }
}