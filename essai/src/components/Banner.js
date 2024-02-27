import '../styles/Banner.css'
import logo from '../assets/logo.webp'
import Warning from './Warning'

function Banner(){
    return(
        <div className="sdf-banner">
            <img src={logo} alt="hmi picture" className="sdf-logo"/>
            <h1>SensorDataFabrics HMI</h1>
            <Warning/>
        </div>
    )
}

export default Banner