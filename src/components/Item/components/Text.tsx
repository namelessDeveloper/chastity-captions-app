import styled, { css } from "styled-components"
import { theme } from "../../../style"

function styleCost(cost?: number){
  if(cost){
    if(cost > 0) return `<span style="color:${theme.plus}">${cost}</span>`
    if(cost < 0) return `<span style="color:${theme.minus}">${cost}</span>`
  }
  return cost
}

const minContent = css`
  width: min-content;
`

const Wrapper = styled.div<{noHeader: boolean}>`
  ${p => p.noHeader ? "" : minContent}
`
const H4 = styled.h4`
  white-space: nowrap;
`
const P = styled.p`
`

export const Text: React.FC<{body?: string, header?: string, cost?: number}> = ({
  body,
  header,
  cost,
}) => {

  
  return (
    <Wrapper noHeader={header == undefined}>
      {header && <H4 dangerouslySetInnerHTML={{__html: `${header} [${styleCost(cost)}]`}}/>}
      {body && <P dangerouslySetInnerHTML={{__html: body}}/>}
    </Wrapper>
  )
}