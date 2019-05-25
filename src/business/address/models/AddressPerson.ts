import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'AddressPerson' })
export class AddressPerson extends Model<AddressPerson> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(10))
    number: number;

    @Column(DataType.STRING(80))
    complement: string;

    // @ForeignKey(() => Person)
    // @Column
    personId: number;


    // @BelongsTo(() => Occupation)
    // occupation: Occupation;


    static validate(addressPeople: AddressPerson): string {
        if (addressPeople.number == null)
            return "Número inválido."

        return null;
    }
}