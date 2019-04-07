import { Model, Table, PrimaryKey, AutoIncrement, Column, AllowNull } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'TelephoneType' })
export class TelephoneType extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;


    static validate(telephoneType: TelephoneType): string {
        if (telephoneType.name == null)
            return 'Nome inválido';

        return null;
    }

}
