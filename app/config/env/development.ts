import 'dotenv/config';
import { Environment } from '.';

const envs: Environment = {
  HOST: process.env.HOST,
  API_VERSION: process.env.API_VERSION,
  DATABASE_URL: process.env.DATABASE_DEV_URL,
};

export default envs;
