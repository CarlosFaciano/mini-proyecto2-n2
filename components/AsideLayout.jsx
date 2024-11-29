"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Desplegable from './desplegable';
import fetchDataWeather1 from '@/utils/fetchDataWeather1';

export default function AsideLayout({ weather1, setValue, value, code, setCode, geoLocation,units,setUnits}) {

  const [dropDown, setDropDown] = useState(false)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  

  const options = { year: "numeric", month: "short", weekday: "short", day: "numeric" }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude && latitude}&lon=${longitude}&appid=739b8fb7ebe6944b38727b4fd7f46c2e`

   const getUbication = async () => {
    if (latitude && longitude) {
      try {
        const datos = await fetchDataWeather1(url)
        setValue(datos?.name)
        setCode(datos?.sys?.country)
        
        console.log(datos)
      } catch (error) {
        console.log(error)
      }
    }
  } 

  useEffect((e) => {
    getUbication()
    console.log(geoLocation)
    
  }, [latitude,longitude])


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    } else {
      console.log("Geolocation is not supported by this browser.");
    }

  }


  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatitude(latitude)
    setLongitude(longitude)
  }












  return (
    <>
      <aside className="w-screen lg:w-[35%] h-screen bg-[#1e213a] flex flex-col items-center">

        <nav className="w-[80%] flex mt-5 items-center justify-between">
          <button className="w-48 h-9 text-white bg-gray-500 active:ease-out active:duration-150 active:bg-green-300 active:w-44 active:h-7 hover:ease-out hover:duration-1000 hover:bg-gray-600" onClick={() => setDropDown(true)}>Search for places</button>
          <ul value="location" onClick={getLocation} className="w-10 h-10 bg-gray-700 flex justify-center items-center   rounded-full cursor-pointer hover:ease-out hover:duration-1000 hover:bg-gray-500  active:ease-out active:duration-500 active:bg-green-300 active:w-9 active:h-9">
            <li className="w-6 h-4 flex justify-center items-center">
              <Image className="" src="./weatherapp/location.svg" width={20} height={20} alt="" />
            </li>
          </ul>
        </nav>

        <section className="w-full h-3/5 relative flex flex-col justify-center items-center">

          <div className="w-[120%] h-4/5 mt-2 opacity-40 absolute bottom-24 right-0    bg-[url('/weatherapp/others/Cloud-background.png')] "></div>

          {weather1?.weather &&
            <Image className=" flex  h-60 w-52 mt-52 mb-24" src={`/weatherapp/weather/${weather1.weather[0].icon}.png`} priority alt="" width={1080} height={1920} />
          }
          <h2 className="text-white font-medium text-8xl text-center mt-4 ">{weather1?.main?.temp.toFixed(2)}<span className='text-7xl'>{units === "metric"? "°C" : "°F"}</span></h2>
          {weather1?.weather &&
            <h2 className='text-2xl text-[#a09fb1] font-bold text-center mt-8 '>{weather1?.weather[0]?.description}</h2>}
          <h2 className='text-md text-[#818683]  text-center mt-8'>Today , {(new Date(weather1?.dt * 1000).toDateString("en-US", options))}</h2>
          <div className='text-md text-[#818683] font-bold text-center mt-10 gap-x-2 flex items-center justify-center'>
            <img className="w-6 h-6" src="/weatherapp/location_on.svg" alt="" />
            <h2 className=''>{weather1?.name}</h2>
          </div>
        </section>
      </aside>
      {dropDown && <Desplegable
        value={value}
        setValue={setValue}
        setDropDown={setDropDown}
        dropDown={dropDown}
        code={code}
        setCode={setCode}
      />}
    </>

  )
}
