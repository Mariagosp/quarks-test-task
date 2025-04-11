import './Button.scss';

type Props = {
  title: string;
};

export const Button: React.FC<Props> = ({ title }) => {
  return (
    <button className="button">
      {title}
    </button>
  );
};
