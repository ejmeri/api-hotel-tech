import { injectable } from "inversify";
import { Person } from "../models/Person";
import { Occupation } from "../models/Occupation";


@injectable()
export class PersonRepository {

    public async save(people: Person): Promise<Person> {
        return await Person.create(people);
    }

    public async update(id: number, person: Person): Promise<any> {
        return await Person.update({ person }, { where: { id: id } });
    }

    public async findById(id: number): Promise<Person> {
        return await Person.findOne({ where: { id: id } });
    }

    public async findByDocument(document: string): Promise<Person> {
        return await Person.findOne({ where: { document: document } });
    }

    public async findAllOccupations(): Promise<Occupation[]> {
        return await Occupation.findAll();
    }
}