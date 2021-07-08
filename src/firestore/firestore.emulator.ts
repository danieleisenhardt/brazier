// tslint:disable-next-line:no-implicit-dependencies
import * as testing from '@firebase/testing';
import * as fireorm from 'fireorm';

const firestore = testing.initializeAdminApp({projectId: 'esturian-colosseum'}).firestore();
// @ts-ignore
fireorm.initialize(firestore);

export const db = firestore;

export const getAll = (...documentRefs: Array<any>): Promise<any> => {
    const promises: Array<Promise<any>> = [];
    documentRefs.forEach((docRef) => {
        promises.push( docRef.get() );
    });

    return Promise.all(promises);
};
