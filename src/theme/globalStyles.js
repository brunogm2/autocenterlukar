import {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle ` 
    *{
    margin: 0;
    padding: 0;
    }
    
    body {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        width: 100%;
        /* background-color: #dfe6e4; */
    }

    *, button, input{
        /* border: 0px; */
        outline: 0;
        background: none;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        
        --primary: #dfe6e4
        --secundary: #58af9b;
        --white: #FFF;
    }

    `

export default Global;