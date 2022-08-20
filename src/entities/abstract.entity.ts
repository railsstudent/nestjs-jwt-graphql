import { Field } from '@nestjs/graphql';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

const type = 'timestamp with time zone';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { nullable: false, description: 'unique id' })
  id: string;

  @CreateDateColumn({ type })
  @Field({ nullable: false, description: 'Created at date' })
  createdAt: Date;

  @UpdateDateColumn({ type })
  @Field({ nullable: false, description: 'Updated at date' })
  updatedAt: Date;

  @DeleteDateColumn({ type, nullable: true })
  @Field({ nullable: true, description: ' Deleted at date' })
  deletedAt?: Date | null;
}
