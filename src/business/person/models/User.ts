import { Table, Model, PrimaryKey, AutoIncrement, Column, ForeignKey, BelongsTo, DataType, HasMany } from 'sequelize-typescript';
import { Person } from './Person';


@Table({ timestamps: true, tableName: 'User' })
export class User extends Model<User> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    username: string;

    @Column
    password: string;

    // @HasMany(() => Person)
    // peoples: Person[];

    static validate(people: User): string {
        if (people.username == null)
            return "Nome de usuário inválido.";

        if (people.password == null)
            return 'Senha inválida.';

        return null;
    }
}