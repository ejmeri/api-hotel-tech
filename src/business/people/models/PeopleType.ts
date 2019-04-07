import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'PeopleType' })
export class PeopleType extends Model<PeopleType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    static validate(peopleType: PeopleType): string {
        if (peopleType.name == null)
            return 'Nome inválido';

        return null;
    }
}
