import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../business/status/models/Status';
import { Occupation } from '../business/people/models/Occupation';
import { PeopleType } from '../business/people/models/PeopleType';
import { AddressType } from '../business/address/models/AddressType';
import { Country } from '../business/address/models/Country';
import { People } from '../business/people/models/People';
import { TelephoneType } from '../business/telephone/models/TelephoneType';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  operatorsAliases: Op,
  database: 'd1g0lvra5ue0ct',
  username: 'cyabyyptsnpjcb',
  password: 'ad36edde995a72a2a468fc98fc0ae056501a4e6963c606911bbe0ea900a973f6',
  host: 'ec2-184-72-238-22.compute-1.amazonaws.com',
  port: 5432
});

sequelize.addModels([Status]);
sequelize.addModels([PeopleType]);
sequelize.addModels([AddressType]);
sequelize.addModels([Country]);
sequelize.addModels([TelephoneType]);
sequelize.addModels([People]);
sequelize.addModels([Occupation]);
