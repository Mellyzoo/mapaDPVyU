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
          bottom: "20px",   // Separación desde el borde inferior
          right: "20px",    // Separación desde el borde derecho
          zIndex: 1000,
          padding: "10px 15px", // Tamaño del botón
          borderRadius: "5px",  // Bordes redondeados
          backgroundColor: "#007bff", // Color de fondo (puedes cambiarlo)
          color: "white",  // Color del texto
          border: "none",  // Sin borde
          cursor: "pointer", // Cursor al pasar por el botón
        }}
      >
        🧭 Mi posición
      </button>
      {position !== null && <Marker position={position} />}
    </>
  );
}
