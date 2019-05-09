import { injectable } from "inversify";
import { TelephoneType } from "../models/TelephoneType";
import { TelephonePeople } from '../models/TelephonePeople';

@injectable()
export class TelephoneRepository {

    public async save(telephoneType: TelephoneType): Promise<TelephoneType> {
        return await TelephoneType.create(telephoneType);
    }

    public async saveTelephonePeople(telephonePhone: TelephonePeople): Promise<TelephonePeople> {
        return await TelephonePeople.create(telephonePhone);
    }

    public async findAll(): Promise<TelephoneType[]> {
        return await TelephoneType.findAll();
    }
}