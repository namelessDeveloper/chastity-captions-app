import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Direction, Section as SectionType } from "../../types"

import {Item} from '../'
import { PointContext } from "../../contexts"

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

function usePoints(){
  const {setAvailable, setTotal, total, available} = useContext(PointContext)

  return function setPoints(cost:number){
    console.log(cost);
    if(available != undefined && setAvailable){
      setAvailable(available + cost)
    }
  }
}


export const Section: React.FC<Props> = ({data}) => {

  const setPoints = usePoints()

  const handleClick = data.type !== "none" 
    ? (cost:number) => setPoints(cost)
    : undefined

  if(data.type == "multiple"){
    return (
      <SectionWrapper direction={data.direction}>
        {data.items.map((item, key) => 
          <Item key={key} data={item} onClick={handleClick}/>
        )}
      </SectionWrapper>
    )
  }

  if(data.type == "single"){
    return (
      <SectionWrapper direction={data.direction}>
        {data.items.map((item, key) => 
          <Item key={key} data={item} onClick={handleClick}/>
        )}
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper direction={data.direction}>
      {data.items.map((item, key) => 
        <Item key={key} data={item}/>
      )}
    </SectionWrapper>
  )
}