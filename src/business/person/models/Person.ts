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

    @Column(DataType.STRING(11))
    cpf: string;

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

    static validate(people: Person): string {
        if (people.name == null)
            return "Nome inválido.";

        if (people.cpf == null)
            return 'CPF inválido.';

        return null;
    }
}