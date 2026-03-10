const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Home route - load form
app.get("/", (req, res) => {
    res.render("index");
});

// Form submission route
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const gender = req.body.gender;
    const address = req.body.address;

    res.render("result", {
        name: name,
        email: email,
        age: age,
        gender: gender,
        address: address
    });

});

// Hosting compatible port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});