const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth");
const songsRoute = require("./routes/songs");

const app = express();

// Middle wares:
app.use(cors());
app.use(express.json());

// Routes:
app.use("/api/auth", authRoute);
app.use("/api/songs", songsRoute);

app.listen(8800, () => {
  console.log("backend is running");
});
