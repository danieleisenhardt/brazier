import * as testing from '@firebase/testing';
import * as admin from 'firebase-admin';

let firestore;
let getAllFunction;

export const init = function(projectId: string) {
    if (process.env.FUNCTIONS_EMULATOR) {
        firestore = testing.initializeAdminApp({projectId}).firestore();

        getAllFunction = (...documentRefs: Array<any>): Promise<any> => {
            const promises: Array<Promise<any>> = [];
            documentRefs.forEach((docRef) => {
                promises.push( docRef.get() );
            });

            return Promise.all(promises);
        };
    } else {
        const fs = admin.firestore();

        getAllFunction = (...documentRefsOrReadOptions: Array<any>): Promise<any[]> => {
            return fs.getAll(...documentRefsOrReadOptions);
        };

        firestore = fs;
    }

    return firestore;
}
export const db = firestore;
export const getAll = getAllFunction;
