import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>React components based Samples</div>
        <li>
            <Link to={'/mapview'} >Mapview</Link>
        </li>
        <li>
            <Link to={'/sceneview'}>SceneView</Link>
        </li>
        <li>
            <Link to={'/tilelayer'} >Tile Layer</Link>
        </li>
        <li>
          <Link to={'/widgetbmt'} >Widget - BasemapToggle</Link>
        </li>
        <li>
          <Link to={'/graphic'} >Graphics</Link>
        </li>
        <li>
          <Link to={'/popup'} >Popup with locator</Link>
        </li>
        <li>
          <Link to={'/expand'} >Expand Widget</Link>
        </li>
        <li>
          <Link to={'/popuptemplate'} >Popup Template</Link>
        </li>
    </>
    
  )
}

export default Home