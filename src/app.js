import e from 'express';
import { WHAITELISTDOMAIN } from './constants.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorhandler from './middlewares/errorHandler.middleware.js';
import healthCheckRouter from './routes/healthCheck.router.js';
import signupRouter from './routes/user.router.js';

const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(e.static('public'));
app.use(
  cors({
    origin: WHAITELISTDOMAIN,
    credentials: true,
  })
);
app.use(cookieParser());
app.use('/api/v2', healthCheckRouter)
app.use('/api/v2', signupRouter)
app.use(errorhandler);

export { app };
