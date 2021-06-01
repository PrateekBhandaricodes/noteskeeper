const express = require("express");
const mongoose = require("mongoose");

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const app = express();
app.use(express.static("public"));

//mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.route("/")
    .get(function (req, res) {
        ReactDOM.render(<App />, document.getElementById("root"));
    })
    .post()


app.listen(3000, function () {
    console.log("Server Online");
})