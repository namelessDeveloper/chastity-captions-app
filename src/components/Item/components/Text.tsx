import { theme } from "../../../style"

function styleCost(cost?: number){
  if(cost){
    if(cost > 0) return `<span style="color:${theme.plus}">${cost}</span>`
    if(cost < 0) return `<span style="color:${theme.minus}">${cost}</span>`
  }
  return cost
}

export const Text: React.FC<{body?: string, header?: string, cost?: number}> = ({
  body,
  header,
  cost,
}) => {

  
  return (
    <div>
      {header && <h4 dangerouslySetInnerHTML={{__html: `${header} [${styleCost(cost)}]`}}/>}
      {body && <p dangerouslySetInnerHTML={{__html: body}}/>}
    </div>
  )
}