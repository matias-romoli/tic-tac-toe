import { StoreCustom } from "./utils/zustandCustom";
import Figure from "./component/figure";
import Button from "./component/button";
import React from "react";
import "./App.scss";

function App() {
  const {
    SelectFigure,
    HandleClick,
    setMessage,
    ResetGame,
    message,
    player,
    figure,
    Winner,
    data,
  } = StoreCustom();

  const handleOnClick = (index: number) => {
    if (!player && !win) {
      setMessage("Please, select a player.");
    } else {
      setMessage("");
    }

    if (win) {
      SelectFigure("");
    }

    if (figure[index] === null) {
      HandleClick(index);
    }

    HandleClick(index);
  };
  const handleSelect = (value: "X" | "O") => {
    SelectFigure(value);
  };
  const handleReset = () => {
    ResetGame();
  };
  const win = Winner();

  return (
    <div className="container">
      <div className="container__title">
        <h2> Tic Tac Toe</h2>
      </div>
      <div className="container__player">
        <p> {message} </p>
      </div>
      <div className="container__app">
        {figure.map((value, index) => (
          <Figure
            key={index}
            value={value}
            disabled={win || !player}
            onClick={() => handleOnClick(index)}
          />
        ))}
      </div>
      <div className="container__result">
        <div className="result__win">
          {win && win !== null && (
            <>
              <p>{win === "Empate" ? "Empate" : `Ganador: ${win}`}</p>
              {win && (
                <button onClick={handleReset} className="btn">
                  Replay
                </button>
              )}
            </>
          )}
        </div>
        <div className={`game__init ${player ? "hidden" : ""}`}>
          <h2> ¿Who is going to start?</h2>
          <div className="init__btn">
            <Button
              onClick={() => handleSelect("X")}
              isSelected={data === true}
              disabled={data !== ""}
              value="X"
            />
            <Button
              onClick={() => handleSelect("O")}
              isSelected={data === false}
              disabled={data !== ""}
              value="O"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
