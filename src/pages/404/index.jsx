import {useNavigate, useRouteError} from "react-router-dom";
import {NotFoundStyled, NotViewStyled} from "./styled";
import Button from "@mui/material/Button";

export default function ErrorPage() {
    const navigate = useNavigate()
    const error = useRouteError();
    const goBackBtn = () => {
        navigate('/')
    }

    return (
        <NotFoundStyled>
            <NotViewStyled>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
                <Button variant="outlined" onClick={() => goBackBtn()}>
                    Go back
                </Button>
            </NotViewStyled>
        </NotFoundStyled>
    );
}
