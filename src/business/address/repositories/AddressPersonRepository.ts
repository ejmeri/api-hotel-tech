import { injectable } from "inversify";
import { AddressPerson } from '../models/AddressPerson';

@injectable()
export class AddressPersonRepository {

    public async save(addressPepople: AddressPerson): Promise<AddressPerson> {
        return await AddressPerson.create(addressPepople);
    }

    // public async findAll(): Promise<TelephoneType[]> {
    //     return await TelephoneType.findAll();
    // }
}