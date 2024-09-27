import styled from "styled-components";

export const NotFoundStyled = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const NotViewStyled = styled.div`
    width: 1200px;
    min-height: 680px;
    border-radius: 15px;
    border: 1px solid #ededed;
    padding: 15px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .image-zone {
        width: 920px;

        img {
            max-width: 100%;
        }
    }

    h1 {
        font-size: 32px;
        text-align: center;
    }

    p {
        font-size: 22px;
        text-align: center;
    }

    .active-btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
