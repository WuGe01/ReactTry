import { useState,useEffect,useRef } from "react";
import { API_GET_DATA } from "../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function callAPI(setData) {
  
  //沒有JsonServe註解
  // const res = await fetch(API_GET_DATA);
  // const { data } = await res.json();
  //沒有JsonServe註解

  const data = [{
    "id":"1",
    "note":"預設資料(初始化資料)-抓JSON練習(無JsonServe模式)",
    "date":"",
    "time":""
  }];

  setData(data);
};

const Home = () => {

  const [data, setData] = useState([]);
  const dataInitialization = useRef(true);

  useEffect(()=>{

    if(dataInitialization.current === true){
      callAPI(setData).then(
        dataInitialization.current = false
      );
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
