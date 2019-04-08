import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType } from "sequelize-typescript";
import { Occupation } from "./Occupation";


@Table({ timestamps: true, tableName: 'People' })
export class People extends Model<People> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column(DataType.STRING(120))
    name: string;

    @Column
    birth: Date;

    @ForeignKey(() => Occupation)
    @Column
    occupationId: number;

    // @BelongsTo(() => Occupation)
    // occupation: Occupation;


    static validate(people: People): string {
        if (people.name == null)
            return "Nome inválido."

        return null;
    }
}