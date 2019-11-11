import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => res.send('Hello from index.js toto');

const handleProfile = (req, res) => res.send('here is profile');

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.use('/user', userRouter);

export default app;
