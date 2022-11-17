import React from 'react'
import "./LiveMatches.css";
import valorant from "../assets/valorant.svg"
import liveTeamLogo from "../assets/liveTeamLogo.svg"
import liveTeam2Logo from "../assets/liveTeam2Logo.svg"

const LiveMatches = () => {
  return (
    <div className="liveMatchSection">
      <div className="liveMatchHeader">
        <p>Live Matches</p>
      </div>
      <div className="liveMatchContent">
        <div className="liveMatchContentBox">
          <div className="liveTeamsDetails">
            <div className="team1Header">
              <p className="team1Name">SkyEsports Pro Invitational</p>
            </div>
            <div className="team2Header">
              <div className="team2logo">
                <img src={valorant} alt="valorant" className="team2logoImg" />
              </div>
              <div className="team2Name">
                <p className="team2Name">Valorant</p>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="teamDetails">
            <div className="team1Details">
              <div className="team1box">
                <div className="team1LogoImgBox">
                  <img src={liveTeamLogo} />
                </div>
              </div>
              <div>
                <span className="teamName">Cloud9</span>
              </div>
            </div>
            <div className="team2Details">
              <div>
                <span className="teamName">BDS</span>
              </div>
              <div className="team2box">
                <div className="team2LogoImgBox">
                  <img src={liveTeam2Logo} />
                </div>
              </div>
            </div>
          </div>
          <div className="live">
            <button className="liveBtn">LIVE</button>
          </div>
        </div>

        

        <div className="liveMatchContentBox">
          <div className="liveTeamsDetails">
            <div className="team1Header">
              <p className="team1Name">SkyEsports Pro Invitational</p>
            </div>
            <div className="team2Header">
              <div className="team2logo">
                <img src={valorant} alt="valorant" className="team2logoImg" />
              </div>
              <div className="team2Name">
                <p className="team2Name">Valorant</p>
              </div>
            </div>
          </div>

          <div className="line"></div>

          <div className="teamDetails">
            <div className="team1Details">
              <div className="team1box">
                <div className="team1LogoImgBox">
                  <img src={liveTeamLogo} />
                </div>
              </div>
              <div>
                <span className="teamName">Cloud9</span>
              </div>
            </div>
            <div className="team2Details">
              <div>
                <span className="teamName">BDS</span>
              </div>
              <div className="team2box">
                <div className="team2LogoImgBox">
                  <img src={liveTeam2Logo} />
                </div>
              </div>
            </div>
          </div>
          <div className="live">
            <button className="liveBtn">LIVE</button>
          </div>
        </div>


        
        
      </div>
    </div>
  )
}

export default LiveMatches