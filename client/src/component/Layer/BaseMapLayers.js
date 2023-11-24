import React from 'react'
import { LayersControl,TileLayer } from 'react-leaflet'

const BaseMapLayers = () => {
  return (
    <>
    <LayersControl.BaseLayer name='Open map' checked>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='OSM'>
        <TileLayer url='https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'/>
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='E'>
        <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name='stadia'>
        <TileLayer url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'/>
      </LayersControl.BaseLayer>
    </>
  )
}

export default BaseMapLayers
