import { injectable } from "inversify";
import { TelephoneType } from "../models/TelephoneType";

@injectable()
export class TelephoneRepository {

    public async save(telephoneType: TelephoneType): Promise<TelephoneType> {
        return await TelephoneType.create(telephoneType);
    }

    public async findAll(): Promise<TelephoneType[]> {
        return await TelephoneType.findAll();
    }
}