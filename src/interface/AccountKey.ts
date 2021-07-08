import {ServiceAccount} from 'firebase-admin/lib/credential';

export default interface AccountKey extends ServiceAccount {
    project_id: string;
}