# Brazier

###### a TypeScript framework for Firebase

### Installation

In order to use Brazier you will need a Google Firebase project. If you do not have this already you can start by creating one here:

https://console.firebase.google.com/u/0/

The next thing you will need is Firebase CLI, installation and info can be found here:

https://firebase.google.com/docs/cli

Then make a directory for your project and go there:
```
mkdir myproject
cd myproject
```

Here you can run the firebase installation:

```
firebase init
```
*Select at least Firestore, Functions and Emulators.*

*Choose Typescript when asked which language you want to use.*

After this is done go to the functions dir created by Firebase CLI and install brazier:
```
cd functions
npm i @danieleisenhardt/brazier
node_modules/@danieleisenhardt/brazier/script/init.js
```
### Autoloading
In `config/app.ts` is an array of folders that will be autoloaded recursively by Brazier. Classes from these folders can be used for dependency injection and in the routes defined in `config/route.ts`

### Routing
Routes are defined in `config/route.ts` which exports an array of Route and RouteGroup objects. 
The latter can contain an array of Routes and RouteGroups enabling nested groups.

Routes take a method, path, controllerName, and methodName parameter as well as an optional config parameter with can contain the name of a Request object and an array names of Middleware.

### Dependency injection
Services can be injected in other classes such as controllers and requests. Here is a controller loading a class named `ExampleService`:
```
export default class ExampleController {
    constructor(
        private exampleService: ExampleService,
    ) {
    }
    
    ...
}
```
It is important to name the private variable the same as the Service name, but starting with a lowercase character or Awilix autoloading will be unable to find it.

### Controllers
Controllers are placed in the `controller` folder for the router to use.

### Requests
Requests are placed in the `request` folder. The router will handle the request before the controller function. This way validation and data tranformation can be executed before business logic.

Brazier comes with built-in request validation by validator-js. Meaning validation can either be done through the handle() function, or the rules property:
```
import {ApiRequest, ValidationRule, Request, Response} from 'brazier';

export default class ExampleRequest extends ApiRequest {

    protected rules: {[key: string]: ValidationRule[]} = {
        name: [['isLength', {max: 4}]]
    };

    async handle(request: Request, response: Response, next: () => void) {
        if (request.body['name'] !== 'foo' && request.body['name'] !== 'bar') {
            return this.respondWithError(response, 'name has to be either foo or bar');
        }

        next();
    }
}
```
The validations from the rules property are checked first, which saves on performance if the `handle()` function makes calls to a database or other external resource. 

### Middleware
Middleware is placed in the `middleware` folder. In addition to a Request, routes can also have a variable amount of Middleware applied to them. These have a `handle()` function similar to requests and can be used to execute any code before the business logic in the controller.

### Entities
Entities are placed in the `entity` folder. They can be transformed by transformers and their child class `FirestoreEntity` is used by repositories.

### Repositories
Repositories are provided by wovalle/fireorm as a way to comminicate with firestore. They are placed in the `repositories` folder, but have a slightly different syntax from the rest of the framework:
```
import {CustomRepository, getRepository} from 'fireorm';
import {FirestoreRepository} from 'brazier';
import Example from '../entity/Example';

@CustomRepository(Example)
class ExampleRepository extends FirestoreRepository<Example> {
}

export const exampleRepository = getRepository(Example) as ExampleRepository;
```
The `exampleRepository` can be only loaded without dependency injection:
```
import {exampleRepository} from '../repository/ExampleRepository';
```
This does mean Awilix autoloading will not contain repositories per request. 

For this reason you should **never** put data properties within a repository (i.e. for caching) because these could end up being used by another request from a different end user.

### Transformers
Transformers are placed in the `transformer` folder. 
They are used by Controllers to generate output for API responses. This way data can be transformed and/or obfuscated to send only what is useful and secure to API consumers. 
