import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError();
  //console.error(error);

    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something went wrong!</h2>
            <h2>
                <i>{error.status +":"+ error.statusText}</i>
            </h2>
        </div>
    )
}

export default Error;