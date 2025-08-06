import e from 'express';
import { WHAITELISTDOMAIN } from './constants.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(e.static('public'));
app.use(
  cors({
    origin: WHAITELISTDOMAIN,
    Credential: true,
  })  
);
app.use(cookieParser())

export { app };
