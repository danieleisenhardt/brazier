import {IEntity} from 'fireorm';
import Entity from './Entity';

export default abstract class FirestoreEntity extends Entity implements IEntity {
    id!: string;
    createdAt: number | undefined;
    updatedAt: number | undefined;
}
