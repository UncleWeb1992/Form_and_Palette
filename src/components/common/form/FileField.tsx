import { ChangeEvent, FC, useRef } from "react";
import { styles } from "../../../utils/stylesClasses";

interface IFileFieldProps {
  img: string;
  label: string;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  url: string;
}

const FileField: FC<IFileFieldProps> = ({ img, label, onChange, url }) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <>
      <label htmlFor="file" className={styles.label}>
        {label}
      </label>
      <div
        onClick={() => input.current?.click()}
        className={styles.inputFileWrapper}
      >
        <img
          alt="selected_image"
          className={url ? "w-[100%] h-[100%]" : "w-[60px] h-[56px]"}
          src={url ? JSON.parse(url) : img}
        />
        <input
          type="file"
          name="file"
          accept=".png, .jpg, .jpeg"
          className="d-none w-0 h-0"
          ref={input}
          onChange={onChange}
        />
      </div>
      {!url && (
        <p className="text-red-600 text-[12px] px-2 mt-2">Выберите фото</p>
      )}
    </>
  );
};

export default FileField;
