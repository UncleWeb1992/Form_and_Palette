import { FC } from "react";
import { styles } from "../../../utils/stylesClasses";

interface ITextAreaFieldProps {
  status: string | undefined;
}

const TextAreaField: FC<ITextAreaFieldProps> = ({ status }) => {
  return (
    <div className="mt-10">
      <label className={styles.label}>Response</label>
      <div className={styles.textAreaField}>
        <h2 className="text-green-600 text-lg">{status}</h2>
      </div>
    </div>
  );
};

export default TextAreaField;
