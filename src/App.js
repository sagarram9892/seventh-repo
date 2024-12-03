import React, { useEffect, useState } from "react";
import Font from "./mockServices/Font";
import Mark from "./mockServices/Mark"

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setdata(result);
  };

  console.log(data);

  return (
    <div>
      <h1>List of users</h1>
      <h1>Second list</h1>
      <Font/>
      <Mark/>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <del>4512</del>
    </div>
  );
}

export default App;
