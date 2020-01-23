import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req; // 같은 내용 const searchingBy = req.query.term;

  let videos = [];

  try {
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (err) {
    console.log(err);
  }

  res.render("search", { pageTitle: "Search", searchingBy, videos }); //  searchingBy : searchingBy => searchingBy
};

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    // eslint-disable-next-line no-shadow
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    video.views += 1; // Add view count
    video.save();
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    res.redirect(routes.home);
  }
};

// Render
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    // eslint-disable-next-line no-shadow
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    }
  } catch (err) {
    res.redirect(routes.home);
  }
};

// Update
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate(
      { _id: id },
      { title, description },
      res.redirect(routes.videoDetail(id))
    );
  } catch (err) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (err) {
    console.log(err);
  }
  res.redirect(routes.home);
};

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {
    // eslint-disable-next-line no-shadow
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    });
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
