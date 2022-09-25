const songsController = require("../controllers/songsController");
const express = require("express");

// route creating:
const router = express.Router();

// register:
router.post("/", songsController.createSong);

// get all songs:
router.get("/", songsController.getAllSongs);

// get a song:
router.get("/:id", songsController.getASong);

module.exports = router;
