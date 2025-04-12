import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./SkillsPage.scss";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import { useState } from "react";
import { getOptions } from "../../utils/getOptions";
import { MainButton } from "../../components/MainButton/MainButton";

type Props = {
  type: "connection" | "attraction";
};

export const SkillsPage: React.FC<Props> = ({ type }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const navigate = useNavigate();

  const options = getOptions(type);

  const handleSelectChange = (value: string) => {
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleClick = () => {
    navigate('/login');
  }

  return (
    <>
      <div className="container">
        {/* <h1>{type === "connection" ? "connection" : "attraction"}</h1> */}
        <div className="head">
          <div className="head__progress">
            <div className="head__progress-bar"></div>
          </div>
          <div className="head__nav">
            <button className="head__nav--arrow" onClick={() => navigate('/')}>
              <img
                src="/icons/arrow-left.svg"
                alt="arrow left"
                className="head__nav--arrow--img"
              />
            </button>
            <Header />
            <div className="head__nav--counter">
              <span className="highlight">1</span>/34
            </div>
          </div>
        </div>

        <section className="headline">
          <h2 className="headline__title">What would you like to learn?</h2>
          <p className="headline__text">Select all that apply</p>
        </section>

        <CustomSelect
          options={options}
          selectedOptions={selectedOptions}
          handleSelectChange={handleSelectChange}
        />
          <div className="button__wrapper">
            <MainButton title="Continue" isActive={selectedOptions.length > 0} onClick={handleClick} />
          </div>
      </div>
    </>
  );
};
