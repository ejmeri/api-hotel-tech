import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Booking } from '../../booking/models/Booking';


@Table({ timestamps: true, tableName: 'PaymentMethod' })
export class PaymentMethod extends Model<PaymentMethod> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    method: string;

    @HasMany(() => Booking)
    bookings: Booking[];

    static validate(people: PaymentMethod): string {
        if (people.method == null)
            return "Método inválido.";

        return null;
    }
}