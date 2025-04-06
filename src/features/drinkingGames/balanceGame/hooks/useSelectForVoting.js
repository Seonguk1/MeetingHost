import { useState } from "react";
import isGameOver from "../utils/gameOver";

const useBalanceGame = () => {
  const [selected, setSelected] = useState(null);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const total = countA + countB;

  const handleChoose = () => {
    if (isGameOver(countA, countB) || !selected) return;
    if (selected === "A") setCountA(countA + 1);
    else if (selected === "B") setCountB(countB + 1);
    setSelected(null);
  };

  return {
    selected,
    setSelected,
    countA,
    countB,
    total,
    handleChoose,
  };
};

export default useBalanceGame;
