import { useEffect, useState } from "react";
import api from "../../api/api";

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await api.get(
        "/listEscola"
      );
      setFetchedData(data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);

  return (
    <div className="App">
      <h1>test</h1>
      {fetchedData.data ? <h2>name: {fetchedData.data.name}</h2> : null}
    </div>
  );
}

export default App;