let express = require("express");
let http = require("http");
let app = express();
var screen = require("node-server-screenshot");
let server = http.createServer(app);

app.use(express.static('public'));
app.use(require("body-parser").json())
server.listen(process.env.PORT||2000, ()=>{
  console.log("connected to server");
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get("/",(req,res)=>{

screen.fromURL("https://coin360.com/", "test.png", function(){
    console.log("done s")
    res.send("done")
});

});