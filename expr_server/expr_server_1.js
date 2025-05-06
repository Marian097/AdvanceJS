const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.engine("html", require("ejs").renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", (req, res) => {res.send("Hello World")});

app.post("/", function(req, res){
    console.log(req.body)
    res.send("Post request");
})


app.put("/user", function(req, res){
    res.send("Put Request")
});

app.delete("/user", function(req, res){
    res.send("Delete request")
});


app.listen(
    3002,
    ()=> {console.log(`Aplicatia ruleaza pe portul 3002`)}
)