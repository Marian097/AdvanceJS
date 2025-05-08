const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const { data } = require("jquery");



app.engine("html", ejs.renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})


app.post("/adauga", (req, res) => {
    let user = req.body;
    let date = JSON.stringify(user, null, 2);
    fs.appendFileSync("utilizatori.json", date)
    res.send("Datele au fost primite cu succes.")
    console.log(`Datele au fost primite cu succes: ${nume}, ${email}, ${pass}`)
})


app.listen(
    3001,
    ()=>
    {
        console.log("Serverul ruleaza pe http://localhost:3001")
    }
)



