import 'reflect-metadata';
import { Container } from 'inversify';

// TYPES
import { TYPES } from './types';

// CONTROLLERS
import { ControllerTeste } from '../controllers/ControllerTeste';
import { StatusController } from '../controllers/StatusController';
import { PersonController } from '../controllers/PersonController';
import { EmployeeController } from '../controllers/EmployeeController';
import { BedroomController } from '../controllers/BedroomController'; 
import { BookingController } from '../controllers/BookingController';


// SERVICES
import { StatusService } from '../business/status/services/StatusService';
import { PersonService } from '../business/person/services/PersonService';
import { TelephoneService } from '../business/telephone/services/TelephoneService';
import { AddressPersonService } from '../business/address/services/AddressPersonService';
import { BedroomService } from '../business/bedroom/services/BedroomService';
import { EmployeeService } from '../business/employee/services/EmployeeService';
import { BookingService } from '../business/booking/services/BookingService';


// REPOSITORIES
import { StatusRepository } from '../business/status/repositories/StatusRepository';
import { PersonRepository } from '../business/person/repositories/PersonRepository';
import { TelephoneRepository } from '../business/telephone/repositories/TelephoneRepository';
import { AddressPersonRepository } from '../business/address/repositories/AddressPersonRepository';
import { BedroomRepository } from '../business/bedroom/repositories/BedroomRepository';
import { EmployeeRepository } from '../business/employee/repositories/EmployeeRepository';
import { BookingRepository } from '../business/booking/repositories/BookingRepository';


const container = new Container();

// RESOLVER CONTROLLERS
container.bind<ControllerTeste>(TYPES.ControllerTeste).to(ControllerTeste);
container.bind<StatusController>(TYPES.StatusController).to(StatusController);
container.bind<PersonController>(TYPES.PersonController).to(PersonController);
container.bind<EmployeeController>(TYPES.EmployeeController).to(EmployeeController);
container.bind<BedroomController>(TYPES.BedroomController).to(BedroomController);
container.bind<BookingController>(TYPES.BookingController).to(BookingController);

// RESOLVER SERVICES
container.bind<StatusService>(TYPES.StatusService).to(StatusService);
container.bind<PersonService>(TYPES.PersonService).to(PersonService);
container.bind<TelephoneService>(TYPES.TelephoneService).to(TelephoneService);
container.bind<AddressPersonService>(TYPES.AddressPersonService).to(AddressPersonService);
container.bind<BedroomService>(TYPES.BedroomService).to(BedroomService);
container.bind<EmployeeService>(TYPES.EmployeeService).to(EmployeeService);
container.bind<BookingService>(TYPES.BookingService).to(BookingService);

// RESOLVE REPOSITORIES
container.bind<StatusRepository>(TYPES.StatusRepository).to(StatusRepository);
container.bind<PersonRepository>(TYPES.PersonRepository).to(PersonRepository);
container.bind<TelephoneRepository>(TYPES.TelephoneRepository).to(TelephoneRepository);
container.bind<AddressPersonRepository>(TYPES.AddressPersonRepository).to(AddressPersonRepository);
container.bind<BedroomRepository>(TYPES.BedroomRepository).to(BedroomRepository);
container.bind<EmployeeRepository>(TYPES.EmployeeRepository).to(EmployeeRepository);
container.bind<BookingRepository>(TYPES.BookingRepository).to(BookingRepository);

export default container;