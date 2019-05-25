import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table, HasMany } from "sequelize-typescript";
import { Person } from "./Person";

@Table({ timestamps: true, tableName: 'Occupation' })
export class Occupation extends Model<Occupation> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    // @HasMany(() => Person)
    // peoples: Person[];

    static validate(occupation: Occupation): string {
        if (occupation.name == null)
            return 'Nome inválido';

        return null;
    }
}
