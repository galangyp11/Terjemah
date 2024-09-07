import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      center={[-6.338077, 107.021776]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-[40px] h-[20px]"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-6.338077, 107.021776]} />
    </MapContainer>
  );
}
