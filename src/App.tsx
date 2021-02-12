import { useRef, useState } from 'react';
import { useHistory} from 'react-router-dom';
import { PointProvider } from './contexts';
import { useCyoa, useDevCyoa } from './hooks';
import { Cyoa } from './containers/Cyoa';

function App() {
  const config = useCyoa()
  // const config = jsonConfig
  const input = useRef<HTMLInputElement>(null)
  const history = useHistory()
  useDevCyoa(input)

  const [available, setAvailable] = useState(0)
  const [total, setTotal] = useState(0)

  if(config !== null && config.type == "cyoa"){
    return (
      <div className="App">
        <PointProvider value={{
          available,
          setAvailable,
          total, 
          setTotal,
        }}>
          <Cyoa config={config} />
        </PointProvider>
      </div>
    );
  }



  return (
    <div className="App">
      <label htmlFor="">Load a config from a github gist:</label>
      <input ref={input} type="text" placeholder="gistID"/>
      <button onClick={() => history.push(input.current?.value || "")}>Load</button>
    </div>
  )

}

export default App;
