import React from "react";
import "./CustomSelect.scss"; 
import { Option } from '../../types/Option';

type Props = {
  options: Option[];
  selectedOptions: string[];
  handleSelectChange: (value: string) => void;
}

const CustomSelect: React.FC<Props> = ({ options, selectedOptions, handleSelectChange }) => {
  return (
    <>
      <div className="select">
        <div className="select__options">
          {options.map((option) => {
            const isChecked = selectedOptions.includes(option.value);
            return (
              <div key={option.value} className={isChecked ? 'select__options--option checked' : 'select__options--option'}>
              <label className="select__options--option--label" htmlFor={option.value}>
                <span className="select__options--option--label--emoji">
                  {option.emoji}
                </span>
                <span className="select__options--option--label--name">
                  {option.label}
                </span>
              </label>
              <input
                className="checkbox"
                type="checkbox"
                id={option.value}
                checked={isChecked}
                onChange={() => handleSelectChange(option.value)}
              />
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default CustomSelect;
