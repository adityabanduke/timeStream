const sequelize = require("./database/connection");
const express = require("express");
const app = express();
const compoundRouter = require("./routes/compoundRouter");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/compounds", compoundRouter);



sequelize.sync().then(() => {
  app.listen("3000", () => {
    console.log("Server started on port 3000");
  });
});
