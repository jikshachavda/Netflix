import React from "react";
import "./NetflixCard.css";

const Netflix = ({ actualData }) => {
  const { jawSummary } = actualData;
  const { summary } = actualData;

  if (summary.type !== "movie") {
    return null;
  }

  return (
    <>
      <div className="Movies">
        <div className="main-container">
          <div className="card">
            <div className="imgbox">
              <img
                src={jawSummary.backgroundImage.url}
                alt={jawSummary.title}
              />
            </div>
            <div className="content">
              <div className="buttons">
                <div className="play-btn">Play</div>
                <i className="bi bi-info-circle"></i>
              </div>
              <div className="title">{jawSummary.title}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Netflix;
