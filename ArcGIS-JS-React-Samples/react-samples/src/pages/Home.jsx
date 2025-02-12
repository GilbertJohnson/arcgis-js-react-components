import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div>React components based Samples</div>
        <li>
            <Link to={'/mapview'} >Mapview</Link>
        </li>
    </>
    
  )
}

export default Home