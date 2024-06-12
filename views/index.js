const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const helpers = require("./helpers/customHelpers");

// app.engine(file_extension, engine_use(directory))
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/layouts/",
    // layoutsDir: __dirname + "/layouts/",
    partialsDir: __dirname + "/partials/",
    helpers: helpers
  })
);

app.set("view engine", ".hbs");

// app.get("/", (req, res)=>{
//   res.send("home page for handlebars")
// })

app.get("/", (req, res) => {
    // find the home.hbs file, and fill in the information
    res.render("home", {
      title: "Home Page",
      message: "Welcome to Handlebars with Express!",
    });
  });
  

  // if
app.get("/if", (req, res) => {
    res.render("if", { user: sampleData.user });
  });
  
  // unless
  app.get("/unless", (req, res) => {
    res.render("unless", { condition: sampleData.condition });
  });
  
  // each
  app.get("/each", (req, res) => {
    res.render("each", { users: sampleData.users });
  });

  // Sample data
const sampleData = {
    user: { name: "John Doe", email: "john@example.com" },
    users: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
    condition: false,
  };
  
  app.get("/custom-helper-example", (req, res) => {
    const sampleDataCH = {
      name: 'John Doe',
      birthday: '1990-01-01',
      message: 'Hello, Custom Helpers!'
    };
    res.render("chExample", sampleDataCH);
  });
  

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
