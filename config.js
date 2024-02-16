require("dotenv").config();
require("mongoose");

const config = {
  app_name: process.env.APPLICATION_NAME,
  port: process.env.PORT,
  db_uri: process.env.MONGODB_URI,
  db_options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = config;
