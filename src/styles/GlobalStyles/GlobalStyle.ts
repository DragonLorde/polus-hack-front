import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import '../../assets/fonts/MyriadPro/styles.css'
import '../../assets/fonts/PTSans/styles.css'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  :before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;}
  :focus,:active{outline:none;}
  a:focus,a:active{outline:none;}
  nav,footer,header,aside{display:block;}
  html,body{font-family:PTSans;height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display:none;}
  button{cursor:pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration:none;}
  a:hover{text-decoration:none;}
  ol li{list-style:none;}
  img{vertical-align:top;}
  html{ scroll-behavior: smooth;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0;padding:0;}
  *{padding:0;margin:0;border:0;}
  #root{width: 100%;height: 100%; background: #f2f5fa;}
`

export default GlobalStyle
