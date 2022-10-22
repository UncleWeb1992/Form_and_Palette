import { FC } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { IPalette } from "../../../models/models";
import { deleteColor } from "../../../store/slices/palette.slice";
import { styles } from "../../../utils/stylesClasses";

interface IPaletteListProps {
  data: IPalette[];
}

const PaletteList: FC<IPaletteListProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  const removeColor = (id: string) => {
    dispatch(deleteColor(id));
  };

  return (
    <ul className="mb-14 min-h-[200px] flex items-center flex-wrap">
      {data.map((color) => (
        <li
          key={color.id}
          style={{ backgroundColor: color.color }}
          className="w-[54px] h-[54px] rounded-md mb-3 mr-4 relative"
        >
          <span
            className={styles.btnCLose}
            onClick={() => removeColor(color.id)}
          >
            &times;
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PaletteList;
