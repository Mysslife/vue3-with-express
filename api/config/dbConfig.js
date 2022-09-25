module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "HT@09021011",
  DATABASE: "tabtracker",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
