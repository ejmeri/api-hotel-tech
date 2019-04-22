import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { People } from "../../people/models/People";



@Table({ timestamps: true, tableName: 'AddressPeople' })
export class AddressPeople extends Model<AddressPeople> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(10))
    number: number;

    @Column(DataType.STRING(80))
    complement: string;

    @ForeignKey(() => People)
    @Column
    peopleId: number;


    // @BelongsTo(() => Occupation)
    // occupation: Occupation;


    static validate(addressPeople: AddressPeople): string {
        if (addressPeople.number == null)
            return "Número inválido."

        return null;
    }
}