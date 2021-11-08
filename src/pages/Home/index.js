import { useState,useEffect } from "react";
import { API_GET_DATA } from "../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function callAPI(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  console.log(data);
  setData(data);
  // return data;
};

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{

    // callAPI(setData);

    return() => {
      window.alert("新增成功");
    }
  },[data]);

 

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} delDate={setData} />
    </div>
  );
};

export default Home;
