export default class Route {

    public httpMethod: 'get' | 'post' | 'put' | 'delete';
    public path: string;
    public controllerName: string;
    public methodName: string;
    public config?: {
        request?: string,
        middleware?: string[]
    };

    public constructor(
        httpMethod: 'get' | 'post' | 'put' | 'delete',
        path: string,
        controllerName: string,
        methodName: string,
        config: {request?: string, middleware?: string[]} = {},
    ) {
        this.httpMethod = httpMethod;
        this.path = path;
        this.controllerName = controllerName;
        this.methodName = methodName;

        if (config.middleware === undefined) {
            config.middleware = [];
        }

        this.config = config;
    }
}