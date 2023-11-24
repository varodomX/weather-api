import React ,{useEffect,useState}from 'react'
import * as turf from '@turf/turf'
import khonkaen from '../data/khonkaen.json'

import { GeoJSON } from 'react-leaflet'

const PointOf = () => {
    const [check , setCheck] = useState(null)

    useEffect(()=>{
        getYourLocation()
    },[])

    const getYourLocation = ()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    //code
                    const lat = position.coords.latitude
                    const lng = position.coords.longitude

                    const roitai = hadleCheck(lat,lng,khonkaen)
                    console.log('roitai',lat,lng);
                    setCheck(roitai)
                
                },(err)=>{
                    console.log('หาตำแหน่งไม่เจอ',err)
                }
            )
        }else{
            console.log('หาตำแหน่งไม่เจอ')
        }
    }
    const hadleCheck = (lat,lng,khonkaen) =>{
        const isPoint = turf.point([lng,lat]);
        const checkPOI = turf.booleanPointInPolygon(isPoint,khonkaen.geometry);
        return checkPOI
    }
   

    const Style = {
        color : 'red'
    }

    const finalStyle = check ? {color : 'green'}:Style
    return (
    <GeoJSON data={khonkaen} style={Style}/>
  )
}

export default PointOf
