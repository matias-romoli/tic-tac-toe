import { SelectFigure, HandleClick, ResetGame, Winner } from "./zustand";
import { create } from "zustand";

interface Store {
  SelectFigure: (value: "X" | "O" | "") => void;
  setMessage: (message: string) => void;
  HandleClick: (index: number) => void;
  Winner: () => string | null;
  figure: (string | null)[];
  ResetGame: () => void;
  data: boolean | "";
  message: string;
  player: string;
}

export const StoreCustom = create<Store>((set, get) => ({
  figure: Array(9).fill(null),
  message: "",
  player: "",
  data: "",

  setMessage: (message: string) => set({ message }),

  ...SelectFigure(set),
  ...HandleClick(set),
  ...ResetGame(set),
  ...Winner(get),
}));
