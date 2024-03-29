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
    origin: "https://ta-1-ui.onrender.com",
    credentials: true
}))


//fetchData(); data fetched ad store to mongo db

app.use(express.json());

app.use("/api",userRoute);

app.use("/",(req,res)=>{
    res.json("I am home page")
})

app.listen(Port,()=>{
    console.log(`app is listening on Port no ${Port}`)
})
