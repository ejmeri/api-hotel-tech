import { injectable, inject } from "inversify";
import { TelephoneRepository } from "../repositories/TelephoneRepository";
import { TelephoneType } from "../models/TelephoneType";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { TelephonePerson } from '../models/TelephonePerson';


@injectable()
export class TelephoneService {

    @inject(TYPES.TelephoneRepository)
    private readonly telephoneRepository: TelephoneRepository;

    public async saveTelephoneType(telephoneType: TelephoneType): Promise<ApiReturn> {
        var error = TelephoneType.validate(telephoneType);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.telephoneRepository.save(telephoneType);

        return getResultOrError(response);
    }

    public async saveTelephonePerson(telephonePerson: TelephonePerson): Promise<ApiReturn> {
        var error = TelephonePerson.validate(telephonePerson);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.telephoneRepository.saveTelephonePerson(telephonePerson);

        return getResultOrError(response);
    }

    public async findAll(): Promise<ApiReturn> {
        var response = await this.telephoneRepository.findAll();

        return getResultOrError(response);
    }
}