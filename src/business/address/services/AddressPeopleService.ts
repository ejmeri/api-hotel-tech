import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { AddressPeople } from '../models/AddressPeople';
import { AddressPeopleRepository } from '../repositories/AddressPeopleRepository';


@injectable()
export class AddressPeopleService {

    @inject(TYPES.AddressPeopleRepository)
    private readonly addressPeopleRepository: AddressPeopleRepository;

    public async save(addressPeople: AddressPeople): Promise<any> {
        var error = AddressPeople.validate(addressPeople);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.addressPeopleRepository.save(addressPeople);

        return getResultOrError(response);
    }
}