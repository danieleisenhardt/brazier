import * as express from 'express';
import * as admin from 'firebase-admin';
import ContainerProvider from './autoload/ContainerProvider';
import AccountKey from './interface/AccountKey';
import Router from './routing/Router';
import RouteConfig from './routing/type/RouteConfig';
import AppConfig from './type/AppConfig';
import * as fireorm from 'fireorm';
import * as firestore from './firestore/firestore';

export default class Brazier {
    private readonly express: express.Express;
    private router: Router;

    constructor(appConfig: AppConfig, routes: RouteConfig, serviceAccount: AccountKey) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: appConfig.databaseURL,
        });

        const db = firestore.init(serviceAccount.project_id === undefined ? 'emulator' : serviceAccount.project_id);

        this.express = express.default();

        //@ts-ignore
        fireorm.initialize(db);

        const containerProvider = new ContainerProvider();
        containerProvider.register(this.express, appConfig);

        this.router = new Router();
        this.router.makeRoutes(this.express, routes);
    }

    getApi() {
        return this.express;
    }
}
