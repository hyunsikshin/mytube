import express from "express";
import routes from "../routes";
import {
  userDetail,
  getEditProfile,
  postEditProfile,
  postChangePassword,
  getChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middleware";

const userRouter = express.Router();

//  EDIT PROFILE
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

// CHANGE PASSWORD
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
