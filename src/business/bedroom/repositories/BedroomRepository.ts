import { injectable } from "inversify";
import { Bedroom } from '../models/Bedroom';
import { BedroomType } from '../models/BedroomType';

@injectable()
export class BedroomRepository {

    public async findAll(): Promise<Bedroom[]> {
        return await Bedroom.findAll();
    }

    public async findByNumber(number: string): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType], where: { number: number } });
    }

    public async findById(id: number): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType], where: { id: id } });
    }

    public async findByTypeId(typeId: number): Promise<Bedroom[]> {
        return await Bedroom.findAll({ include: [BedroomType], where: { BedroomTypeId: typeId } });
    }

    public async findByAvailableAndTypeId(typeId: number): Promise<Bedroom[]> {
        return await Bedroom.findAll({ include: [BedroomType], where: { BedroomTypeId: typeId, status: 'Disponível' } });
    }

    public async findByStatus(status: string): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType], where: { status: status } });
    }

    public async findBedroomTypes(): Promise<BedroomType[]> {
        return await BedroomType.findAll();
    }


    public async save(bedroom: Bedroom): Promise<Bedroom> {
        return await Bedroom.create(bedroom);
    }

    public async update(id: number, bedroom: Bedroom): Promise<any> {
        return await Bedroom.update({ bedroom }, { where: { id: id } });
    }

    public async updateTypeId(id: number, typeId: number): Promise<any> {
        return await Bedroom.update({ BedroomTypeId: typeId }, { where: { id: id } });
    }

    public async updateStatus(id: number, status: string): Promise<any> {
        return await Bedroom.update({ status: status }, { where: { id: id } });
    }
}