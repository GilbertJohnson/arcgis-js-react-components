import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import './MapView.css'
import "@arcgis/map-components/dist/components/arcgis-basemap-toggle"
const MapView = () => {
    const zoomlevel = 8;
    const center = [-118.805, 34.027];
  return (
        <arcgis-map
            itemId="d5dda743788a4b0688fe48f43ae7beb9"
            center={center}
            zoom = {zoomlevel}
        >
            <arcgis-search position="top-right" />
            <arcgis-legend position="bottom-left" />
        </arcgis-map>
  )
}

export default MapView