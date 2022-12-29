import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        height: max-content;
    }
    #root {
        margin: 0;
        padding: 0;
        width: 100vw;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    * {
    overflow-x: hidden;
    transition: all 1s;
    }
@media (max-width: 528px) {
    
}
    
`;
export default GlobalStyles;
