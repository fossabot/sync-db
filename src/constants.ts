/* Global Constants */

import * as path from 'path';

import SyncConfig from './domain/SyncConfig';

export const CONFIG_FILENAME = 'sync-db.yml';
export const CONNECTIONS_FILENAME = 'connections.sync-db.json';

export const DEFAULT_CONFIG: SyncConfig = {
  basePath: path.resolve(process.cwd(), 'src/sql'),
  sql: [],
  hooks: {
    pre_sync: [],
    post_sync: []
  },
  injectedConfig: {
    table: '__injected_config',
    variables: {}
  }
};

export const ENV_KEYS = ['DB_HOST', 'DB_PASSWORD', 'DB_NAME', 'DB_USERNAME', 'DB_PORT', 'DB_CLIENT', 'DB_ENCRYPTION'];
