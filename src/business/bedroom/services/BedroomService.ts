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

        if (typeId == null)
            throw getResultOrError(undefined, 'Tipo Id inválido');

        var response = await this.bedroomRepository.findByTypeId(typeId);

        return getResultOrError(response);
    }

    public async findById(id: number): Promise<any> {

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bedroomRepository.findById(id);

        return getResultOrError(response);
    }

    public async findByNumber(number: string): Promise<any> {

        if (number == null)
            throw getResultOrError(undefined, 'Número inválido');

        var response = await this.bedroomRepository.findByNumber(number);

        return getResultOrError(response);
    }

    public async findByStatus(status: string): Promise<any> {

        if (status == null)
            throw getResultOrError(undefined, 'Status inválido');

        var response = await this.bedroomRepository.findByStatus(status);

        return getResultOrError(response);
    }

    public async save(bedroom: Bedroom): Promise<any> {
        var error = Bedroom.validate(bedroom);

        if (error)
            throw getResultOrError(undefined, error);

        var response = await this.bedroomRepository.save(bedroom);

        return getResultOrError(response);
    }


    public async update(id: number, bedroom: Bedroom): Promise<any> {
        var error = Bedroom.validate(bedroom);

        if (error)
            throw getResultOrError(undefined, error);

        if (id == null)
            throw getResultOrError(undefined, 'Id inválido');

        var response = await this.bedroomRepository.update(id, bedroom);

        return getResultOrError(response);
    }

}