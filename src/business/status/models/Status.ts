import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, BeforeCreate } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'Status' })
export class Status extends Model<Status> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;


  static validate(status: Status): string {
    if (status.name == null)
      return 'Nome inválido';

    return null;
  }

}