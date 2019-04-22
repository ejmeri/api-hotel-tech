import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Occupation } from "./Occupation";
import { AddressPeople } from '../../address/models/AddressPeople';
import { TelephonePeople } from '../../telephone/models/TelephonePeople';


@Table({ timestamps: true, tableName: 'People' })
export class People extends Model<People> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(120))
    name: string;

    @Column
    birth: Date;

    @ForeignKey(() => Occupation)
    @Column
    occupationId: number;

    // @BelongsTo(() => Occupation)
    // occupation: Occupation;

    @HasMany(() => AddressPeople)
    peoples: AddressPeople[];

    @HasMany(() => TelephonePeople)
    telephonePeoples: TelephonePeople[];

    static validate(people: People): string {
        if (people.name == null)
            return "Nome inválido."

        return null;
    }
}