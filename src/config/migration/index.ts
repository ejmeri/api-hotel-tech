import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize('wg-hotel', 'root', '');

sequelize.addModels([__dirname + '../../bussiness/status/models/Status.ts']);
