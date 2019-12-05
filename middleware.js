import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleWare = (req, res, next) => {
  res.locals.siteName = "MyTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

//  로그인이 안된 사용자만 접근 가능한 경로
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

//  로그인이 된 사용자만 접근 가능한 경로
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
