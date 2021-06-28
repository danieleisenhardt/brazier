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
npm -i @danieleisenhardt/brazier
node_modules/brazier/script/init.js
```

### Controllers
TODO

### Requests
TODO

### Middleware
TODO

### Repositories
TODO

### Transformers
TODO
