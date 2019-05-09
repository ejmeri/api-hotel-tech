import { injectable } from "inversify";
import { AddressPeople } from '../models/AddressPeople';

@injectable()
export class AddressPeopleRepository {

    public async save(addressPepople: AddressPeople): Promise<AddressPeople> {
        return await AddressPeople.create(addressPepople);
    }

    // public async findAll(): Promise<TelephoneType[]> {
    //     return await TelephoneType.findAll();
    // }
}