import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, BeforeCreate } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'ProductBedroom' })
export class ProductBedroom extends Model<ProductBedroom> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    valueTotal: number;

    @Column
    quantity: number;

    @Column
    BedroomId: number;

    @Column
    ProductId: number;

    static validate(status: ProductBedroom): string {
        if (status.valueTotal == null)
            return 'Valor total inválido';

        if (status.BedroomId == null)
            return 'Quarto inválido';

        if (status.ProductId == null)
            return 'Produto inválido';

        return null;
    }

}