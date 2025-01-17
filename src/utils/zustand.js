import { create } from "zustand";

export const useConfig = create((set, get) => ({
  figure: Array(9).fill(null),
  player: "",
  data: "",
  SelectFigure: (value) =>
    set(() => ({
      player: value,
      data: value === "X" ? true : false,
    })),
  HandleClick: (index) => {
    set((state) => {
      if (state.figure[index] === null && state.player !== "") {
        const newFigure = [...state.figure];
        newFigure[index] = state.player;
        return {
          ...state,
          figure: newFigure,
          player: state.player === "X" ? "O" : "X",
        };
      }
      return state;
    });
  },
  ResetGame: () => {
    set({
      figure: Array(9).fill(null),
      player: "",
      data: "",
    });
  },
  Winner: () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const { figure } = get();

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (figure[a] && figure[a] === figure[b] && figure[a] === figure[c]) {
        return figure[a];
      }
    }

    let draw = true;
    for (let i = 0; i < figure.length; i++) {
      if (figure[i] === null) {
        draw = false;
        break;
      }
    }
    if (draw) {
      return "Empate";
    }

    return null;
  },
}));
