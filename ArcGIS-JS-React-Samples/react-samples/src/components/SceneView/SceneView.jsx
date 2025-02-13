import "@arcgis/map-components/dist/components/arcgis-scene";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import './SceneView.css'
const SceneView = () => {
    //const portal_item_id = "9c90786e1a1d4102adf9d53655c2843d"
    const portal_item_id_2 = '8ede93ea9d8d48bc8cdcbea775936a13'
    // const zoomlevel = 2;
    // const center = [78.3194142413103,21.7772470642773];
    // use for portal_item-1
  return (
    <>
        <arcgis-scene 
            itemId={portal_item_id_2}
            // center={center}
            // zoom = {zoomlevel}
        >
            <arcgis-search position="top-right" />
            <arcgis-legend position="bottom-left" />
        </arcgis-scene>
    </>
  )
}

export default SceneView