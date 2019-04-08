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

// REPOSITORIES
import { StatusRepository } from '../business/status/repositories/StatusRepository';
import { PeopleRepository } from '../business/people/repositories/PeopleRepository';

const container = new Container();

// RESOLVER CONTROLLERS
container.bind<StatusController>(TYPES.StatusController).to(StatusController);
container.bind<PeopleController>(TYPES.PeopleController).to(PeopleController);
container.bind<ControllerTeste>(TYPES.ControllerTeste).to(ControllerTeste);

// RESOLVER SERVICES
container.bind<StatusService>(TYPES.StatusService).to(StatusService);
container.bind<PeopleService>(TYPES.PeopleService).to(PeopleService);

// RESOLVE REPOSITORIES
container.bind<StatusRepository>(TYPES.StatusRepository).to(StatusRepository);
container.bind<PeopleRepository>(TYPES.PeopleRepository).to(PeopleRepository);

export default container;