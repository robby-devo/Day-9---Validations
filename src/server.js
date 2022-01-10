const express = require("Express");
const connect = require("./config/db");

const usersController = require("./controllers/user.controller");
const app = express();

app.use(express.json());
app.use("/users", usersController);
const start = async () => {
  await connect();
  app.listen(2244, () => {
    console.log("listening on port 2244");
  });
};

module.exports = start;
