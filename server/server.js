const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const usersRouter = require("./routes/Users");
const productsRouter = require("./routes/Products");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../app/build")));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// API Routes
app.use("/users", usersRouter);
app.use("/products", productsRouter);


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// After defining your routes, anything that doesn't match what's above, we want to return index.html from our built React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../app/build/index.html"));
});

//App listen...
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
