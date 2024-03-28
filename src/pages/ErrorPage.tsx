import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Ooops...</h1>
      <p>
        {isRouteErrorResponse(error)
          ? " This Page does not exist."
          : "An unexpected error has occured."}
      </p>
    </>
  );
};

export default ErrorPage;
