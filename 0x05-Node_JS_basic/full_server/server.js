import express from 'express';
import ROUTES_HANDLER from './routes/index';

const app = express();

ROUTES_HANDLER(app);

app.listen((1245), () => {
  console.log('Server is listening to port 1245');
});

export default app;
