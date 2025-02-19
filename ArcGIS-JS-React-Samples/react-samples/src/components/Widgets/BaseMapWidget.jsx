import './BaseMapWidget.css'
import {useEffect, useRef} from 'react';
import Map from '@arcgis/core/Map';
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

const BaseMapWidget = () => {
    const container = useRef();
    useEffect(()=>{
        if(!container.current) return;

        const map = new Map({
            basemap:"oceans",
        });

        const mapView = new MapView({
            container: container.current,
            map: map,
            center: [-86.049,38.485],
            zoom: 3
        });

        const toggle = new BasemapToggle({
            view: mapView,
            nextBasemap: "hybrid"
        });

        mapView.ui.add(toggle,"top-right");
    },[])
  return (
    <div ref={container} className='mapelement'></div>
  )
}

export default BaseMapWidget