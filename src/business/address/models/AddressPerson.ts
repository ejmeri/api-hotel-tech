import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'AddressPerson' })
export class AddressPerson extends Model<AddressPerson> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(8))
    zipcode: string;

    @Column(DataType.STRING(10))
    number: number;

    @Column(DataType.STRING(80))
    complement: string;

    // @ForeignKey(() => Person)
    // @Column
    personId: number;

    static validate(addressPerson: AddressPerson): string {
        if (addressPerson.number == null)
            return "Número inválido."

        if (addressPerson.zipcode == null)
            return "CEP inválido";

        if (addressPerson.personId == null)
            return 'Pessoa inválida';

        return null;
    }
}