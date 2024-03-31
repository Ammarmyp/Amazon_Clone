import "../styles/button.css";

interface Props {
  label: string;
  onClick?: (e: MouseEvent) => void;
  width?: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button = ({ label, width, onClick, type }: Props) => {
  return (
    <button
      style={{ width: width }}
      type={type}
      className="reusable_btn"
    >
      {label}
    </button>
  );
};

export default Button;
