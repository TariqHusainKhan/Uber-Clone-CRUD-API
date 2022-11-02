const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");


const port =3000;

const app = express();

// Middlewares

app.use(express.json());

app.use("/",route);

mongoose.connect("mongodb+srv://tariq:aaoochale@aaoo-chale.oddebew.mongodb.net/AaooChale?retryWrites=true&w=majority")
         .then(() => console.log("Connected to database..."))
         .catch((err) => console.log(err));





app.listen(port, console.log(`Server is Listening on PORT : ${port}`));