import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError } from "../../../utils/ApiReturn";
import { BedroomRepository } from '../repositories/BedroomRepository';
import { Bedroom } from '../models/Bedroom';


@injectable()
export class BedroomService {

    @inject(TYPES.BedroomRepository)
    private readonly bedroomRepository: BedroomRepository;

    public async findAll(): Promise<any> {
        var response = await this.bedroomRepository.findAll();

        return getResultOrError(response);
    }

    public async findByTypeId(typeId: number): Promise<any> {
        var response = await this.bedroomRepository.findByTypeId(typeId);

        return getResultOrError(response);
    }
}