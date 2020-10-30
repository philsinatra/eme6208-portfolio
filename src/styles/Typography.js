import { createGlobalStyle } from 'styled-components'
import Raleway from '../assets/fonts/Raleway-VariableFont_wght.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: Raleway;
    src: ${Raleway}, format('truetype');
    font-weight: 1 999;
    font-style: normal;
  }
`

export default Typography
