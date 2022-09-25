module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define("song", {
    title: { type: DataTypes.STRING, require: true },
    artist: { type: DataTypes.STRING, require: true },
    genres: { type: DataTypes.STRING },
    album: { type: DataTypes.STRING },
    albumImageUrl: { type: DataTypes.STRING },
    youtubeId: { type: DataTypes.STRING },
    lyrics: { type: DataTypes.TEXT },
    tab: { type: DataTypes.TEXT },
  });

  return Song;
};
