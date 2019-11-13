import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const search = (req, res) => {
  //console.log(req.query);
  //console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req; //같은 내용 const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy, videos }); //searchingBy : searchingBy => searchingBy
};

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { ffile, title, description }
  } = req;

  //TODO Upload and save video

  res.redirect(routes.videoDetail(980980));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
