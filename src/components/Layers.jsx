// import { useState, useMemo } from "react";
// import { FeatureGroup, LayersControl, Marker, Popup } from "react-leaflet";

// // Sample data (replace with real data)
// const edificios = [
//   { id: 1, letra: "A", numero: 101, plan: 1234, lat: -32.9, lng: -60.6 },
//   { id: 2, letra: "B", numero: 201, plan: 2225, lat: -32.91, lng: -60.61 },
// ];

// const viviendas = [
//   { id: 3, numero: 1001, plan: 555, lat: -32.92, lng: -60.62 },
//   { id: 4, numero: 1002, plan: 666, lat: -32.93, lng: -60.63 },
// ];

// const useFilteredData = (data, filters) => {
//   return useMemo(() => {
//     return data.filter(
//       (item) =>
//         (!filters.letra ||
//           item.letra?.toLowerCase().includes(filters.letra.toLowerCase())) &&
//         (!filters.numero || item.numero.toString().includes(filters.numero)) &&
//         (!filters.plan || item.plan.toString().includes(filters.plan))
//     );
//   }, [data, filters]);
// };

// export const Layers = () => {
//   const [filters, setFilters] = useState({ letra: "", numero: "" });

//   const edificiosFiltrados = useFilteredData(edificios, filters);
//   const viviendasFiltradas = useFilteredData(viviendas, filters);

//   const searchFormStyle = {
//     padding: "5px",
//     borderRadius: "4px",
//     marginBottom: "0",
//     width: "40%",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "5px",
//     margin: "0",
//     borderRadius: "3px",
//     border: "1px solid #ccc",
//   };

//   return (
//     <>
//       <LayersControl position="topright">
//         <LayersControl.Overlay checked name="Edificios">
//           <FeatureGroup>
//             {edificiosFiltrados.map((edificio) => (
//               <Marker key={edificio.id} position={[edificio.lat, edificio.lng]}>
//                 <Popup>
//                   Edificio {edificio.letra}
//                   {edificio.numero} {edificio.plan}
//                 </Popup>
//               </Marker>
//             ))}
//           </FeatureGroup>
//         </LayersControl.Overlay>

//         <LayersControl.Overlay checked name="Viviendas">
//           <FeatureGroup>
//             {viviendasFiltradas.map((vivienda) => (
//               <Marker key={vivienda.id} position={[vivienda.lat, vivienda.lng]}>
//                 <Popup>
//                   Casa {vivienda.numero} {vivienda.plan}
//                 </Popup>
//               </Marker>
//             ))}
//           </FeatureGroup>
//         </LayersControl.Overlay>
//       </LayersControl>

//       <form className="leaflet-control" name="search" style={searchFormStyle}>
//         <input
//           type="text"
//           name="letra"
//           id="letra"
//           placeholder="Filtrar por letra"
//           autoComplete="off"
//           value={filters.letra}
//           onChange={(e) => setFilters({ ...filters, letra: e.target.value })}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="numero"
//           id="numero"
//           placeholder="Filtrar por número"
//           autoComplete="off"
//           value={filters.numero}
//           onChange={(e) => setFilters({ ...filters, numero: e.target.value })}
//           style={inputStyle}
//         />
//         <input
//           type="text"
//           name="plan"
//           id="plan"
//           placeholder="Filtrar por plan"
//           autoComplete="off"
//           value={filters.plan}
//           onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
//           style={inputStyle}
//         />
//       </form>
//     </>
//   );
// };
import { useState, useMemo } from "react";
import { FeatureGroup, LayersControl, Marker, Popup } from "react-leaflet";

// Datos de ejemplo (reemplaza con datos reales)
const edificios = [
  { id: 1, letra: "A", numero: 101,  plan: 1234, lat: -32.9, lng: -60.6 },
  { id: 2, letra: "B", numero: 201,  plan: 2225, lat: -32.91, lng: -60.61 },
  { id: 3, letra: "C", numero: 301,  plan: 3456, lat: -32.92, lng: -60.62 },
  { id: 4, letra: "D", numero: 401,  plan: 4567, lat: -32.93, lng: -60.63 },
  { id: 5, letra: "E", numero: 501,  plan: 5678, lat: -32.94, lng: -60.64 },
  { id: 6, letra: "F", numero: 601,  plan: 6789, lat: -32.95, lng: -60.65 },
  { id: 7, letra: "G", numero: 701,  plan: 7890, lat: -32.96, lng: -60.66 },
  { id: 8, letra: "H", numero: 801,  plan: 8901, lat: -32.97, lng: -60.67 },
  { id: 9, letra: "I", numero: 901,  plan: 9012, lat: -32.98, lng: -60.68 },
  { id: 10, letra: "J", numero: 1001,  plan: 1235, lat: -32.99, lng: -60.69 },
  { id: 11, letra: "K", numero: 1101,  plan: 2346, lat: -32.89, lng: -60.58 },
  { id: 12, letra: "L", numero: 1201,  plan: 3457, lat: -32.88, lng: -60.57 },
  { id: 13, letra: "M", numero: 1301,  plan: 4568, lat: -32.87, lng: -60.56 },
  { id: 14, letra: "N", numero: 1401,  plan: 5679, lat: -32.86, lng: -60.55 },
  { id: 15, letra: "O", numero: 1501,  plan: 6780, lat: -32.85, lng: -60.54 },
  { id: 16, letra: "P", numero: 1601,  plan: 7891, lat: -32.84, lng: -60.53 },
  { id: 17, letra: "Q", numero: 1701,  plan: 8902, lat: -32.83, lng: -60.52 },
  { id: 18, letra: "R", numero: 1801,  plan: 9013, lat: -32.82, lng: -60.51 },
  { id: 19, letra: "S", numero: 1901,  plan: 1236, lat: -32.81, lng: -60.5 },
  { id: 20, letra: "T", numero: 2001,  plan: 2347, lat: -32.8, lng: -60.49 }
];

