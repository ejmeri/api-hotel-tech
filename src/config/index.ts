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
import { Product } from '../business/products/bedroom/models/Product';
import { ProductBedroom } from '../business/products/bedroom/models/ProductBedroom';

export const sequelize = new Sequelize({
  operatorsAliases: Op,
  dialect: 'postgres',
  database: 'd1g0lvra5ue0ct',
  username: 'cyabyyptsnpjcb',
  password: 'ad36edde995a72a2a468fc98fc0ae056501a4e6963c606911bbe0ea900a973f6',
  host: 'ec2-184-72-238-22.compute-1.amazonaws.com',
  port: 5432
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
sequelize.addModels([Product]);
sequelize.addModels([ProductBedroom]);



Product.belongsTo(Product);
Person.belongsTo(Occupation);
Person.belongsTo(User);
AddressPerson.belongsTo(Person);
TelephonePerson.belongsTo(Person);
TelephonePerson.belongsTo(TelephoneType);
Employee.belongsTo(Role);
Booking.belongsTo(PaymentMethod);
Bedroom.belongsTo(BedroomType);
Booking.belongsTo(Person);
Booking.belongsTo(Bedroom);


Product.hasMany(ProductBedroom);
Occupation.hasMany(Person);
User.hasMany(Person);
Person.hasMany(AddressPerson);
Person.hasMany(TelephonePerson);
Role.hasMany(Employee);
PaymentMethod.hasMany(Booking);
BedroomType.hasMany(Bedroom);
BedroomType.hasMany(Bedroom);
Person.hasMany(Booking);
Bedroom.hasMany(Booking);

