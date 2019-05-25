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

    // @ForeignKey(() => BedroomType)
    // @Column
    bedroomTypeId: number;
    
    // @BelongsTo(() => BedroomType)
    // bedroomType: BedroomType;

    static validate(bedroom: Bedroom): string {
        if (bedroom.dayPrice == null)
            return "Valor da diária inválido.";
            
        return null;
    }
}