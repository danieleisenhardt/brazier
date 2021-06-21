import Route from './Route';

export default class RouteGroup {

    public routes: (Route | RouteGroup)[];
    public config: {
        middleware?: string[]
    };

    public constructor(
        routes: (Route | RouteGroup)[],
        config: {middleware?: string[]} = {},
    ) {
        this.routes = routes;
        this.config = config;
    }
}