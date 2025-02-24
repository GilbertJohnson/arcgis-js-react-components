import './Popup.css'
import {useRef,useEffect} from 'react'
import Map from '@arcgis/core/Map';
import MapView from "@arcgis/core/views/MapView";
import * as locator from "@arcgis/core/rest/locator";

const Popup = () => {
    const container = useRef();
    const locatorUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
    useEffect(()=>{
        if(!container.current)return;
        const map = new Map({
            basemap:"streets-navigation-vector",
        });
        const mapView = new MapView({
            container: container.current,
            map: map,
            center: [-71.6899, 43.7598],
            zoom: 12
        });
        mapView.popupEnabled = false;

        mapView.on("click", (event) => {
            // Get the coordinates of the click on the view
            const lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
            const lon = Math.round(event.mapPoint.longitude * 1000) / 1000;
  
            mapView.openPopup({
              // Set the popup's title to the coordinates of the location
              title: "Reverse geocode: [" + lon + ", " + lat + "]",
              location: event.mapPoint // Set the location of the popup to the clicked location
            });
  
            const params = {
              location: event.mapPoint
            };
  
            // Display the popup
            // Execute a reverse geocode using the clicked location
            locator
              .locationToAddress(locatorUrl, params)
              .then((response) => {
                // If an address is successfully found, show it in the popup's content
                mapView.popup.content = response.address;
              })
              .catch(() => {
                // If the promise fails and no result is found, show a generic message
                mapView.popup.content = "No address was found for this location";
              });
          });

    },[])

  return (
    <>
        <div className="title">Click any location on the map to see its street address</div>
        <div ref={container} className='mapelement'></div>
    </>
  )
}

export default Popup