"use client"

import AsideLayout from "./AsideLayout";
import RightSectionLayout from "./rightSectionLayout";
import { useEffect, useState } from "react";
import fetchDataWeather1 from "@/utils/fetchDataWeather1";
import Desplegable from "./desplegable";



export default function Layout() {
  const [dropDown, setDropDown] = useState(false)
  const [value, setValue] = useState("santiago")
  const [code, setCode] = useState("CL")
  const [weather1, setWeather1] = useState({})
  
  

   const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${value},${code}&appid=739b8fb7ebe6944b38727b4fd7f46c2e` 
  

  useEffect(() => {
    fetchDataWeather1(url1)
      .then((data) => setWeather1(data))
  }, [value, code])

 



  return (
    <div className="w-screen h-screen lg:flex lg:overflow-hidden">
      <AsideLayout
        weather1={weather1}
        setDropDown={setDropDown}
        setValue={setValue}
        dropDown={dropDown}
        value={value}
        setCode={setCode}
        code={code}
        
      />
      <RightSectionLayout
        weather1={weather1}
        code={code}
        value={value}
      />
      




    </div>
  );
}
