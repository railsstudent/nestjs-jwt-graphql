import { User } from '../entities';

export type ValidatedUser = Pick<User, 'id' | 'email'>;
