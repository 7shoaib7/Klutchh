import React from 'react'
import "./News.css";
import NewsImage from "../assets/NewsImage.svg"


const News = () => {
  return (
    <div className="newsSection">
      <div className="newsHeader">
        <p>News</p>
      </div>
      <div className="newsContent">
      
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>
        <div className="newsContentBox">
          <img src={NewsImage} alt="News" className="newsContentImg" />
        </div>

      </div>
    </div>
  )
}

export default News