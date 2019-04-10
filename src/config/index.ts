import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../business/status/models/Status';
import { Occupation } from '../business/people/models/Occupation';
import { PeopleType } from '../business/people/models/PeopleType';
import { AddressType } from '../business/address/models/AddressType';
import { Country } from '../business/address/models/Country';
import { People } from '../business/people/models/People';
import { TelephoneType } from '../business/telephone/models/TelephoneType';
import local from './environment';

export const sequelize = new Sequelize({
  operatorsAliases: Op,
  local
});

sequelize.addModels([Status]);
sequelize.addModels([PeopleType]);
sequelize.addModels([AddressType]);
sequelize.addModels([Country]);
sequelize.addModels([TelephoneType]);
sequelize.addModels([People]);
sequelize.addModels([Occupation]);
