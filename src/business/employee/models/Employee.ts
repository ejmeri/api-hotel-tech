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

    @Column
    username: string;

    @Column
    password: string;

    // @ForeignKey(() => Role)
    // @Column
    roleId: number;



    static validate(employee: Employee): string {
        if (employee.name == null)
            return 'Nome inválido';

        if (employee.username == null)
            return 'Nome de usuário inválido';

        if (employee.password == null)
            return 'Senha inválida';
        
        return null;
    }
}
