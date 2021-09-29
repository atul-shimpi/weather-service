export function ormConfig(): any {
  const ormConfig: any = {
    type: process.env.DATABASE_TYPE,
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIME_OUT),
    acquireTimeout: parseInt(process.env.DATABASE_ACQUIRE_TIME_OUT),
    extra: {
      connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
    },
    entities: ['dist/**/entity/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    subscribers: ['dist/observers/subscribers/*.subscriber.js'],
    cli: {
      entitiesDir: 'src/components/**/entity',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/observers/subscribers',
    },
  };

  if(process.env.DATABASE_URL) {
    ormConfig.url = process.env.DATABASE_URL;
  } else {
    ormConfig.host = process.env.DATABASE_HOST;
    ormConfig.database = process.env.DATABASE_NAME;
    ormConfig.port = parseInt(process.env.DATABASE_PORT);
    ormConfig.username = process.env.DATABASE_USERNAME;
    ormConfig.password = process.env.DATABASE_PASSWORD;
  }
  
  return ormConfig;
}
