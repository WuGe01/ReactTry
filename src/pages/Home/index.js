import { useState,useEffect } from "react";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    return() => {
      window.alert("新增成功");
    }
  },[data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} delDate={setData} />
    </div>
  );
};

export default Home;