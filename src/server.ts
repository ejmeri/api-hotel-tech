import { createServer } from 'http';
import app from './app';
import { sequelize } from './config/migration/index';

const port = process.env.PORT || 8080;

(async () => {
    await sequelize.sync({});

    createServer(app)
        .listen(
            port,
            () => console.info(`Server running on port ${port}`)
        );
})();
