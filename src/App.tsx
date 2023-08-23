import React, { useEffect, useState } from "react";
import Users from "./Components/ProgramBox/ProgramBox";
export default function App() {
  const [userdata, setUserdata] = useState([]);
  const getUserdata = async () => {
    try {
      const req = await fetch("https://honest-paws-join.loca.lt/program/fullData");
      const resData = await req.json();
      if (resData.length > 0) {
        setUserdata(resData);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUserdata();
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="mt-3 mb-3">
          Creating a Dynamic Table with Data Fetched from an API
        </h1>
        {userdata.map((data:any)=>(<Users usersData={data}/>))}
      </div>
    </>
  );
}
