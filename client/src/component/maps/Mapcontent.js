import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import CombineLayers from "../Layer/CombineLayers";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Mapcontent = () => {
  const [position, setPosition] = useState(null);

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng)
      },
    });
    return position == null ? null : (
      <Marker position={position}>
        <Popup>Are you here</Popup>
      </Marker>
    );
  };

  return (
    <div>
      <MapContainer center={[13, 100]} zoom={6} style={{ height: "100vh" }}>
       
        <CombineLayers />
        <Marker position={[13, 100]}>
          <Popup>555</Popup>
        </Marker>

        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default Mapcontent;
