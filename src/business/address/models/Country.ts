import { Model, Table, PrimaryKey, AutoIncrement, Column, AllowNull, DataType } from "sequelize-typescript";
// import { DataTypes } from 'sequelize';

@Table({ timestamps: true, tableName: 'Country' })
export class Country extends Model<Country> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    codeId: number;

    @Column({ type: DataType.STRING(45) })
    nationality: string;

    static validate(country: Country): string {
        if (country.name == null)
            return 'Nome inválido';

        if (country.codeId == null)
            return 'Código inválido';

        if (country.nationality == null)
            return 'Nacionalidade inválida';

        return null;
    }

}