const viviendas = [
  { id: 3, numero: 1001, plan: 555, lat: -32.92, lng: -60.62 },
  { id: 4, numero: 1002, plan: 666, lat: -32.93, lng: -60.63 },
  { id: 5, numero: 1003, plan: 777, lat: -32.94, lng: -60.64 },
  { id: 6, numero: 1004, plan: 888, lat: -32.95, lng: -60.65 },
  { id: 7, numero: 1005, plan: 999, lat: -32.96, lng: -60.66 },
  { id: 8, numero: 1006, plan: 1010, lat: -32.97, lng: -60.67 },
  { id: 9, numero: 1007, plan: 1111, lat: -32.98, lng: -60.68 },
  { id: 10, numero: 1008, plan: 1212, lat: -32.99, lng: -60.69 },
  { id: 11, numero: 1009, plan: 1313, lat: -32.89, lng: -60.58 },
  { id: 12, numero: 1010, plan: 1414, lat: -32.88, lng: -60.57 },
  { id: 13, numero: 1011, plan: 1515, lat: -32.87, lng: -60.56 },
  { id: 14, numero: 1012, plan: 1616, lat: -32.86, lng: -60.55 },
  { id: 15, numero: 1013, plan: 1717, lat: -32.85, lng: -60.54 },
  { id: 16, numero: 1014, plan: 1818, lat: -32.84, lng: -60.53 },
  { id: 17, numero: 1015, plan: 1919, lat: -32.83, lng: -60.52 },
  { id: 18, numero: 1016, plan: 2020, lat: -32.82, lng: -60.51 },
  { id: 19, numero: 1017, plan: 2121, lat: -32.81, lng: -60.5 },
  { id: 20, numero: 1018, plan: 2222, lat: -32.8, lng: -60.49 }
];
 
const useFilteredData = (data, filters) => {
  return useMemo(() => {
    return data.filter(
      (item) =>
        (!filters.edificio ||
          item.letra?.toLowerCase().includes(filters.edificio.toLowerCase()) ||
          item.numero?.toString().includes(filters.edificio)) &&
        (!filters.vivienda ||
          item.numero?.toString().includes(filters.vivienda)) &&
        (!filters.plan || item.plan?.toString().includes(filters.plan))
    );
  }, [data, filters]);
};

export const Layers = () => {
  const [filters, setFilters] = useState({ edificio: "", vivienda: "", plan: "" });

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
        <LayersControl.Overlay checked id="Edificios" name="Edificios">
          <FeatureGroup>
            {edificiosFiltrados.map((edificio) => (
              <Marker key={edificio.id} position={[edificio.lat, edificio.lng]}>
                <Popup>
                  Edificio {edificio.letra || edificio.numero} - Plan {edificio.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked id="Viviendas" name="Viviendas">
          <FeatureGroup>
            {viviendasFiltradas.map((vivienda) => (
              <Marker key={vivienda.id} position={[vivienda.lat, vivienda.lng]}>
                <Popup>
                  Casa {vivienda.numero} - Plan {vivienda.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      <form className="leaflet-control" id="search" name="search" style={searchFormStyle}>
        <input
          type="text"
          name="edificio"
          id="edificio"
          placeholder="Filtrar edificio (letra o número)"
          autoComplete="off"
          value={filters.edificio}
          onChange={(e) => setFilters({ ...filters, edificio: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          name="vivienda"
          id="vivienda"
          placeholder="Filtrar vivienda (número)"
          autoComplete="off"
          value={filters.vivienda}
          onChange={(e) => setFilters({ ...filters, vivienda: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          name="plan"
          id="plan"
          placeholder="Filtrar por plan (número)"
          autoComplete="off"
          value={filters.plan}
          onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
          style={inputStyle}
        />
      </form>
    </>
  );
};
