const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/database");
const cors = require("cors")
//const fetchData = require("./controllers/storeData");

const userRoute = require("./routes/route")

const Port = process.env.PORT || 4000;
dbConnect();

app.use(cors({
    origin: "https://shashant-task-number1-proptimize-novy.vercel.app",
    credentials: true
}))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://shashant-task-number1-proptimize-novy.vercel.app');
    next();
});

//fetchData(); data fetched ad store to mongo db

app.use(express.json());

app.use("/api",userRoute);

app.listen(Port,()=>{
    console.log(`app is listening on Port no ${Port}`)
})
