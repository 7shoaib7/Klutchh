import React from 'react'
import "./LiveStream.css"
import liveStream from "../assets/LiveStream.svg"

const LiveStream = () => {
  return (
    <div className="liveStream">
      <img src={liveStream} alt="livestream" />
    </div>
  )
}

export default LiveStream