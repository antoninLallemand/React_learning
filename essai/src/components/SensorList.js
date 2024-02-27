import '../styles/SensorList.css'
import { sensorList } from '../datas/sensorList'


function SensorList(){
    const points = sensorList.reduce(
        (acc, sensor) =>
            acc.includes(sensor.point) ? acc : acc.concat(sensor.point),
        []
        )   //if acc does not include the category name, then add it with concat
    return(
        <div className="sdf-sensorList">
            <ul>
                {points.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {sensorList.map((sensor) => (
                    <li key={`${sensor.id}`} class={sensor.isSpecialOffer ? 'sdf-specialoffer' : null}>{sensor.name}
                        {sensor.isTheBest && <span>😊</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SensorList