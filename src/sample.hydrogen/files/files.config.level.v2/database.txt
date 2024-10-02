// src/config/database.ts
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import { initializeModels } from '../models';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'your_db_name',
  process.env.DB_USER || 'your_db_user',
  process.env.DB_PASSWORD || 'your_db_password',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: 12001 || 5432,
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
);

initializeModels(sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err: Error) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
