import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from '../entities';

@Injectable()
export class AuthorService {
  constructor(@InjectRepository(AuthorEntity) private authorRepository: Repository<AuthorEntity>) {}

  findAll(): Promise<AuthorEntity[]> {
    return this.authorRepository.find();
  }

  findOne(id: string): Promise<AuthorEntity | null> {
    return this.authorRepository.findOneBy({
      id,
    });
  }
}
