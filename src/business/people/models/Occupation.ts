import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'Occupation' })
export class Occupation extends Model<Occupation> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    static validate(occupation: Occupation): string {
        if (occupation.name == null)
            return 'Nome inválido';

        return null;
    }
}
