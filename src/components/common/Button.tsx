import { FC } from "react";
import { styles } from "../../utils/stylesClasses";

interface IButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ disabled, children, onClick }) => {
  return (
    <button className={styles.btn} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
