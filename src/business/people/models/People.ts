import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Occupation } from "./Occupation";


@Table({ timestamps: true, tableName: 'People' })
export class People extends Model<People> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    birth: Date;

    @ForeignKey(() => Occupation)
    @Column
    occupationId: number;

    // @BelongsTo(() => Occupation)
    // occupation: Occupation;
}