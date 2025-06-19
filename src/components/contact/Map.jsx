// components/Map.jsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet's default icon issue in Next.js
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const position = [28.417276, 77.041598]; // Spaze IT Park, Sector 49, Gurgaon

const Map = () => {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Spaze IT Park <br />
            Sector 49, Gurgaon, 122018
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
