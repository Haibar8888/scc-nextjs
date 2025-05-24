"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const PulseMarker = ({ position }: { position: [number, number] }) => {
  return (
    <div className="pulse-marker-wrapper">
      <div className="pulse-marker"></div>
    </div>
  );
};

const CustomMarker = ({
  position,
  popupContent,
}: {
  position: [number, number];
  popupContent: React.ReactNode;
}) => {
  return (
    <Marker
      position={position}
      icon={L.divIcon({
        className: "",
        html: `<div class="pulse-marker-wrapper"><div class="pulse-marker"></div></div>`,
        iconSize: [30, 30],
      })}
    >
      <Popup>{popupContent}</Popup>
    </Marker>
  );
};

export default function LeafletMap() {
  const [userPosition, setUserPosition] = useState<[number, number]>([
    -8.5831, 116.105,
  ]);

  const emergencies = [
    {
      id: 1,
      type: "Kecelakaan",
      location: "Jl. Diponegoro No. 78, Mataram Barat, NTB",
      time: "09:00 WITA",
      description: "Butuh bantuan ada kecelakaan, ambulan dan medis!",
      latlng: [-8.582, 116.105],
    },
    {
      id: 2,
      type: "Sakit",
      location: "Jl. Ahmad Yani No. 99, Malang Selatan, Jawa Timur",
      time: "09:00 WITA",
      description: "Pasien mengalami serangan jantung, butuh medis cepat!",
      latlng: [-8.586, 116.11],
    },
  ];

  return (
    <div className="w-full h-full">
      <MapContainer
        center={userPosition}
        zoom={14}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {emergencies.map((e) => (
          <CustomMarker
            key={e.id}
            position={e.latlng}
            popupContent={
              <div>
                <b>Emergency:</b> {e.type} <br />
                <b>Jam:</b> {e.time}
              </div>
            }
          />
        ))}
      </MapContainer>
    </div>
  );
}
