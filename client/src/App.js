import './App.css';
import {useState, useEffect} from "react";
import Axios from 'axios';

function App() {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [FlightDate, setFlightDate] = useState("");
  const [Cabin, setCabin] = useState("");
  const [SeatsAvailableOnFlight, setSeatsAvailableOnFlight] = useState("");
  const [listOfFlights, setListOfFlights] = useState([]);

    //insert
    const addFlight = () => {
      Axios.post("http://localhost:3007/addflight", {From: From, To: To,
      FlightDate: FlightDate, Cabin: Cabin, SeatsAvailableOnFlight: SeatsAvailableOnFlight})
      .then(() => {
        setListOfFlights([...listOfFlights, {From: From, To: To,
          FlightDate: FlightDate, Cabin: Cabin, SeatsAvailableOnFlight: SeatsAvailableOnFlight}])
      })
      .catch(() => {
        console.log("ERR");
      });
    };
    
  //display
  useEffect(() => {
    Axios.get("http://localhost:3007/read")
    .then((response) => 
    {
      //setListOfFlights([...listOfFlights, response.data])
      setListOfFlights(response.data)
    })
    .catch(() => {
      console.log(" ");
    });
  }, []);

  
  return (
  <div className= "App">
      <div className = "inputs">
      <p>From:</p><br></br><input type= "text" placeholder="Departs from" 
      onChange = {(event) => {setFrom(event.target.value);}}/><br></br>
      
      <p>To:</p><br></br><input type= "text" placeholder="Arrives in" 
      onChange = {(event) => {setTo(event.target.value);}}/><br></br>
      
      <p>Flight Date:</p><br></br><input type= "text" placeholder="Flight date" 
      onChange = {(event) => {setFlightDate(event.target.value);}}/><br></br>
      
      <p>Cabin:</p><br></br><input type= "text" placeholder="Cabin" 
      onChange = {(event) => {setCabin(event.target.value);}}/><br></br>
      
      <p>Seats Available on Flight:</p><br></br><input type= "text" placeholder="Seats Available on Flight" 
      onChange = {(event) => {setSeatsAvailableOnFlight(event.target.value);}}/><br></br><br></br>
      
      <button onClick = {addFlight}>Add Flight</button>
    </div>

    <div className = "listOfFlights">
    {listOfFlights.map((val) => {
      return (
      <>
      <div className= "FlightContainer">
        <div className = "flight"> 
          <h3>{val.From}</h3>
          <h3>{val.To}</h3>
          <h3>{val.FlightDate}</h3>
          <h3>{val.Cabin}</h3>
          <h3>{val.SeatsAvailableOnFlight}</h3>
        </div>
        </div>
      </>
      );
    })}
    </div>
  </div>  
  );    
}

export default App;
