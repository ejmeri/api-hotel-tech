import { Model, Table, PrimaryKey, AutoIncrement, Column, AllowNull, HasMany } from 'sequelize-typescript';
import { TelephonePerson } from './TelephonePerson';
// import { People } from '../../person/models/Person';

@Table({ timestamps: true, tableName: 'TelephoneType' })
export class TelephoneType extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    // @HasMany(() => TelephonePeople)
    // telephonePeoples: TelephonePeople[];

    static validate(telephoneType: TelephoneType): string {
        if (telephoneType.name == null)
            return 'Nome inválido';

        return null;
    }

}
