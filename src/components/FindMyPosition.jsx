import { useState } from "react";
import { Marker, useMap } from "react-leaflet";

export function FindMyPosition() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  const handleFindPosition = () => {
    map.locate();
    map.once("locationfound", (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  };
  return (
    <>
      <button
        onClick={handleFindPosition}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          padding: "10px 15px",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        🧭
      </button>
      {position !== null && <Marker position={position} />}
    </>
  );
}