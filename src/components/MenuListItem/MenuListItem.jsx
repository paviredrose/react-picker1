import { useState } from "react";
import s from "./style.module.css";

export function MenuListItem(props) {
  const [isHovered, setIsHHover] = useState(false);

  const activate = () => {
    setIsHHover(true);
  };

  const deactivate = () => {
    setIsHHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onClickMenuListItem = () => {
    props.onClick(props.difficulty);
  };

  return (
    <div
      onClick={onClickMenuListItem}
      className={s.container}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to : {props.difficulty}
    </div>
  );
}
