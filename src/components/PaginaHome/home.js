import React from 'react';

import { Header, Menu, Logo, IconeInstagram } from './style';

function Home(){
    return(
    <>
        <Header>
            <Logo/>
            <Menu> Home </Menu>
            <Menu> Mecânica </Menu>
            <Menu> Contato </Menu>
            <IconeInstagram/>
        </Header>
    </>
    )
}

export default Home;