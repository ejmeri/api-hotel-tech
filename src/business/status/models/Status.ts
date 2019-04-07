import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, BeforeCreate } from 'sequelize-typescript';
// import { DataTypes } from 'sequelize';

@Table({ timestamps: true, tableName: 'Status' })
export class Status extends Model<Status> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;


  static validate(status: Status): Error {
    if (status.name == null)
      return Error('Nome inválido');

    return null;
  }

}