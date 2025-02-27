import {useRef,useState,useEffect} from 'react'
import Map from '@arcgis/core/Map';
import SceneView from "@arcgis/core/views/SceneView";
import Expand from "@arcgis/core/widgets/Expand"
import './Expand.css'

const ExpandWidget = () => {
    const container = useRef(null);
    const [state,setState] = useState(container);
    useEffect(()=>{
      if(!container.current) return;
      const map = new Map({
        basemap:"satellite",
    });

    const sceneView = new SceneView({
        container: container.current,
        map: map,
        center: [-86.049,38.485],
        zoom: 3
    });
    const sampleInstructions = document.createElement("div");
        sampleInstructions.classList.add("info")
        sampleInstructions.id = "SampleInstruction";
        sampleInstructions.innerHTML =
          "Simple Expand widget";
    const expand = new Expand({
      expandIcon: "information",
      expandTooltip: "How to use this sample",
      view: sceneView,
      content: sampleInstructions,
      group: "top-right"
    })

    sceneView.ui.add([expand]);
      
    },[]);

    

  return (
    <div ref={container} className='mapelement'></div>
  )
}

export default ExpandWidget