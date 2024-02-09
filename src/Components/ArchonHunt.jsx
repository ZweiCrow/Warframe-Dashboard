import React, { useEffect, useState } from 'react';
import "../Utils/Sass/archonhunt.scss"
import axios from 'axios';
import { URL } from '../Utils/Urls';
import Countdown from 'react-countdown';

const ArchonHunt = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [Refresh, setRefresh] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const {data} = await axios.get(URL.archonHunt)
        setData(data)
        setLoading(true)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData()
  },[])

  const renderer = ({ days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // what to do when 00:00:00
      setRefresh(!Refresh)
    } else {
      return(
        <p>
          <img src="./Icons/Timer.png" alt="timer" />
          {days}j {hours}h {minutes}m {seconds}s
        </p>
      )
    }
  }


  if (loading === false) {
    
  } else {
    return (
      <div id="ArchonHunt">
        <div id="Title">
          <img
            src={
              data.boss === "Archonte Amar"
                ? "./Images/Amar.png"
                : data.boss === "Archonte Boreal"
                ? "./Images/Boreal.png"
                : data.boss === "Archonte Nira"
                ? "./Images/Nira.png"
                : ""
            }
            alt="Archonte"
          />
          <div>
            <h2>Chasse aux Archontes</h2>
            <Countdown date={data.expiry} renderer={renderer} />
          </div>
        </div>
        <img src="./Icons/Narmer.png" alt="" />
        <h2>{data.boss}</h2>
        {data.missions.map((mission)=>{
          return(
            <div className='mission' key={mission.node}>
              <img className='faction' src="./Icons/Narmer.png" alt="" />
              <h3 className='typeMission'>{mission.type} &nbsp;</h3>
              <p className='node'>- {mission.node}</p>
            </div>
          )
        })}
      </div>
    );
  }

};

export default ArchonHunt;