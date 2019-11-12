import { videos } from '../db';

export const home = (req, res) =>
  res.render('home', { pageTitle: 'Home', videos });

export const search = (req, res) => {
  //console.log(req);
  console.log(req.query);
  console.log(req.query.term);
  const {
    query: { term: searchingBy },
  } = req; //같은 내용 const searchingBy = req.query.term;
  res.render('search', { pageTitle: 'Search', searchingBy, videos }); //searchingBy : searchingBy => searchingBy
};

export const video = (req, res) => res.render('video', { pageTitle: 'Video' });

export const upload = (req, res) =>
  res.render('upload', { pageTitle: 'Upload' });

export const videoDetail = (req, res) =>
  res.render('videoDetail', { pageTitle: 'Video Detail' });

export const editVideo = (req, res) =>
  res.render('editVideo', { pageTitle: 'Edit Video' });

export const deleteVideo = (req, res) =>
  res.render('deleteVideo', { pageTitle: 'Delete Video' });
