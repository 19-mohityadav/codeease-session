import React from "react";
import { useLocation } from "react-router-dom";
import "./GameScreen.css";

const GameScreen = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Unknown";

  return (
    <div className="game-container">
      <h1 className="game-title">Game Page</h1>

      <div className="difficulty-card">
        <p className="difficulty-text">
          Selected Difficulty
        </p>
        <span className="difficulty-value">{difficulty}</span>
      </div>
    </div>
  );
};

export default GameScreen;
