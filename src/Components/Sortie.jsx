import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import "../Utils/Sass/sortie.scss"
import { URL } from '../Utils/Urls';

const Sortie = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [Refresh, setRefresh] = useState(false)

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const {data} = await axios.get(URL.sortie)
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
           {hours}h {minutes}m {seconds}s
        </p>
      )
    }
  }


  if (loading === false) {
    
  } else {
    return (
      <div id="Sortie">
        <div id="Title">
          <img
            src={
              data.faction === "Corpus"
                ? "./Images/FactionsCorpus.png"
                : data.faction === "Grineer"
                ? "./Images/FactionsGrineer.png"
                : data.faction === "Infesté"
                ? "./Images/FactionsInfested.png"
                : data.faction === "Orokin"
                ? "./Images/FactionsOrokin.png"
                : ""
            }
            alt="Faction"
          />
          <div>
            <h2>Sortie</h2>
            <Countdown date={data.expiry} renderer={renderer} />
          </div>
        </div>
        <img src={(data.faction === "Corpus")?"./Icons/Corpus.png":(data.faction === "Grineer")?"./Icons/Grineer.png":(data.faction === "Infesté")?"./Icons/Infested.png":(data.faction === "Orokin")?"./Icons/Orokin.png":""} alt="" />
        <h2>{data.boss}</h2>
        {data.variants.map((mission)=>{
          return(
            <div className='mission' key={mission.modifier}>
              <img className='faction' src={(data.faction === "Corpus")?"./Icons/Corpus.png":(data.faction === "Grineer")?"./Icons/Grineer.png":(data.faction === "Infesté")?"./Icons/Infested.png":(data.faction === "Orokin")?"./Icons/Orokin.png":""} alt="" />
              <h3 className='typeMission'>{mission.missionType} &nbsp;</h3>
              <p className='node'>- {mission.node}</p>
            </div>
          )
        })}
      </div>
    );
  }

};

export default Sortie;