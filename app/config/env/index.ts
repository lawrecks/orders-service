/* eslint-disable @typescript-eslint/no-explicit-any */
import rootPath from 'app-root-path';

import development from './development';
import test from './test';

export interface Environment {
  rootPath?: typeof rootPath;
  PORT?: string;
  NODE_ENV?: string;
  HOST?: string;
  API_VERSION?: string;
  DATABASE_URL?: string;
}

const { PORT, NODE_ENV } = process.env;

const nodeEnvironment: string = NODE_ENV || 'development';

// Set current env variables
const currentEnv: Environment | undefined = {
  development,
  test,
}[nodeEnvironment];

const envs: Environment = {
  rootPath,
  PORT,
  NODE_ENV,
  ...currentEnv,
};

export default envs;
