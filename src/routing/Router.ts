import {Express} from 'express';
import Request from './interface/Request';
import Response from './interface/Response';
import Route from './Route';
import RouteGroup from './RouteGroup';
import RouteConfig from './type/RouteConfig';

export default class Router {
    makeRoutes(app: Express, routes: RouteConfig) {
        routes.forEach((obj) => {
            if (obj instanceof Route) {
                this.makeRoute(obj, app);
            }

            if (obj instanceof RouteGroup) {
                this.makeRouteGroup(obj, app);
            }
        });
    }

    private makeRoute(route: Route, app: Express) {
        const handlers: any = [
            (request: Request, response: Response) => {
                const controller = request.container.resolve(route.controllerName);

                if (typeof controller[route.methodName] !== 'function') {
                    throw new Error(`missing method ${route.controllerName}.${route.methodName}`);
                }

                controller[route.methodName](request, response);
            },
        ];

        if (route.config.request !== undefined) {
            handlers.unshift((request: Request, response: Response, next: () => void) => {
                const requestHandler = request.container.resolve(route.config.request);

                if (requestHandler.validate(request, response) !== true) {
                    return;
                }

                requestHandler.handle(request, response, next);
            });
        }

        if (route.config.middleware !== undefined) {
            route.config.middleware.reverse().forEach((middlewareName) => {
                handlers.unshift((request: Request, response: Response, next: () => void) => {
                    const middlewareHandler = request.container.resolve(middlewareName);

                    middlewareHandler.handle(request, response, next);
                });
            });
        }

        switch (route.httpMethod) {
            case 'get':
                app.get(route.path, handlers);
                break;

            case 'post':
                app.post(route.path, handlers);
                break;

            case 'put':
                app.put(route.path, handlers);
                break;

            case 'delete':
                app.delete(route.path, handlers);
                break;
        }
    }

    private makeRouteGroup(group: RouteGroup, app: Express) {
        group.routes.forEach((obj) => {
            if (group.config.middleware !== undefined) {
                obj.config.middleware?.unshift(...group.config.middleware);
            }

            if (obj instanceof Route) {
                this.makeRoute(obj, app);
            }

            if (obj instanceof RouteGroup) {
                this.makeRouteGroup(obj, app);
            }
        });
    }
}
