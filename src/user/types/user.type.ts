import { UserEntity } from '../entities';

export type ValidatedUser = Pick<UserEntity, 'id' | 'email'>;
