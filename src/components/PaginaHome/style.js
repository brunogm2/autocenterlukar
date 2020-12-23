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