import styled, { css } from "styled-components"
import { Direction } from "../../types"

const unaffordable = css`
  pointer-events: none;
  & ::before {
    background: white;
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
  width: ${p => p.width && p.width}px;
  border: 3px solid ${p => p.toggled ? p.toggleColor : "white"};
  cursor: pointer;
  user-select: none;
`