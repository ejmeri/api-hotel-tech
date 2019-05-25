import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { TelephoneType } from "./TelephoneType";
import { Person } from "../../person/models/Person";



@Table({ timestamps: true, tableName: 'TelephonePerson' })
export class TelephonePerson extends Model<TelephonePerson> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(9))
    number: string;

    // @ForeignKey(() => TelephoneType)
    // @Column
    telephoneTypeId: number;

    // @ForeignKey(() => Person)
    // @Column
    personId: number;


    // @BelongsTo(() => Occupation)
    // occupation: Occupation;


    static validate(telephonePerson: TelephonePerson): string {
        if (telephonePerson.number == null)
            return "Número inválido."

        return null;
    }
}