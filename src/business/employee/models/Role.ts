import { Model, PrimaryKey, AutoIncrement, Column, AllowNull, Table, HasMany, ForeignKey } from 'sequelize-typescript';
import { Employee } from './Employee';

@Table({ timestamps: true, tableName: 'Role' })
export class Role extends Model<Role> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    // @HasMany(() => Employee)
    // employees: Employee[];

    static validate(occupation: Role): string {
        if (occupation.name == null)
            return 'Nome inválido';

        return null;
    }
}
