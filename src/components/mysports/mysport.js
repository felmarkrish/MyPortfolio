import React, { useState } from "react";
import "./mysport.css";
import sport1 from "../../components/mysports/images/Sport1.jpg";
import sport2 from "../../components/mysports/images/Sport2.jpg";

const MySport = () => {
  const [showMoreChess, setShowMoreChess] = useState(false);
  const [showMoreBasketball, setShowMoreBasketball] = useState(false);

  const handleShowMoreChess = () => {
    setShowMoreChess(!showMoreChess);
  };

  const handleShowMoreBasketball = () => {
    setShowMoreBasketball(!showMoreBasketball);
  };

  return (
    <div id="mySports-Container" className="forallBG">
      <div className="wrap">
        <div className="mySport-box-holder">
          <div className="Chess-box-holder">
            <div className="img-holder col-2">
              <img src={sport1} alt="mySport" title="mySport"></img>
            </div>
            <div className="chessSport-container">
              <h3>Chess</h3>
              <div className="content-holder col-2">
                <p>
                  A chess player is more than an individual maneuvering pieces
                  on a checkered battlefield; they are purveyors of a timeless
                  art, architects of intricate plans, and masters of foresight.
                  Engaging in the intellectual and strategic pursuit of chess,
                  {showMoreChess && (
                    <>
                      players become immersed in a world where each move is a
                      carefully calculated step towards victory or, conversely,
                      a potential pitfall leading to defeat. Chess, a game that
                      has withstood the test of time, transcends generations and
                      cultures. Its origins trace back centuries, and its
                      enduring popularity is a testament to the intellectual
                      allure it holds. The chessboard becomes a canvas upon
                      which players paint their strategic visions, each piece
                      representing a potential instrument in the orchestration
                      of a brilliant victory.
                    </>
                  )}
                  <button onClick={handleShowMoreChess}>
                    {showMoreChess ? "Show less" : "Show more"}
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="basket-box-holder">
            <div className="img-holder col-2">
              <img src={sport2} alt="mySport" title="mySport"></img>
            </div>
            <div className="basket-Sport-Container">
              <h3>Basketball</h3>
              <div className="content-holder col-2">
                <p>
                  A basketball player is an athlete who participates in the
                  fast-paced and dynamic sport of basketball. Basketball is a
                  team sport played indoors or outdoors, characterized by its
                  high-scoring nature, strategic gameplay, and physical demands.
                  Basketball players, whether amateur enthusiasts, collegiate
                  athletes,
                  {showMoreBasketball && (
                    <>
                      {" "}
                      or professional stars, are known for their athleticism,
                      skill, teamwork, and ability to perform under pressure.
                      Here's a comprehensive description of a basketball player:
                      A basketball player is not just an athlete; they are the
                      embodiment of agility, strength, and finesse on the
                      hardwood court. Engaging in the spirited game of
                      basketball, players find themselves at the heart of a
                      thrilling contest where every dribble, pass, and shot
                      contributes to the rhythm of the game.
                    </>
                  )}
                  <button onClick={handleShowMoreBasketball}>
                    {showMoreBasketball ? "Show less" : "Show more"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySport;
