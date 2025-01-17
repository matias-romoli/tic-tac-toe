import { useConfig } from "./utils/zustand";
import Figure from "./component/figure";
import Button from "./component/button";
import { useState } from "react";
import "./App.scss";

function App() {
  const { figure, data, player, Winner, SelectFigure, HandleClick, ResetGame } =
    useConfig();
  const [message, setMessage] = useState("");

  const handleOnClick = (index) => {
    if (!player && !win) {
      setMessage("Please, select a player.");
    } else {
      setMessage("");
    }

    if (win) {
      SelectFigure("");
    }

<<<<<<< HEAD
    if (figure[index] === null) {
      HandleClick(index);
    }

=======
>>>>>>> 29270817cf1747777ef5d8aa7ddd485a621f3931
    HandleClick(index);
  };
  const handleSelect = (value) => {
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
<<<<<<< HEAD
            disabled={win || !player}
=======
>>>>>>> 29270817cf1747777ef5d8aa7ddd485a621f3931
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
<<<<<<< HEAD
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
=======
        {!player && (
          <div className="game__init">
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
        )}
>>>>>>> 29270817cf1747777ef5d8aa7ddd485a621f3931
      </div>
    </div>
  );
}

export default App;
