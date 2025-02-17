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
    </>
    
  )
}

export default Home