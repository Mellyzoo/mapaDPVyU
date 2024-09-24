import { useState, useMemo } from "react";
import { FeatureGroup, LayersControl, Marker, Popup } from "react-leaflet";

// Sample data (replace with real data)
const edificios = [
  { id: 1, letra: "A", numero: 101, plan: 1234, lat: -32.9, lng: -60.6 },
  { id: 2, letra: "B", numero: 201, plan: 2225, lat: -32.91, lng: -60.61 },
];

const viviendas = [
  { id: 3, numero: 1001, plan: 555, lat: -32.92, lng: -60.62 },
  { id: 4, numero: 1002, plan: 666, lat: -32.93, lng: -60.63 },
];

const useFilteredData = (data, filters) => {
  return useMemo(() => {
    return data.filter(
      (item) =>
        (!filters.letra ||
          item.letra?.toLowerCase().includes(filters.letra.toLowerCase())) &&
        (!filters.numero || item.numero.toString().includes(filters.numero)) &&
        (!filters.plan || item.plan.toString().includes(filters.plan))
    );
  }, [data, filters]);
};

export const Layers = () => {
  const [filters, setFilters] = useState({ letra: "", numero: "" });

  const edificiosFiltrados = useFilteredData(edificios, filters);
  const viviendasFiltradas = useFilteredData(viviendas, filters);

  const searchFormStyle = {
    padding: "5px",
    borderRadius: "4px",
    marginBottom: "0",
    width: "40%",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    margin: "0",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Edificios">
          <FeatureGroup>
            {edificiosFiltrados.map((edificio) => (
              <Marker key={edificio.id} position={[edificio.lat, edificio.lng]}>
                <Popup>
                  Edificio {edificio.letra}
                  {edificio.numero} {edificio.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Viviendas">
          <FeatureGroup>
            {viviendasFiltradas.map((vivienda) => (
              <Marker key={vivienda.id} position={[vivienda.lat, vivienda.lng]}>
                <Popup>
                  Casa {vivienda.numero} {vivienda.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      <form className="leaflet-control" name="search" style={searchFormStyle}>
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
        <input
          type="text"
          name="plan"
          id="plan"
          placeholder="Filtrar por plan"
          autoComplete="off"
          value={filters.plan}
          onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
          style={inputStyle}
        />
      </form>
    </>
  );
};
