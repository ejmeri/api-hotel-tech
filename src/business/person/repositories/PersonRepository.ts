import { injectable } from "inversify";
import { Person } from "../models/Person";


@injectable()
export class PersonRepository {

    public async save(people: Person): Promise<Person> {
        return await Person.create(people);
    }

    public async findById(id: number): Promise<Person> {
        return await Person.findOne({ where: { id: id } });
    }
}