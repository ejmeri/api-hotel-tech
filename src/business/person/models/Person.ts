import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Occupation } from "./Occupation";
// import { AddressPeople } from '../../address/models/AddressPerson';
// import { TelephonePeople } from '../../telephone/models/TelephonePeople';
import { User } from './User';


@Table({ timestamps: true, tableName: 'Person' })
export class Person extends Model<Person> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(120))
    name: string;

    @Column(DataType.STRING(14))
    document: string;

    @Column(DataType.STRING(10))
    rg: string;

    @Column
    birth: Date;

    @Column
    nationality: string;

    @Column
    deficient: boolean;

    @Column
    defiecientDocumentation: string;

    @Column
    status: string;

    @Column
    gender: string;

    // @ForeignKey(() => Occupation)
    // @Column
    occupationId: number;


    // @ForeignKey(() => User)
    // @Column
    userId: number;

    // @BelongsTo(() => Occupation)
    // occupation: Occupation;

    // @HasMany(() => AddressPeople)
    // peoples: AddressPeople[];

    // @HasMany(() => TelephonePeople)
    // telephonePeoples: TelephonePeople[];

    static validate(person: Person): string {
        if (person.name == null)
            return "Nome inválido.";

        if (person.document == null)
            return 'Documento inválido.';

        if (person.deficient)
            return 'Documento sobre deficiência é obrigatório';

        return null;
    }
}