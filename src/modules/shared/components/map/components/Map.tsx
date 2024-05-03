import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapProps {
  position: [number, number];
}

export const Map = ({ position }: MapProps) => {
  return (
    <div className="h-full">
      <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="h-dvh">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup />
        </Marker>
      </MapContainer>
    </div>
  );
};
