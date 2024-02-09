import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import "../Utils/Sass/syndicats.scss"
import { URL } from '../Utils/Urls';

const Syndicats = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [Refresh, setRefresh] = useState(false)
  const [Missions, setMissions] = useState({})
  
  let syndicat = sessionStorage.getItem("syndicat");

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const {data} = await axios.get(URL.syndicats)
        setData(data)
        setMissions(data[6])
        setLoading(true)
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData()
  },[])

  if (syndicat === null) {
    sessionStorage.setItem("syndicat", "Suda");
  }

  const ChangeSyndicate = (name) => {
    if (name === "Suda") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
    if (name === "Hexis") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
    if (name === "RedVeil") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
    if (name === "Loka") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
    if (name === "Perrin") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
    if (name === "Meridian") {
      sessionStorage.setItem("syndicat", name);
      ModifData()
      setRefresh(!Refresh)
    }
  } 

  const ModifData = () => {
    if (syndicat === "Suda") {
      setMissions(data[6])
    } 
    if (syndicat === "RedVeil") {
      setMissions(data[25])
    } 
    if (syndicat === "Hexis") {
      setMissions(data[5])
    } 
    if (syndicat === "Loka") {
      setMissions(data[10])
    }
    if (syndicat === "Perrin") {
      setMissions(data[11])
    }
    if (syndicat === "Meridian") {
      setMissions(data[26])
    }
  }

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
      <div id="Syndicats">
        <div id="Title">
          <img src="./Images/Arbiters_of_Hexis.png" alt="Faction" />
          <div>
            <h2>Missions de Syndicats</h2>
          </div>
        </div>
        <ul id='SelectBar'>
          <li className={(syndicat === "Suda")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("Suda")}}><img src="./Icons/CephalonSudaSigil.png" alt="" /></li>
          <li className={(syndicat === "RedVeil")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("RedVeil")}}><img src="./Icons/RedVeilSigil.png" alt="" /></li>
          <li className={(syndicat === "Hexis")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("Hexis")}}><img src="./Icons/ArbitersofHexisSigil.png" alt="" /></li>
          <li className={(syndicat === "Loka")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("Loka")}}><img src="./Icons/NewLokaSigil.png" alt="" /></li>
          <li className={(syndicat === "Perrin")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("Perrin")}}><img src="./Icons/PerrinSequenceSigil.png" alt="" /></li>
          <li className={(syndicat === "Meridian")?"syndic activeS":"syndic"} onClick={()=>{ChangeSyndicate("Meridian")}}><img src="./Icons/SteelMeridianSigil.png" alt="" /></li>
        </ul>
        <div id='Scroll'>
          {Missions.nodes.map((mission)=>{
            return(
              <div className='mission' key={mission}>
                <h3 className='typeMission'>{mission} &nbsp;</h3>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

};

export default Syndicats;