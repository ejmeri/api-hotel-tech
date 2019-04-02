import { Table, Column, Model } from 'sequelize-typescript';
 
@Table
class Status extends Model<Status> {
 
  @Column
  id: string;
  
  @Column
  name: string;
}