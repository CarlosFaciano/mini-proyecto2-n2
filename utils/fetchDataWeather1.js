import axios from 'axios'
import React from 'react'

export default async function fetchDataWeather1(url) {
    try {
        const {data} = await axios.get(url)
        
        return data
    } catch (error) {
        console.log(error.message)
    }
  
}
