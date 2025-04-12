import './MainButton.scss';

type Props = {
  title: string;
  isActive: boolean;
  onClick: (e: React.FormEvent) => void;
}

export const MainButton: React.FC<Props> = ({ title, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={!isActive}
      className={`button-continue ${
        isActive ? "active" : ""
      }`}
    >
      {title}
    </button>
  );
};
