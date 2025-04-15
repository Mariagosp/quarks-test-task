import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <h1>NOT FOUND</h1>
        <Link to="/">Go home</Link>
      </div>
    </>
  );
};
