import { injectable } from "inversify";
import { Person } from "../models/Person";
import { Occupation } from "../models/Occupation";
import { User } from '../models/User';


@injectable()
export class PersonRepository {

    public async save(people: Person): Promise<Person> {
        return await Person.create(people);
    }

    public async saveUser(user: User): Promise<User> {
        return await User.create(user);
    }

    public async update(id: number, person: Person): Promise<any> {
        return await Person.update({ person }, { where: { id: id } });
    }

    public async findUserByEmail(email: string): Promise<User> {
        return await User.findOne({ where: { username: email } });
    }

    public async findById(id: number): Promise<Person> {
        return await Person.findOne({ where: { id: id } });
    }

    public async findByUserId(id: number): Promise<Person> {
        return await Person.findOne({ where: { UserId: id } });
    }
    public async findByDocument(document: string): Promise<Person> {
        return await Person.findOne({ where: { document: document } });
    }

    public async findAllOccupations(): Promise<Occupation[]> {
        return await Occupation.findAll();
    }
}