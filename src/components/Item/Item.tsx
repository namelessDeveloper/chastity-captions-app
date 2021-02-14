import React, { useState } from "react"
import { theme } from "../../style"
import { Direction, Item as ItemInterface } from "../../types"
import { ItemWrapper } from "./styles"

import {
  Image, Text, Title
} from './components'
import { Index } from "./components/Index"

interface Props {
  data:ItemInterface,
  onClick?:(cost:number)=>void,
}

export const Item: React.FC<Props> = ({
  data,
  onClick,
}) => {

  const [toggled, setToggled] = useState(false)

  function handleClick(){
    if(data.cost && onClick){
      if(!toggled){
        onClick(data.cost)
        setToggled(true)
      } else {
        onClick(-data.cost)
        setToggled(false)
      }
    }
  }

  return (
    <ItemWrapper
      toggled={toggled}
      toggleColor={data.cost && data.cost > 0 ? theme.plus : theme.minus}
      onClick={handleClick}
      direction={data.direction || "row"}
      width={data.width}
      affordable={true} // TODO context points
    >

      {data.parts.map((part, key) => {
        switch (part.type) {
          case "image": return <Image key={key} src={part.src} width={part.width}/>    
          case "text": return <Text key={key} cost={data.cost} body={part.body} header={part.header}/>
          case "title": return <Title key={key} cost={data.cost} text={part.text} />
          case "index": return <Index key={key} />
          default: return null
        }
      })}
    </ItemWrapper>
  )
}