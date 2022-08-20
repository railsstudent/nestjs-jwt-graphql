import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();
const configService = new ConfigService();

const source = new DataSource({
  type: (configService.get<string>('DATABASE_CONNECT') as any) || 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT'),
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  migrationsTableName: 'migrations',
  migrations: ['src/migrations/*.ts'],
  entities: ['src/**/*.entity.ts'],
  synchronize: false,
});

export default source;
