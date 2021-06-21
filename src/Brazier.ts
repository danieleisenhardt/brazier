import * as express from 'express';
import ContainerProvider from './autoload/ContainerProvider';
import Router from './routing/Router';
import RouteConfig from './routing/type/RouteConfig';
import AppConfig from './type/AppConfig';

export default class Brazier {
    private readonly express: express.Express;
    private router: Router;

    constructor(appConfig: AppConfig, routes: RouteConfig) {
        this.express = express.default();

        const containerProvider = new ContainerProvider();
        containerProvider.register(this.express, appConfig);

        this.router = new Router();
        this.router.makeRoutes(this.express, routes);
    }

    getApi() {
        return this.express;
    }
}
