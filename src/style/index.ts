import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"

export const theme = {
  plus: "#44ca44",
  minus: "red",
}

export const Link = styled(RouterLink)`
  color: #1d83f7;
  &:visited {
    color: #9825F7;
  }
`