"use server"
import React from 'react'
import axios from 'axios'

export default async  function FetchData() {
    
  try {
    const data =await fetch("https://api.openweathermap.org/data/2.5/weather?q=ovalle&appid=421e31935cf96c5734aa777f05e68a97")
    const rs = await data.json()
    console.log(rs)
    return rs
   
  } catch (error) {
    console.error(error)
  }
    
}
