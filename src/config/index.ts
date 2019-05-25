import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';
import { Status } from '../business/status/models/Status';
import { Occupation } from '../business/person/models/Occupation';
import { PersonType } from '../business/person/models/PersonType';
import { AddressType } from '../business/address/models/AddressType';
import { Country } from '../business/address/models/Country';
import { Person } from '../business/person/models/Person';
import { TelephoneType } from '../business/telephone/models/TelephoneType';
import local from './environment';
import { AddressPerson } from '../business/address/models/AddressPerson';
import { TelephonePerson } from '../business/telephone/models/TelephonePerson';
import { Role } from '../business/employee/models/Role';
import { Employee } from '../business/employee/models/Employee';
import { User } from '../business/person/models/User';
import { Booking } from '../business/booking/models/Booking';
import { PaymentMethod } from '../business/payment/models/PaymentMethod';
import { BedroomType } from '../business/bedroom/models/BedroomType';
import { Bedroom } from '../business/bedroom/models/Bedroom';

export const sequelize = new Sequelize({
  operatorsAliases: Op,
  dialect: 'mysql',
  database: 'wg_hotel',
  username: 'root',
  password: '',
  host: 'localhost',
  port: 3306
});

sequelize.addModels([Status]);
sequelize.addModels([PersonType]);
sequelize.addModels([AddressType]);
sequelize.addModels([Country]);
sequelize.addModels([AddressPerson]);
sequelize.addModels([TelephonePerson]);
sequelize.addModels([Person]);
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



Person.belongsTo(Occupation);
Person.belongsTo(User);
AddressPerson.belongsTo(Person);
TelephonePerson.belongsTo(Person);
TelephonePerson.belongsTo(TelephoneType);
Employee.belongsTo(Role);
Booking.belongsTo(PaymentMethod);
Bedroom.belongsTo(BedroomType);


