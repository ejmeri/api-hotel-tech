import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../business/status/models/Status';
import { Occupation } from '../business/people/models/Occupation';
import { PeopleType } from '../business/people/models/PeopleType';
import { AddressType } from '../business/address/models/AddressType';
import { Country } from '../business/address/models/Country';
import { People } from '../business/people/models/People';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  operatorsAliases: Op,
  database: 'wg_hotel',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port: 3306
});

sequelize.addModels([Status]);
sequelize.addModels([PeopleType]);
sequelize.addModels([AddressType]);
sequelize.addModels([Country]);

sequelize.addModels([People]);
sequelize.addModels([Occupation]);
