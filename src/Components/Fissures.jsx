import React, { useEffect, useState } from 'react';
import "../Utils/Sass/fissures.scss"
import Countdown from 'react-countdown';
import axios from 'axios';
import { URL } from '../Utils/Urls';

const Fissures = () => {
  const [data, setData] = useState([])
  let fissures = []
  const [loading, setLoading] = useState(false)
  const [Refresh, setRefresh] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const {data} = await axios.get(URL.fissures)
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
        <p className='timer'>
          <img src="./Icons/Timer.png" alt="timer" />
           {hours}h {minutes}m {seconds}s
        </p>
      )
    }
  }
  const Reorder = () =>{
    for (const mission of data) {
      if(mission.tier === "Lith" && mission.active === true && mission.isHard === false && mission.isStorm === false){
        fissures.push(mission)
      }
    }
    for (const mission of data) {
      if(mission.tier === "Meso" && mission.active === true && mission.isHard === false && mission.isStorm === false){
        fissures.push(mission)
      }
    }
    for (const mission of data) {
      if(mission.tier === "Neo" && mission.active === true && mission.isHard === false && mission.isStorm === false){
        fissures.push(mission)
      }
    }
    for (const mission of data) {
      if(mission.tier === "Axi" && mission.active === true && mission.isHard === false && mission.isStorm === false){
        fissures.push(mission)
      }
    }
    for (const mission of data) {
      if(mission.tier === "Requiem" && mission.active === true && mission.isHard === false && mission.isStorm === false){
        fissures.push(mission)
      }
    }
  }
  Reorder()


  if (loading === false) {
    
  } else {
    return (
      <div id="Fissures">
        <div id="Title">
          <img
            src="./Images/FactionsOrokin.png"
            alt="Fissure"
          />
          <div>
            <h2>Fissures</h2>
            {/* <Countdown date={data.expiry} renderer={renderer} /> */}
          </div>
        </div>
        <div id='List'>
          {fissures.map((mission)=>{
            return(
              <div className='mission' key={mission.id}>
                
                <h3 className='typeMission'><img className='typeRelic' src={(mission.tier === "Lith")?"./Icons/Lith.png":(mission.tier === "Meso")?"./Icons/Meso.png":(mission.tier === "Neo")?"./Icons/Neo.png":(mission.tier === "Axi")?"./Icons/Axi.png":""} alt="" />{mission.tier} - {mission.missionType}</h3>
                <Countdown date={mission.expiry} renderer={renderer} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }

};

export default Fissures;