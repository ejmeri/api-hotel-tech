import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../business/status/models/Status';
import { Occupation } from '../business/people/models/Occupation';
import { PeopleType } from '../business/people/models/PeopleType';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Op,
  database: 'wg_hotel',
  username: 'root',
  password: ''
});

sequelize.addModels([Status]);
sequelize.addModels([Occupation]);
sequelize.addModels([PeopleType]);
