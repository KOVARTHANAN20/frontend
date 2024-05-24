import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(""); 
  useEffect(()=> {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://backend1-pink.vercel.app/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setValue(result);
      })
      .catch((error) => console.error(error));
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        my name is Kovarthan
        <p>
          { value }
        </p>
      </header>
    </div>
  );
}

export default App;
