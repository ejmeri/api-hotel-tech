import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Bedroom } from './Bedroom';


@Table({ timestamps: true, tableName: 'BedroomType' })
export class BedroomType extends Model<BedroomType> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    type: string;

    // @HasMany(() => Bedroom)
    // bedrooms: Bedroom[];

    static validate(bedroom: BedroomType): string {
        if (bedroom.type == null)
            return "Método inválido.";

        return null;
    }
}