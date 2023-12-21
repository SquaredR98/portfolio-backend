/**
 * Basic Libraries
 */
import express, { Express } from 'express';

/**
 * Custom Files Import
 */
import { config } from '@root/config';
import { BackendServer } from '@root/setupServer';
import { connectToRedis } from '@root/database';

class Application {
  /**
   * Function to initialize the Exxpress Server
   */
  public initialize(): void {
    this.loadConfig();
    connectToRedis();
    const app: Express = express();
    const server: BackendServer = new BackendServer(app);
    server.start();
  }

  private loadConfig(): void {
    // config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initialize();