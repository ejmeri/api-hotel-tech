import 'reflect-metadata';
import { Container } from 'inversify';

// TYPES
import { TYPES } from './types';

// CONTROLLERS
import { ControllerTeste } from '../controllers/ControllerTeste';
import { StatusController } from '../controllers/StatusController';
import { PeopleController } from '../controllers/PeopleController';
import { EmployeeController } from '../controllers/EmployeeController';
import { BedroomController } from '../controllers/BedroomController'; 

// SERVICES
import { StatusService } from '../business/status/services/StatusService';
import { PeopleService } from '../business/people/services/PeopleService';
import { TelephoneService } from '../business/telephone/services/TelephoneService';
import { AddressPeopleService } from '../business/address/services/AddressPeopleService';
import { BedroomService } from '../business/bedroom/services/BedroomService';
// REPOSITORIES
import { StatusRepository } from '../business/status/repositories/StatusRepository';
import { PeopleRepository } from '../business/people/repositories/PeopleRepository';
import { TelephoneRepository } from '../business/telephone/repositories/TelephoneRepository';
import { AddressPeopleRepository } from '../business/address/repositories/AddressPeopleRepository';
import { BedroomRepository } from '../business/bedroom/repositories/BedroomRepository';

const container = new Container();

// RESOLVER CONTROLLERS
container.bind<ControllerTeste>(TYPES.ControllerTeste).to(ControllerTeste);
container.bind<StatusController>(TYPES.StatusController).to(StatusController);
container.bind<PeopleController>(TYPES.PeopleController).to(PeopleController);
container.bind<EmployeeController>(TYPES.EmployeeController).to(EmployeeController);
container.bind<BedroomController>(TYPES.BedroomController).to(BedroomController);

// RESOLVER SERVICES
container.bind<StatusService>(TYPES.StatusService).to(StatusService);
container.bind<PeopleService>(TYPES.PeopleService).to(PeopleService);
container.bind<TelephoneService>(TYPES.TelephoneService).to(TelephoneService);
container.bind<AddressPeopleService>(TYPES.AddressPeopleService).to(AddressPeopleService);
container.bind<BedroomService>(TYPES.BedroomService).to(BedroomService);

// RESOLVE REPOSITORIES
container.bind<StatusRepository>(TYPES.StatusRepository).to(StatusRepository);
container.bind<PeopleRepository>(TYPES.PeopleRepository).to(PeopleRepository);
container.bind<TelephoneRepository>(TYPES.TelephoneRepository).to(TelephoneRepository);
container.bind<AddressPeopleRepository>(TYPES.AddressPeopleRepository).to(AddressPeopleRepository);
container.bind<BedroomRepository>(TYPES.BedroomRepository).to(BedroomRepository);

export default container;