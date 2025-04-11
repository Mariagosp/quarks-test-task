import './MainButton.scss';

type Props = {
  title: string;
  isActive: boolean;
}

export const MainButton: React.FC<Props> = ({ title, isActive }) => {
  return (
    <button
      disabled={!isActive}
      className={`button-continue ${
        isActive ? "active" : ""
      }`}
    >
      {title}
    </button>
  );
};
