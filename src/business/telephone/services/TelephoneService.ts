import { injectable, inject } from "inversify";
import { TelephoneRepository } from "../repositories/TelephoneRepository";
import { TelephoneType } from "../models/TelephoneType";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { TelephonePeople } from '../models/TelephonePeople';


@injectable()
export class TelephoneService {

    @inject(TYPES.TelephoneRepository)
    private readonly telephoneRepository: TelephoneRepository;

    public async saveTelephoneType(telephoneType:  TelephoneType): Promise<any> {
        var error = TelephoneType.validate(telephoneType);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.telephoneRepository.save(telephoneType);

        return getResultOrError(response);
    }

    public async saveTelephonePeople(telephonePeople: TelephonePeople): Promise<any> {
        var error = TelephonePeople.validate(telephonePeople);

        if(error)
            return getResultOrError(undefined, error);

        var response = await this.telephoneRepository.saveTelephonePeople(telephonePeople);

        return getResultOrError(response);
    }

    public async findAll(): Promise<any> {
        var response = await this.telephoneRepository.findAll();

        return getResultOrError(response);
    }
}