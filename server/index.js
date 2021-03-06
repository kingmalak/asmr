const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");

const FlightModel = require("./models/Flights");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://userito:passwordito@cluster0.j4smg.mongodb.net/airlines?authSource=admin&replicaSet=atlas-s0bcyn-shard-0&readPreference=primary&ssl=true', 
    {useNewUrlParser: true}).then(result => console.log("mongodb is connected")).catch(error => console.log(error)) 

//insert    
app.post("/addflight", async (req,res) => {
    const From = req.body.From;
    const To = req.body.To;
    const FlightDate = req.body.FlightDate;
    const Cabin = req.body.Cabin;
    const SeatsAvailableOnFlight = req.body.SeatsAvailableOnFlight;
    
    const newFlight = new FlightModel({
        From: From,
        To: To,
        FlightDate: FlightDate,
        Cabin: Cabin,
        SeatsAvailableOnFlight: SeatsAvailableOnFlight
        });
    await newFlight.save();
    res.send("Success!");
    });    
            
//display
app.get("/read" , async (req,res) => {
    FlightModel.find({}, (err,result) => {
        if(err){
            res.send(err)
        } else{
            //console.log(result);
            res.send(result);
        }
    })
}
);

app.listen(3007, () => {
    console.log("You're connected");
});