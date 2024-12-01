import React, { useEffect, useState } from "react";

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
