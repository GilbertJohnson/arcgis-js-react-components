import './Popup.css';
import { useRef,useEffect} from 'react';
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapView from "@arcgis/core/views/MapView";
import Legend from "@arcgis/core/widgets/Legend";
const Popup = () => {
    const container = useRef();

    useEffect(()=>{
        if(!container.current) return;
        const map = new Map({
            basemap: "gray-vector"
          });
        const view = new MapView({
        container: container.current, // "viewDiv"
        map: map,
        center: [-73.95, 40.702],
        zoom: 10
        });

        const template = {
          // autocasts as new PopupTemplate()
          title: "{NAME} in {COUNTY}",
          content: [
            {
              // It is also possible to set the fieldInfos outside of the content
              // directly in the popupTemplate. If no fieldInfos is specifically set
              // in the content, it defaults to whatever may be set within the popupTemplate.
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "B12001_calc_pctMarriedE",
                  label: "Married %"
                },
                {
                  fieldName: "B12001_calc_numMarriedE",
                  label: "People Married",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                },
                {
                  fieldName: "B12001_calc_numNeverE",
                  label: "People that Never Married",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                },
                {
                  fieldName: "B12001_calc_numDivorcedE",
                  label: "People Divorced",
                  format: {
                    digitSeparator: true,
                    places: 0
                  }
                }
              ]
            }
          ]
        };

        const featureLayer = new FeatureLayer({
          url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Marital_Status_Boundaries/FeatureServer/2",
          popupTemplate: template
        });
        map.add(featureLayer);
        view.when(()=>{
          featureLayer.when(()=>{
            view.ui.add(new Legend({ view: view }), "bottom-left");
            
          })
        })
        
        

    },[])
  return (
    <div ref={container} id='viewDiv' className='mapelement'></div>
  )
}

export default Popup