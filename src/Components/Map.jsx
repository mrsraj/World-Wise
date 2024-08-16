//Import css file
import style from '../Components/Map.module.css'

//import hooks
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';


function Map() {
  const navigate = useNavigate();

  //code for retrive data from urls using useSearchParams
  const { id } = useParams();
  const [searchParams, setUseParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');


  return (
    <div className={style.mapContainer} key={id} onClick={() => {
      navigate("form")
    }}>
      <h2>Posistion</h2>
      <h3>lat {lat}</h3>
      <h3>lng {lng}</h3>
      <button onClick={() => {
        setUseParams({ lat: 20, lng: 50 });
      }}>Change Position</button>
    </div>
  )
}

export default Map;