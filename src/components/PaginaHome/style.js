import { Container } from 'react-bootstrap';
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
    margin-left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 18px;
    `;

export const IconeInstagram = styled(Menu) ` 
    /* background-color: yellow; */
    margin-left: 150px;
    >img{
        width: 35px;
        height: 35px;
    }

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
    background-color: rgba(0, 0, 0, 0.9);
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
        /*  */
    }>span{
        color: #fff;
        margin-top: -15px;
        font-size: 12px;
        margin-left: 150px;
        margin-bottom: 30px;
        color: #adadaa;
        font-weight: bold;
    }> p{
        font-size: 20px;
        color: #fff;
    }
`;

export const ContainerSection2 = styled(ContainerSection) ` 
    height: 600px;
    background-color: rgba(0, 0, 0, 0.8);
    `;

export const SlimContact = styled(ContainerSection) ` 
    height: 100px;
    background-color: yellow;
    justify-content: flex-end;
    font-size: 30px;
    `;

export const ContactWhats = styled.div `
    min-width: 250px;
    max-width: auto;
    margin-right: 150px;
    border-radius: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 20px;
    background-color: #CCCCCC;
    color: black;
    > img{
        margin-right: 10px;
    }
    `

export const Footer = styled(ContainerSection) ` 
    height: 650px;
    background-color: rgba(0, 0, 0, 0.9);
    `;

export const DivFooter = styled.div ` 
    width: 1100px;
    height: 600px;
    border-bottom: 2px solid #fff;
    /* background-color: gray; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

export const ColumnFooterLeft = styled.div ` 
    width: 350px;
    height: auto;
    background-color: #fff; 
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    >img{
        width: 211px;
        height: 123px;
    }>p{
        margin-top: 20px;
        font-size: 25px;
        color: gray;
    }
    `;

export const SocialMedia = styled.div ` 
   width: 250px;
   height: 60px;
   /* background-color: gray; */
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-bottom: 50px;
   >img {
       width: 40px;
       height: 40px;
       margin: 15px;
   }
    `;
export const ColumnFooterCenter = styled(ColumnFooterLeft) ` 

    `;
export const ColumnFooterRight = styled(ColumnFooterLeft) ` 
   
    `;
export const Line = styled.div ` 
   
    `;

