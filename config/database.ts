export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '192.168.0.204'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'Next_Strapi'),
      user: env('DATABASE_USERNAME', 'cccsql'),
      password: env('DATABASE_PASSWORD', 'ccc123'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
