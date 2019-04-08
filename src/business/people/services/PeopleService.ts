import { injectable, inject } from "inversify";
import { People } from "../models/People";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { PeopleRepository } from "../repositories/PeopleRepository";


@injectable()
export class PeopleService {

    @inject(TYPES.PeopleRepository)
    private readonly peopleRepository: PeopleRepository;

    public async save(people: People): Promise<any> {
        var error = People.validate(people);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.peopleRepository.save(people);

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<any> {

        if (id == null)
            return getResultOrError(undefined, 'Id inválido.');

        var response = await this.peopleRepository.findById(id);

        return getResultOrError(response);
    }
}