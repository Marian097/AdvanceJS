const express = require("express");
const app = express()
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("node:sqlite");



app.engine("html", ejs.renderFile);
app.set("views engine", "html")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

var nume;

app.get("/", (req, res)=> {
    res.send("Hello get");
})


app.post("/users", (req, res)=>{
    nume = req.body.nume;
    res.send("Numele este salvat")
});


app.put("/users", (req, res) => {
    nume = req.body.nume
    res.send("Numele actualizat cu succes")
})

app.delete("/users", (req, res) => {
    nume = "";
    res.send("Numele a fost sters cu succes.")
})


app.listen(
    3001, 
    ()=>{
        console.log("Serverul e afla pe http://localhost:3001")
    }
)



