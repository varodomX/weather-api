import React from 'react'
import { LayersControl,LayerGroup } from 'react-leaflet'
import Province from './Province'
import BaseMapLayers from './BaseMapLayers'
import PointOf from './PointOf'
import WeatherLayers from './WeatherTodayLayers'
import Rainfall from './Rainfall'
import WeatherTodayLayers from './WeatherTodayLayers'
import Weather3hr from './Weather3hr'


const CombineLayers = () => {
  return (
    <LayersControl position='topright'>
        <LayersControl.Overlay name='Thailand' checked>
            <Province />
        </LayersControl.Overlay>

        
        <BaseMapLayers />

        <LayersControl.Overlay name='ขอนแก่น' >
            <PointOf/>
        </LayersControl.Overlay>

        <LayersControl.Overlay name='weather 3 hr' checked>
          <LayerGroup>
            <Weather3hr />
          </LayerGroup>
        </LayersControl.Overlay>
    </LayersControl>
  )
}

export default CombineLayers
