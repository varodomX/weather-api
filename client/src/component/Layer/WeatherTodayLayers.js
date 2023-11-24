import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Marker,Popup,Tooltip } from 'react-leaflet'
import L from 'leaflet'


function WeatherTodayLayers() {


    const [data,setData] = useState([])

    useEffect(()=>{
        //code
        loadData()
    },[])

    const loadData = async()=>{
        const uri = 'https://data.tmd.go.th/api/WeatherToday/V2/uid=u63varodom2011&ukey=4e24bb2b6db8caf2e9ce637ec9d9a815&format=json'
        await axios.get(uri)
        .then((res)=>{
            console.log(res)
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }


    const labelIcon = (temp)=>{
        var iconColor = 'map-label-content'
        if(temp > 28){
            iconColor +=' red'
        }else if(temp > 24){
            iconColor +=' orange'
        }



        return new L.DivIcon({
            className:'map-label',
            html: `<div class="map-label"> <div class="map-label ${iconColor}">${temp}°C </div> </div>`
        })
    }
    

  return <div>{ 
    data.Stations?.Station.map((item)=>{
        console.log(item)
        return <Marker position={[item.Latitude,item.Longitude]} icon={labelIcon(item.Observation.Temperature )}>
            <Tooltip>
                อุณหภูมิ : {item.Observation.Temperature} °C<br /> 
                อุณหภูมิสูงสุด : {item.Observation.MaxTemperature} °C <br />
                อุณหภูมิต่ำสุด : {item.Observation.MinTemperature} °C 

                {/*Object.entries(item.Observation).map(([key,value])=>{
                    if(typeof value==='object'){
                        return null
                    }else{
                        return <div>
                            <b>{key}</b>:{value}
                        </div>
                    }
                } )*/}
            </Tooltip>
                
        </Marker>
    })


    }</div>
};

export default WeatherTodayLayers
