
import React  from 'react'
import Layout from '../components/layout'
import Desplegable from '../components/desplegable'

import AsideLayout from '@/components/AsideLayout'

import RightSectionLayout from '@/components/rightSectionLayout'



/* export function FetchData() {
  const[clouds, setClouds] = useState()

  useEffect(()=>{
   const traerDatos = async()=>{
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=ovalle&appid=60b956ec2ed85b0ebe6dcafbf4e94447")
    const rs = await data.json()
    setClouds(rs)

   }
   traerDatos()
  },[] )
  console.log(clouds)
  return (
    <div>
       {clouds && (clouds.weather.map((data)=>
         <h2 key={data.id}>{data.description}</h2>
      )
    )
      } 
    </div>
  )
    
} */

export default function page() {

  return (
    <div>
     <Layout/>
      
    </div>
  )

}




