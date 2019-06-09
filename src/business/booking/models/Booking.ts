import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany, Default } from 'sequelize-typescript';
import { PaymentMethod } from '../../payment/models/PaymentMethod';


@Table({ timestamps: true, tableName: 'Booking' })
export class Booking extends Model<Booking> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    valueTotal: number;

    @Column
    childrensQuantity: number;

    @Column
    adultsQuantity: number;

    @Default(new Date())
    @Column
    StartDate: Date;

    @Column
    EndDate: Date;

    @Default(false)
    @Column
    checkIn: boolean;

    @Default(false)
    @Column
    checkOut: boolean;

    @Column
    checkInDate: Date;

    @Column
    checkOutDate: Date;

    // @ForeignKey(() => PaymentMethod)
    // @Column
    PaymentMethodId: number;

    PersonId: number;

    BedroomId: number;

    static validate(booking: Booking): string {
        if (booking.valueTotal == null)
            return "Valor total inválido.";

        if (booking.adultsQuantity < 0)
            return "Quantidade de adultos inválida";


        if (booking.childrensQuantity < 0)
            return "Quantidade de crianças inválida";


        if (booking.valueTotal < 0)
            return "Valor total inválido";

        return null;
    }
}