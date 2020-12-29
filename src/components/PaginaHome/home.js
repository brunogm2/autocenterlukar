import React from 'react';

import { Header, Menu, Logo, IconeInstagram, ImgCarousel,
     ContainerSection, Section, ImgSec1, DivSec1,
     ContainerSection2,
     SlimContact, ContactWhats,
    Footer, DivFooter, ColumnFooterLeft, SocialMedia, Line,
    ColumnFooterCenter,
    ColumnFooterRight} from './style';
import Carousel from 'react-bootstrap/Carousel'

import testeps6 from "../../assets/testeps6.jpg"
import instagram from "../../assets/instagram.png"
import whats from "../../assets/whats.png"
import logo from "../../assets/logo.png"
import face from "../../assets/face.png"
import faixada from "../../assets/faixada.png"

function Home(){
    return(
    <>
        <Header>
            <Logo/>
            <Menu> Home </Menu>
            <Menu> Mecânica </Menu>
            <Menu> Contato </Menu>
            <IconeInstagram>
                <img src={instagram} alt="imagem slider1"/> 
            </IconeInstagram>
        </Header>
        <Carousel>
            <Carousel.Item>
                <ImgCarousel>
                    <img src={testeps6} alt="imagem slider1" style={{width: '100%', height:'100%'}} />     
                </ImgCarousel>  
                <Carousel.Caption style={{width: '400px', height:"200px", marginTop: '-80px'}}>
                    <h1>Sofisticação em Manutenção</h1>
                    <p>Revisão e manutenção de seu veiculo com tecnologia de ponta a ponta.</p>
                </Carousel.Caption> 
            </Carousel.Item>
        </Carousel>
        <ContainerSection>
            <Section>
                <ImgSec1>
                    <img src={testeps6} alt="imagem slider1"/>
                </ImgSec1>
                <DivSec1>
                    <h1>
                        Nossos valores
                    </h1>
                    <span>
                        POR DENTRO DE NOSSA HISTORIA.
                    </span>
                    <p>
                    Lorem Ipsum is simply dummy text
                     of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy
                       text ever since the 1500s, when an unknown printer took a galley of type and
                     scrambled it to make a type specimen book.
                      It has survived not only five centuries, but als
                      text ever since the 1500s, when an unknown printer took a galley of type and
                     scrambled it to make a type specimen book.
                      It has survived not only five centuries, but als
                      
                    </p>
                </DivSec1>
            </Section>
        </ContainerSection>
        <ContainerSection2>

        </ContainerSection2>
        <SlimContact>
            <ContactWhats>
                <img src={whats} alt="imagem slider1"/> 
                Entre em contato
            </ContactWhats>
        </SlimContact>
        <Footer>
            <DivFooter>
                <ColumnFooterLeft>
                    
                </ColumnFooterLeft>
                <ColumnFooterCenter>
               
                </ColumnFooterCenter>
                <ColumnFooterRight>
                
                </ColumnFooterRight>
            </DivFooter>
        </Footer>
    </>
    )
}

export default Home;