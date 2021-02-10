import {
  Config,
  selectionType,
} from './types';

import {Section} from './components'
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { PointProvider, initialState } from './contexts';
import { useCyoa } from './hooks';





function App() {
  const config = useCyoa()
  // const config = jsonConfig
  const input = useRef<HTMLInputElement>(null)
  const history = useHistory()
  
  /* eslint-disable react-hooks/rules-of-hooks*/
  if(process.env.NODE_ENV == 'development'){
    useEffect(() => {
      if(input.current)
        //https://gist.github.com/namelessDeveloper/f728c844cd509bd87b5edaff8c15be2b
        input.current.value = "f728c844cd509bd87b5edaff8c15be2b"
    }, [input])
  }
  /* eslint-enable react-hooks/rules-of-hooks*/

  if(config !== null && config.type == "cyoa"){
    return (
      <div className="App">
        {config.sections.map((sect, key) => 
        //@ts-ignore
          <Section data={sect} key={key}/>
        )}
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
