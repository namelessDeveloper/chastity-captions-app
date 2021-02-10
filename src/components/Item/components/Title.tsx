import styled from "styled-components"

interface StyledProps {
  color?: string
}

const StyledTitle = styled.div<StyledProps>`
  background-color: ${p => p.color || "#a80eb6"};
  color: White;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border: 3px solid white;
  border-radius: .5em;
`

interface TitleProps extends StyledProps{
  text:string
  cost?: number
}

export const Title: React.FC<TitleProps> = ({
  text, color
}) => {

  return (
    <StyledTitle color={color}>{text}</StyledTitle>
  )
}