import bodyParser from 'body-parser';
import * as express from 'express';
import * as admin from 'firebase-admin';
import ContainerProvider from './autoload/ContainerProvider';
import AccountKey from './interface/AccountKey';
import Command from './interface/Command';
import Router from './routing/Router';
import RouteConfig from './routing/type/RouteConfig';
import AppConfig from './type/AppConfig';
import * as fireorm from 'fireorm';
import * as firestore from './firestore/firestore';
import cors from 'cors';

export default class Brazier {
    private readonly express: express.Express;
    private router: Router;
    private container;

    constructor(appConfig: AppConfig, routes: RouteConfig, serviceAccount: AccountKey) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: appConfig.databaseURL,
        });

        const db = firestore.init(serviceAccount.project_id === undefined ? 'emulator' : serviceAccount.project_id);

        this.express = express.default();

        this.express.use(bodyParser.json());

        if (appConfig.useCors) {
            this.express.use(cors());
        }

        //@ts-ignore
        fireorm.initialize(db);

        const containerProvider = new ContainerProvider();
        this.container = containerProvider.register(this.express, appConfig);

        this.router = new Router();
        this.router.makeRoutes(this.express, routes);
    }

    getApi() {
        return this.express;
    }

    getCommand(name: string) {
        const command: Command = this.container.resolve(Brazier.lowerCaseFirst(name));

        return () => {
            command.handle()
        };
    }

    static lowerCaseFirst(value: string) {
        return value.charAt(0).toLowerCase() + value.slice(1);
    }
}
