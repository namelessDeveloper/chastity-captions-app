import { useRef } from "react"
import { useHistory } from "react-router-dom"
import { useDevCyoa } from "../../hooks"

export const Landing: React.FC = ({}) => {
  const input = useRef<HTMLInputElement>(null)
  useDevCyoa(input)
  const history = useHistory()
  return (
    <div>
      <label htmlFor="">Load a config from a github gist:</label>
      <input ref={input} type="text" placeholder="gistID"/>
      <button onClick={() => history.push(input.current?.value || "")}>Load</button>
    </div>
  )
}