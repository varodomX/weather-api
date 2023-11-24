import React from 'react'
import { GeoJSON } from 'react-leaflet'
import data from '../data/thailand.json'

const Province = () => {
const styleProvince ={
    color: 'black',
    fillColor : 'orange',
    fillOpacity :'0.1',
    weight : '0.5'
}
  return (
    <GeoJSON data={data} style={styleProvince}/>
  )
}

export default Province
