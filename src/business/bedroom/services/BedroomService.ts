import { injectable, inject } from "inversify";
import { TYPES } from "../../../config/types";
import { getResultOrError, ApiReturn } from "../../../utils/ApiReturn";
import { BedroomRepository } from '../repositories/BedroomRepository';
import { Bedroom } from '../models/Bedroom';


@injectable()
export class BedroomService {

    @inject(TYPES.BedroomRepository)
    private readonly bedroomRepository: BedroomRepository;

    public async findAll(): Promise<ApiReturn> {
        var response = await this.bedroomRepository.findAll();

        return getResultOrError(response);
    }

    public async findByTypeId(typeId: number): Promise<ApiReturn> {

        if (typeId == null)
            throw getResultOrError(undefined, 'Tipo Id inválido');

        var response = await this.bedroomRepository.findByTypeId(typeId);

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<ApiReturn> {

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bedroomRepository.findById(id);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<ApiReturn> {

        if (number == null)
            throw getResultOrError(undefined, 'Número inválido');

        var response = await this.bedroomRepository.findByNumber(number);

        return getResultOrError(response);
    }

    public async findByStatus(status: string): Promise<ApiReturn> {

        if (status == null)
            throw getResultOrError(undefined, 'Status inválido');

        var response = await this.bedroomRepository.findByStatus(status);

        return getResultOrError(response);
    }

    public async findBedroomTypes(): Promise<ApiReturn> {
        var response = await this.bedroomRepository.findBedroomTypes();

        return getResultOrError(response);
    }

    public async save(bedroom: Bedroom): Promise<ApiReturn> {
        var error = Bedroom.validate(bedroom);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.bedroomRepository.save(bedroom);

        return getResultOrError(response);
    }


    public async update(id: number, bedroom: Bedroom): Promise<ApiReturn> {
        var error = Bedroom.validate(bedroom);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bedroomRepository.update(id, bedroom);

        return getResultOrError(response);
    }

}