var express =require("express");
var app = express();

app.get("/", function(req, res){
    
    var agent = req.headers["user-agent"];
    var reg = /\(.+?\)/;
    var info = agent.match(reg);
    
    var obj = {
        "IP Address": req.headers["x-forwarded-for"],
        "language": req.headers["accept-language"],
        "user": info[0]
    }
    
    res.send(obj);
});

app.listen(process.env.PORT, function(){
    console.log("We're online");
});