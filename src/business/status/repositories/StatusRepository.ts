import { Status } from "../models/Status";
import { injectable } from "inversify";

@injectable()
export class StatusRepository {

    public async save(status: Status): Promise<Status> {
        return await Status.create(status);
    }

    public async findAll(): Promise<Status[]> {
        return await Status.findAll();
    }
}