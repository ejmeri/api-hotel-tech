import { injectable } from "inversify";
import { Bedroom } from '../models/Bedroom';
import { BedroomType } from '../models/BedroomType';

@injectable()
export class BedroomRepository {

    public async findAll(): Promise<Bedroom[]> {
        return await Bedroom.findAll();
    }

    public async findByNumber(number: string): Promise<Bedroom> {
        return await Bedroom.findOne({  include: [BedroomType], where: { number: number } });
    }

    public async findById(id: number): Promise<Bedroom> {
        return await Bedroom.findOne({  include: [BedroomType], where: { id: id } });
    }

    public async findByTypeId(typeId: number): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType], where: { bedroomTypeId: typeId } });
    }

    public async findByStatus(status: string): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType], where: { status: status } });
    }

    public async save(bedroom: Bedroom): Promise<Bedroom> {
        return await Bedroom.create(bedroom);
    }

    public async update(id: number, bedroom: Bedroom): Promise<any> {
        return await Bedroom.update({ bedroom }, { where: { id: id } });
    }
}