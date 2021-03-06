import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { AddressPerson } from '../models/AddressPerson';
import { AddressPersonRepository } from '../repositories/AddressPersonRepository';


@injectable()
export class AddressPersonService {

    @inject(TYPES.AddressPersonRepository)
    private readonly addressPersonRepository: AddressPersonRepository;

    public async save(addressPerson: AddressPerson): Promise<ApiReturn> {
        var error = AddressPerson.validate(addressPerson);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.addressPersonRepository.save(addressPerson);

        return getResultOrError(response);
    }
}