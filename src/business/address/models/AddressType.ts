import { Model, Table, PrimaryKey, AutoIncrement, Column, AllowNull } from "sequelize-typescript";

@Table({ timestamps: true, tableName: 'AddressType' })
export class AddressType extends Model<AddressType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;


    static validate(addressType: AddressType): string {
        if (addressType.name == null)
            return 'Nome inválido';

        return null;
    }

}
