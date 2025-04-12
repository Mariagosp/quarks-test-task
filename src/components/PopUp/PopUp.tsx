import { Answer } from '../../types/Answer';
import { PopUpTitle } from '../../types/PopUpTitle';
import { Button } from '../Button/Button';
import './PopUp.scss';

type Props = {
  title?: PopUpTitle;
  onContinue: (answer: Answer) => void;
}

export const PopUp: React.FC<Props> = ({ title, onContinue }) => {
  return (
    <>
      <div className="pop-up">
        <div className="pop-up__header">
          <div className="pop-up__header--text">To move forward, specify</div>
          <div className="pop-up__header--title">{title}</div>
        </div>
        <div className="pop-up__buttons">
          <div className="answer">
            <Button title='No' onClick={() => onContinue(Answer.NO)} />
          </div>
          <div className="answer">
            <Button title='Yes'  onClick={() => onContinue(Answer.YES)} />
          </div>
        </div>
      </div>
    </>
  )
}