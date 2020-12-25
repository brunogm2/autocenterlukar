import styled from 'styled-components';

export const Header = styled.header `
    width: 100%;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `;

export const Logo = styled.div `
    width: 230px;
    height: 180px;
    margin-top: 15px;
    background-color: red;
    display: flex;
    flex-direction: row;
    align-self: flex-start;
    margin-right: 100px;
    z-index: 999;
    `;

export const Menu = styled.div `
    width: 100px;
    height: 50px;
    /* background-color: #fff; */
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    `;

export const IconeInstagram = styled(Menu) ` 
    background-color: yellow;
    margin-left: 150px;

    `;

export const ImgCarousel = styled.div ` 
    width: 100%;
    height: 687px;
   background-color: red;
    `;

export const TextCarousel = styled.div ` 
    width: 150px;
    height: 150px;
    
    /* margin-top: -250px; */
    background-color: yellow;
    `;

export const ContainerSection = styled.section ` 
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
`;

export const Section = styled.section ` 
    width: 1100px;
    height: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: #fff; */
`;

export const ImgSec1 = styled.div ` 
    width: 35%;
    height: 80%;
    background-color: red;
    border-radius: 10px;
    > img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`;

export const DivSec1 = styled.div ` 
    width: 500px;
    height: 80%;
    margin-left: 180px;
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    > h1{
        font-family: 'Roboto';
        font-size: 50px;
        color: yellow;
        margin-bottom: 30px;
    }> p{
        font-size: 20px;
        color: #fff;
    }
`;

   