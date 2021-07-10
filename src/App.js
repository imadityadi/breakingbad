import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getQuotes();
  }, []);
  const loaderr = <Loader type="ThreeDots" color="grey" height="100" width="100" />
  async function getQuotes() {
    axios
      .get("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then(result => 
        setData(result.data[0]))
        
        
  }
  // function setContent(result) {
  //   setLoading(false)
  //   setData(result.data[0])
  // }

  return (
  
    <div className="Main">
      <img className= 'head' src="./images/breakingbadhead.png" />
      <div className="App">
        <h1>Breaking Bad</h1>

        <div className="quoteContainer">
          <h2>{data ? data.quote : loaderr}</h2>
        </div>

        <h3 id="author">{data ? `-${data.author}` : "loading..."}</h3>
    
        <button 
          id='getBtn'
          onClick={getQuotes} 
          >
          Break
        </button>
      </div>
    </div>
  );
}
