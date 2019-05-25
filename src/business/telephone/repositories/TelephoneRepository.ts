import { injectable } from "inversify";
import { TelephoneType } from "../models/TelephoneType";
import { TelephonePerson } from '../models/TelephonePerson';

@injectable()
export class TelephoneRepository {

    public async save(telephoneType: TelephoneType): Promise<TelephoneType> {
        return await TelephoneType.create(telephoneType);
    }

    public async saveTelephonePerson(telephonePhone: TelephonePerson): Promise<TelephonePerson> {
        return await TelephonePerson.create(telephonePhone);
    }

    public async findAll(): Promise<TelephoneType[]> {
        return await TelephoneType.findAll();
    }
}