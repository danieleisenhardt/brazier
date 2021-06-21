import {asClass, createContainer, InjectionMode, Lifetime} from 'awilix';
import {scopePerRequest} from 'awilix-express';
import {Express} from 'express';
import AppConfig from '../type/AppConfig';

export default class ContainerProvider {
    register(express: Express, appConfig: AppConfig) {
        const container = createContainer();

        container.loadModules(
            appConfig.autoloadPaths,
            {
                formatName: 'camelCase',
                resolverOptions: {
                    lifetime: Lifetime.SCOPED,
                    injectionMode: InjectionMode.CLASSIC,
                    register: asClass
                }
            }
        );

        express.use(scopePerRequest(container));
    }
}