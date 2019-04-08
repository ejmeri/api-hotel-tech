import { injectable, inject } from "inversify";
import { TelephoneRepository } from "../repositories/TelephoneRepository";
import { TelephoneType } from "../models/TelephoneType";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";


@injectable()
export class TelephoneService {

    @inject(TYPES.TelephoneTypeService)
    private readonly telephoneRepository: TelephoneRepository;

    public async saveTelephoneType(telephoneType:  TelephoneType): Promise<any> {
        var error = TelephoneType.validate(telephoneType);

        if (error)
            return getResultOrError(undefined, error);

        var response = await this.telephoneRepository.save(telephoneType);

        return getResultOrError(response);
    }

    public async findAll(): Promise<any> {
        var response = await this.telephoneRepository.findAll();

        return getResultOrError(response);
    }
}