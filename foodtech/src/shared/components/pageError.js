import { useRouteError } from "react-router-dom";

const PageError = () => {
    const error = useRouteError();

    return (
        <div className="page-error">
            <h2>Page Not Found!!</h2>
            <h4>{error?.error?.message}</h4>
        </div>
    )
}

export default PageError;