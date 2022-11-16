import React from 'react'
import "./CreateTeam.css"
import { useState, useEffect } from "react"
import axios from "axios";
import teamPlayer from "../assets/teamPlayer.svg";
import team1Logo from "../assets/team1Logo.svg";
import team2Logo from "../assets/team2Logo.svg";
import Vs from "../assets/VS.svg"


const CreateTeam = () => {
  const [team, setTeam] = useState([])

  const fetchData = async () => {
    const res = await axios.get("https://api.klutchh.in/v1/rosters/128622/129859?game_type=false")
    const data = res.data.data;
    setTeam(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="createTeamSection">
      <div className="createTeamHeader">
        <p>Create Team</p>
      </div>
      <div className="createTeamContent">
        <div className="teamSelect">
          <div className="teamSelectPlayers">
            <div className="teamPlayer">
              <img src={teamPlayer} />
            </div>
            <div className="teamPlayer">
              <img src={teamPlayer} />
            </div>
            <div className="teamPlayer">
              <img src={teamPlayer} />
            </div>
            <div className="teamPlayer">
              <img src={teamPlayer} />
            </div>
            <div className="teamPlayer">
              <img src={teamPlayer} />
            </div>
          </div>
          <div className="teamPlayerText">
            <span className="teamText">Choose five players to join your team</span>
          </div>
          <div className="teamCredit">
            <span className="teamCreditText">Credits Left : 0/15</span>
          </div>
        </div>

        <div className="teamDetails">
          <div className="team1">
            <div className="team1Logo">
              <div className="team1Img">
                <img src={team1Logo} alt="team1" />
              </div>
            </div>
            <div>
              <span className="teamName">Team Liquid</span>
            </div>
          </div>
          <div className="teamVsteam">
            <img src={Vs} alt="vs" />
          </div>
          <div className="team2">
            <div>
              <span className="teamName">Sentinels</span>
            </div>
            <div className="team2Logo">
              <div className="team2Img">
                <img src={team2Logo} alt="team2" />
              </div>
            </div>

          </div>
        </div>


        <div className="teamMembers">
          <div className="team1Box">
            {team.roster1 ? team.roster1.map((item) => (
              <div className="playerCard">
                <div className="playerCardImg">
                  <img src={item.image_url ? item.image_url : "https://cdn.pandascore.co/images/player/image/17662/lowel.png"} alt="playerImg" className="playerImg" />
                </div>
                <div className="playerCardDetails">
                  <div className="playerName">
                    <div className="name">
                      <span className="nameText" >{item.name}</span>
                    </div>
                    <div className="KD?">
                    </div>
                  </div>
                  <div className="playerCredit">
                    <div className="credit">
                      <span className="creditDetails" >{item.credit} Credits</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
              : null}
          </div>
          <div className="team2Box">
            {team.roster2 ? team.roster2.map((item) => (
              <div className="playerCard">
                <div className="playerCardImg">
                  <img src={item.image_url ? item.image_url : "https://cdn.pandascore.co/images/player/image/17662/lowel.png"} alt="playerImg" className="playerImg" />
                </div>
                <div className="playerCardDetails">
                  <div className="playerName">
                    <div className="name">
                      <span className="nameText" >{item.name}</span>
                    </div>
                    <div className="KD?">
                    </div>
                  </div>
                  <div className="playerCredit">
                    <div className="credit">
                      <span className="creditDetails" >{item.credit} Credits</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
              : null}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateTeam