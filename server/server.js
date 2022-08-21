const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const usersRouter = require("./routes/Users");
const productsRouter = require("./routes/Products");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const initializePassport = require("./services/passportConfig");
initializePassport(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
app.use(passport.initialize());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "../app/build")));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// API Routes
app.use("/users", usersRouter);
app.use("/products", productsRouter);

////////////////////////////////////////////////////////
//TESTING
app.post(
  "/testinglogin",
  passport.authenticate("local", {
    successRedirect: "/login/success",
    failureRedirect: "/login/fail",
    failureMessage: true,
  })
);

app.get("/login/success", (req, res) => {
  res.json({ status: "success", user: req.user });
});
app.get("/login/fail", (req, res) => {
  res.json({ status: "fail", error: req.session.messages });
});
//TESTING
////////////////////////////////////////////////////////

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
