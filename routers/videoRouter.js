import express from "express";
import routes from "../routes";
import { uploadVideo, onlyPrivate } from "../middleware";
import {
  videoDetail,
  deleteVideo,
  getUpload,
  postUpload,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";

const videoRouter = express.Router();

//  UPLOAD
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//  VIDEO DETAIL
videoRouter.get(routes.videoDetail(), videoDetail);

//  EDIT VIDEO
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//  DELETE VIDEO
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
