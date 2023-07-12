import styled, { css, createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        /* border: 1px solid black; */
        margin:auto;
        text-align:center;
        box-sizing:border-box;
    }
`;

const border = css`
    border: 1px solid black;
`;

export const Flex = styled.div`
    display: flex;
`;

export const Row = styled(Flex)`
    flex-direction: row;
`;

export const Column = styled(Flex)`
    flex-direction: column;
`;
export const FlechaImg = styled.img`
    width: 50px;
    margin: 0 20px;
`;
export const RotateIMG = styled(FlechaImg)`
    transform: rotate(180deg);
`;

export const ImgSmall = styled.img`
    width: 200px;
`;

export const ImgRed = styled(ImgSmall)`
    border: 10px solid red;
    border-radius: 20px;
`;

export const ImgBig = styled.img`
    width: 400px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;

export const MiniFotos = styled(Row)`
    flex-wrap: wrap;
    width: ${(props) => props.width}px;
`;
