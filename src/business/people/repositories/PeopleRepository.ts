import { injectable } from "inversify";
import { People } from "../models/People";


@injectable()
export class PeopleRepository {

    public async save(people: People): Promise<People> {
        return await People.create(people);
    }

    public async findById(id: number): Promise<People> {
        return await People.findOne({ where: { id: id } });
    }
}