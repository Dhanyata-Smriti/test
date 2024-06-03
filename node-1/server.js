const express= require("express");

/*const bodyParser = require("body-parser");
const fs= require("fs");
const path=require("path");



if(!fs.existsSync=)
app.get("/",(req,res)=>{
    res.send("Welcome");
});*/
const app = express();
const PORT = 3000;
//const folderPath = path.join(__dirname,"text");
app.listen(PORT, () => 
    {
    console.log(`The server is running in post ${PORT}`);
}
);