import { Goal } from "../../types/Goal";
import './ProgressBar.scss';

type Props = {
  goals: Goal[];
  progress: Record<string, number>;
}

export const ProgressBar: React.FC<Props> = ({ goals, progress }) => {
  return (
    <>
      {goals.map(({ label, key }) => (
        <div key={key} className="progress-bar">
          <div className="progress-bar__label">
            <span className="progress-bar__label--text">{label}</span>
            <span className="progress-bar__label--percent">{progress[key]}%</span>
          </div>
          <div className="progress-bar__line">
            <div
              className="progress-bar__line--fill"
              style={{ width: `${progress[key]}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  )
}
