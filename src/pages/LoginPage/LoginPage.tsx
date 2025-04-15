import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "./LoginPage.scss";
import { MainButton } from "../../components/MainButton/MainButton";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const validate = debounce(() => {
      if (query && !query.includes("@")) {
        setError("Email must include '@'");
      } else {
        setError("");
      }
    }, 500);

    validate();

    return () => validate.cancel();
  }, [query, setError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.length === 0) {
      setError("Email is required");
      return;
    }

    if (error) {
      return;
    }

    navigate("/plan");
  };

  return (
    <>
      <div className="container">
        <div className="login-page">
          <Header />
          <section className="section">
            <h2 className="section__title">You’re almost done!</h2>
            <p className="section__text">
              Please enter your email to see results
            </p>
          </section>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
              <input
                type="email"
                className={`form__input ${!query ? "unfilled" : ""} ${
                  error ? "error-mes" : ""
                }`}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="example@gmail.com"
              />
              {error && <p className="error">{error}</p>}
            </div>
          </form>

          <div className="button__container">
            <MainButton
              title="Get results"
              isActive={true}
              onClick={handleSubmit}
            />
          </div>

          <div className="info">
            <div className="info__logo">
              <img className="info__logo" src="./icons/Group.svg" alt="logo" />
            </div>

            <p className="info__text">
              We respect your privacy and are committed to protecting your
              personal data. We’ll email you a copy of your results for
              convenient access.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
