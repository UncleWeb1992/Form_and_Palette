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
    setHidden(false);
    const data = {
      id: uuid(),
      color,
    };

    if (!hidden) {
      dispatch(addColor(data));
    }
  };

  return (
    <div className="flex justify-between">
      <div
        className="w-[35%] mt-4 py-2 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <PaletteList data={paletteList} />
        <Button onClick={addedColor}>Добавить цвет</Button>
      </div>
      <div
        className={`w-[65%] flex justify-end ${hidden ? "hidden" : ""}`}
        onClick={() => setHidden(true)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <SketchPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
          />
        </div>
      </div>
    </div>
  );
};

export default PalettePage;
