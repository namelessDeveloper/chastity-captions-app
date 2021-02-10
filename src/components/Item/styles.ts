import styled, { css } from "styled-components"
import { Direction } from "../../types"

const unaffordable = css`
  pointer-events: none;
  & ::before {
    background: black;
    mix-blend-mode: saturation;
  }
`

interface ItemWrapperProps {
  direction: string
  width?: number
  toggled: boolean
  toggleColor: string
  affordable: boolean
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  ${p => p.affordable ? "" : unaffordable}
  display:flex;
  flex-direction: ${p => p.direction};
  // TODO min-width
  min-width: ${p => p.width && p.width}px;
  border: 5px solid ${p => p.toggled ? p.toggleColor : "black"};
  border-radius: 1em;
  & img {
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
  padding: 1em;
  cursor: pointer;
  user-select: none;
`