import styled from "styled-components"

const Tracker = styled.div`
  position: sticky;
  width: 100vw;
`

interface Props {
  available: number
  total: number
}

export const PointTracker: React.FC<Props> = ({
  available,
  total,
}) => {
  return (
    <Tracker>Available Points: {available}</Tracker>
  )
}