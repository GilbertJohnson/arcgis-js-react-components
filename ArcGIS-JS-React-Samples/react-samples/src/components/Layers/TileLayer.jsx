import './TileLayer.css'
import Map from '@arcgis/core/Map';
import MapView from "@arcgis/core/views/MapView";
import TileLayer from "@arcgis/core/layers/TileLayer"
import { useRef, useEffect } from 'react';
const TileLayerC = () => {

    const container = useRef();
    
    useEffect(()=>{
        if(!container.current) return;
        const housingLayer = new TileLayer({
            url: "https://tiles.arcgis.com/tiles/nGt4QxSblgDfeJn9/arcgis/rest/services/New_York_Housing_Density/MapServer",
            id: "ny-housing",
            opacity: 0.9
        })
        const map = new Map({
            basemap:"oceans",
            layers: [housingLayer]
        })
        const view = new MapView({
            container: container.current,
            map: map
        })
        view.when(() => {
            housingLayer.when(() => {
              view.goTo(housingLayer.fullExtent).catch((error) => {
                console.error(error);
              });
            });
          });
          return()=>{
            if(view){view.destroy()};
          }
    },[])
  return (
  <>
    <div ref={container} className='mapelement'></div>
  </>
    
  )
}

export default TileLayerC