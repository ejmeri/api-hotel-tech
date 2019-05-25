import { injectable, inject } from "inversify";
import { Person } from "../models/Person";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { PersonRepository } from "../repositories/PersonRepository";


@injectable()
export class PersonService {

    @inject(TYPES.PersonRepository)
    private readonly personRepository: PersonRepository;

    public async save(person: Person): Promise<any> {
        var error = Person.validate(person);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.personRepository.save(person);

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<any> {

        if (id == null)
            return getResultOrError(undefined, 'Id inválido.');

        var response = await this.personRepository.findById(id);

        return getResultOrError(response);
    }
}