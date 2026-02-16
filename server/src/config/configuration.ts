export default () => ({
  NODE_ENV: process.env.NODE_ENV,
  app: { port: parseInt(process.env.PORT || '3000', 10) },
  jwt: { secret: process.env.SECRET },
  database: { uri: process.env.URI },
});
