import 'reflect-metadata';
import { Container } from 'inversify';

// TYPES
import { TYPES } from './types';

// CONTROLLERS
import { ControllerTeste } from '../controllers/ControllerTeste';
import { StatusController } from '../controllers/StatusController';

// SERVICES
import { StatusService } from '../business/status/services/StatusService';

// REPOSITORIES
import { StatusRepository } from '../business/status/repositories/StatusRepository';


const container = new Container();

// RESOLVER CONTROLLERS
container.bind<StatusController>(TYPES.StatusController).to(StatusController);
container.bind<ControllerTeste>(TYPES.ControllerTeste).to(ControllerTeste);

// RESOLVER SERVICES
container.bind<StatusService>(TYPES.StatusService).to(StatusService);

// RESOLVE REPOSITORIES
container.bind<StatusRepository>(TYPES.StatusRepository).to(StatusRepository);

export default container;