import Express, { json, urlencoded } from 'express';
import cors from 'cors';
import { routes } from '@routes/routes';

export function start(port: number) {
  const app = Express();

  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));

  app.use(routes);

  return app.listen(port, () => console.log(`running on port: ${port}`));
}
