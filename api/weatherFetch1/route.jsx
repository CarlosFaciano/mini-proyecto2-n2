"use server"
import React from 'react'
import axios from 'axios'



export default async function WeatherApi() {
    try {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-26.8163503&lon=-65.180739&appid=f751380023c9fc19a3ab9ecb1670cf36`)
    } catch (error) {
      console.log(error.message)
    }
   
   
}
