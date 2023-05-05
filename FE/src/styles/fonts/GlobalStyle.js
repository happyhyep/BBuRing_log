import { createGlobalStyle } from "styled-components";
import UhBeeZZIBARegular from "./UhBeeZZIBA.ttf";
import JamsilBold from "./JamsilBold.ttf";
import NotoSansR from "./NotoSansRegular.otf"
import LINESeedBd from "./LINE_Seed_Sans_KR/Webfont/WOFF2/LINESeedBd.woff2";
import LINESeedRg from "./LINE_Seed_Sans_KR/Webfont/WOFF2/LINESeedRg.woff2"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'UhBeeZZIBA';
        src: url(${UhBeeZZIBARegular}) format("truetype");
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'JamsilBold';
        src: url(${JamsilBold}) format("truetype");
        font-weight: 700;
        font-style: normal;
    };

    @font-face {
        font-family: 'NotoSansRegular';
        src: url(${NotoSansR}) format("otff");
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'LINESeedBd';
        src: url(${LINESeedBd}) format("woff2");
        font-weight: normal;
        font-style: normal;
    };

    @font-face {
        font-family: 'LINESeedRg';
        src: url(${LINESeedRg}) format("woff2");
        font-weight: normal;
        font-style: normal;
    };
`

export default GlobalStyle;