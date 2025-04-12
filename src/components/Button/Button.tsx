import './Button.scss';

type Props = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {title}
    </button>
  );
};
