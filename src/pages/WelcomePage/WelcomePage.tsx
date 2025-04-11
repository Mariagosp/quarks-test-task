import ProgressChart from "../../components/ProgressChart/ProgressChart";
import "./WelcomePage.scss";

export const WelcomePage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <img className="header__logo" src="/icons/logo.svg" alt="logo" />
          <h1 className="header__name">Affemity</h1>
        </header>
        <section className="section">
          <h2 className="section__title">
            Change your{" "}
            <span className="section__title--highlight">love life</span>
          </h2>
          <p className="section__text">
            with easy-to-use practical tips that you can apply in any situation
          </p>
        </section>

        <section className="progress-section">
          <ProgressChart />
        </section>

        <section className="goals">
          <div className="goals__container">
            <h3 className="goals__title">What is your main goal?</h3>
            <div className="goals__buttons">
              <button className="goals__buttons--button">
                Build a deep connection
              </button>
              <button className="goals__buttons--button">
                Create emotional attraction
              </button>
            </div>
            <a href="#" className="goals__other">
              Other
            </a>
          </div>
          <p className="goals__policy">
            By continuing, you agree to our Terms of Service | Privacy Policy <br />
            2024 © All Rights Reserved.
          </p>
        </section>
      </div>
    </>
  );
};
