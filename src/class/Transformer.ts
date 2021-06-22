import Entity from './Entity';

export default abstract class Transformer {
    abstract transform(entity: Entity | null, context: string): { [key: string]: any } | null;

    transformCollection(items: Entity[], context = 'anyone') {
        return items.map((item) => this.transform(item, context));
    }
}
