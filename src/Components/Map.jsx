//Import css file
import style from '../Components/Map.module.css'

//import hooks
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

//import map releted library:
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useEffect, useState } from 'react';


function Map() {
  const [mapPosition, setMapPosition] = useState([25, 86]);
  const navigate = useNavigate();

  //code for retrive data from urls using useSearchParams
  const { id } = useParams();
  const [searchParams, setUseParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  // useEffect(() => {
  //   setMapPosition([lat, lng]);
  // }, []);


  return (
    <div className={style.mapContainer} key={id} onClick={() => { navigate("form") }}>

      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={style.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map;