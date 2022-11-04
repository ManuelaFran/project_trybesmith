import express from 'express';
import router from './routers/router';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use(router);

export default app;
