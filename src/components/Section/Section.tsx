import React from "react"
import styled, { css } from "styled-components"
import { Direction, Section as SectionType } from "../../types"

import {Item} from '../'

function flexDirection(direction?: Direction){
  if(direction){
    return css`flex-direction: ${direction};`
  }
}

const SectionWrapper = styled.div<{direction?: Direction}>`
  display:flex;
  ${p => flexDirection(p.direction)}
  flex-wrap: wrap;
`

interface Props {
  data:SectionType
}

export const Section: React.FC<Props> = ({data}) => {

  const handleClick = data.type !== "none" 
    ? (cost:number) => console.log(cost)
    : undefined

  if(data.type == "multiple"){
    return (
      <SectionWrapper direction={data.direction}>
        {data.items.map(item => 
          <Item data={item} onClick={handleClick}/>
        )}
      </SectionWrapper>
    )
  }

  if(data.type == "single"){
    return (
      <SectionWrapper direction={data.direction}>
        {data.items.map(item => 
          <Item data={item} onClick={handleClick}/>
        )}
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper direction={data.direction}>
      {data.items.map(item => 
        <Item data={item}/>
      )}
    </SectionWrapper>
  )
}