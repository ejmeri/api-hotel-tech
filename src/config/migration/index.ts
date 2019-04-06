import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../../business/status/models/Status';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Op,
  database: 'wg_hotel',
  username: 'root',
  password: ''
});

sequelize.addModels([Status]);
