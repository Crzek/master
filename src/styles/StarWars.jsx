import styled from "styled-components";

// export const Div = styled.div;

export const FlexRow = styled.div`
    width: ${(props) => {
        if (props.width) {
            return `${props.width}`;
        } else {
            return `900`;
        }
    }}px;

    display: flex;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
    margin: auto;
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImgSmall = styled.img`
    width: ${(props) => {
        if (props.width) {
            return `${props.width}`;
        } else {
            return `200`;
        }
    }}px;
`;
