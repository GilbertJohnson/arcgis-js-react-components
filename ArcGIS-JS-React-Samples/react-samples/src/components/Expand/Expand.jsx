import {useRef,useState,useEffect} from 'react'

const Expand = () => {
    const container = useRef(null);
    const [state,setState] = useState(container);
    useEffect(()=>{},[]);

  return (
    <div>Expand</div>
  )
}

export default Expand