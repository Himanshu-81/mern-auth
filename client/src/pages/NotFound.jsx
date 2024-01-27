import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-[100vh]"
    >
      <h1 className="text-red-600 font-semibold">Oops!</h1>
      <p className="text-red-600">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-600">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
