import { injectable, inject } from "inversify";
import { StatusRepository } from "../repositories/StatusRepository";
import { Status } from "../models/Status";
import { TYPES } from "../../../config/types";


@injectable()
export class StatusService {

    @inject(TYPES.StatusRepository)
    private readonly statusRepository: StatusRepository;

    public async save(status: Status): Promise<Status> {
        return this.statusRepository.save(status);
    }
}