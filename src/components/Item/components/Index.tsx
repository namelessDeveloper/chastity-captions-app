import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { ProfileContext } from "../../../containers"
import { Link } from "../../../style"

const LinkWrapper = styled.div`
  padding-bottom: .5em;
  font-size: 1.3em;
`

interface Props {

}

export const Index: React.FC<Props> = ({}) => {
  const {fileList} = useContext(ProfileContext)
  const {pathname} = useLocation()  

  if(fileList == undefined){
    console.error("item type: index can only be used on the profile");
    return null
  }
  
  console.log(fileList);
  

  return (
    <>
      <h2>CYOAs by this Author:</h2>
      {fileList.map((f, key) => (
        <LinkWrapper key={key}>
          <Link to={`${pathname}/${f.filename}`}>
            {f.title}
          </Link>
        </LinkWrapper>
      ))}
    </>
  )
}