import { useContext } from "react"
import styled from "styled-components"
import { PointContext } from "../../containers"

const Tracker = styled.div`
  top: 0;
  position: sticky;
  width: 100vw;
  background-color: black;
  padding: 1em;
  border-bottom: 3px solid white;
`

const Negative = styled.span`
  color: red;
`

function formatAvailable(points: number){
  return points >= 0 ? points : <Negative>{points}</Negative>
}


export const PointTracker: React.FC = ({

}) => {
  const { available = 0 } = useContext(PointContext)

  return (
    <Tracker>Available Points: {formatAvailable(available)}</Tracker>
  )
}