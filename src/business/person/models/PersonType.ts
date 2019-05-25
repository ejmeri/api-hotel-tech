import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'PersonType' })
export class PersonType extends Model<PersonType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    static validate(personType: PersonType): string {
        if (personType.name == null)
            return 'Tipo de pessoa inválido';

        return null;
    }
}
