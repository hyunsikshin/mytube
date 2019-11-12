import routes from './routes';

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = 'MyTube';
  res.locals.routes = routes;
  next();
};
