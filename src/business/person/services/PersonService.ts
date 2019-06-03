import { injectable, inject } from "inversify";
import { Person } from "../models/Person";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { PersonRepository } from "../repositories/PersonRepository";
import { User } from '../models/User';


@injectable()
export class PersonService {

    @inject(TYPES.PersonRepository)
    private readonly personRepository: PersonRepository;

    public async save(person: Person): Promise<ApiReturn> {
        var error = Person.validate(person);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.personRepository.save(person);

        return getResultOrError(response);
    }

    public async saveUser(user: User): Promise<ApiReturn> {
        var error = User.validate(user);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.personRepository.saveUser(user);

        return getResultOrError(response);
    }

    public async findUserByEmail(email: string): Promise<ApiReturn> {
       var response = await this.personRepository.findUserByEmail(email);

        return getResultOrError(response);
    }

    public async findByUserId(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido.');

        var response = await this.personRepository.findByUserId(id);

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido.');

        var response = await this.personRepository.findById(id);

        return getResultOrError(response);
    }

    public async findByDocument(document: string): Promise<ApiReturn> {
        if (document == null)
            throw getResultOrError(undefined, 'Documento inválido.');

        var response = await this.personRepository.findByDocument(document);

        return getResultOrError(response);
    }

    public async findAllOccupations(): Promise<ApiReturn> {
        var response = await this.personRepository.findAllOccupations();
        return getResultOrError(response);
    }

    public async update(id: number, person: Person): Promise<ApiReturn> {
        if (id == null)
            throw getResultOrError(undefined, 'Id inválido.');

        var error = Person.validate(person);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.personRepository.update(id, person);

        return getResultOrError(response);
    }
}