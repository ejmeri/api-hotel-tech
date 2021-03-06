import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { BedroomType } from './BedroomType';

@Table({ timestamps: true, tableName: 'Bedroom' })
export class Bedroom extends Model<Bedroom> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    number: string;

    @Column
    dayPrice: number;

    @Column
    status: string;

    // @ForeignKey(() => BedroomType)
    // @Column
    BedroomTypeId: number;

    // @BelongsTo(() => BedroomType)
    // bedroomType: BedroomType;

    static validate(bedroom: Bedroom): string {
        if (bedroom.dayPrice == null || bedroom.dayPrice < 0)
            return "Valor da diária inválido.";

        if (bedroom.number == null)
            return "Número inválido.";

        if (bedroom.BedroomTypeId == null || bedroom.BedroomTypeId == 0)
            return "Tipo de quarto inválido.";

        return null;
    }
}