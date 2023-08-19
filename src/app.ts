import express, { Express } from 'express';
import { ChattyServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabse';
import { config } from '@root/config';

class Application {
    public initialize(): void{
        this.loadConfig();
        databaseConnection();
        const app: Express = express();
        const server: ChattyServer = new ChattyServer(app);
        server.start();
    }

    private loadConfig(): void {
        config.validateConfig();
        config.cloudinaryConfig();
    }
}

const application: Application = new Application();
application.initialize();


