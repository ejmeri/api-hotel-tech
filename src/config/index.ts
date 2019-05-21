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
import { AddressPeople } from '../business/address/models/AddressPeople';
import { TelephonePeople } from '../business/telephone/models/TelephonePeople';
import { Role } from '../business/employee/models/Role';
import { Employee } from '../business/employee/models/Employee';
import { User } from '../business/people/models/User';
import { Booking } from '../business/booking/models/Booking';
import { PaymentMethod } from '../business/payment/models/PaymentMethod';
import { BedroomType } from '../business/bedroom/models/BedroomType';
import { Bedroom } from '../business/bedroom/models/Bedroom';

export const sequelize = new Sequelize({
  operatorsAliases: Op,
  dialect: 'mysql',
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
sequelize.addModels([AddressPeople]);
sequelize.addModels([TelephonePeople]);
sequelize.addModels([People]);
sequelize.addModels([User]);
sequelize.addModels([TelephoneType]);
sequelize.addModels([Occupation]);
sequelize.addModels([Employee]);
sequelize.addModels([Role]);
sequelize.addModels([User]);
sequelize.addModels([Booking]);
sequelize.addModels([PaymentMethod]);
sequelize.addModels([Bedroom]);
sequelize.addModels([BedroomType]);


