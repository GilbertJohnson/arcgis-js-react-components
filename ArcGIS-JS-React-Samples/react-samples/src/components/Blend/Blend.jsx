import { useRef,useEffect } from "react";
import Map from "@arcgis/core/Map";
import TileLayer from "@arcgis/core/layers/TileLayer";
import MapView from "@arcgis/core/views/MapView";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";

const Blend = () => {
    const container = useRef();
    useEffect(()=>{
        if(!container.current) return;
        const map = new Map({
            basemap: {
              baseLayers:[
                new TileLayer({
                  portalItem: {
                    id: "1b243539f4514b6ba35e7d995890db1d" // world hillshade
                  }
                }),
                new VectorTileLayer({
                  portalItem: {
                    id: "273bf8d5c8ac400183fc24e109d20bcf" // community style vector tiles
                  },
                  blendMode: "multiply"
                })
              ]
            }
          });
        const view = new MapView({
            container: "viewDiv",
            map: map,
            zoom: 5,
            center: [81.938, 26.733]
          });
    },[])
  return (
    <div ref={container} id='viewDiv' className='mapelement'></div>
  )
}

export default Blend