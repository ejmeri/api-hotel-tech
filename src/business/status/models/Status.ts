import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';
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

}

function validate(): void {
  if (this.name == undefined) {
    throw 'Nome inválido.';
  }
}