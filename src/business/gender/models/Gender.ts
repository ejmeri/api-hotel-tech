import { Model, Table, PrimaryKey, AutoIncrement, Column, AllowNull } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'Gender' })
export class Gender extends Model<Gender> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;


    static validate(addressType: Gender): string {
        if (addressType.name == null)
            return 'Nome inválido';

        return null;
    }

}
