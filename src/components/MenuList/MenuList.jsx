import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";
import { DIFFICULTIES } from "./constant";

export function MenuList(props) {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty) => (
        <MenuListItem
          isSelected={props.difficulty === difficulty}
          onClick={props.onClickList}
          difficulty={difficulty}
        />
      ))}

      {/* <MenuListItem
        isSelected={props.difficulty === "Medium"}
        onClick={props.onClickList}
        difficulty="Medium"
      />
      <MenuListItem
        isSelected={props.difficulty === "High"}
        onClick={props.onClickList}
        difficulty="High"
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        onClick={props.onClickList}
        difficulty="Insane"
      /> */}
    </div>
  );
}
