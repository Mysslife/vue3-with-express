const db = require("../models");

// create main Model:
const Song = db.songs;

// create song:
const createSong = async (req, res) => {
  try {
    const song = await Song.create(req.body);
    return res.status(200).json(song);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// get all songs:
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      limit: 10,
    });
    return res.status(200).json(songs);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// get all songs:
const getASong = async (req, res) => {
  try {
    const song = await Song.findOne({ where: { id: req.params.id } });
    return res.status(200).json(song);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  getAllSongs,
  createSong,
  getASong,
};
