import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table, HasMany } from "sequelize-typescript";
import { People } from "./People";

@Table({ timestamps: true, tableName: 'Occupation' })
export class Occupation extends Model<Occupation> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @HasMany(() => People)
    peoples: People[];

    static validate(occupation: Occupation): string {
        if (occupation.name == null)
            return 'Nome inválido';

        return null;
    }
}
