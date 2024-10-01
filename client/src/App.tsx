import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [array,setArray] = useState([]);
  

  const fetchApi = async() => {
   const response = await axios.get("http://localhost:8080/api");
   setArray(response.data.fruits);
  
  };

  useEffect(() => {
  fetchApi();
  },[])

  return (
    <>
      <div>
       
        {array.map((fruit,index) => (
          <ul key={index}>
            <li>{fruit}</li>
          </ul>
        ))}
      </div>
    </>
  )
}

export default App
