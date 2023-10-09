//import React from "react";
import { DisplayDiffculty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from "./components/MenuList/MenuList";
import s from "./style.module.css";
import { useState } from "react";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("Insane");

  const onClickMenuList = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };

  return (
    <div>
      <h1>Select your React difficulty</h1>
      <div className={s.workspace}>
        <MenuList
          onClickList={onClickMenuList}
          difficulty={currentDifficulty}
        />
        <DisplayDiffculty difficulty={currentDifficulty} />
      </div>
    </div>
  );
}
