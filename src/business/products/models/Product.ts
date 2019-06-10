import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, BeforeCreate } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'Product' })
export class Product extends Model<Product> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @Column
    value: number;

    @Column
    minQuantity: number;

    @Column
    maxQuantity: number;

    static validate(product: Product): string {
        if (product.name == null)
            return 'Nome inválido';

        if (product.value == null)
            return 'Valor inválido';

        if (product.minQuantity == null)
            return 'Quantidade mínima inválida';

        if (product.maxQuantity == null)
            return 'Quantidade máxima inválida';

        return null;
    }

}