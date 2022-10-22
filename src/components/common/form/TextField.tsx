import { ChangeEvent, FC, FocusEvent, useState } from "react";
import { styles } from "../../../utils/stylesClasses";

interface ITextFieldProps {
  value: string;
  name: string;
  label: string;
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<ITextFieldProps> = ({ value, name, label, onChange }) => {
  const [error, setError] = useState("");
  const handleBlur = ({ target }: FocusEvent<HTMLInputElement>) => {
    target.value.length === 0
      ? setError("Поле не может быть пустым")
      : setError("");
  };
  return (
    <div className="mb-2">
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        className={styles.input}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {error && <p className="text-red-600 text-[12px] px-2 mb-2">{error}</p>}
    </div>
  );
};

export default TextField;
