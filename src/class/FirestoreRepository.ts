import {BaseFirestoreRepository} from 'fireorm';
import {PartialBy} from 'fireorm';
import FirestoreEntity from './FirestoreEntity';

export default class FirestoreRepository<T extends FirestoreEntity> extends BaseFirestoreRepository<T> {
    async save(item: PartialBy<T, 'id'>) {
        item.updatedAt = Date.now();

        if (item.createdAt === undefined) {
            item.createdAt = item.updatedAt;

            return this.create(item);
        }

        return this.update(item as T);
    }

    async saveAll(entities: T[]) {
        await Promise.all( entities.map((entity) => this.save(entity)) );
    }
}
