import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { TelephoneType } from "./TelephoneType";
import { People } from "../../people/models/People";



@Table({ timestamps: true, tableName: 'TelephonePeople' })
export class TelephonePeople extends Model<TelephonePeople> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(9))
    number: string;

    @ForeignKey(() => TelephoneType)
    @Column
    telephoneTypeId: number;

    @ForeignKey(() => People)
    @Column
    peopleId: number;


    // @BelongsTo(() => Occupation)
    // occupation: Occupation;


    static validate(telephonePeople: TelephonePeople): string {
        if (telephonePeople.number == null)
            return "Número inválido."

        return null;
    }
}