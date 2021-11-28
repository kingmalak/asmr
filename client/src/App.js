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
