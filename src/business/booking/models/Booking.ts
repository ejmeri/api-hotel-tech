import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { PaymentMethod } from '../../payment/models/paymentmethod';


@Table({ timestamps: true, tableName: 'Booking' })
export class Booking extends Model<Booking> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    valueTotal: number;
    
    @ForeignKey(() => PaymentMethod)
    @Column
    paymentMethodId: number;

    static validate(booking: Booking): string {
        if (booking.valueTotal == null)
            return "Valor total inválido.";

        return null;
    }
}