import { useState, useMemo } from "react";
import { FeatureGroup, LayersControl, Marker, Popup } from "react-leaflet";



// Sample data (replace with real data)
const edificios = [
  { id: 1, letra: "A", numero: 101, lat: -32.9, lng: -60.6 },
  { id: 2, letra: "B", numero: 201, lat: -32.91, lng: -60.61 },
];

const casas = [
  { id: 3, numero: 1001, lat: -32.92, lng: -60.62 },
  { id: 4, numero: 1002, lat: -32.93, lng: -60.63 },
];

const useFilteredData = (data, filters) => {
  return useMemo(() => {
    return data.filter(
      (item) =>
        (!filters.letra || item.letra?.toLowerCase().includes(filters.letra.toLowerCase())) &&
        (!filters.numero || item.numero.toString().includes(filters.numero))
    );
  }, [data, filters]);
};

export const Layers = () => {
  const [filters, setFilters] = useState({ letra: "", numero: "" });

  const edificiosFiltrados = useFilteredData(edificios, filters);
  const casasFiltradas = useFilteredData(casas, filters);

  const searchFormStyle = {
    padding: '5px',
    // backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.65)',
    marginBottom: '0',
    width:'40%'
  };

  const inputStyle = {
    width: '80%',
    padding: '5px',
    margin: '0',
    borderRadius: '3px',
    border: '1px solid #ccc',
  };

  

  return (
    <LayersControl position="topright">
      <LayersControl.Overlay checked name="Buscador">
        <div className="leaflet-control leaflet-bar">
          <form name="search" style={searchFormStyle}>
            <div>
              
              <input
                type="text"
                name="letra"
                id="letra"
                placeholder="Filtrar por letra"
                autoComplete="off"
                value={filters.letra}
                onChange={(e) => setFilters({ ...filters, letra: e.target.value })}
                style={inputStyle}
              />
            

              <input
                type="text"
                name="numero"
                id="numero"
                placeholder="Filtrar por número"
                autoComplete="off"
                value={filters.numero}
                onChange={(e) => setFilters({ ...filters, numero: e.target.value })}
                style={inputStyle}
              />
            </div>
          </form>
        </div>
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="Edificios">
        <FeatureGroup>
          {edificiosFiltrados.map((edificio) => (
            <Marker key={edificio.id} position={[edificio.lat, edificio.lng]}>
              <Popup>
                Edificio {edificio.letra}
                {edificio.numero}
              </Popup>
            </Marker>
          ))}
        </FeatureGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="Casas">
        <FeatureGroup>
          {casasFiltradas.map((casa) => (
            <Marker key={casa.id} position={[casa.lat, casa.lng]}>
              <Popup>Casa {casa.numero}</Popup>
            </Marker>
          ))}
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};