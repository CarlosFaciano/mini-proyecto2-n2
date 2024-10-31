"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import fetchDataWeather1 from '@/utils/fetchDataWeather1'

export default function RightSectionLayout({weather1,value,code}) {
  const [forecast, setForecast] = useState({})
  const [secondDay, setSecondDay] = useState()
  const [tomorrow,setTomorrow] = useState("")
  
   
  
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${value},${code}&appid=739b8fb7ebe6944b38727b4fd7f46c2e`
  useEffect(() => {
    fetchDataWeather1(url)
      .then((data) => setForecast(data))

  }, [value,code])
   
  useEffect(()=>{
    if(forecast?.list){
      setTomorrow(forecast?.list[0].main)
    }
  },[])
  
  
 const options = {month:"short", weekday:"short", day:"numeric"}
  

  
  return (
    <div className="w-screen lg:w-[65%] h-full bg-slate-950 flex flex-col items-center">
      <header className="w-[70%] h-16  text-white flex justify-end mt-5">
        <ul className="flex items-center justify-center gap-x-2">
          <li className="text-black text-xl font-medium rounded-full bg-white w-10 h-10 flex items-center justify-center cursor-pointer">°C</li>
          <li className="text-white text-xl font-medium rounded-full bg-gray-500 w-10 h-10 flex items-center justify-center cursor-pointer">°F</li>
        </ul>
      </header>
      <div className="w-4/5 md:w-1/2 h-4/5 gap-y-4 lg:gap-y-0 flex-wrap lg:flex-nowrap lg:w-[70%] lg:h-1/5  text-white flex justify-center gap-x-4 mt-4 ">
        <article className="flex flex-col w-2/5 h-52  items-center justify-center lg:w-32 lg:h-36 bg-[#1e213a] text-white">
          <h2 className="text-lg">Tomorrow</h2>
          {forecast?.list &&
            <>
              <Image className="h-16 w-20 pe-4" src={`/weatherapp/weather/${forecast?.list[0]?.weather[0]?.icon}.png`} alt="" width={1080} height={1920} />
              <h2 className="text-sm text-white mt-4">{(forecast?.list[0]?.main?.temp_max - 273.15).toFixed(2) + "°C"} <span className="opacity-50">{(forecast?.list[0]?.main?.temp_min - 273.15).toFixed(2) + "°C"} </span></h2>
            </>
          }
        </article>

        <article className="flex flex-col w-2/5 h-52  items-center justify-center lg:w-32 lg:h-36 bg-[#1e213a] text-white">
        {forecast?.list &&
        <>
          <h2 className="text-md text-center mb-2">{(new Date(forecast?.list[9].dt_txt).toLocaleDateString("en-US", options))}</h2>
          
            
              <Image className="h-16 w-20 pe-4" src={`/weatherapp/weather/${forecast?.list[9]?.weather[0]?.icon}.png`} alt="" width={1080} height={1920} />
              <h2 className="text-sm text-white mt-4">{(forecast?.list[9]?.main?.temp_max - 273.15).toFixed(2) + "°C"} <span className="opacity-50">{(forecast?.list[9]?.main?.temp_min - 273.15).toFixed(2) + "°C"} </span></h2>
            </>
          }
        </article>
        <article className="flex flex-col w-2/5 h-52  items-center justify-center lg:w-32 lg:h-36 bg-[#1e213a] text-white">
        {forecast?.list &&
            <>
          <h2 className="text-md text-center mb-2">{(new Date(forecast?.list[17].dt_txt).toLocaleDateString("en-US", options))}</h2>
              <Image className="h-16 w-20 pe-4" src={`/weatherapp/weather/${forecast?.list[17]?.weather[0]?.icon}.png`} alt="" width={1080} height={1920} />
              <h2 className="text-sm text-white mt-4">{(forecast?.list[17]?.main?.temp_max - 273.15).toFixed(2) + "°C"} <span className="opacity-50">{(forecast?.list[17]?.main?.temp_min - 273.15).toFixed(2) + "°C"} </span></h2>
            </>
          }
        </article>
        <article className="flex flex-col h-52 w-2/5  items-center justify-center lg:w-32 lg:h-36 bg-[#1e213a] text-white">
        {forecast?.list &&
            <>
          <h2 className="text-md text-center mb-2">{(new Date(forecast?.list[25].dt_txt).toLocaleDateString("en-US", options))}</h2>
          
              <Image className="h-16 w-20 pe-4" src={`/weatherapp/weather/${forecast?.list[25]?.weather[0]?.icon}.png`} alt="" width={1080} height={1920} />
              <h2 className="text-sm text-white mt-4">{(forecast?.list[25]?.main?.temp_max - 273.15).toFixed(2) + "°C"} <span className="opacity-50">{(forecast?.list[25]?.main?.temp_min - 273.15).toFixed(2) + "°C"} </span></h2>
            </>
          }
        </article>
        <article className="flex flex-col w-2/5 h-52 items-center justify-center lg:w-32 lg:h-36 bg-[#1e213a] text-white">
        {forecast?.list &&
            <>
          <h2 className="text-md text-center mb-2">{(new Date(forecast?.list[33].dt_txt).toLocaleDateString("en-US", options))}</h2>
          
              <Image className="h-16 w-20 pe-4" src={`/weatherapp/weather/${forecast?.list[33]?.weather[0]?.icon}.png`} alt="" width={1080} height={1920} />
              <h2 className="text-sm text-white mt-4">{(forecast?.list[33]?.main?.temp_max - 273.15).toFixed(2) + "°C"} <span className="opacity-50">{(forecast?.list[33]?.main?.temp_min - 273.15).toFixed(2) + "°C"} </span></h2>
            </>
          }
        </article>

      </div>
      <section className="w-full h-4/5 flex justify-center    bg-slate-950">
      <div className='w-[70%] h-full  grid grid-rows-10 grid-cols-12 gap-3 '>
        <h2 className="text-2xl text-white mb-10 mt-4 w-full h-12 grid-rows-10 gridTemplate">Today&apos;s Hightlights</h2>

        <article className=" bg-[#1e213a] topSquareLeft flex flex-col items-center">
          <h2 className='mt-2 text-white font-medium'>Wind Status</h2>
          {weather1?.wind &&
            <h2 className='mt-10 text-white font-medium text-4xl lg:text-6xl flex items-center'>{weather1?.wind?.speed}<span className='text-white font-medium text-3xl'>ms</span></h2>}
          <div className='flex justify-center items-center mt-10 gap-x-4'>
            {weather1?.wind &&
              <img className='bg-gray-500 rounded-full w-8 h-8 p-1' style={{ rotate: `${weather1?.wind?.deg}deg` }} src="/weatherapp/navigation.svg" alt="" />}
            <h2 className='text-white font-bold text-2xl'>S</h2>
          </div>
        </article>

        <article className=" bg-[#1e213a] topSquareRight flex flex-col items-center">

          <h2 className='mt-2 text-white font-medium'>Humidity</h2>
          {weather1?.main &&
            <h2 className='mt-10 text-white font-medium text-4xl lg:text-6xl flex items-center'>{weather1?.main?.humidity}<span className='text-white font-medium text-3xl'>%</span></h2>}

          <div className='flex gap-x-8 lg:gap-x-20  text-gray-500 font-medium'>
            <h2>0</h2>
            <h2>50</h2>
            <h2>100</h2>
          </div>

          <div className='flex mt-2 gap-x-4 h-2 bg-white w-[70%] rounded-full'>
            {weather1?.main &&
              <div className=' h-full bg-yellow-300 rounded-full' style={{ width: `${weather1?.main?.humidity}%` }}></div>}
          </div>
          <h2 className='ms-20 text-white '>%</h2>
        </article>

        <article className=" bg-[#1e213a] bottomSquareLeft flex flex-col items-center">
          <h2 className='font-medium text-white mt-2 text-center'>Visibility</h2>
          <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center'>{(weather1?.visibility + "km").toLocaleString()}</h2>
        </article>
        <article className=" bg-[#1e213a] bottomSquareRight flex flex-col items-center">
          <h2 className='font-medium text-white mt-2 text-center'>Air Pressure</h2>
          <h2 className='mt-6 text-white font-medium text-4xl lg:text-6xl flex items-center '>{(weather1?.main?.pressure + "mb")}</h2>
        </article>
        </div>
      </section>
    </div>
  )
}
