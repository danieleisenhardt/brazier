import * as admin from 'firebase-admin';

const firestore = admin.firestore();

export const db = firestore;

export const getAll = (...documentRefsOrReadOptions: Array<any>): Promise<any[]> => {
    return firestore.getAll(...documentRefsOrReadOptions);
};
