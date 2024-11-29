"use client"
import React, { useState } from 'react'
import SearchIcon from './searchIcon'
import cities from "@/public/cities.json"
export default function Desplegable({ setDropDown, setValue, code, setCode }) {
  const [results, setResults] = useState([{
    result1: { city: "Tucuman", country_code: "AR" },
    result2: { city: "La Serena", country_code: "CL" },
    result3: { city: "Buenos Aires", country_code: "AR" }
  }])

  const filter = (e) => {
    if (e.target.tagName === "LI") {
      setValue(results[e.target.value]?.result1?.city || results[e.target.value]?.result2?.city || results[e.target.value]?.result3?.city ? results[e.target.value]?.result1?.city || results[e.target.value]?.result2?.city || results[e.target.value]?.result3?.city : "")
      console.log(e.target.value)
      setCode(results[e.target.value]?.result1?.country_code || results[e.target.value]?.result2?.country_code || results[e.target.value]?.result3?.country_code ? results[e.target.value]?.result1?.country_code || results[e.target.value]?.result2?.country_code || results[e.target.value]?.result3?.country_code : "")
      setDropDown(false)
    }
  }

  const handleFilter = () => {
    const user = document.getElementById("clientSearch")
    const search = user.value
    const searchByCountryCode = search.split(",")
    const validation = !search?.includes(",")
    const data = [...cities]
    const places = data.filter((el) => validation ? el?.name.toLowerCase() === user.value.toLowerCase() : el?.name?.toLowerCase() === searchByCountryCode[0].toLowerCase() && el?.country_code?.toLowerCase() === searchByCountryCode[1].toLowerCase())
    {
      places[0] && places[1] && places[2] ?
      setResults([{
        result1: { city: (places[0].name), country_code: (places[0].country_code) },
        result2: { city: (places[1].name), country_code: (places[1].country_code) },
        result3: { city: (places[2].name), country_code: (places[2].country_code) }
      }])
      : setResults([{
        result1: { city: (places[0].name), country_code: (places[0].country_code) },
        result2: "",
        result3: ""
      }])
    }
     console.log(searchByCountryCode)
    console.log(results)
  }

  return (


    <div className='w-full lg:w-[35%] h-screen bg-[#1e213a] text-white flex-col items-center  pt-4 absolute top-0 left-0'>
      <section className='flex items-center gap-x-4 justify-center'>
        <div className='w-1/2 h-9 border-white border  p-1 gap-x-2 flex'>
          <label className='h-6 w-7' htmlFor="">
            <SearchIcon />
          </label>
          <input id='clientSearch' className='bg-[#1e213a] ps-2 w-4/5 h-full outline-none' placeholder='Search location' type="text" />
        </div>
        <button className='bg-sky-400 text-white w-32 h-10 rounded-lg hover:ease-in-out hover:duration-500 hover:bg-sky-500' onClick={handleFilter} >Search</button>
      </section>

      <ul className='w-full flex flex-col items-center mt-4 text-white font-medium gap-y-6 ' onClick={filter}>
        {results[0]?.result1?.city ?

          <>
            <li value={0} className='cursor-pointer'>{(results[0]?.result1?.city) + "," + (results[0]?.result1?.country_code)}</li>
            <li value={1} className='cursor-pointer'>{(results[0]?.result2?.city ? results[0]?.result2?.city : "") + (results[0]?.result2?.city? "," : "") + (results[0]?.result2?.country_code ? results[0]?.result2?.country_code : "")}</li>
            <li value={2} className='cursor-pointer'>{(results[0]?.result3?.city ? results[0]?.result3?.city : "") + (results[0]?.result3?.city ? "," : "") + (results[0]?.result3?.country_code? results[0]?.result3?.country_code : "")}</li>
          </>
         
           
           
          : <li className='text-bold'>No hay lugares compatibles con esa busqueda, busque de nuevo por favor</li>
        }
       




      </ul>
    </div>


  )
}
