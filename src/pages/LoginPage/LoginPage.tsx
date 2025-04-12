import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import "./LoginPage.scss";
import { MainButton } from "../../components/MainButton/MainButton";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const validate = debounce(() => {
      if (query && !query.includes('@')) {
        setError("Email must include '@'");
      } else {
        setError('');
      }
    }, 500);

    validate();

    return () => validate.cancel();
  }, [query, setError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.length === 0) {
      setError('Email is required');
      return;
    }

    if (error) {
      return;
    }

    console.log('submit');
    navigate('/');
  }

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
          <form className="form"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              className={`form__input ${!query ? 'unfilled' : ''} ${error ? 'error-mes' : ''}`}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="example@gmail.com"
            />
            {error && <p className="error">{error}</p>}
          </form>

          <div className="button__container">
            <MainButton title="Get results" isActive={true} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};


// const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   watch,
  //   clearErrors,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
// });
  
// const onSubmit = () => {
  //   if (!email) {
  //     setError("email", { message: "Email is required" });
  //     return;
  //   }

  //   if (errors) {
  //     return;
  //   }

  //   console.log("submitted");
  //   navigate("/");
// };
  
// useEffect(() => {
  //   const validate = debounce(() => {
  //     if (email.length > 0 && !email.includes("@")) {
  //       setError("email", { message: "Email must include '@'" });
  //     } else {
  //       clearErrors("email");
  //     }
  //   }, 500);

  //   validate();

  //   return () => validate.cancel();
  // }, [email, setError, clearErrors]);
