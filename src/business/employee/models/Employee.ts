import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table, HasMany, ForeignKey } from 'sequelize-typescript';
import { Role } from './Role';

@Table({ timestamps: true, tableName: 'Employee' })
export class Employee extends Model<Employee> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @ForeignKey(() => Role)
    @Column
    roleId: number;



    static validate(occupation: Employee): string {
        if (occupation.name == null)
            return 'Nome inválido';

        return null;
    }
}
