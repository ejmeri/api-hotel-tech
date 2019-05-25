import { injectable } from "inversify";
import { Bedroom } from '../models/Bedroom';
import { BedroomType } from '../models/BedroomType';

@injectable()
export class BedroomRepository {

    public async findAll(): Promise<Bedroom[]> {
        return await Bedroom.findAll();
    }

    public async findByNumber(number: string): Promise<Bedroom> {
        return await Bedroom.findOne({ where: { number: number } });
    }

    public async findById(id: number): Promise<Bedroom> {
        return await Bedroom.findOne({ where: { id: id } });
    }

    public async findByTypeId(typeId: number): Promise<Bedroom> {
        return await Bedroom.findOne({ include: [BedroomType],  where: { bedroomTypeId: typeId }});
    }

    public async save(bedroom: Bedroom): Promise<Bedroom> {
        return await Bedroom.create(bedroom);
    }

    // public async update(id: number, bedroom: Bedroom): Promise<Bedroom> {
    //     var _bedroom = await Bedroom.findOne({ where: { id: id }});

    //     return  _bedroom.update(bedroom);
    // }
}