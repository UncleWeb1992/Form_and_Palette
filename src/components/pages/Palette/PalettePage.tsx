import { FC, useState } from "react";
import { SketchPicker } from "react-color";
import { v4 as uuid } from "uuid";
import Button from "../../common/Button";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addColor, getPaletteState } from "../../../store/slices/palette.slice";
import PaletteList from "./PaletteList";

const PalettePage: FC = () => {
  const dispatch = useAppDispatch();
  const { paletteList } = useAppSelector(getPaletteState());
  const [color, setColor] = useState("red");
  const [hidden, setHidden] = useState(true);

  const addedColor = () => {
    const data = {
      id: uuid(),
      color,
    };

    if (hidden && !paletteList.length) {
      setHidden(false);
      dispatch(addColor(data));
    } else if (hidden && paletteList.length) {
      setHidden(false);
    } else {
      dispatch(addColor(data));
    }
  };

  return (
    <div className="flex justify-between" onClick={() => setHidden(true)}>
      <div
        className="w-[35%] mt-4 py-2 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <PaletteList data={paletteList} />
        <Button onClick={addedColor}>Добавить цвет</Button>
      </div>
      <div
        className={hidden ? "hidden" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
      </div>
    </div>
  );
};

export default PalettePage;
