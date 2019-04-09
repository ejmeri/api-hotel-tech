import 'reflect-metadata';
import { Container } from 'inversify';

// TYPES
import { TYPES } from './types';

// CONTROLLERS
import { ControllerTeste } from '../controllers/ControllerTeste';
import { StatusController } from '../controllers/StatusController';
import { PeopleController } from '../controllers/PeopleController';

// SERVICES
import { StatusService } from '../business/status/services/StatusService';
import { PeopleService } from '../business/people/services/PeopleService';
import { TelephoneService } from '../business/telephone/services/TelephoneService';

// REPOSITORIES
import { StatusRepository } from '../business/status/repositories/StatusRepository';
import { PeopleRepository } from '../business/people/repositories/PeopleRepository';
import { TelephoneRepository } from '../business/telephone/repositories/TelephoneRepository';

const container = new Container();

// RESOLVER CONTROLLERS
container.bind<ControllerTeste>(TYPES.ControllerTeste).to(ControllerTeste);
container.bind<StatusController>(TYPES.StatusController).to(StatusController);
container.bind<PeopleController>(TYPES.PeopleController).to(PeopleController);

// RESOLVER SERVICES
container.bind<StatusService>(TYPES.StatusService).to(StatusService);
container.bind<PeopleService>(TYPES.PeopleService).to(PeopleService);
container.bind<TelephoneService>(TYPES.TelephoneService).to(TelephoneService);

// RESOLVE REPOSITORIES
container.bind<StatusRepository>(TYPES.StatusRepository).to(StatusRepository);
container.bind<PeopleRepository>(TYPES.PeopleRepository).to(PeopleRepository);
container.bind<TelephoneRepository>(TYPES.TelephoneRepository).to(TelephoneRepository);

export default container;