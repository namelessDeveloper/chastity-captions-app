import styled from "styled-components"

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

interface Props {
  available: number
  total: number
}

export const PointTracker: React.FC<Props> = ({
  available,
  total,
}) => {
  return (
    <Tracker>Available Points: {formatAvailable(available)}</Tracker>
  )
}