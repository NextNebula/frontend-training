import { useState, useEffect } from "react";
import { getAll } from "./services/getService";
import "./App.css";

function App() {
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      var result = await getAll();
      setData(result);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Jobify</h1>
        <pre>Find your dream job.</pre>
      </header>
      <div className="bg-indigo-200" style={{ margin: "0 auto", width: "50%" }}>
        <pre style={{ textAlign: "initial" }}>
          {JSON.stringify(data, null, "\t")}
        </pre>
      </div>
    </div>
  );
}

export default App;
