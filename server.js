const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require('./Routes/apiRoutes');
const htmlRoutes = require('./Routes/htmlRoutes');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
